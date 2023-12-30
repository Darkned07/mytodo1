import { useGlobalContext } from "./useGlobalContext";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export function useLogin() {
  const { dispatch } = useGlobalContext();

  const login = (email, password) => {
    dispatch({ type: "IS_PENDING", payload: true });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("welcome websites");
        dispatch({ type: "LOGIN", payload: userCredential.user });
        dispatch({ type: "ERROR", error: null });
        dispatch({ type: "IS_PENDING", payload: false });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
        dispatch({ type: "ERROR", error: error.message });
        dispatch({ type: "IS_PENDING", payload: false });
      });
  };

  return { login };
}
