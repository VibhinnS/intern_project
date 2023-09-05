// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from "firebase/auth";


import { useAuthState } from "react-firebase-hooks/auth";
import {
  Firestore,
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

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
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

const createUser = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      return userCredential;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      throw error;
    });
};

const signInWithEmail = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      return userCredential;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      throw error;
    });
};

const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();

const logOut = (): void => {
  signOut(auth)
  console.log("Logged Out nigga!")
};

const getUser = async (user) => {
  const q = query(collection(db, "users"), where("uid", "==", user.uid));
  let userDetails = [];
  const docs = await getDocs(q);
  docs.forEach((doc) => {
    // console.log(doc.data());
    userDetails.push(doc.data());
  });
  return userDetails[0];
};

export {
  app,
  auth,
  Firestore,
  db,
  googleProvider,
  createUser,
  signInWithEmail,
  logOut,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc,
  doc,
  getUser
};

// Example of using useAuthState hook
const useAuth = () => {
  const [user] = useAuthState(auth);
  return user;
};

export default useAuth;
