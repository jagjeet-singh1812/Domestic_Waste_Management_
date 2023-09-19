import React, { useState, useEffect } from 'react';
import './Nav.css'; // Import your CSS file

function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [selectorPos, setSelectorPos] = useState({ top: 10, left: 10, height: 10, width: 10 });

  useEffect(() => {
    // Get the current path and set the active link based on the path
    const path = window.location.pathname.split('/').pop() || 'index.html'; // Set a default path if needed
    setActiveLink(path);
  }, []);

  useEffect(() => {
    if (activeLink) {
      const activeItem = document.querySelector(`.nav-item a[href="${activeLink}"]`);
      if (activeItem) {
        const {
          top,
          left,
          height,
          width,
        } = activeItem.getBoundingClientRect();
        setSelectorPos({
          top: `${10}px`,
          left: `${12}px`,
          height: `${10}px`,
          width: `${23}px`,
        });
      }
    }
  }, [activeLink]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar navbar-mainbg">
      <a className="navbar-brand navbar-logo" href="#">
        Navbar
      </a>
      <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector" style={selectorPos}></div>
          <li className={`nav-item ${activeLink === 'index.html' ? 'active' : ''}`}>
            <a className="nav-link" href="#" onClick={() => handleLinkClick('index.html')}>
              <i className="fas fa-tachometer-alt"></i>Dashboard
            </a>
          </li>
          <li className={`nav-item ${activeLink === 'address.html' ? 'active' : ''}`}>
            <a className="nav-link" href="#" onClick={() => handleLinkClick('address.html')}>
              <i className="far fa-address-book"></i>Address Book
            </a>
          </li>
          <li className={`nav-item ${activeLink === 'components.html' ? 'active' : ''}`}>
            <a className="nav-link" href="#" onClick={() => handleLinkClick('components.html')}>
              <i className="far fa-clone"></i>Components
            </a>
          </li>
          <li className={`nav-item ${activeLink === 'calendar.html' ? 'active' : ''}`}>
            <a className="nav-link" href="#" onClick={() => handleLinkClick('calendar.html')}>
              <i className="far fa-calendar-alt"></i>Calendar
            </a>
          </li>
          <li className={`nav-item ${activeLink === 'charts.html' ? 'active' : ''}`}>
            <a className="nav-link" href="#" onClick={() => handleLinkClick('charts.html')}>
              <i className="far fa-chart-bar"></i>Charts
            </a>
          </li>
          <li className={`nav-item ${activeLink === 'documents.html' ? 'active' : ''}`}>
            <a className="nav-link" href="#" onClick={() => handleLinkClick('documents.html')}>
              <i className="far fa-copy"></i>Documents
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;