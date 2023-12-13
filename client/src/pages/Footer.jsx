// import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 id="Us">ABOUT US</h4>
            <p id="desc">
              Placement assessment is a platform where
              <br /> a student can do a complete placement <br /> preparation.
              It provides a platform where a <br />
              student can know about Companies,
              <br /> Languages, Practice by giving tests.
            </p>
          </div>
          <div className="col-md-4">
            <h4 id="Us">QUICK LINKS</h4>
            <ul>
              <li>
                <Link to="/adminLogin"> Admin Login</Link>
              </li>
              <li>
                <Link to="/editorLogin"> Editor Login</Link>
              </li>
              <li>
                {" "}
                <a href="/contact" id="l1">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 id="Us">CONTACT US</h4>
            <p>Email:- placementassess@email.com</p>
            <p>Phone:- 9821346521</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
