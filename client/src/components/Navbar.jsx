import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
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
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/test">Take a Test</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
