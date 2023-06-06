import React from "react";

import "./OrderPage.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import st from "../../Assets/Image/st1.svg";
import wn from "../../Assets/Image/wn.svg";
import log from "../../Assets/Image/log.svg";
import goog from "../../Assets/Image/goog.svg";
import { Link, useNavigate } from "react-router-dom";
import { GoStar } from "react-icons/go";
import dum from "../../Assets/Image/dum.svg";
import dum1 from "../../Assets/Image/dum1.svg";
import { FaFilter } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

import { RiDeleteBin5Line, RiShirtLine } from "react-icons/ri";

function OrderPage() {
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

const handleTrack = ()=>{
  navigate("/trackpage");
}

  return (
    <div className="orderpage-container">
      <div className="orderpage-container-div1">
        <div className="orderpage-name-box">
          <div className="orderpage-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="orderpage-name-box2">
            <p>Hello,</p>
            <p className="orderpage-name-box2-name">Mr Manjunadha</p>
          </div>
        </div>

        <div className="orderpage-icon-box">
          <div className="orderpage-name-icon">
            <FaDropbox />
          </div>
          <div className="orderpage-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="orderpage-text2">
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
        <div className="orderpage-button-info" onClick={handleProfile}>
        <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            Profile Information
          </p>
        </div>

        <div className="orderpage-address-text" onClick={handlemanage}>
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

        <div className="orderpage-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Sizes</p>
        </div>

        <div className="orderpage-text2">
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
        <div className="orderpage-card-opton1">
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

        <div className="orderpage-card-opton1" onClick={handleUpi}>
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

        <div className="orderpage-card-opton1" onClick={handleCard}>
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

        <div className="orderpage-text2">
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

        <div className="orderpage-card-opton1" onClick={handleWish}>
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

        <div className="orderpage-card-opton1">
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

        <div className="orderpage-card-opton1" onClick={handleNote}>
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

        <div className="orderpage-card-opton1" onClick={handleRate}>
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

      <div className="orderpage-container-div2">
        <div className="orderpage-container-div2-box1">
          <div className="orderpage-container-div2-box1-head">
            {/* <h4 style={{ color: "#999999" }}>My Size/</h4> */}
            <h4 className="orderpage-container-div2-box1-head-h4tag">
              My Orders
            </h4>
          </div>

          <div className="orderpage-container-div2-box1-div1">
            <input
              className="orderpage-container-div2-box1-div1-ip"
              type="text"
              placeholder="| Type to search your ordered products"
            />
            <HiOutlineSearch />
          </div>

          <div className="orderpage-container-div2-box1-div1-sortfilt">
            <div className="orderpage-container-div2-box1-div1-sortfilt-subdiv">
              <FaFilter />
              <p>filter</p>
            </div>
            <div className="orderpage-container-div2-box1-div1-sortfilt-sortdiv">
              sort
              <select name="" id=""></select>
            </div>
          </div>

          <div className="orderpage-container-div2-box1-div1-item-div" onClick={handleTrack}>
            <div className="orderpage-container-div2-box1-div1-item-div-box1">
              <img
                src={log}
                className="orderpage-container-div2-box1-div1-item-div-box1-img"
                alt="pic"
              />
              <div className="orderpage-container-div2-box1-div1-item-div-box1-content">
                <p className="orderpage-container-div2-box1-div1-item-div-box1-content-fit">
                  Long Bottom
                </p>
                <p className="orderpage-container-div2-box1-div1-item-div-box1-content-colortxt">
                  Color
                </p>
                <p className="orderpage-container-div2-box1-div1-item-div-box1-content-style">
                  Style
                </p>
              </div>
            </div>

            <div className="orderpage-container-div2-box1-div1-content-box">
              <h4>$1899</h4>
            </div>
            <div className="orderpage-container-div2-box1-div1-content-box1">
              <div className="orderpage-container-div2-box1-div1-content-box2">
                <div className="orderpage-container-div2-box1-div1-content-box3"></div>
                <p className="orderpage-container-div2-box1-div1-content-ptag1">
                  Delivered on 20th March, 2023
                </p>
              </div>

              <p className="orderpage-container-div2-box1-div1-content-ptag2">
                Your item has been delivered
              </p>

              <div className="orderpage-container-div2-box1-div1-content-box4">
                <GoStar />
                <p className="orderpage-container-div2-box1-div1-content-ptag3">
                  Rate & Review your purchase
                </p>
              </div>
            </div>
          </div>

          <div className="orderpage-container-div2-box1-div1-item-div" onClick={handleTrack}>
            <div className="orderpage-container-div2-box1-div1-item-div-box1">
              <img
                src={log}
                className="orderpage-container-div2-box1-div1-item-div-box1-img"
                alt="pic"
              />
              <div className="orderpage-container-div2-box1-div1-item-div-box1-content">
                <p className="orderpage-container-div2-box1-div1-item-div-box1-content-fit">
                  Long Bottom
                </p>
                <p className="orderpage-container-div2-box1-div1-item-div-box1-content-colortxt">
                  Color
                </p>
                <p className="orderpage-container-div2-box1-div1-item-div-box1-content-style">
                  Style
                </p>
              </div>
            </div>

            <div className="orderpage-container-div2-box1-div1-content-box">
              <h4>$1899</h4>
            </div>
            <div className="orderpage-container-div2-box1-div1-content-box1">
              <div className="orderpage-container-div2-box1-div1-content-box2">
                <div className="orderpage-container-div2-box1-div1-content-box3"></div>
                <p className="orderpage-container-div2-box1-div1-content-ptag1">
                  Delivered on 20th March, 2023
                </p>
              </div>

              <p className="orderpage-container-div2-box1-div1-content-ptag2">
                Your item has been delivered
              </p>

              <div className="orderpage-container-div2-box1-div1-content-box4">
                <GoStar />
                <p className="orderpage-container-div2-box1-div1-content-ptag3">
                  Rate & Review your purchase
                </p>
              </div>
            </div>
          </div>






          <div className="orderpage-container-div2-box1-div1-item-div" onClick={handleTrack}>
            <div className="orderpage-container-div2-box1-div1-item-div-box1">
              <img
                src={log}
                className="orderpage-container-div2-box1-div1-item-div-box1-img"
                alt="pic"
              />
              <div className="orderpage-container-div2-box1-div1-item-div-box1-content">
                <p className="orderpage-container-div2-box1-div1-item-div-box1-content-fit">
                  Long Bottom
                </p>
                <p className="orderpage-container-div2-box1-div1-item-div-box1-content-colortxt">
                  Color
                </p>
                <p className="orderpage-container-div2-box1-div1-item-div-box1-content-style">
                  Style
                </p>
              </div>
            </div>

            <div className="orderpage-container-div2-box1-div1-content-box">
              <h4>$1899</h4>
            </div>
            <div className="orderpage-container-div2-box1-div1-content-box1">
              <div className="orderpage-container-div2-box1-div1-content-box2">
                <div className="orderpage-container-div2-box1-div1-content-box3"></div>
                <p className="orderpage-container-div2-box1-div1-content-ptag1">
                  Delivered on 20th March, 2023
                </p>
              </div>

              <p className="orderpage-container-div2-box1-div1-content-ptag2">
                Your item has been delivered
              </p>

              <div className="orderpage-container-div2-box1-div1-content-box4">
                <GoStar />
                <p className="orderpage-container-div2-box1-div1-content-ptag3">
                  Rate & Review your purchase
                </p>
              </div>
            </div>
          </div>

          {/* <div className="orderpage-img-bottom">vfv</div> */}
        </div>

        <div className="orderpage-img-bottom">
          <div className="orderpage-img-bottom1">
            <div className="orderpage-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
