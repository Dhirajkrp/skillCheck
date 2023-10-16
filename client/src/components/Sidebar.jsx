import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Sidebar = ({ routes }) => {
  return (
    <>
      <div className="navbar-header">
        <span className="navbar-logo">Logo</span>
      </div>
      <ul className="nav-links">
        {routes.map((route) => {
          return (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
