import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import logo from "../../Assets/logo.jpg"
const Foot = () => {
  return (
    <>
    {/* <div className="curves">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000D25" fillOpacity="1" d="M0,64L30,90.7C60,117,120,171,180,186.7C240,203,300,181,360,144C420,107,480,53,540,32C600,11,660,21,720,48C780,75,840,117,900,133.3C960,149,1020,139,1080,122.7C1140,107,1200,85,1260,64C1320,43,1380,21,1410,10.7L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </div>
     <footer className="footer">
    <div className="containerx">
      <div className="row">
        <div className="footer-col logo_fo">
        <img src={logo} alt ="company_logo"></img>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/compnay">about us</Link></li>
            <li><Link to="/Services">our services</Link></li>
            <li><Link to="">privacy policy</Link></li>
            <li><Link to="">affiliate program</Link></li>
          </ul>
        </div>
     <div className="footer-col get_help">
          <h4>get help</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="">returns</Link></li>
            <li><Link to="">know More</Link></li>
            <li><Link to="">payment options</Link></li>
          </ul>
        </div>

      </div>
    </div>
  </footer> */}

  <h1>footer</h1>
    </>
  )
}

export default Foot