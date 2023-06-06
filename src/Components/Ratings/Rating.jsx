import React from "react";

import "./Rating.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import st from "../../Assets/Image/st1.svg";
import wn from "../../Assets/Image/wn.svg";

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

function Rating() {
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
    <div className="ratingdiv-container">
      <div className="ratingdiv-container-div1">
        <div className="ratingdiv-name-box">
          <div className="ratingdiv-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="ratingdiv-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="ratingdiv-icon-box">
          <div className="ratingdiv-name-icon">
            <FaDropbox />
          </div>
          <div className="ratingdiv-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="ratingdiv-text2">
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
        <div className="ratingdiv-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="ratingdiv-address-text" onClick={handlemanage}>
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

        <div className="ratingdiv-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Sizes</p>
        </div>

        <div className="ratingdiv-text2">
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
        <div className="ratingdiv-card-opton1">
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

        <div className="ratingdiv-card-opton1" onClick={handleUpi}>
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

        <div className="ratingdiv-card-opton1" onClick={handleCard}>
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

        <div className="ratingdiv-text2">
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

        <div className="ratingdiv-card-opton1" onClick={handleWish}>
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

        <div className="ratingdiv-card-opton1">
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

        <div className="ratingdiv-card-opton1" onClick={handleNote}>
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

        <div className="ratingdiv-card-opton1" onClick={handleRate}>
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

      <div className="ratingdiv-container-div2">
        <div className="ratingdiv-container-div2-box1">
          <div style={{ display: "flex", justifyContent: "left" }}>
            {/* <h4 style={{ color: "#999999" }}>My Size/</h4> */}
            <h4>My Wishlists</h4>
          </div>

          <div className="ratingdiv-container-div2-box1-sizebox">
            <div className="ratingdiv-box1">
              <div className="ratingdiv-box1-main">
                <img className="ratingdiv-box1-im1" src={wn} alt="" />
                <div className="ratingdiv-box1-div1">
                  <p className="ratingdiv-box1-namedress">Dress Name (Blue)</p>

                  <div className="ratingdiv-box1-div2">
                    <button className="ratingdiv-box1-div2-btn">
                      4.4 <AiFillStar />
                    </button>
                    <p style={{ fontWeight: "600", fontSize: "15px" }}>
                      Wonderful Purchase...
                    </p>
                  </div>

                  <div className="ratingdiv-box1-div3">
                    <p
                      style={{
                        fontWeight: "",
                        fontSize: "16px",
                        color: "#878787",
                      }}
                    >
                      March 17, 2023{" "}
                    </p>
                  </div>

                  <div className="ratingdiv-box1-div4-EDS">
                    <Link>
                      <buttton className="ratingdiv-box1-div4-EDS-edit">
                        Edit
                      </buttton>
                    </Link>

                    <Link>
                      {" "}
                      <buttton className="ratingdiv-box1-div4-EDS-del">
                        Delete
                      </buttton>
                    </Link>
                    <Link>
                      <buttton className="ratingdiv-box1-div4-EDS-share">
                        Share
                      </buttton>
                    </Link>
                  </div>
                </div>

                <div className="ratingdiv-box1-div4-EDS2">
                  <div className="ratingdiv-box1-div4-EDS2sub">
                    <Link className="ratingdiv-link">
                      <buttton className="ratingdiv-box1-div4-EDS-edit">
                        Edit
                      </buttton>
                    </Link>

                    <Link className="ratingdiv-link">
                      {" "}
                      <buttton className="ratingdiv-box1-div4-EDS-del">
                        Delete
                      </buttton>
                    </Link>
                    <Link className="ratingdiv-link">
                      <buttton className="ratingdiv-box1-div4-EDS-share">
                        Share
                      </buttton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ width: "110%", height: "1.5px", color: "grey" }} />

            <div className="ratingdiv-box1">
              <div className="ratingdiv-box1-main">
                <img className="ratingdiv-box1-im1" src={wn} alt="" />
                <div className="ratingdiv-box1-div1">
                  <p className="ratingdiv-box1-namedress">Dress Name (Blue)</p>

                  <div className="ratingdiv-box1-div2">
                    <button className="ratingdiv-box1-div2-btn">
                      4.4 <AiFillStar />
                    </button>
                    <p style={{ fontWeight: "600", fontSize: "15px" }}>
                      Wonderful Purchase...
                    </p>
                  </div>

                  <div className="ratingdiv-box1-div3">
                    <p
                      style={{
                        fontWeight: "",
                        fontSize: "16px",
                        color: "#878787",
                      }}
                    >
                      March 17, 2023{" "}
                    </p>
                  </div>

                  <div className="ratingdiv-box1-div4-EDS">
                    <Link>
                      <buttton className="ratingdiv-box1-div4-EDS-edit">
                        Edit
                      </buttton>
                    </Link>

                    <Link>
                      {" "}
                      <buttton className="ratingdiv-box1-div4-EDS-del">
                        Delete
                      </buttton>
                    </Link>
                    <Link>
                      <buttton className="ratingdiv-box1-div4-EDS-share">
                        Share
                      </buttton>
                    </Link>
                  </div>
                </div>

                <div className="ratingdiv-box1-div4-EDS2">
                  <div className="ratingdiv-box1-div4-EDS2sub">
                    <Link className="ratingdiv-link">
                      <buttton className="ratingdiv-box1-div4-EDS-edit">
                        Edit
                      </buttton>
                    </Link>

                    <Link className="ratingdiv-link">
                      {" "}
                      <buttton className="ratingdiv-box1-div4-EDS-del">
                        Delete
                      </buttton>
                    </Link>
                    <Link className="ratingdiv-link">
                      <buttton className="ratingdiv-box1-div4-EDS-share">
                        Share
                      </buttton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ width: "110%", height: "1.5px", color: "grey" }} />

            <div className="ratingdiv-box1">
              <div className="ratingdiv-box1-main">
                <img className="ratingdiv-box1-im1" src={wn} alt="" />
                <div className="ratingdiv-box1-div1">
                  <p className="ratingdiv-box1-namedress">Dress Name (Blue)</p>

                  <div className="ratingdiv-box1-div2">
                    <button className="ratingdiv-box1-div2-btn">
                      4.4 <AiFillStar />
                    </button>
                    <p style={{ fontWeight: "600", fontSize: "15px" }}>
                      Wonderful Purchase...
                    </p>
                  </div>

                  <div className="ratingdiv-box1-div3">
                    <p
                      style={{
                        fontWeight: "",
                        fontSize: "16px",
                        color: "#878787",
                      }}
                    >
                      March 17, 2023{" "}
                    </p>
                  </div>

                  <div className="ratingdiv-box1-div4-EDS">
                    <Link>
                      <buttton className="ratingdiv-box1-div4-EDS-edit">
                        Edit
                      </buttton>
                    </Link>

                    <Link>
                      {" "}
                      <buttton className="ratingdiv-box1-div4-EDS-del">
                        Delete
                      </buttton>
                    </Link>
                    <Link>
                      <buttton className="ratingdiv-box1-div4-EDS-share">
                        Share
                      </buttton>
                    </Link>
                  </div>
                </div>

                <div className="ratingdiv-box1-div4-EDS2">
                  <div className="ratingdiv-box1-div4-EDS2sub">
                    <Link className="ratingdiv-link">
                      <buttton className="ratingdiv-box1-div4-EDS-edit">
                        Edit
                      </buttton>
                    </Link>

                    <Link className="ratingdiv-link">
                      {" "}
                      <buttton className="ratingdiv-box1-div4-EDS-del">
                        Delete
                      </buttton>
                    </Link>
                    <Link className="ratingdiv-link">
                      <buttton className="ratingdiv-box1-div4-EDS-share">
                        Share
                      </buttton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right section ................................................................*/}

            <div className="ratingdiv-box2">
              <div className="ratingdiv-box2-div"></div>
            </div>
          </div>

          {/* <div className="ratingdiv-img-bottom">vfv</div> */}
        </div>

        <div className="ratingdiv-img-bottom">
          <div className="ratingdiv-img-bottom1">
            <div className="ratingdiv-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
