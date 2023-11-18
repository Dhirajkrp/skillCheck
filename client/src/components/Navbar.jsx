import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-header">
        <span className="navbar-logo">Logo</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/user/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/user/languages">Languages</NavLink>
        </li>
        <li>
          <NavLink to="/user/companies">Companies</NavLink>
        </li>
        <li>
          <NavLink to="/user/reports">Reports</NavLink>
        </li>
        <li>
          <NavLink to="/test">Take a Test</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
