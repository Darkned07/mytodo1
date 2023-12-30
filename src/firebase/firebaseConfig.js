// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeCyi8kiqw6iAcUZh_l3ycNQOuUItxxzA",
  authDomain: "todolist-b7670.firebaseapp.com",
  projectId: "todolist-b7670",
  storageBucket: "todolist-b7670.appspot.com",
  messagingSenderId: "674900628830",
  appId: "1:674900628830:web:c46933d039c2c044d6abcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export { auth, googleProvider };
