import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";
import { useState } from "react";

function Navbar() {
  const { user, dispatch } = useGlobalContext();

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout successfully");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  const [dark, setDark] = useState(false);

 const toogleBtn = () => {
    setDark(!dark);
    if (!dark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="max-container">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            daisyUI
          </Link>

          <button
            onClick={toogleBtn}
            className="btn btn-outline btn-sm ml-[10px]"
          >
            {dark ? "LIGHT" : "DARK"}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <p>Welcome, {user.displayName}</p>
          <button onClick={logout} className="btn btn-secondary btn-sm">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
