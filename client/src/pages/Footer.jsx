// import React from "react";
import "../css/Footer.css";

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
                <a href="/" id="l1">
                  Home
                </a>
              </li>
              <li>
                {" "}
                <a href="/about" id="l1">
                  About
                </a>
              </li>
              <li>
                <a href="/services" id="l1">
                  Services
                </a>
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
