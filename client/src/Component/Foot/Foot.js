import React, { useState, useRef } from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="containerx">
          <div className="rowx">
            <div className="footer-col ">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/company">About Us</Link>
                </li>
                <li>
                  <Link to="/Services">Join Us</Link>
                </li>
                <li>
                  <Link to="/workflow">Workflow</Link>
                </li>
                <li>
                  <Link to="/security">Security</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Industries</h4>
              <ul>
                <li>
                  <Link to="/industry/health">Healtcare</Link>
                </li>
                <li>
                  <Link to="/industry/automotive">Automobile</Link>
                </li>
                <li>
                  <Link to="/industry/manufacturer">Industrial</Link>
                </li>
                <li>
                  <Link to="/industry/agriculture">Agriculture</Link>
                </li>
                <li>
                  <Link to="/industry/finance">Finance</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col get_help">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="/blog">Blogs</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="">Use Cases</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
