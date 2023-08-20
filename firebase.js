// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKB5_7SwHQc8sa8gPpT1IuAKYuIwBbn34",
  authDomain: "profitsio.firebaseapp.com",
  projectId: "profitsio",
  storageBucket: "profitsio.appspot.com",
  messagingSenderId: "944929322277",
  appId: "1:944929322277:web:bea16f09a526a3bc5f16cc",
  measurementId: "G-MGTCYXJYP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

