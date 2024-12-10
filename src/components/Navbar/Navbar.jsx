import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/assets/images/logo.jpg";
import "./Navbar.css";
const Navbar = () => {
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
            <div tabIndex={0} role="button" className="btn m-1">
              Click
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
