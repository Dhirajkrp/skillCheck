import React from "react";
import { Link } from "react-router-dom";
import "../css/sidebar.css";

const Sidebar = ({ routes }) => {
  return (
    <>
      <div className="sidebar-header">
        <span className="sidebar-logo">
          <img
            src="https://i.ibb.co/vvdtL70/logo-horizontal.png"
            alt="logo-horizontal"
            border="0"
          />
        </span>
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
