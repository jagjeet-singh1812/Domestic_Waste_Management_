import React, { useState } from "react";
import "./login.css"
const Login = () => {
  const [tab, settab] = useState("signup");
  const tabstologin = () => {
    settab("signup");
  };
  const tabstosignup = () => {
    settab("login");
  };
  return (
    <div className="wholly">
    <div className="whole_login">
      <div className="login_container">
        <div className="login_form">
          <div className="login_btn">
            <button className={tab === "signup" ? "active signUpBtn" : "signUpBtn"} onClick={() => tabstologin()}>
              SIGN UP
            </button>
            <button className={tab === "login" ? "active loginBtn" : "loginBtn"} onClick={() => tabstosignup()}>
              LOG IN
            </button>
          </div>

          {tab === "signup" ? (
            <>
              <form className="login_signUp">
                <div className="formGroup">
                  <input
                    type="text"
                    id="userName"
                    placeholder="User Name"
                    autocomplete="off"
                    className="logininput"
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="email"
                    placeholder="Email ID"
                    name="email"
                    required
                    autocomplete="off"
                    className="logininput"
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required={true}
                    autocomplete="off"
                    className="logininput"
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    autocomplete="off"
                    className="logininput"
                  />
                </div>
                <div className="formGroup">
                  <textarea
                    id="address"
                    name="address"
                    rows="1"
                    cols="20"
                    maxlength="100"
                    placeholder="Address"
                    required
                    className="logininput"
                  ></textarea>
                </div>
                <div className="checkBox">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <span className="login_text">I agree with term & conditions</span>
                </div>
                <div className="formGroup">
                  <button type="submit" className="btn2">
                    REGISTER
                  </button>
                </div>
              </form>
            </>
          ) : (
            <></>
          )}
          {tab === 'login' ? (
            <>
              <form className="login" action="" method="get">
                <div className="formGroup">
                  <input
                    type="email"
                    placeholder="Email ID"
                    name="email"
                    required
                    autocomplete="off"
                    className="logininput"
                  />
                </div>
                <div className="formGroup">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    autocomplete="off"
                    className="logininput"
                  />
                </div>
                <div className="checkBox">
                  <input type="checkbox" name="checkbox" id="checkbox" className="logininput"/>
                  <span className="login_text">Keep me signed in on this device</span>
                </div>
                <div className="formGroup">
                  <button type="submt" className="btn2">
                    REGISTER
                  </button>
                </div>
              </form>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
