import React from "react";

import "./TrackPage.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import line from "../../Assets/Image/line.svg";
import r1 from "../../Assets/Image/r1.svg";
import rw from "../../Assets/Image/rw.svg";
import { GoStar } from "react-icons/go";
import ro from "../../Assets/Image/ro.svg";
import tik from "../../Assets/Image/tik.svg";
import log from "../../Assets/Image/log.svg";
import goog from "../../Assets/Image/goog.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
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

function TrackPage() {
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

  const handleNote = ()=>{
    navigate("/notification")
  }
  const handleRate = ()=>{
    navigate("/rating")
  }
 

  return (
    <div className="trackpage-container">
      <div className="trackpage-container-div1">
        <div className="trackpage-name-box">
          <div className="trackpage-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="trackpage-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="trackpage-icon-box">
          <div className="trackpage-name-icon">
            <FaDropbox />
          </div>
          <div className="trackpage-name-text"  onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="trackpage-text2">
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
        <div className="trackpage-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="trackpage-address-text" onClick={handleProfile}>
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

        <div className="trackpage-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Sizes</p>
        </div>

        <div className="trackpage-text2">
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
        <div className="trackpage-card-opton1">
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

        <div className="trackpage-card-opton1" onClick={handleUpi}>
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

        <div className="trackpage-card-opton1" onClick={handleCard}>
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

        <div className="trackpage-text2">
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

        <div className="trackpage-card-opton1" onClick={handleWish}>
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

        <div className="trackpage-card-opton1">
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

        <div className="trackpage-card-opton1" onClick={handleNote}>
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            My Notification
          </p>
        </div>

        <div className="trackpage-card-opton1"  onClick={handleRate} >
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

      <div className="trackpage-container-div2">
        <div className="trackpage-container-div2-box1">
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              //   marginLeft: "10px",
            }}
          >
            {/* <h4 style={{ color: "#999999" }}>My Size/</h4> */}
            <h4>My Orders</h4>
          </div>

          <div
            style={{
              width: "90%",
              display: "flex",
              height: "36px",
              //   marginLeft: "20px",
              border: "1px solid #8C8C8C",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              style={{
                width: "97%",
                height: "92%",
                border: "none",
                // backgroundColor: "blue",
              }}
              placeholder="| Type to search your ordered products"
            />
            <HiOutlineSearch />
          </div>

          <div
            style={{
              width: "90%",
              height: "130px",
              border: "1px solid #FFFFFF",
              //   marginLeft: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "24%",
                height: "100%",
                display: "flex",
                gap: "10px",
              }}
            >
              <img
                src={log}
                style={{ width: "40%", height: "100%" }}
                alt="pic"
              />
              <div
                style={{
                  width: "60%",
                  height: "100%",
                  // backgroundColor: "purple",
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: "2px",
                  textAlign: "left",
                }}
              >
                <p style={{ fontWeight: "500" }}>Long Bottom</p>
                <p style={{ fontWeight: "0", color: "#B9B9B9" }}>Color</p>
                <p style={{ color: "#B9B9B9" }}>Style</p>
              </div>
            </div>

            <div
              style={{
                width: "10%",
                height: "100%",
                // backgroundColor: "yellow",
              }}
            >
              <h4>$1899</h4>
            </div>
            <div style={{ width: "30%", height: "100%", lineHeight: "2px" }}>
              <div
                style={{
                  display: "flex",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor: "#1ABC00",
                  }}
                ></div>
                <p style={{ fontSize: "15px", fontWeight: "500" }}>
                  Delivered on 20th March, 2023
                </p>
              </div>

              <p>Your item has been delivered</p>

              <div
                style={{
                  display: "flex",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GoStar />
                <p style={{ fontSize: "15px", fontWeight: "500" }}>
                  Rate & Review your purchase
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "90%",
              height: "80px",
              // border: "1px solid blue",
              margin: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div></div>
            <img
              src={line}
              style={{ width: "90%", position: "relative" }}
              alt="pic"
            />
            {/* <img src={rw} style={{position:"relative",width:"18px",left:"-807px"}} alt="yr" />
<img src={r1} style={{width:"14px",position:"relative",left:"-807px"}} alt="ji" /> */}

            <div className="trackpage-trackpic-div1">
              <p style={{ fontSize: "10px", marginLeft: "-104px" }}>
                Order Confirmed
              </p>
              <img
                src={rw}
                style={{
                  position: "relative",
                  width: "18px",
                  top: "9px",
                  left: "-12px",
                }}
                alt="pr"
              />
              <img
                src={r1}
                style={{
                  width: "8px",
                  position: "relative",
                  top: "-4px",
                  left: "-7px",
                }}
                alt="pc"
              />
              <p style={{ fontSize: "10px", marginLeft: "-100px" }}>
                24th March 2023
              </p>
            </div>

            <div className="trackpage-trackpic-div2">
<p style={{fontSize:'10px',marginLeft:"-104px"}}>Stiched</p>
<img src={rw} style={{position:"relative",width:"18px",top:"9px",left:"-12px"}} alt="pr" />
<img src={r1} style={{width:"8px",position:"relative",top:"-4px",left:"-7px"}} alt="pc" />
<p style={{fontSize:'10px',marginLeft:"-96px"}}>18th March 2023</p>

</div>


<div className="trackpage-trackpic-div3">
<p style={{fontSize:'10px',marginLeft:"-113px"}}>Shipped</p>
<img src={rw} style={{position:"relative",width:"18px",top:"9px",left:"-12px"}} alt="pr" />
<img src={r1} style={{width:"8px",position:"relative",top:"-4px",left:"-7px"}} alt="pc" />
<p style={{fontSize:'10px',marginLeft:"-100px"}}>19th March 2023</p>

</div>


<div className="trackpage-trackpic-div4">
<p style={{fontSize:'10px',marginLeft:"-146px"}}>Out for Delivary</p>
<img src={rw} style={{position:"relative",width:"18px",top:"9px",left:"-12px"}} alt="pr" />
<img src={r1} style={{width:"8px",position:"relative",top:"-4px",left:"-7px"}} alt="pc" />
<p style={{fontSize:'10px',marginLeft:"-146px"}}>20th March 2023</p>

</div>


<div className="trackpage-trackpic-div5">
<p style={{fontSize:'10px',marginLeft:"-126px"}}>Delivered</p>
<img src={rw} style={{position:"relative",width:"18px",top:"9px",left:"-12px"}} alt="pr" />
<img src={r1} style={{width:"8px",position:"relative",top:"-4px",left:"-7px"}} alt="pc" />
<p style={{fontSize:'10px',marginLeft:"-126px"}}>21th March 2023</p>

</div>


          </div>

          <div
            style={{
              width: "300px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                fontSize: "16px",
                marginBottom: "10px",
              }}
            >
              Delivery Address
            </p>
            <p style={{ margin: "0px", color: "black", fontSize: "13px" }}>
              Venkata Subbarao
            </p>
            <p style={{ margin: "0px", color: "black", fontSize: "13px" }}>
              Flat no. 133, door no. 52-1/4-5 Veterinary Colony, vijayawada
            </p>
            <p style={{ margin: "0px", color: "black", fontSize: "13px" }}>
              urban, Krishna district, Vj Polytechnic Vijayawada - 520008
            </p>
            <p style={{ margin: "0px", color: "black", fontSize: "13px" }}>
              Andhra Pradesh{" "}
            </p>
            <p style={{ margin: "0px", color: "black", fontSize: "13px" }}>
              {" "}
              Phone number
            </p>
            <p style={{ margin: "0px", color: "black", fontSize: "13px" }}>
              9032138888, 6304897782
            </p>
          </div>

          <div
            style={{
              width: "90%",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "#B9B9B9", fontSize: "13px" }}>
              {" "}
              This order is also tracked by 9032138888
            </p>
            <Link to="">
              <button style={{ border: "none" }}>Download Invoice</button>
            </Link>
          </div>
        </div>

        <div className="trackpage-img-bottom">
          <div className="trackpage-img-bottom1">
            <div className="trackpage-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackPage;
