import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Foot from "./Component/Foot/Foot";
import Splash from "./Component/Splash/splash";
import Leaderbord from "./Pages/Leaderboard/Leaderbord";
import Navigation from "./Component/Nav/Nav"; // Correct import statement

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return loading ? (
    <Splash />
  ) : (
    <>
      <Router>
      <Navigation /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderbord />} />
        </Routes>
      <Foot />
      </Router>
    </>
  );
};

export default App;
