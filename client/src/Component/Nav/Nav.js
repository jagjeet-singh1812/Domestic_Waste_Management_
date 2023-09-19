import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const handleLinkClickdirect = () => {
    const mobileMenuCheckbox = document.getElementById("menu-btn");
    mobileMenuCheckbox.checked = false;
  };
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClickcheck = (className) => {
    handleLinkClickdirect();
    navigate(`/Services#${className}`);
  };
  const use = localStorage.getItem("token");
  return (
    <>
      <nav className={`${scrolled ? "sticky-header" : ""}`}>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              &nbsp; Cleanify
            </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <i className="fas fa-times navi_close"></i>&nbsp;
            </label>

            <li>
              <Link to="/leaderboard" className="desktop-item">
                Leaderboard
              </Link>
              <label htmlFor="showDrop2" className="mobile-item">
                Leaderboard
              </label>
            </li>

            <li>
            <Link to="/events" className="desktop-item">
                Events
              </Link>
              <label htmlFor="showDrop2" className="mobile-item">
                Events
              </label>
            </li>

            <li>
              <Link to="/company" className="desktop-item">
                Company
              </Link>
              <label  className="mobile-item">
                Company
              </label>
            </li>
            <li>
              <Link to="/company" className="desktop-item">
                About us
              </Link>
              <label  className="mobile-item">
                About us
              </label>
            </li>
            <li>
              <Link to="/company" className="desktop-item">
                Contact us
              </Link>
              <label  className="mobile-item">
                Contact us
              </label>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/login" className="desktop-item">
                <button className="custom-button pulse">Login/Signup</button>
              </Link>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <i className="fa-solid fa-bars navi_color"></i>&nbsp;
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
