// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv0qtDfTLWcJ53Cp_utxIHPZvY3dctH0k",
  authDomain: "clone-93c71.firebaseapp.com",
  projectId: "clone-93c71",
  storageBucket: "clone-93c71.appspot.com",
  messagingSenderId: "311300936925",
  appId: "1:311300936925:web:5ada744b934652ba6d7734",
  measurementId: "G-5FC9L3MMYP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};