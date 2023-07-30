import * as firebase from "firebase/app";
import 'firebase/firestore';
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

firebase.initializeApp(firebaseConfig);
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;