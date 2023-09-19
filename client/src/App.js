import React ,{useState,useEffect} from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Navbar from "./Component/Navbar/Nav";
import Home from "./Pages/Home/Home";
import Foot from "./Component/foooter/Footer";
import Splash from "./Component/loader/Splash";
const App = () => {
  const [loading, setLoading] = useState(false);
  // const [isauth, setisAuth] = useState(false);
  useEffect(() => {
    // const userinfo = localStorage.getItem("userinfo");
    // setisAuth(userinfo !== null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return loading ? (
    <Splash />
  ) : (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    {/* <Foot/> */}
    </>
  )
}

export default App
