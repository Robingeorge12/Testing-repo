import React from "react";
import "./MySize.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import dum from "../../Assets/Image/dum.svg";
import dum1 from "../../Assets/Image/dum1.svg";
import rec from "../../Assets/Image/rec.svg";

import { Link, useNavigate } from "react-router-dom";
import { BiCurrentLocation } from "react-icons/bi";
import { RiDeleteBin5Line, RiShirtLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { GiArmoredPants } from "react-icons/gi";

function MySize() {
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

  const handleEdit = () => {
    navigate("/editsize");
  };

  const handleAdd = () => {
    navigate("/addaddress");
  };

  return (
    <div className="mysize-container">
      <div className="mysize-container-div1">
        <div className="mysize-name-box">
          <div className="mysize-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="mysize-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="mysize-icon-box">
          <div className="mysize-name-icon">
            <FaDropbox />
          </div>
          <div className="mysize-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="mysize-text2">
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
        <div className="mysize-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="mysize-address-text">
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

        <div className="mysize-size-text">
          <p style={{ fontWeight: "400" }}>My Size</p>
        </div>

        <div className="mysize-text2">
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
        <div className="mysize-card-opton1">
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

        <div className="mysize-card-opton1" onClick={handleUpi}>
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

        <div className="mysize-card-opton1" onClick={handleCard}>
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

        <div className="mysize-text2">
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

        <div className="mysize-card-opton1" onClick={handleWish}>
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

        <div className="mysize-card-opton1">
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

        <div className="mysize-card-opton1" onClick={handleNote}>
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

        <div className="mysize-card-opton1" onClick={handleRate}>
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

      <div className="mysize-container-div2">
        <div className="mysize-container-div2-box1">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <h4 className="mysize-container-heading-name">Manage Addresses</h4>
          </div>
          <div className="mysize-container-div2-box1-sizebox">
            <div className="mysize-box1">
              <div className="mysize-box1-div">
                <div className="mysize-box1-div-box">
                  <div className="mysize-img-div">
                    {" "}
                    <img
                      className="mysize-img-Atdiv"
                      style={{ width: "60%", height: "70%" }}
                      src={dum}
                      alt="pic"
                    />
                  </div>
                </div>

                <div className="mysize-img-div-del-Icon">
                  <RiDeleteBin5Line
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                  />
                </div>
              </div>

              <div className="mysize-box1-details">
                <div>
                  <h4 className="mysize-box1-details-name">{"Manju"}</h4>
                </div>
                <div style={{ display: "flex", justifyContent: "left" }}>
                  <RiShirtLine
                    style={{ width: "20px", height: "20px", padding: "5px" }}
                  />
                </div>

                <div
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    gap: "5px",
                    // border: "1px solid yellow",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Shoulder
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      1cm
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Back Length
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      1cm
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    gap: "5px",
                    // border: "1px solid yellow",
                    alignItems: "center",
                    height: "30px",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Chest
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      2cm
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Sleeve
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      2cm
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    gap: "5px",
                    // border: "1px solid yellow",
                    alignItems: "center",
                    height: "30px",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Waist
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      3cm
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Neck
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      3cm
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "left" }}>
                  <GiArmoredPants
                    style={{ width: "20px", height: "20px", padding: "5px" }}
                  />
                </div>

                <div
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    gap: "5px",
                    // border: "1px solid yellow",
                    alignItems: "center",
                    height: "30px",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Waist
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      1cm
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      WQaist to Crotch
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      1cm
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    gap: "5px",
                    // border: "1px solid yellow",
                    alignItems: "center",
                    height: "30px",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Length
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      2cm
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Upper Leg Width
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      2cm
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    gap: "5px",
                    // border: "1px solid yellow",
                    alignItems: "center",
                    height: "30px",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Inseam
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      3cm
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "110px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        fontSize: "14px",
                      }}
                    >
                      Lower Leg Width
                    </p>
                  </div>
                  <div
                    style={{
                      justifyContent: "left",
                      display: "flex",
                      gap: "5px",
                      width: "50px",
                      height: "20px",
                    }}
                  >
                    <p
                      style={{
                        margin: "0px",
                        padding: "0px",
                        color: "#ABABAB",
                      }}
                    >
                      3cm
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    width: "80px",
                    height: "35px",
                    marginTop: "10px",
                    backgroundColor: "black",
                    borderRadius: "5px",
                    display: "flex",
                    gap: "3px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div onClick={handleEdit}>
                    {" "}
                    <p style={{ color: "white" }}>Edit</p>{" "}
                  </div>
                  <div>
                    <MdOutlineEdit style={{ color: "white" }} />
                  </div>
                </div>

                {/* ur66yfu */}
              </div>
            </div>

            <div className="mysize-box2">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  //   border: "1px solid red",
                  borderRadius: "50%",
                  backgroundColor: "#E8E8E8",
                  display: "flex",
                  flexDirection: "column",
                }}
                onClick={handleAdd}
              >
                <button
                  style={{
                    width: "100%",
                    height: "100%",
                    // border: "1px solid red",
                    borderRadius: "50%",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                >
                  +
                </button>
              </div>
              <div>add new size</div>
            </div>
          </div>

          {/* <div className="mysize-img-bottom">vfv</div> */}
        </div>

        <div className="mysize-img-bottom">
          <div className="mysize-img-bottom1">
            {/* <div className="mysize-img-bottom2"><img src={rec} alt="" /></div> */}
            <div className="mysize-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySize;
