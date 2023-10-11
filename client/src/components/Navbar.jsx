import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-header">
        <span className="navbar-logo">Logo</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/user/">Dashboard</Link>
        </li>
        <li>
          <Link to="/user/languages">Languages</Link>
        </li>
        <li>
          <Link to="/user/companies">Companies</Link>
        </li>
        <li>
          <Link to="/user/reports">Reports</Link>
        </li>
        <li>
          <Link to="/test">Take a Test</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
