import React from "react";

import "./MyWish.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import st from "../../Assets/Image/st1.svg";

import ptm from "../../Assets/Image/ptm.svg";
import goog from "../../Assets/Image/goog.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import dum from "../../Assets/Image/dum.svg";
import dum1 from "../../Assets/Image/dum1.svg";
import { AiFillStar } from "react-icons/ai";
import { RiDeleteBin5Line, RiShirtLine } from "react-icons/ri";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MyWish() {

  const navigate = useNavigate();


  const handleOrder = ()=>{
    navigate("/order")
    }


    const handleProfile = ()=>{
      navigate("/profile")
      }
  
const handlemanage = ()=>{
navigate("/manageadd")
}

const handleSize = ()=>{
  navigate("/mysize")
  }
  
  const handleUpi = ()=>{
    navigate("/paymentpage")
  }

  const handleCard = ()=>{
    navigate("/saved")
  }

  
  const handleWish = ()=>{
    navigate("/mywish")
  }

  
  const handleRate = ()=>{
    navigate("/rating")
  }


  const handleNote = ()=>{
    navigate("/notification")
  }

const handleEdit = ()=>{
navigate("/editsize")
}

const handleAdd = ()=>{
  navigate("/addaddress")
  }

  return (
    <div className="mywish-container">
      <div className="mywish-container-div1">
        <div className="mywish-name-box">
          <div className="mywish-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="mywish-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="mywish-icon-box">
          <div className="mywish-name-icon">
            <FaDropbox />
          </div>
          <div className="mywish-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="mywish-text2">
          <p
            style={{
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            ACCOUNT SETTINGS
          </p>
        </div>
        <div className="horizotal-line1"></div>
        <div className="mywish-button-info"  onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="mywish-address-text"  onClick={handlemanage}>
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            Manage Addresses
          </p>
        </div>

        <div className="mywish-size-text"  onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Sizes</p>
        </div>

        <div className="mywish-text2">
          <p
            style={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            PAYMENTS
          </p>
        </div>
        <div className="horizotal-line2"></div>
        <div className="mywish-card-opton1">
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            Gift Cards
          </p>
        </div>

        <div className="mywish-card-opton1"  onClick={handleUpi}>
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            Saved UPIs
          </p>
        </div>

        <div className="mywish-card-opton1"  onClick={handleCard}>
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            Saved Cards
          </p>
        </div>

        <div className="mywish-text2">
          <p
            style={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            My Stuffs
          </p>
        </div>
        <div className="horizotal-line2"></div>

        <div className="mywish-card-opton1"  onClick={handleWish}>
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            My Wishlists
          </p>
        </div>

        <div className="mywish-card-opton1">
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            My Designs
          </p>
        </div>

        <div className="mywish-card-opton1"  onClick={handleNote}>
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            My Notifications
          </p>
        </div>

        <div className="mywish-card-opton1"  onClick={handleRate}>
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            My Ratings & Reviews
          </p>
        </div>
      </div>

      {/* second section */}

      <div className="mywish-container-div2">
        <div className="mywish-container-div2-box1">
          <div style={{ display: "flex", justifyContent: "left" }}>
            {/* <h4 style={{ color: "#999999" }}>My Size/</h4> */}
            <h4>My Wishlists</h4>
          </div>

          <div className="mywish-container-div2-box1-sizebox">
            <div className="mywish-box1">
              <div
              className="mywish-box1-div"
               
              >
                <img style={{ width: "20%", height: "100%" }} src={st} alt="" />
                <div
                  style={{
                    width: "40%",
                    height: "100%",
                    // border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    textAlign: "left",
                  }}
                >
                  <h5>Long Sleeve T-Shirt (Black)</h5>

                  <div
                    style={{
                      width: "100px",
                      height: "30px",
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      4.4 <AiFillStar />
                    </button>
                    <p>(149)</p>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "30px",
                      display: "flex",
                      gap: "10px",
                      justifyContent: "left",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                     <p
                      style={{
                        fontWeight: "12px",
                        color: "black",
                        fontWeight: "700",
                        textAlign:"left"
                      }}>$1500</p>
                    <p style={{ fontWeight: "5px", color: "grey" }}>$2000</p>
                    <p
                      style={{
                        fontWeight: "8px",
                        color: "black",
                        fontWeight: "700",
                      }}
                    >
                      5 % OFF
                    </p>
                  </div>
                </div>

<div className="mywish-box1-icon1">  <RiDeleteBin5Line className="mywish-box1-icon1-style" /></div>

              </div>

              <div
              className="mywish-box1-icon2"
              >
                <RiDeleteBin5Line />
              </div>
            </div>

<hr style={{width:"110%",height:"1.5px",color:"grey"}} />


<div className="mywish-box1">
              <div
           className="mywish-box1-div"
              >
                <img style={{ width: "20%", height: "100%" }} src={st} alt="" />
                <div
                  style={{
                    width: "40%",
                    height: "100%",
                    // border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    textAlign: "left",
                  }}
                >
                  <h5>Long Sleeve T-Shirt (Black)</h5>

                  <div
                    style={{
                      width: "100px",
                      height: "30px",
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      4.4 <AiFillStar />
                    </button>
                    <p>(149)</p>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "30px",
                      display: "flex",
                      gap: "10px",
                      justifyContent: "left",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                     <p
                      style={{
                        fontWeight: "12px",
                        color: "black",
                        fontWeight: "700",
                        textAlign:"left"
                      }}>$1500</p>
                    <p style={{ fontWeight: "5px", color: "grey" }}>$2000</p>
                    <p
                      style={{
                        fontWeight: "8px",
                        color: "black",
                        fontWeight: "700",
                      }}
                    >
                      5 % OFF
                    </p>
                  </div>
                </div>

                <div className="mywish-box1-icon1">  <RiDeleteBin5Line className="mywish-box1-icon1-style" /></div>
              </div>

              <div
              className="mywish-box1-icon2"
              >
                <RiDeleteBin5Line />
              </div>
            </div>


            <hr style={{width:"110%",height:"1.5px",color:"grey"}} />


            
            <div className="mywish-box1">
              <div
            className="mywish-box1-div"
              >
                <img style={{ width: "20%", height: "100%" }} src={st} alt="" />
                <div
                  style={{
                    width: "40%",
                    height: "100%",
                    // border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    textAlign: "left",
                  }}
                >
                  <h5>Long Sleeve T-Shirt (Black)</h5>

                  <div
                    style={{
                      width: "100px",
                      height: "30px",
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      4.4 <AiFillStar />
                    </button>
                    <p>(149)</p>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "30px",
                      display: "flex",
                      gap: "10px",
                      justifyContent: "left",
                      textAlign: "center",
                      // alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: "12px",
                        color: "black",
                        fontWeight: "700",
                        textAlign:"left"
                      }}>$1500</p>
                    <p style={{ fontWeight: "5px", color: "grey" }}>$2000</p>
                    <p
                      style={{
                        fontWeight: "8px",
                        color: "black",
                        fontWeight: "700",
                      }}
                    >
                      5 % OFF
                    </p>
                  </div>
                </div>
                <div className="mywish-box1-icon1">  <RiDeleteBin5Line className="mywish-box1-icon1-style" /></div>
              </div>

              <div
              className="mywish-box1-icon2"
              >
                <RiDeleteBin5Line />
              </div>
            </div>


            {/* right section ................................................................*/}

            <div className="mywish-box2">
              <div className="mywish-box2-div"></div>
            </div>
          </div>

          {/* <div className="mywish-img-bottom">vfv</div> */}
        </div>

        <div className="mywish-img-bottom">
          <div className="mywish-img-bottom1">
            <div className="mywish-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWish;
