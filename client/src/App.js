import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Navbar from "./Component/Navbar/Nav";
import Home from "./Pages/Home/Home";
import Foot from "./Component/Footer/Footer";
const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    <Foot/>
    </>
  )
}

export default App
