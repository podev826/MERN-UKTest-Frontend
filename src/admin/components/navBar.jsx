import React, { useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/admin/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/admin/tests">
            Tests
          </NavLink>
          {!user?
              <NavLink className="nav-item nav-link" to="/admin/login">
                Login
              </NavLink>
          :<NavLink className="nav-item nav-link" to="/admin/logout">
                Logout
              </NavLink>
          }
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
