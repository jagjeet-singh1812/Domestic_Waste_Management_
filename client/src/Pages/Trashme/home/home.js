import React from "react";
import "./home.css"; // Updated CSS file path
import { Link } from "react-router-dom";

const Tra = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="title">Where does your trash go?</div>
        <div className="subtitle">
          "TrashMe" tells you the category of your trash and where to throw it
        </div>
        <div className="additional-text">
          <p>
            Welcome to TrashMe, your ultimate trash disposal assistant.
            Learn how to properly categorize and dispose of your waste.
          </p>
        </div>
        <div className="whole_trash">
          <div className="gif-container">
            <div className="gif"></div>
          </div>
          <div className="btnnn">
            <Link to="/items" className="button pulse">
              Start Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tra;

