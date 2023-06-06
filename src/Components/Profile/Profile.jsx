import React from "react";
import "./Profile.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/order");
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
    <div className="profile-container">
      <div className="profile-container-div1">
        <div className="profile-name-box">
          <div className="profile-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="profile-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="profile-icon-box">
          <div className="profile-name-icon">
            <FaDropbox />
          </div>
          <div className="profile-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="profile-text2">
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
        <div className="profile-button-info">
          <Link
            to="/profile"
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                fontWeight: "600",
                fontSize: "15px",
                backgroundColor: "white",
                border: "none",
              }}
            >
              Profile Information
            </button>
          </Link>
        </div>

        <div className="profile-address-text" onClick={handlemanage}>
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

        <div className="profile-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Size</p>
        </div>

        <div className="profile-text2">
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
        <div className="profile-card-opton1">
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

        <div className="profile-card-opton1" onClick={handleUpi}>
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

        <div className="profile-card-opton1" onClick={handleCard}>
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

        <div className="profile-text2">
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

        <div className="profile-card-opton1" onClick={handleWish}>
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

        <div className="profile-card-opton1">
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

        <div className="profile-card-opton1" onClick={handleNote}>
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

        <div className="profile-card-opton1" onClick={handleRate}>
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




      <div className="profile-container-div2">
        <div className="profile-container-div2-box1">
          <div className="profile-personal-div">
            <p
            className="profile-personal-div-head"
         
            >
              Personal Information
            </p>
            <div className="profile-personal-details">
              <div className="profile-personal-details-box1">
                <div className="personal-info1">
                  <p className="personal-info1-inputs" >Name:</p>
                  <p className="personal-info1-inputs" >Gender:</p>
                  <p className="personal-info1-inputs" >Gmail:</p>
                  <p className="personal-info1-inputs" >Mobile Number:</p>
                </div>
                <div className="personal-info2">
                  <div
                  className="personal-info2-div1"
                  >
                    <input  className="personal-info2-div1-ip1" type="text" id="a1"  />
                    <input className="personal-info2-div1-ip2" type="text" id="a1"  />
                  </div>
                  <div
                  className="personal-info2-div2"
              
                  >
                    <label>
                      Male
                      <input type="radio" id="a2" />
                    </label>
                    <label>
                      Female
                      <input type="radio" id="a2" />
                    </label>
                  </div>
                  <input type="text" id="a3" />
                  <input type="text" id="a4" />
                </div>
                <div className="personal-info3">
                  <Link to="" style={{textDecoration:"none"}}>
                    <button id="b1">
                      Save
                    </button>
                  </Link>
                  <Link to="">
                    <button id="b2">
                      Edit
                    </button>
                  </Link>
                  <Link to="">
                    <button id="b3">
                      Edit
                    </button>
                  </Link>
                  <Link to="">
                    <button id="b4">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
              {/* <div className="profile-personal-details-box2">
    <p style={{textAlign:"justify",color:"white"}}>Note for devs:</p>
    <p style={{textAlign:"justify",color:"white"}}>To change or update their mobile number, they must enter the OTPs of both old and new mobile, same for the email too.</p>
</div> */}
            </div>
          </div>
        </div>

        <div className="profile-container-div2-box2">
          <div className="profile-container-div2-box2-head" >
            <h4>FAQs</h4>
          </div>

          <div className="profile-faq1">
            <h5 className="profile-faq1-h5tag">
              What happens when I update my email address or(mobile number)?{" "}
            </h5>
            <p
            className="profile-faq1-text"

            >
              Your login email id(or mobile number)changes, likewise. You will
              receive all account related communications on your updated mobile
              number(or email address)
            </p>
          </div>
          <div className="profile-faq2">
            <h5 className="profile-faq1-h5tag">
              What happens when I update my email address or(mobile number)?{" "}
            </h5>
            <p
         className="profile-faq1-text"
            >
              Your login email id(or mobile number)changes, likewise. You will
              receive all account related communications on your updated mobile
              number(or email address)
            </p>
          </div>
          <div className="profile-faq3">
            <h5 className="profile-faq1-h5tag">
              What happens when I update my email address or(mobile number)?{" "}
            </h5>
            <p
          className="profile-faq1-text"
            >
              Your login email id(or mobile number)changes, likewise. You will
              receive all account related communications on your updated mobile
              number(or email address)
            </p>
          </div>
          <div className="profile-faq4">
            <h5 className="profile-faq1-h5tag">
              What happens when I update my email address or(mobile number)?{" "}
            </h5>
            <p
         className="profile-faq1-text"
            >
              Your login email id(or mobile number)changes, likewise. You will
              receive all account related communications on your updated mobile
              number(or email address)
            </p>
          </div>
          <div className="profile-faq5"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
