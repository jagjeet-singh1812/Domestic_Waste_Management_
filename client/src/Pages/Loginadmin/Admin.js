import React, { useState, useRef } from "react";
import "./admin.css";
import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const Da = () => {
const navigate=useNavigate();
  const [activeTab, setActiveTab] = useState("book-chat");
  const [seepass, setseepass] = useState(false);
  const [Email, setEmail] = useState("");
  const [seepass2, setseepass2] = useState(false);
  const [name, setName] = useState("");
  // const [activechat, setchat] = useState(false);
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const formbook = useRef();
  const secondform = useRef();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "send-message") {
      // setchat(false);
    }
    // else setchat(true);
  };
  const handlelogin=()=>{
    navigate('/admin');
  }

  const handlelogin2 = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
    //   const { data } = await axios.post(
    //     "/user/login",
    //     {
    //       email:Email,
    //       password: password
    //     },
    //     config
    //   );
      // console.log(data);
    //   localStorage.setItem("userinfo",JSON.stringify(data));
      toast.success({
        title: "Error Occured!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        className: "toast-custom-style",
      });
      navigate('/allquestion')
    } catch (error) {
      toast.warning({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        className: "toast-custom-style",
      });
      setName("");
      setpassword("");
      return;
    }

    toast.success(
      "Thank you, Your Question has been Submitted will get back to you!",
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toast-custom-style",
      }
    );

    secondform.current.reset();
    // alert("Submitted!")
    setName("");
    setpassword("");
  };


  const handleform=()=>{
    navigate('/admin');
  }

  const handleform2 = async (e) => {
    e.preventDefault();
    if(password===password2 && password.length>=8 && password2.length>=8){
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
    //   const { data } = await axios.post(
    //     "/user/register",
    //     {
    //       name: name,
    //       password: password,
    //       email:Email
    //     },
    //     config
    //   );
      // console.log(data);
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      toast.warning({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        className: "toast-custom-style",
      });
      setName("");
      setpassword("");
      setpassword2("");
      setEmail("");
      return;
    }
    toast.success(
      "Thank you, User has been Submitted!, Now can login",
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toast-custom-style",
      }
      );
    // navigate('/allquestion');
    setActiveTab('book-chat');
    formbook.current.reset();
    // alert("Submitted!")
    setName("");
    setpassword("");
    setpassword2("");
    setEmail("");
    }
    else if(password<8||password2<8){
        toast.warning(
            "Not Sufficient Length !!! Should atleast Contains 8 Letter",
            {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              className: "toast-custom-style",
            }
        );
        setseepass(true);
        setseepass2(true);
    }
    else{
        toast.warning(
            "password doesn't match!!! please check That",
            {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              className: "toast-custom-style",
            }
        );
        setseepass(true);
        setseepass2(true);
    }
  };



  return (
    <>
      <div className="temp"></div>
      <div className="Homewhole_contactus">
        <div className="Homeright_contactus">
          <div className="Homeform-container">
            <div className="Hometabs">
              <button
                className={`tab ${
                  activeTab === "send-message" ? "active" : ""
                }`}
                onClick={() => handleTabChange("send-message")}
              >
                Signup
              </button>
              <button
                className={`tab ${activeTab === "book-chat" ? "active" : ""}`}
                onClick={() => handleTabChange("book-chat")}
              >
                Login
              </button>
              <ToastContainer/>
            </div>

            <div className="Homeform-content">
              {activeTab === "send-message" && (
                <form
                  className="Homesend-message-form"
             
                  ref={formbook}
                  onSubmit={handleform}
                >
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
                  />
                  <label htmlFor="Email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                  />
                    <label htmlFor="email">Password:</label>
                  <div className="pass_container_home">
                    <input
                    type={seepass?"text":"password"}
                      id="email"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      required={true}
                    />
                    {seepass?<i className="fa-solid fa-eye" onClick={()=>setseepass(!seepass)}></i>:<i className="fa-solid fa-eye-slash" onClick={()=>setseepass(!seepass)}></i>}
                  </div>
                  <label htmlFor="email">Confirm Password:</label>
                  <div className="pass_container_home">
                  <input
                   type={seepass2?"text":"password"}
                    id="email"
                    placeholder="Confirm Password"
                    value={password2}
                    onChange={(e) => setpassword2(e.target.value)}
                    required={true}
                  />
                  {seepass2?<i className="fa-solid fa-eye" onClick={()=>setseepass2(!seepass2)}></i>:<i className="fa-solid fa-eye-slash" onClick={()=>setseepass2(!seepass2)}></i>}
                  </div>
                  <div className="Homebtn_submit_full">
                    <button type="submit">Signup</button>
                  </div>
                </form>
              )}

              {activeTab === "book-chat" && (
                <form
                  className="Homebook-chat-form"
                  ref={secondform}
                  onSubmit={handlelogin}
                >
                  <label htmlFor="name">Email:</label>
                  <input
                    type="email"
                    id="name"
                    name="name"
                    placeholder="Enter your Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                  />
                  <label htmlFor="email">Password:</label>
                  <div className="pass_container_home">
                    <input
                    type={seepass?"text":"password"}
                      id="email"
                      placeholder="Enter your Password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      required={true}
                    />
                    {seepass?<i className="fa-solid fa-eye bgfav" onClick={()=>setseepass(!seepass)}></i>:<i className="fa-solid fa-eye-slash" onClick={()=>setseepass(!seepass)}></i>}
                  </div>
                  <div className="Homebtn_book">
                    <button type="submit">Login</button>
                    <ToastContainer />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Da;
