// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtxb15WQbLzi4RJDqBbbMfeVq8OnnTMlg",
  authDomain: "mytodo-list-69cf1.firebaseapp.com",
  projectId: "mytodo-list-69cf1",
  storageBucket: "mytodo-list-69cf1.appspot.com",
  messagingSenderId: "1048015403447",
  appId: "1:1048015403447:web:cd6eb657e70b5c4a9f1032",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
