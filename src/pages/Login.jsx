import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
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
        <h1 className="text-center text-2xl md:text-4xl">Login</h1>
        <form>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input
              type="email"
              placeholder="Email write"
              className="input input-bordered mb-4 w-full max-w-xs"
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
            <button className="btn btn-primary btn-sm md:btn-md">Login</button>
            <button className="btn btn-accent btn-sm md:btn-md">Google</button>
            <Link to="/signup" className="btn btn-info btn-sm md:btn-md">
              If you dont have any account ?
            </Link>
            <button
              onClick={toogleBtn}
              className="btn btn-outline btn-sm md:btn-md"
            >
              {dark ? "LIGHT" : "DARK"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
