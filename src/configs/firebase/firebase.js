import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCIwWk9cBfdtczQ1Nza1-AJJm5HnDfcI9A',
  authDomain: 'pra-sejahtera.firebaseapp.com',
  databaseURL: 'https://pra-sejahtera.firebaseio.com',
  projectId: 'pra-sejahtera',
  storageBucket: 'pra-sejahtera.appspot.com',
  messagingSenderId: '638546919234',
  appId: '1:638546919234:web:0d2ef45e169d068ce792db',
  measurementId: 'G-5SF6CEST3Z',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const storage = firebase.storage();

export {
  database, storage, firebase as default,
};
