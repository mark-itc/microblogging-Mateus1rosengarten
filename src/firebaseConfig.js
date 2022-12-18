// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: "AIzaSyAtvTlmgY_I1hCejc7JyHt6GlWqYUC8SKg",
  authDomain: "microblogging-app-3f743.firebaseapp.com",
  projectId: "microblogging-app-3f743",
  storageBucket: "microblogging-app-3f743.appspot.com",
  messagingSenderId: "679913090011",
  appId: "1:679913090011:web:dd6e2994192ba1659c95fe",
  measurementId: "G-QP035WFC36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const authentication = getAuth (app)
export const storage = getStorage(app)

export const provider = new GoogleAuthProvider()


