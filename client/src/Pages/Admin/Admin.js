import { Link } from "react-router-dom"; // Assuming you use React Route
import React from "react";
import "./Admin.css";

const Admin = () => {
  return (
    <section className="page-section">
      <div className="right-content">
        <div className="card">
          <div className="card-image">
            <img src="locality.jpg" alt="Card 1" />
            <div className="card-content">
              <div className="card-subtitle">Locality Collector</div>
              <Link to="/adminlocal">
                <button className="assign-button">Assign</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img
              src="./admin.jpg" // Replace with the actual image path
              alt="Card 2"
            />
            <div className="card-content">
              <div className="card-subtitle">Building Collectors</div>
              <Link to="/adminapt">
                <button className="assign-button">Assign</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
