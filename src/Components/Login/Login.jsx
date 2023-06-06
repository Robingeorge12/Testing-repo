import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import w1 from "../../Assets/Image/wing1.svg";
import w2 from "../../Assets/Image/wing2.svg";
import s from "../../Assets/Image/scissor.svg";
import pen from "../../Assets/Image/pen.svg";
import sb from "../../Assets/Image/sb.png";
import te from "../../Assets/Image/tapeend.svg";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {};
  return (
    <div>
      {/* <Navbar /> */}
      <div className="login-container">
        <div className="login-image-container">
          <div>
            <img className="login-m1" src={w1} alt="" />
          </div>
          <div>
            <img className="login-m2" src={w2} alt="" />
          </div>
          <div>
            <img className="login-m3" src={s} alt="" />
          </div>
          <div>
            {" "}
            <img className="login-m4" src={pen} alt="" />
          </div>
          <div>
            {" "}
            <img className="login-m5" src={w1} alt="" />
          </div>
          <div>
            {" "}
            <img className="login-m6" src={sb} alt="" />
          </div>
          <div>
            {" "}
            <img className="login-m7" src={sb} alt="" />
          </div>
          <div>
            <img className="login-m8" src={w2} alt="" />
          </div>
          <div>
            {" "}
            <img className="login-m9" src={w1} alt="" />
          </div>
          <div>
            <img className="login-m10" src={s} alt="" />
          </div>
          <div>
            {" "}
            <img className="login-m11" src={te} alt="" />
          </div>

          <div className="login-form-box">
            <div className="login-form-inner-box">
              <div
              className="login-form-inner-box-head-div"
           
              >
                <h3 className="login-form-inner-box-head-h4" >
                  Login
                </h3>
              </div>

              <div className="login-input-box">
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="User Email"
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div
              className="login-input-box-details"
             
              >
                <Link to="" style={{ textDecoration: "none" }}>
                  <p style={{ color: "grey" }}>Forgot Password?</p>
                </Link>
                <h4 style={{marginTop:"15px"}}>Reset Now</h4>
              </div>

              <div
                   className="login-input-box-details-div1"
            
              >
                <p style={{ fontSize: "12px" }}>
                  By continuing,I agree to the,
                </p>
                <h3 style={{ fontSize: "12px" }}>Terms of Use</h3>
                <p style={{ fontSize: "12px" }}>&</p>
                <h3 style={{ fontSize: "12px" }}>Privacy Policy</h3>
              </div>

              <div style={{ textAlign: "center" }}>
                <button
                  onClick={handleSubmit}
                  className="login-input-box-details-div2"
                
                >
                  SUBMIT
                </button>
              </div>

              <div
               className="login-input-box-details-div3"
                
              >
                <p style={{ fontSize: "12px" }}>Or</p>
                <h3 style={{ fontSize: "12px" }}>Continue with:</h3>
              </div>

              <div
              className="login-input-box-details-div4"
           
              >
                <button
                 className="login-input-box-details-btn1"
                  
                >
                  <FaFacebookF />
                </button>
                <button
                 className="login-input-box-details-btn1"
                >
                  <AiOutlineGoogle />
                </button>
              </div>

              <div style={{ fontSize: "12px", textAlign: "left" }}>
                <Link to="" style={{ textDecoration: "none", color: "black" }}>
                  <h3 style={{fontSize:"15px"}}>SIGNIN WITH OTP</h3>
                </Link>
              </div>

              <div
              className="login-input-box-details-lastdiv"
              
              >
                <p style={{ fontSize: "12px" }}>Have trouble loging in?</p>
                <h1 style={{ fontSize: "12px" }}>Get help</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
