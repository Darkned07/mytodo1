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
            My Todo
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
          <div className="avatar">
            <div className="w-6 rounded-full ring-2 ring-primary ring-offset-1 ring-offset-base-100">
              <img src={user.photoURL} />
            </div>
          </div>
          <button onClick={logout} className="btn btn-secondary btn-sm">
            Logout
          </button>
          <Link to="/create" className="btn btn-primary btn-sm ">
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
