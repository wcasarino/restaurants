import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCaSrNV_IOrmnHPPbpzyvgUHIETpmC-z3Q",
  authDomain: "restaurants-e3186.firebaseapp.com",
  projectId: "restaurants-e3186",
  storageBucket: "restaurants-e3186.appspot.com",
  messagingSenderId: "64315667931",
  appId: "1:64315667931:web:8ed1c8d35e17175ccfe3fe"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
