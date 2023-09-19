import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Foot from "./Component/Foot/Foot";
import Splash from "./Component/Splash/splash";
import Leaderbord from "./Pages/Leaderboard/Leaderbord";
import Navigation from "./Component/Nav/Nav"; 
import Tra from "./Pages/Trashme/home/home";
import Trashme from "./Pages/Trashme/containers/App";
import Details from "./Pages/Trashme/containers/Details";
import Login from "./Pages/Login/Login";

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
          <Route path="/Trashme" element={<Tra/>} />
          <Route path="/items" element={<Trashme/>} />
          <Route path="/details" element={<Details/>} />  
          <Route path="/login" element={<Login/>} />  
        </Routes>
      <Foot />
      </Router>
    </>
  );
};

export default App;
