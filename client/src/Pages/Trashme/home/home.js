import React from "react";
import "./home.css";
import "../containers/App";
import "../containers/App.css";
import { Link } from "react-router-dom";

const Tra = () => {
  return (
    <div>
      <div className="temp"></div>
      <div className="Title">Where does your trash go?</div>
      <div className="sub">
        “TrashMe” tells you the category of your trash and where to throw it
      </div>
      <div class="play-GIF-on-hover"></div>
      <Link to="/items" className="button">Start</Link>
    </div>
  );
};

export default Tra;
