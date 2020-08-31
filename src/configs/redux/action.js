import firebase, { database, storage } from '../firebase/firebase';

export const actionLoading = (data) => (dispatch) => {
  setTimeout(() => dispatch({ type: 'CHANGE_LOADING', value: data }), 1000);
};

export const actionHandleSideBar = (data) => (dispatch) => {
  dispatch({ type: 'CHANGE_SIDEBAR', value: data });
};

export const actionHandleMenu = (data) => (dispatch) => {
  dispatch({ type: 'CHANGE_MENU', value: data });
};

export const registerUserAPI = (data) => (dispatch) => new Promise((resolve, reject) => {
  dispatch({ type: 'CHANGE_LOADING', value: true });

  firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((res) => {
      alert(`${res.user.email} Berhasil Mendaftar !`);

      dispatch({
        type: 'CHANGE_LOADING',
        value: false,
      });
      resolve(true);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      dispatch({ type: 'CHANGE_LOADING', value: false });

      reject(new Error(errorMessage));
    });
});

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

      reject(new Error(errorMessage));
    });
});

export const logoutUsersAPI = () => (dispatch) => new Promise((resolve, reject) => {
  dispatch({ type: 'CHANGE_LOADING', value: false });

  firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.removeItem('userData');
      dispatch({ type: 'CHANGE_ISLOGIN', value: false });

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

export const getDataFromAPI = (params) => (dispatch) => {
  dispatch({ type: 'CHANGE_LOADING', value: true });

  const urlNotes = database.ref(params);
  return new Promise((resolve, _reject) => {
    urlNotes.on('value', (snapshot) => {
      // console.log(`get data from : ${params} `, snapshot.val());

      const data = [];
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });

      switch (params) {
        case 'families':
          dispatch({ type: 'SET_FAMILIES', value: data });
          break;
        case 'submissions':
          dispatch({ type: 'SET_SUBMISSIONS', value: data });
          break;
        case 'request_message':
          dispatch({ type: 'SET_REQUEST_MESSAGE', value: data });
          break;
        default:
          return null;
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
    // console.log('File type : ', data.type);
    return resolve(true);
  }
  dispatch({ type: 'CHANGE_ISIMAGE', value: false });
  // console.log('File harus ber-ektensi (.jpg/.jpeg/.png)');
  return reject(new Error('File tidak dikenal'));
});

export const uploadFileToAPI = (data) => new Promise((resolve, reject) => {
  // console.log('Start Upload....');

  const name = `${data.nik}-${data.fotoRumah[0].name}`;
  const metadata = {
    contentType: data.fotoRumah[0].type,
  };

  // console.log('Upload Data : ', name);
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
      console.log('Uploade data error', error);
      reject(error);
    },
    () => {
      fileRef.snapshot.ref.getDownloadURL().then((downloadURL) => {
        // console.log('File available at', downloadURL);
        // console.log('Upload Done');
        resolve(downloadURL);
      });
    },
  );
});

export const addDataFamily = (params, data) => (dispatch) => {
  dispatch({ type: 'CHANGE_BUTTON_LOADING', value: true });

  database
    .ref(params)
    .push({
      noKK: data.noKK,
      nik: data.nik,
      kepalaKeluarga: data.kepalaKeluarga,
      alamatLengkap: data.alamatLengkap,
      status: data.status,
    })
    .catch((err) => alert(err))
    .finally(() => dispatch({ type: 'CHANGE_BUTTON_LOADING', value: false }));
};

export const addNewData = (params, data) => (dispatch) => {
  dispatch({ type: 'CHANGE_BUTTON_LOADING', value: true });

  uploadFileToAPI(data)
    .then((url) => {
      database
        .ref(params)
        .push({
          noKK: data.noKK,
          jenisPengajuan: data.jenisPengajuan,
          pekerjaan: data.pekerjaan,
          pendapatan: data.pendapatan,
          pbb: data.pbb,
          fotoRumah: url,
          tanggal: new Date().getTime(),
          status: 'Proses',
        })
        .catch((err) => alert(err));
    })
    .catch((err) => alert(err))
    .finally(() => dispatch({ type: 'CHANGE_BUTTON_LOADING', value: false }));
};

export const addRequestSubmission = (params, data) => (dispatch) => {
  dispatch({ type: 'CHANGE_BUTTON_LOADING', value: true });

  database
    .ref(params)
    .push({
      jenisPengajuan: data.jenisPengajuan,
      noKK: data.noKK,
      nama: data.nama,
      noTelepon: data.noTelepon,
      alamatLengkap: data.alamatLengkap,
      tanggal: new Date().getTime(),
      status: 'Proses',
    })
    .catch((err) => alert(err))
    .finally(() => dispatch({ type: 'CHANGE_BUTTON_LOADING', value: false }));
};
