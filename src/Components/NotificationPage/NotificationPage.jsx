import React from "react";

import "./NotificationPage.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import st from "../../Assets/Image/st1.svg";
import wn from "../../Assets/Image/wn.svg";
import p1 from "../../Assets/Image/p1.svg";
import p2 from "../../Assets/Image/p2.svg";
import p3 from "../../Assets/Image/p3.svg";
import p4 from "../../Assets/Image/p4.svg";
import ro from "../../Assets/Image/ro.svg";
import tik from "../../Assets/Image/tik.svg";
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

function NotificationPage() {
  return (
    <div className="notipage-container">
      <div className="notipage-container-div1">
        <div className="notipage-name-box">
          <div className="notipage-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="notipage-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="notipage-icon-box">
          <div className="notipage-name-icon">
            <FaDropbox />
          </div>
          <div className="notipage-name-text">
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="notipage-text2">
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
        <div className="notipage-button-info">
          <button>Profile Information</button>
        </div>

        <div className="notipage-address-text">
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

        <div className="notipage-size-text">
          <p style={{ fontWeight: "400" }}>My Sizes</p>
        </div>

        <div className="notipage-text2">
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
        <div className="notipage-card-opton1">
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

        <div className="notipage-card-opton1">
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

        <div className="notipage-card-opton1">
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

        <div className="notipage-text2">
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

        <div className="notipage-card-opton1">
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

        <div className="notipage-card-opton1">
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

        <div className="notipage-card-opton1">
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            My notipagefications
          </p>
        </div>

        <div className="notipage-card-opton1">
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

      <div className="notipage-container-div2">
        <div className="notipage-container-div2-box1">
          <div style={{ display: "flex", justifyContent: "left" ,marginLeft:"10px"}}>
            {/* <h4 style={{ color: "#999999" }}>My Size/</h4> */}
            <h4>My Notifications</h4>
          </div>

          <div style={{width:"100%",height:"50px",textAlign:"left",marginLeft:"10px",marginTop:"20px"}}>
            <h5 style={{margin:"0px"}}>Order Out For Delivery</h5>
            <p style={{margin:"0px",color:"#8F8F8F"}}>Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order</p>
          </div>
<hr style={{width:"100%",height:"2px",color:"grey",textAlign:"left",padding:"0px",}} />


<div style={{width:"100%",height:"50px",textAlign:"left",marginLeft:"10px"}}>
            <h5 style={{margin:"0px"}}>Ready to dispatch</h5>
            <p style={{margin:"0px",color:"#8F8F8F"}}>Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order</p>
          </div>
<hr style={{width:"100%",height:"2px",color:"grey",textAlign:"left",padding:"0px",}} />





<div style={{width:"100%",height:"50px",textAlign:"left",marginLeft:"10px"}}>
            <h5 style={{margin:"0px"}}>Review your latest purchase! </h5>
            <p style={{margin:"0px",color:"#8F8F8F"}}>Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order</p>
          </div>
<hr style={{width:"100%",height:"2px",color:"grey",textAlign:"left",padding:"0px",}} />





<div style={{width:"100%",height:"50px",textAlign:"left",marginLeft:"10px"}}>
            <h5 style={{margin:"0px"}}>Summer deals</h5>
            <p style={{margin:"0px",color:"#8F8F8F"}}>Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order</p>
          </div>
<hr style={{width:"100%",height:"2px",color:"grey",textAlign:"left",padding:"0px",}} />



<div style={{width:"100%",height:"50px",textAlign:"left",marginLeft:"10px"}}>
            <h5 style={{margin:"0px"}}>END-OF-SEASON SALE</h5>
            <p style={{margin:"0px",color:"#8F8F8F"}}>Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order</p>
          </div>
<hr style={{width:"100%",height:"2px",color:"grey",textAlign:"left",padding:"0px",}} />



          <div className="notipage-container-div2-box1-sizebox">


      

          
          {/* <div style={{width:"100%",height:"50px",border:"1px solid red",textAlign:"left"}}>
            <h5 style={{margin:"0px"}}>Order Out For Delivery</h5>
            <p style={{margin:"0px",color:"#8F8F8F"}}>Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order</p>
          </div>
<hr style={{width:"100%",height:"2px",color:"grey",textAlign:"left",padding:"0px",}} /> */}


            {/* <div className="notipage-box1"> */}
              {/* <div
                style={{
                  width: "80%",
                  height: "89%",
                //   border: "1px solid blue",
                  display: "flex",
                  justifyContent: "left",
                  padding:"0px",
                  margin:"0px"
                }}
              >
               
              </div> */}


            {/* </div> */}

            {/* right section ................................................................*/}

            <div className="notipage-box2">
              <div className="notipage-box2-div"></div>
            </div>
          </div>

          {/* <div className="notipage-img-bottom">vfv</div> */}
        </div>

        <div className="notipage-img-bottom">
          <div className="notipage-img-bottom1">
            <div className="notipage-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationPage;
