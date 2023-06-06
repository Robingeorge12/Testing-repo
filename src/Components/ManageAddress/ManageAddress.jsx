import React from "react";
import "./ManageAddress.css";
import { FaDropbox } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import man from "../../Assets/Image/manj.svg";
import { Link, useNavigate } from "react-router-dom";

function ManageAddress() {
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

  const handleRate = () => {
    navigate("/rating");
  };

  const handleNote = () => {
    navigate("/notification");
  };

  return (
    <div className="manageaddress-container">
      <div className="manageaddress-container-div1">
        <div className="manageaddress-name-box">
          <div className="manageaddress-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="manageaddress-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="manageaddress-icon-box">
          <div className="manageaddress-name-icon">
            <FaDropbox />
          </div>
          <div className="manageaddress-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="manageaddress-text2">
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
        <div className="manageaddress-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="manageaddress-address-text" onClick={handlemanage}>
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            Manage Address
          </p>
        </div>

        <div className="manageaddress-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Size</p>
        </div>

        <div className="manageaddress-text2">
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
        <div className="manageaddress-card-opton1">
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

        <div className="manageaddress-card-opton1" onClick={handleUpi}>
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

        <div className="manageaddress-card-opton1" onClick={handleCard}>
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

        <div className="manageaddress-text2">
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

        <div className="manageaddress-card-opton1" onClick={handleWish}>
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

        <div className="manageaddress-card-opton1">
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

        <div className="manageaddress-card-opton1" onClick={handleNote}>
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

        <div className="manageaddress-card-opton1" onClick={handleRate}>
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

      <div className="manageaddress-container-div2">
        <div className="manageaddress-container-div2-box1">
          <div className="manageaddress-personal-div">
            <p className="manageaddress-personal-div-headtag">
              Manage Addresses
            </p>

            <div className="manageaddress-personal-add">
              <div className="manageaddress-personal-add-div">
                <button className="manageaddress-personal-button">+</button>
              </div>
              <h4 className="manageaddress-personal-addbutton">AddNew Addresses</h4>
            </div>

            <div className="manageaddress-personal-add-details">
              <div className="manageaddress-personal-add-details-div">
                <button className="manageaddress-personal-add-details-btn">
                  {"HOME"}
                </button>
              </div>
              <div className="manageaddress-text-head">
                <div className="manageaddress-text-head-div1">
                <h4>M S Nageswara Rao</h4>
                <h4>478754097</h4>
                </div>
                <div className="manageaddress-text-doticon">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="manageaddress-text-ptag">
                <p className="manageaddress-text-ptag-text">
                  Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu,
                  Guntur, Guntur, Andhra Pradesh - 522007
                </p>
              </div>
            </div>

            <div className="manageaddress-personal-add-details">
              <div style={{ float: "left", padding: "0px 15px" }}>
                <button
             className="manageaddress-personal-add-details-btn"
                >
                  {"HOME"}
                </button>
              </div>
              <div className="manageaddress-text-head">
              <div className="manageaddress-text-head-div1">
                <h4>Anju</h4>
                <h4>{""}</h4>
                </div>
                <div className="manageaddress-text-doticon">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="manageaddress-text-ptag">
                <p className="manageaddress-text-ptag-text">
                  Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu,
                  Guntur, Guntur, Andhra Pradesh - 522007
                </p>
              </div>
            </div>

            <div className="manageaddress-personal-add-details">
              <div style={{ float: "left", padding: "0px 15px" }}>
                <button
             className="manageaddress-personal-add-details-btn"
                >
                  {"HOME"}
                </button>
              </div>
              <div className="manageaddress-text-head">
              <div className="manageaddress-text-head-div1">
                <h4>Manju</h4>
                <h4>{""}</h4>
                </div>
                <div className="manageaddress-text-doticon">
                  <BsThreeDotsVertical />
                </div>
              </div>
              <div className="manageaddress-text-ptag">
                <p className="manageaddress-text-ptag-text">
                  Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu,
                  Guntur, Guntur, Andhra Pradesh - 522007
                </p>
              </div>
            </div>

            {/* new addrees */}
          </div>
        </div>

        {/* <div className="manageaddress-container-div2-box2"></div> */}
      </div>
    </div>
  );
}

export default ManageAddress;
