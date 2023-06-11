import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#115c8f] justify-around z-50 p-5 px-10 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn hover:bg-none lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm z-50 text-black dropdown-content text-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Item 1</Link>
            </li>
            <li>
              <Link>Parent</Link>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case font-bold text-xl text-white">
          Anjir <br /> Liton
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal z-50 px-1">
          <li tabIndex={0}>
            <details>
              <summary className="text-white hover:text-white">About</summary>
              <ul className="p-2">
                <li>
                  <Link>Biography</Link>
                </li>
                <li>
                  <Link>Achivment</Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="text-bold text-white">
            <Link>Event</Link>
          </li>
          <li className="text-white">
            <Link>News</Link>
          </li>

          <li tabIndex={1}>
            <details>
              <summary className="text-white hover:text-white menuItem">
                Media
              </summary>
              <ul className="p-2 subMenuItems">
                <li>
                  <Link>Press</Link>
                </li>
                <li>
                  <Link>Quotes</Link>
                </li>
                <li>
                  <Link>Speeches</Link>
                </li>
              </ul>
            </details>
          </li>

          <li tabIndex={2}>
            <details>
              <summary className="text-white hover:text-white">Gellary</summary>
              <ul className="p-2">
                <li>
                  <Link>Photo Galaery</Link>
                </li>
                <li>
                  <Link>Vedio Gallary</Link>
                </li>
              </ul>
            </details>
          </li>

          <button
            type="button"
            className="px-8 py-3 mx-2 font-semibold border border-2 rounded  border-gray-100 text-gray-100 hover:text-black hover:bg-white"
          >
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
