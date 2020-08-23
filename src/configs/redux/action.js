import firebase, { database, storage } from '../firebase/firebase';

export const actionLoading = (data) => (dispatch) => {
  setTimeout(
    () => dispatch({ type: 'CHANGE_LOADING', value: data }),
    1000,
  );
};

export const actionHandleSideBar = () => (dispatch) => {
  dispatch({ type: 'CHANGE_SIDEBAR' });
};

export const actionHandleMenu = () => (dispatch) => {
  dispatch({ type: 'CHANGE_MENU' });
};

export const loginUsersAPI = (data) => (dispatch) => new Promise((resolve, reject) => {
  dispatch({ type: 'CHANGE_LOADING', value: true });

  firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then((res) => {
      const dataUser = {
        email: res.user.email,
        uid: res.user.uid,
        emailVerified: res.user.emailVerified,
        refreshToken: res.user.refreshToken,
      };

      localStorage.setItem('userData', JSON.stringify(dataUser));

      dispatch({ type: 'CHANGE_LOADING', value: false });
      resolve(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      dispatch({ type: 'CHANGE_LOADING', value: false });
      dispatch({ type: 'CHANGE_ISLOGIN', value: false });

      reject(new Error(errorMessage));
    });
});

export const logoutUsersAPI = () => (dispatch) => new Promise((resolve, reject) => {
  dispatch({ type: 'CHANGE_LOADING', value: false });

  firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem('userData');
      dispatch({ type: 'CHANGE_ISLOGIN', value: false });

      resolve(true);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      dispatch({ type: 'CHANGE_LOADING', value: false });
      dispatch({ type: 'CHANGE_ISLOGIN', value: false });

      reject(new Error(errorMessage));
    });
});

export const getDataFromAPI = (params) => (dispatch) => {
  dispatch({ type: 'CHANGE_LOADING', value: true });

  const urlNotes = database.ref(params);
  return new Promise((resolve, _reject) => {
    urlNotes.on('value', (snapshot) => {
      console.log(`get data from : ${params} `, snapshot.val());

      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });

      if (params === 'families') {
        dispatch({ type: 'SET_FAMILIES', value: data });
      } else if (params === 'submissions') {
        dispatch({ type: 'SET_SUBMISSIONS', value: data });
      }

      dispatch({ type: 'CHANGE_LOADING', value: false });
      resolve(data);
    });
  });
};

export const actionCheckImage = (data) => (dispatch) => new Promise((resolve, reject) => {
  const fileType = data.type.match(/.(jpg|jpeg|png)$/i);

  if (fileType) {
    dispatch({ type: 'CHANGE_ISIMAGE', value: true });
    console.log('File type : ', data.type);
    return resolve(true);
  }
  dispatch({ type: 'CHANGE_ISIMAGE', value: false });
  console.log('File harus ber-ektensi (.jpg/.jpeg/.png)');
  return reject(new Error('File tidak dikenal'));
});

export const uploadFileToAPI = (data) => new Promise((resolve, reject) => {
  console.log('Start Upload....');

  const name = `${+new Date()}-${data.fotoRumah[0].name}`;
  const metadata = {
    contentType: data.fotoRumah[0].type,
  };

  console.log('Upload Data : ', name);
  const fileRef = storage
    .ref('foto-rumah/')
    .child(name)
    .put(data.fotoRumah[0], metadata);

  fileRef.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    },
    (error) => {
      console.log(error);
      reject(error);
    },
    () => {
      fileRef.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        console.log('Upload Done');
        resolve(downloadURL);
      });
    },
  );
});

export const addDataToAPI = (params, data, url) => new Promise((resolve, reject) => {
  database.ref(params).push({
    noKK: data.noKK,
    jenisPengajuan: data.jenisPengajuan,
    pekerjaan: data.pekerjaan,
    pendapatan: data.pendapatan,
    pbb: data.pbb,
    fotoRumah: url,
    status: 'Proses',
  });

  if (data) {
    console.log('Add Data Success', data);
    resolve(data);
  } else {
    console.log('Add Data Failed !');
    reject(new Error('Add Data Failed !'));
  }
});

export const addNewData = (params, data) => (dispatch) => {
  dispatch({ type: 'CHANGE_LOADING', value: true });

  uploadFileToAPI(data)
    .then((url) => addDataToAPI(params, data, url))
    .catch((err) => console.log(err))
    .then(() => dispatch({ type: 'CHANGE_LOADING', value: false }));
};

export const addRequestSubmission = (data) => (dispatch) => new Promise((resolve, reject) => {
  const params = '/request_message';

  dispatch({ type: 'CHANGE_BUTTON_LOADING', value: true });

  console.log(params, data);

  database.ref(params).push({
    jenisPengajuan: data.jenisPengajuan,
    noKK: data.noKK,
    nama: data.nama,
    noTelepon: data.noTelepon,
    alamat: {
      alamatLengkap: data.alamatLengkap,
      provinsi: data.province,
      district: data.district,
      subDistrict: data.subDistrict,
    },
    status: 'Proses',
  }).then(() => {
    console.log('Add Data Success', data);

    resolve(data);
  })
    .catch(() => {
      console.log('Add Data Failed !');

      reject(new Error('Add Data Failed !'));
    })
    .finally(() => dispatch({ type: 'CHANGE_BUTTON_LOADING', value: false }));
});
