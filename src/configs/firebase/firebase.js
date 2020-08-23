import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCPEoc7izD_ReKaLzM43PGkHLTd4F-F7-I',
  authDomain: 'keluarga-miskin-app.firebaseapp.com',
  databaseURL: 'https://keluarga-miskin-app.firebaseio.com',
  projectId: 'keluarga-miskin-app',
  storageBucket: 'keluarga-miskin-app.appspot.com',
  messagingSenderId: '1043969761133',
  appId: '1:1043969761133:web:af4f69efb3870b961f8464',
  measurementId: 'G-1W2LTZ8CFC',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const storage = firebase.storage();

export { database, storage, firebase as default };
