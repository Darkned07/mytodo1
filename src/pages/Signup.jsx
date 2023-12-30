import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const displayName = useRef();
  const email = useRef();
  const password = useRef();
  const photoUrl = useRef();
  const { signUpWithGoogleProvider, signup } = useSignup();
  const handleGoogleClick = (e) => {
    e.preventDefault();
    signUpWithGoogleProvider();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      photoUrl.current.value,
      email.current.value,
      password.current.value,
    );
  };

  return (
    <div className="grid h-screen place-items-center">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Username:</span>
            </div>
            <input
              ref={displayName}
              type="text"
              placeholder="Username write"
              className="input input-bordered mb-4 w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">PhotoUrl:</span>
            </div>
            <input
              ref={photoUrl}
              type="url"
              placeholder="Photo url write"
              className="input input-bordered mb-4 w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
          <label className="form-control mb-4 w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input
              ref={email}
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
              ref={password}
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
