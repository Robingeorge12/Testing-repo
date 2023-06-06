import React from "react";

import "./Notification.css";
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
import { Link, Navigate, useNavigate } from "react-router-dom";
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

const notiDetail = [
  {
    head: "Order Out For Delivery",
    textMat:
      "Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order",
  },
  {
    head: "Ready to dispatch",
    textMat:
      "Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order",
  },
  {
    head: "Review your latest purchase!",
    textMat:
      "Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order",
  },
  {
    head: "Summer deals",
    textMat:
      "Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order",
  },
  {
    head: "END-OF-SEASON SALE",
    textMat:
      "Your order containing Tshirt will be delivered today. Use 5252 as security pin to receive your order",
  },
];


function Notification() {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/order");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handlemanage = () => {
    navigate("/manageadd");
  };

  const handleSize = () => {
    navigate("/mysize");
  };

  const handleUpi = () => {
    navigate("/paymentpage");
  };

  const handleCard = () => {
    navigate("/saved");
  };

  const handleWish = () => {
    navigate("/mywish");
  };

  const handleNote = () => {
    navigate("/notification");
  };

  const handleRate = () => {
    navigate("/rating");
  };

  return (
    <div className="noti-container">
      <div className="noti-container-div1">
        <div className="noti-name-box">
          <div className="noti-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="noti-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="noti-icon-box">
          <div className="noti-name-icon">
            <FaDropbox />
          </div>
          <div className="noti-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="noti-text2">
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
        <div className="noti-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="noti-address-text" onClick={handlemanage}>
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

        <div className="noti-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Sizes</p>
        </div>

        <div className="noti-text2">
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
        <div className="noti-card-opton1">
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

        <div className="noti-card-opton1" onClick={handleUpi}>
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

        <div className="noti-card-opton1" onClick={handleCard}>
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

        <div className="noti-text2">
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

        <div className="noti-card-opton1" onClick={handleWish}>
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

        <div className="noti-card-opton1">
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

        <div className="noti-card-opton1" onClick={handleNote}>
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

        <div className="noti-card-opton1" onClick={handleRate}>
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

      <div className="noti-container-div2">
        <div className="noti-container-div2-box1">
          <div style={{ display: "flex", justifyContent: "left" }}>
            {/* <h4 style={{ color: "#999999" }}>My Size/</h4> */}
            <h4>My Notifications</h4>
          </div>

          <div className="noti-container-div2-box1-sizebox">
          {notiDetail.length ==0 ?  <div className="noti-box1">
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
                <img style={{ width: "20%", height: "100%",color:"grey" }} src={p1} alt="front" />
                <img style={{ width: "20%", height: "100%" }} src={p2} alt="grey" />
                <img style={{ width: "20%", height: "100%" }} src={p4} alt="3dot" />

              </div> */}
              <img className="noti-box1-im1" src={p1} alt="front" />
              <img
                className="noti-box1-im2"
                src={p2}
                alt="grey"
              />
              <img
                className="noti-box1-im3"
                src={p4}
                alt="3dot"
              />
              <img
                className="noti-box1-im4"
              
                src={ro}
                alt="ro"
              />
              <img
                className="noti-box1-im5"
                src={tik}
                alt="3dot"
              />

              <div
               className="noti-box1-text"
              >
                <h5>No Notifications!</h5>
                <p style={{ color: "grey" }}>Your are all caught up.</p>
              </div>
            </div> : <Navigate to="/notificationpage" /> }
            {/* right section ................................................................*/}

            <div className="noti-box2">
              <div className="noti-box2-div"></div>
            </div>
          </div>

          {/* <div className="noti-img-bottom">vfv</div> */}
        </div>

        <div className="noti-img-bottom">
          <div className="noti-img-bottom1">
            <div className="noti-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
