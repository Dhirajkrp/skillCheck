import { Link } from "react-router-dom";
import "../css/TopBar.css";
const TopBar = () => {
    return (
      <div className="topbar">
        <div className="navbar-header">
          <span className="navbar-logo"><img src= "logo_horizontal.png" id = 'image1'/></span>
        </div>
        <ul className="nav-links" id="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About-Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact-Us</Link>
          </li>
          <li>
            <Link to="/our-team">Our-Team</Link>
          </li>
          <li>
            <Link to="/login" className="login-button">Login</Link>
          </li>
        </ul>
      </div>
    );
  };
  
export default TopBar;
