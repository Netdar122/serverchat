// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc7IOzv65_OWtkBwT5OMqIv1z9f5M1cRA",
  authDomain: "serverchat-b02f9.firebaseapp.com",
  projectId: "serverchat-b02f9",
  storageBucket: "serverchat-b02f9.appspot.com",
  messagingSenderId: "658935830530",
  appId: "1:658935830530:web:9328c8852754e53ff16f1b",
  measurementId: "G-TLE09VTRHR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
