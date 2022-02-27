
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth,provider};