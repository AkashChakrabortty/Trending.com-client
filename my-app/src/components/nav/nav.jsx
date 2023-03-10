import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from '../../context/AuthProvider';
import Divider from '../Divider/Divider';

const Nav = () => {
  const { user, logout } = useContext(userInfo);
  const handleLogout = () => {
  logout();
  }
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
                  <Link to="/">Homepage</Link>
                </li>
                <li>
                  <Link to="/media">Media</Link>
                </li>
                <li>
                  <Link>Message</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-xl text-info"
            >
              Trending.com
            </Link>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <button onClick={handleLogout}>
                  <Link className="text-xl text-info border-info border-b-2 mx-3">
                    Logout
                  </Link>
                </button>
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-info">
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </div>
              </>
            ) : (
              <Link
                className="text-xl text-info border-info border-b-2 mx-3"
                to="/login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <Divider></Divider>
      </div>
    );
};

export default Nav;