import { Link } from "react-router-dom";
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
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
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
