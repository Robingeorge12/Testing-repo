import React from "react";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import { Link, useNavigate } from "react-router-dom";
import "./EditSize.css";

import { BsThreeDotsVertical } from "react-icons/bs";
import dum from "../../Assets/Image/dum.svg";
import dum1 from "../../Assets/Image/dum1.svg";
import { BiCurrentLocation } from "react-icons/bi";
import { RiDeleteBin5Line, RiShirtLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { GiArmoredPants } from "react-icons/gi";

function EditSize() {
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
    <div className="editsize-container">
      <div className="editsize-container-div1">
        <div className="editsize-name-box">
          <div className="editsize-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="editsize-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="editsize-icon-box">
          <div className="editsize-name-icon">
            <FaDropbox />
          </div>
          <div className="editsize-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="editsize-text2">
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
        <div className="editsize-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="editsize-address-text" onClick={handlemanage}>
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

        <div className="editsize-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "00" }}>My Sizes</p>
        </div>

        <div className="editsize-text2">
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
        <div className="editsize-card-opton1">
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

        <div className="editsize-card-opton1" onClick={handleUpi}>
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

        <div className="editsize-card-opton1" onClick={handleCard}>
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

        <div className="editsize-text2">
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

        <div className="editsize-card-opton1" onClick={handleWish}>
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

        <div className="editsize-card-opton1">
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

        <div className="editsize-card-opton1" onClick={handleNote}>
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

        <div className="editsize-card-opton1" onClick={handleNote}>
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

      <div className="editsize-container-div2">
        <div className="editsize-container-div2-box1">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <h4>Manage Addresses</h4>
          </div>
          <div className="editsize-container-div2-box1-sizebox">
            <div className="editsize-box1">
              <div className="editsize-box1-div1">
                <div className="editsize-box1-div1-box1">
                  <div className="editsize-box1-div1-box2">
                    {" "}
                    <img src={dum} alt="pic" />
                  </div>
                </div>

                <div className="editsize-box1-div1-box3">
                  <RiDeleteBin5Line className="editsize-box1-div1-box3-icon" />
                </div>
              </div>

              <div className="editsize-box1-details">
                <div>
                  <h4 className="editsize-box1-details-name">{"Manju"}</h4>
                </div>
                <div className="editsize-box1-details-icondiv">
                  <RiShirtLine className="editsize-box1-details-icon" />
                </div>

                <div className="editsize-box1-details-box1">
                  <div className="editsize-box1-details-box2">
                    <div className="editsize-box1-details-box3">
                      <p className="editsize-box1-details-box3-ptag">
                        Shoulder
                      </p>
                    </div>
                    <div className="editsize-box1-details-box4">
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        1cm
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "left",
                        display: "flex",
                        // gap: "5px",
                        width: "110px",
                        height: "20px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "12px",
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
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        1cm
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    gap: "5px",
                    // border: "1px solid blue",
                    alignItems: "center",
                    height: "30px",
                    justifyContent: "space-between",
                    padding: "3px 0px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "left",
                        display: "flex",
                        gap: "5px",
                        width: "70px",
                        height: "20px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "12px",
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
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        2cm
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
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
                          fontSize: "12px",
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
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        2cm
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    gap: "15px",
                    // border: "1px solid yellow",
                    alignItems: "center",
                    height: "30px",
                    padding: "3px 0px",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "left",
                        display: "flex",
                        gap: "5px",
                        width: "70px",
                        height: "20px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "12px",
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
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        3cm
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
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
                          fontSize: "12px",
                        }}
                      >
                        Neck
                      </p>
                    </div>
                    <div
                      style={{
                        justifyContent: "left",
                        display: "flex",
                        // gap: "5px",
                        width: "50px",
                        height: "20px",
                      }}
                    >
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        3cm
                      </button>
                    </div>
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
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "left",
                        display: "flex",
                        gap: "5px",
                        width: "70px",
                        height: "20px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "12px",
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
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        1cm
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
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
                          fontSize: "12px",
                        }}
                      >
                        Waist to Crotch
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
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        1cm
                      </button>
                    </div>
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
                    padding: "3px 0px",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "left",
                        display: "flex",
                        gap: "5px",
                        width: "70px",
                        height: "20px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "12px",
                        }}
                      >
                        Length
                      </p>
                    </div>
                    <div
                      style={{
                        justifyContent: "left",
                        display: "flex",
                        // gap: "5px",
                        width: "50px",
                        height: "20px",
                      }}
                    >
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        2cm
                      </button>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "left",
                        display: "flex",
                        // gap: "5px",
                        width: "110px",
                        height: "20px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "12px",
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
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        2cm
                      </button>
                    </div>
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
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "left",
                        display: "flex",
                        gap: "5px",
                        width: "70px",
                        height: "20px",
                      }}
                    >
                      <p
                        style={{
                          margin: "0px",
                          padding: "0px",
                          fontSize: "12px",
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
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        3cm
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "45%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "space-between",
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
                          fontSize: "12px",
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
                      <button
                        style={{
                          margin: "0px",
                          padding: "0px",
                          color: "#ABABAB",
                          padding: "0px 3px 0px 0px",
                        }}
                      >
                        3cm
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: "85%",
                    height: "50px",
                    marginTop: "10px",
                    // backgroundColor: "black",
                    borderRadius: "5px",
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // border: "1px solid red",
                  }}
                >
                  <div>
                    {" "}
                    <button
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "200",
                        backgroundColor: "black",
                        height: "40px",
                        borderRadius: "4px",
                        width: "150px",
                        border: "none",
                      }}
                    >
                      Save
                    </button>{" "}
                  </div>
                  <div>
                    <button
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "200",
                        width: "150px",
                        height: "40px",
                        backgroundColor: "#A5A5A5",
                        border: "none",
                        borderRadius: "4px",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                {/* ur66yfu */}
              </div>
            </div>

            <div className="editsize-box2">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  // border: "1px solid red",
                  borderRadius: "50%",
                  backgroundColor: "#E8E8E8",
                  display: "flex",
                  flexDirection: "column",
                }}
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


          <div className="editsize-box2-sub">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                    // border: "1px solid red",
                  borderRadius: "50%",
                  backgroundColor: "#E8E8E8",
                  display: "flex",
                  flexDirection: "column",
                }}
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
          {/* <div className="editsize-img-bottom">vfv</div> */}
        </div>

        <div className="editsize-img-bottom">
          <div className="editsize-img-bottom1">
            {/* <div className="editsize-img-bottom2"><img src={rec} alt="" /></div> */}
            <div className="editsize-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditSize;
