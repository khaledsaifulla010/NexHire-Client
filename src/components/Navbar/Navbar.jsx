import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/assets/images/logo.jpg";
import "./Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser().then(() => {
      toast.success("Sign Out Successfully!", {
        position: "top-center",
      });
    });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* Logo & Name */}
          <div>
            <Link to={"/"} className="flex items-center gap-2">
              <img className="w-14" src={logo} alt="" />
              <h1 className="font-bold text-3xl">
                <span className="text-purple-950"> Nex</span>
                <span className="text-purple-700">Hire</span>
              </h1>
            </Link>
          </div>
        </div>

        {/* All Routes Link */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex items-center gap-8 font-bold text-base">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/allJobs"}>All Jobs</NavLink>
            <NavLink to={"/addJobs"}>Add Jobs</NavLink>
            <NavLink to={"/myApplications"}>My Applications</NavLink>
            <NavLink to={"/myJobPost"}>My JobPost</NavLink>
          </ul>
        </div>
        {/* Dropdown */}
        <div className="navbar-end">
          <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
            <div tabIndex={0} role="button">
              {user && user?.photoURL ? (
                <img
                  className="w-16 h-16 border border-dotted border-slate-500 rounded-full p-1"
                  src={user?.photoURL}
                />
              ) : (
                <h1 className="text-4xl">
                  {" "}
                  <FaUserCircle />
                </h1>
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] border-2 w-36 p-2 shadow font-bold text-center text-base"
            >
              <button className="border px-2 py-1 rounded-xl font-bold text-blue-600 bg-blue-100 border-blue-200 ">
                <Link to={"/myProfile"}>My Profile</Link>
              </button>
              <button className="border px-2 py-1 rounded-xl font-bold text-purple-950 bg-purple-100 border-purple-200 mt-2">
                <Link to={"/login"}>Login</Link>
              </button>

              {user ? (
                <button
                  className="border px-2 py-1 rounded-xl font-bold text-red-600 bg-red-100 border-read-200 mt-2"
                  onClick={handleSignOut}
                >
                  SignOut
                </button>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
