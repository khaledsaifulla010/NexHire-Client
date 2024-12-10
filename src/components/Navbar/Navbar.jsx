import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/assets/images/logo.jpg";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex items-center gap-8 font-semibold text-base">
            <NavLink to={"/allJobs"}>All Jobs</NavLink>
            <NavLink to={"/addJobs"}>Add Jobs</NavLink>
            <NavLink to={"/myApplications"}>My Applications</NavLink>
            <NavLink to={"/myJobPost"}>My JobPost</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
