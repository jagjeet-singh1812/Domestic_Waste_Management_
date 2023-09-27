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
import EventPage from "./Pages/EventPage/EventPage";

import AptCollector from "./Pages/AptCollector/AptCollector";
import Flat from "./Component/Flat/Flat";
import Admin from "./Pages/Admin/Admin";
import AdminLocality from "./Pages/AdminLocality/AdminLocality";
import AdminApt from "./Pages/AdminApt/AdminApt";
import Login from "./Pages/Login/Login";
import ContactUs from "./Pages/ContactUs/ContactUs";

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




          <Route path="/events" element={<EventPage />} />

          <Route path="/Trashme" element={<Tra/>} />
          <Route path="/items" element={<Trashme/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/aptcollector" element={<AptCollector></AptCollector>}/>
          <Route path="/flat" element={<Flat></Flat>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/adminlocal" element={<AdminLocality></AdminLocality>}></Route>
          <Route path="/adminapt" element={<AdminApt></AdminApt>}></Route>
          <Route path="/login" element={<Login/>} />  
          <Route path="/contact" element={<ContactUs/>} />  
        </Routes>
        <Foot />
      </Router>
    </>
  );
};

export default App;
