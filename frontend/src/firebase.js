import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCmw2QtcHaQ79Ogw_YtmngGSZey6RmzA_8",
  authDomain: "quora-clone-new.firebaseapp.com",
  projectId: "quora-clone-new",
  storageBucket: "quora-clone-new.appspot.com",
  messagingSenderId: "678403688633",
  appId: "1:678403688633:web:e501e7b5f68785ed5b3368",
  measurementId: "G-PRLL4D8R4R"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;