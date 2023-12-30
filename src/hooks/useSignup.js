import { useGlobalContext } from "./useGlobalContext";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";

export function useSignup() {
  const { dispatch } = useGlobalContext();

  // email username password registration codes
  const signup = (displayName, photoUrl, email, password) => {
    dispatch({ type: "IS_PENDING", payload: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL: photoUrl,
        });
        toast.success("welcome to the websites");
        dispatch({ type: "LOGIN", payload: userCredential.user });
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "IS_PENDING", payload: false });
      })
      .catch((error) => {
        const match = error.message.match(/\/([^)]+)/);
        if (match) {
          const extracted_text = match[1];
          console.log(extracted_text);
          toast.error(extracted_text);
        }
        dispatch({ type: "ERROR", error: error.message });
        dispatch({ type: "IS_PENDING", payload: false });
      });
  };

  //   google accoun registiration codes
  const signUpWithGoogleProvider = () => {
    dispatch({ type: "IS_PENDING", payload: true });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        toast.success("welcome websites");
        dispatch({ type: "LOGIN", payload: user });

        dispatch({ type: "IS_PENDING", payload: false });
        dispatch({ type: "ERROR", payload: null });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
        dispatch({ type: "IS_PENDING", payload: false });
        dispatch({ type: "ERROR", payload: errorMessage });
      });
  };

  return { signUpWithGoogleProvider, signup };
}
