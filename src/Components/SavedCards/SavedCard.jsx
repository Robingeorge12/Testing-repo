import React from "react";

import "./SavedCards.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import cd from "../../Assets/Image/card.svg";
import sbi from "../../Assets/Image/sbi.svg";
import vs from "../../Assets/Image/visa.svg";
import no from "../../Assets/Image/no.svg";

import ptm from "../../Assets/Image/ptm.svg";
import goog from "../../Assets/Image/goog.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import dum from "../../Assets/Image/dum.svg";
import dum1 from "../../Assets/Image/dum1.svg";
// import { RiDeleteBin5Line} from "react-icons/ri";
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

function SavedCard() {
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
    <div className="savedcards-container">
      <div className="savedcards-container-div1">
        <div className="savedcards-name-box">
          <div className="savedcards-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="savedcards-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="savedcards-icon-box">
          <div className="savedcards-name-icon">
            <FaDropbox />
          </div>
          <div className="savedcards-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="savedcards-text2">
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
        <div className="savedcards-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="savedcards-address-text" onClick={handlemanage}>
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

        <div className="savedcards-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Sizes</p>
        </div>

        <div className="savedcards-text2">
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
        <div className="savedcards-card-opton1">
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

        <div className="savedcards-card-opton1" onClick={handleUpi}>
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

        <div className="savedcards-card-opton1" onClick={handleCard}>
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

        <div className="savedcards-text2">
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

        <div className="savedcards-card-opton1" onClick={handleWish}>
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

        <div className="savedcards-card-opton1">
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

        <div className="savedcards-card-opton1" onClick={handleNote}>
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

        <div className="savedcards-card-opton1" onClick={handleRate}>
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

      <div className="savedcards-container-div2">
        <div className="savedcards-container-div2-box1">
          <div style={{ display: "flex", justifyContent: "left" }}>
            {/* <h4 style={{ color: "#999999" }}>My Size/</h4> */}
            <h4>Managed Saved UPIs</h4>
          </div>

          <div className="savedcards-container-div2-box1-sizebox">
            <div className="savedcards-box1">
              <div className="savedcards-box1-card1">
                <div className="savedcards-box1-card1-div1">
                  <img
                   className="savedcards-box1-card1-sbi"
                    
                    src={cd}
                    alt=""
                  />
                  <div className="savedcards-box1-card1-div2"></div>
                  <img className="savedcards-box1-card1-im1" src={sbi} alt="" />

                  <div className="savedcards-box1-card1-div3"></div>

                  <img className="savedcards-box1-card1-im2" src={vs} alt="" />

                  <img className="savedcards-box1-card1-im3" src={no} alt="" />
                </div>

                <div className="savedcards-box1-card1-div4">
                  {" "}
                  <RiDeleteBin5Line className="savedcards-box1-card1-icon" />
                </div>
              </div>

              <div className="savedcards-box1-card2">
                <div className="savedcards-box1-card2-div1">
                  <img
                  className="savedcards-box1-card2-sbi"
                    
                    src={cd}
                    alt=""
                  />
                  <div className="savedcards-box1-card2-div2"></div>

                  <img className="savedcards-box1-card2-im1" src={sbi} alt="" />

                  <div className="savedcards-box1-card2-div3"></div>

                  <img className="savedcards-box1-card2-im2" src={vs} alt="" />

                  <img className="savedcards-box1-card2-im3" src={no} alt="" />
                </div>

                <div className="savedcards-box1-card2-div4">
                  {" "}
                  <RiDeleteBin5Line className="savedcards-box1-card1-icon" />
                </div>
              </div>
            </div>

            <div className="savedcards-container-div2-box2">
              <div style={{ textAlign: "left" }}>
                <h4>FAQs</h4>
              </div>

              <div className="savedcards-faq1">
                <h5 style={{ textAlign: "justify" }}>
                  Why is my UPI being saved on Flipkart?{" "}
                </h5>
                <p className="savedcards-faq1-ptag">
                  FAQs It's quicker. You can save the hassle of typing in the
                  complete UPI information every time you shop at Flipkart by
                  saving your UPI details. You can make your payment by
                  selecting the saved UPI ID of your choice at checkout. While
                  this is obviously faster, it is also very secure. Is it safe
                  to save my UPI on Flipkart? Absolutely. Your UPI ID
                  information is 100 percent safe with us. UPI ID details are
                  non PCI compliant and are non confidential data. What all UPI
                  information does Flipkart store? Flipkart only stores UPI ID
                  and payment provider details. We do not store UPI PIN/MPIN.
                </p>
              </div>
              <div className="savedcards-faq2">
                <h5 style={{ textAlign: "justify" }}>
                  Why is my UPI being saved on Flipkart?{" "}
                </h5>
                <p className="savedcards-faq2-ptag">
                  It's quicker. You can save the hassle of typing in the
                  complete UPI information every time you shop at Flipkart by
                  saving your UPI details. You can make your payment by
                  selecting the saved UPI ID of your choice at checkout. While
                  this is obviously faster, it is also very secure. Is it safe
                  to save my UPI on Flipkart? Absolutely. Your UPI ID
                  information is 100 percent safe with us. UPI ID details are
                  non PCI compliant and are non confidential data. What all UPI
                  information does Flipkart store? Flipkart only stores UPI ID
                  and payment provider details. We do not store UPI PIN/MPIN.
                </p>
              </div>
              <div className="savedcards-faq3">
                <h5 style={{ textAlign: "justify" }}>
                  Why is my UPI being saved on Flipkart?{" "}
                </h5>
                <p className="savedcards-faq3-ptag">
                  FAQs It's quicker. You can save the hassle of typing in the
                  complete UPI information every time you shop at Flipkart by
                  saving your UPI details. You can make your payment by
                  selecting the saved UPI ID of your choice at checkout. While
                  this is obviously faster, it is also very secure. Is it safe
                  to save my UPI on Flipkart? Absolutely. Your UPI ID
                  information is 100 percent safe with us. UPI ID details are
                  non PCI compliant and are non confidential data. What all UPI
                  information does Flipkart store? Flipkart only stores UPI ID
                  and payment provider details. We do not store UPI PIN/MPIN.
                </p>
              </div>
              <div className="savedcards-faq4">
                <h5 style={{ textAlign: "justify" }}>
                  What happens when I update my email address or(mobile number)?{" "}
                </h5>
                <p className="savedcards-faq4-ptag">
                  Your login email id(or mobile number)changes, likewise. You
                  will receive all account related communications on your
                  updated mobile number(or email address)
                </p>
              </div>

              <div className="savedcards-faq5"></div>
            </div>

            {/* right section ................................................................*/}

            <div className="savedcards-box2">
              <div className="savedcards-box2-div"></div>
            </div>
          </div>

          {/* <div className="savedcards-img-bottom">vfv</div> */}
        </div>

        <div className="savedcards-img-bottom">
          <div className="savedcards-img-bottom1">
            <div className="savedcards-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedCard;
