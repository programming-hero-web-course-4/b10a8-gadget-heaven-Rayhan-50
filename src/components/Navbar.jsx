import { Link, NavLink } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
const Navbar = () => {
    return (
        <div className="navbar backdrop-blur-xl bg-slate-50 z-50 fixed">
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
      <li> <NavLink className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`} to='/'>
      Home
    </NavLink></li>
      <li><NavLink className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`} to ='/statistics'>Statistics</NavLink></li>
      <li><NavLink className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`} to ='/dashboard'>Dashboard</NavLink></li>
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl">Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li> <NavLink  to='/'>
      Home
    </NavLink></li>
      <li><NavLink  to ='/statistics'>Statistics</NavLink></li>
      <li><NavLink  to ='/dashboard'>Dashboard</NavLink></li>
      <li><NavLink to ='/notice'>Notice</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-ghost btn-circle">
  <FaShoppingCart />
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <CiHeart />
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
    );
};

export default Navbar;



