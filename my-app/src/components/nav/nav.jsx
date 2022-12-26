import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <div>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-info"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-info default-bg"
              >
                <li>
                  <Link>Homepage</Link>
                </li>
                <li>
                  <Link>Media</Link>
                </li>
                <li>
                  <Link>Message</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a
              href="#f"
              className="btn btn-ghost normal-case text-xl text-info"
            >
              Trending.com
            </a>
          </div>
          <div className="navbar-end">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-info">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Nav;