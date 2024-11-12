import { Link, NavLink } from "react-router-dom";
import Header from "../Header/Header";
import user from '../../assets/user.png'

const Navbar = () => {
    const navlink = (
        < >
            <li>
            <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent " // Active link styles
              : "text-gray-500"
          }
        >
          <p className="text-base">Home</p>
        </NavLink>
              </li>
            <li>
            <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "underline font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent " // Active link styles
              : "text-gray-500"
          }
        >
      <p className="text-base">About</p>
        </NavLink>
              </li>
            <li>
            <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive
              ? "underline font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent " // Active link styles
              : "text-gray-500"
          }
        >
          <p className="text-base">Career</p>
        </NavLink>
              </li>
              
        </>
    )

    return (
        <div className="navbar border-b-2 p-16   bg-amber-50 md:h-32 font-display ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {navlink}
            </ul>
          </div>
          <Link className=" text-xl"><Header></Header></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    
                {navlink}
          </ul>
        </div>
        <div className="navbar-end pr-7 ">
                <div className="flex items-center gap-2 border border-sky-700 rounded-xl shadow-xl px-2 py-1">
                  <img className="size-8" src={user} alt="" />
                <Link>Login</Link>
         </div>
        </div>
      </div>
    );
};

export default Navbar;