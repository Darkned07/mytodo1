import { Link } from "react-router-dom";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useState } from "react";

function Signup() {
  const { dispatch } = useGlobalContext();
  const handleGoogleClick = (e) => {
    e.preventDefault();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        toast.success("welcome websites");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };

  const [dark, setDark] = useState(false);

  const toogleBtn = (e) => {
    setDark(!dark);
    e.preventDefault();
    if (!dark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  };

  return (
    <div className="grid h-screen place-items-center">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">Sign Up</h1>
        <form>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Username:</span>
            </div>
            <input
              type="text"
              placeholder="Username write"
              className="input input-bordered mb-4 w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control mb-4 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input
              type="email"
              placeholder="Email write"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control mb-4 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <input
              type="password"
              placeholder="Password write"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <div className="flex flex-col gap-3">
            <button className="btn btn-primary btn-sm md:btn-md">
              Sign Up
            </button>
            <button
              onClick={handleGoogleClick}
              className="btn btn-accent btn-sm md:btn-md"
            >
              Google
            </button>
            <Link to="/login" className="btn btn-info btn-sm md:btn-md">
              siz avval royhatdan o'tganmisiz ?
            </Link>
            <button
              onClick={toogleBtn}
              className=" btn btn-outline btn-sm md:btn-md"
            >
              {dark ? "LIGHT" : "DARK"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
