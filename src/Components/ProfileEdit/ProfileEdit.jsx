import React from "react";
import "./ProfileEdit.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import { Link, useNavigate } from "react-router-dom";

function ProfileEdit() {
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
  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="profileedit-container">
      <div className="profileedit-container-div1">
        <div className="profileedit-name-box">
          <div className="profileedit-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="profileedit-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="profileedit-icon-box">
          <div className="profileedit-name-icon">
            <FaDropbox />
          </div>
          <div className="profileedit-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="profileedit-text2">
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
        <div className="profileedit-button-info">
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

        <div className="profileedit-address-text" onClick={handlemanage}>
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

        <div className="profileedit-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Size</p>
        </div>

        <div className="profileedit-text2">
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
        <div className="profileedit-card-opton1">
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

        <div className="profileedit-card-opton1" onClick={handleUpi}>
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

        <div className="profileedit-card-opton1" onClick={handleCard}>
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

        <div className="profileedit-text2">
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

        <div className="profileedit-card-opton1" onClick={handleWish}>
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

        <div className="profileedit-card-opton1">
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

        <div className="profileedit-card-opton1" onClick={handleNote}>
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

        <div className="profileedit-card-opton1" onClick={handleRate}>
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

      <div className="profileedit-container-div2">
        <div className="profileedit-container-div2-box1">
          <div className="profileedit-personal-div">
            <p className="profileedit-personal-div-head">
              Personal Information
            </p>
            <div className="profileedit-personal-details">
              {/* {............} */}
              <div className="profileedit-personal-details-div1">
                <p className="profileedit-personal-details-div1-name">Name:</p>
                <div className="profileedit-personal-details-div1-ipdiv1">
                  <input
                    className="profileedit-personal-details-div1-ip1"
                    type="text"
                  />
                  <input
                    className="profileedit-personal-details-div1-ip2"
                    type="text"
                  />
                </div>
                <Link to="" className="profileedit-personal-details-link1">
                  <button id="b1">Save</button>
                </Link>
              </div>

              <div className="profileedit-personal-details-div2">
                <p className="profileedit-personal-details-div1-name">
                  Gender:
                </p>
                <div className="profileedit-personal-details-div2-ipdiv2">
                  <div className="profileedit-personal-details-div1-ipdiv2-label-a">
                    <label htmlFor="">
                      Male
                      <input
                        className="profileedit-personal-details-div1-rd1"
                        type="radio"
                      />
                    </label>
                  </div>

                  <div className="profileedit-personal-details-div1-ipdiv2-label-b">
                    <label htmlFor="">
                      Female
                      <input
                        className="profileedit-personal-details-div1-rd2"
                        type="radio"
                      />
                    </label>
                  </div>
                </div>
                <Link to="" className="profileedit-personal-details-link1">
                  <button id="b1">Edit</button>
                </Link>
              </div>

              <div className="profileedit-personal-details-div3">
                <p className="profileedit-personal-details-div1-name">Gmail:</p>
                <div className="profileedit-personal-details-div3-ipdiv3">
                  <input
                    className="profileedit-personal-details-div3-ip1"
                    type="text"
                  />
                </div>
                <Link to="" className="profileedit-personal-details-link1">
                  <button id="b1">Edit</button>
                </Link>
              </div>

              <div className="profileedit-personal-details-div4">
                <p className="profileedit-personal-details-div1-name">
                  Mobile Number:
                </p>
                <div className="profileedit-personal-details-div4-ipdiv4">
                  <input
                    className="profileedit-personal-details-div4-ip1"
                    type="text"
                  />
                </div>
                <Link to="" className="profileedit-personal-details-link1">
                  <button id="b1">Edit</button>
                </Link>
              </div>

              {/* <div className="profileedit-personal-details-box1">
                <div className="personal-info1">
                  <p className="personal-info1-inputs">Name:</p>
                  <p className="personal-info1-inputs">Gender:</p>
                  <p className="personal-info1-inputs">Gmail:</p>
                  <p className="personal-info1-inputs">Mobile Number:</p>
                </div>
                <div className="personal-info2">
                  <div className="personal-info2-div1">
                    <input
                      className="personal-info2-div1-ip1"
                      type="text"
                      id="a1"
                    />
                    <input
                      className="personal-info2-div1-ip2"
                      type="text"
                      id="a1"
                    />
                  </div>
                  <div className="personal-info2-div2">
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
                  <Link to="" style={{ textDecoration: "none" }}>
                    <button id="b1">Save</button>
                  </Link>
                  <Link to="">
                    <button id="b2">Edit</button>
                  </Link>
                  <Link to="">
                    <button id="b3">Edit</button>
                  </Link>
                  <Link to="">
                    <button id="b4">Edit</button>
                  </Link>
                </div>
              </div> */}

              {/* <div className="profileedit-personal-details-box2">
    <p style={{textAlign:"justify",color:"white"}}>Note for devs:</p>
    <p style={{textAlign:"justify",color:"white"}}>To change or update their mobile number, they must enter the OTPs of both old and new mobile, same for the email too.</p>
</div> */}
            </div>
          </div>
        </div>

        <div className="profileedit-container-div2-box2">
          <div className="profileedit-container-div2-box2-head">
            <h4>FAQs</h4>
          </div>

          <div className="profileedit-faq1">
            <h5 className="profileedit-faq1-h5tag">
              What happens when I update my email address or(mobile number)?{" "}
            </h5>
            <p className="profileedit-faq1-text">
              Your login email id(or mobile number)changes, likewise. You will
              receive all account related communications on your updated mobile
              number(or email address)
            </p>
          </div>
          <div className="profileedit-faq2">
            <h5 className="profileedit-faq1-h5tag">
              What happens when I update my email address or(mobile number)?{" "}
            </h5>
            <p className="profileedit-faq1-text">
              Your login email id(or mobile number)changes, likewise. You will
              receive all account related communications on your updated mobile
              number(or email address)
            </p>
          </div>
          <div className="profileedit-faq3">
            <h5 className="profileedit-faq1-h5tag">
              What happens when I update my email address or(mobile number)?{" "}
            </h5>
            <p className="profileedit-faq1-text">
              Your login email id(or mobile number)changes, likewise. You will
              receive all account related communications on your updated mobile
              number(or email address)
            </p>
          </div>
          <div className="profileedit-faq4">
            <h5 className="profileedit-faq1-h5tag">
              What happens when I update my email address or(mobile number)?{" "}
            </h5>
            <p className="profileedit-faq1-text">
              Your login email id(or mobile number)changes, likewise. You will
              receive all account related communications on your updated mobile
              number(or email address)
            </p>
          </div>
          <div className="profileedit-faq5"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
