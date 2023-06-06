import React from "react";

import "./Appointment.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import dum from "../../Assets/Image/dum.svg";
import dum1 from "../../Assets/Image/dum1.svg";
import { BiCurrentLocation } from "react-icons/bi";
import { RiDeleteBin5Line, RiShirtLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { GiArmoredPants } from "react-icons/gi";
import { AiOutlineRight, AiOutlineSearch } from "react-icons/ai";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

function Appointment() {
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

  const handlenewSize = () => {
    navigate("/scheduleappoint");
  };

  return (
    <div className="appointment-container">
      <div className="appointment-container-div1">
        <div className="appointment-name-box">
          <div className="appointment-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="appointment-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="appointment-icon-box">
          <div className="appointment-name-icon">
            <FaDropbox />
          </div>
          <div className="appointment-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="appointment-text2">
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
        <div className="appointment-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="appointment-address-text" onClick={handlemanage}>
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

        <div className="appointment-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Sizes</p>
        </div>

        <div className="appointment-text2">
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
        <div className="appointment-card-opton1">
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

        <div className="appointment-card-opton1" onClick={handleUpi}>
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

        <div className="appointment-card-opton1" onClick={handleCard}>
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

        <div className="appointment-text2">
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            My Stuffs
          </p>
        </div>
        <div className="horizotal-line2"></div>

        <div className="appointment-card-opton1" onClick={handleWish}>
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

        <div className="appointment-card-opton1">
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

        <div className="appointment-card-opton1" onClick={handleNote}>
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

        <div className="appointment-card-opton1" onClick={handleRate}>
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

      <div className="appointment-container-div2">
        <div className="appointment-container-div2-box1">
          <div className="appointment-container-div2-box1-heading">
            <h4 style={{ color: "#999999" }}>My Size/</h4>
            <h4>Add New Size</h4>
          </div>

          <div className="appointment-container-div2-box1-div1">
            <div className="appointment-container-div2-box1-icondiv">
              {" "}
              <AiOutlineSearch className="appointment-container-div2-box1-icon" />
            </div>

            <input
              className="appointment-container-div2-box1-ip"
              placeholder="Formal Shirts"
            />
          </div>

          <div className="appointment-container-div2-box1-sizebox">
            <div className="appointment-box1">
              <div className="appointment-box1-div1">
                <div className="appointment-box1-div2">
                  <div className="appointment-box1-div3-img">
                    {" "}
                    <img className="appointment-box1-img1" src={dum} alt="pic" />
                  </div>
                </div>

                <div className="appointment-box1-div3-del">
                  <RiDeleteBin5Line className="appointment-box1-div3-del-icon" />
                </div>
              </div>

              <div className="appointment-box1-details">
                <div>
                  <h4 className="appointment-box1-details-name">{"Manju"}</h4>
                </div>

                <div className="appointment-box1-details-ip-div">
                  <input
                    type="text"
                    className="appointment-box1-details-ip"
                    placeholder="Type Name here ..."
                  />
                  <div className="appointment-box1-details-measure-div">
                    <div className="appointment-input-button1">
                      {" "}
                      <p style={{ fontSize: "11px", color: "white" }}>
                        cm
                      </p>{" "}
                    </div>
                    <div className="appointment-input-button2">
                      {" "}
                      <p style={{ fontSize: "11px", color: "white" }}>meters</p>
                    </div>
                    <div
                      className="appointment-input-button3"
                      style={{
                        width: "33%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        borderRadius: "6px",
                        backgroundColor: "#E8E8E8",
                      }}
                    >
                      {" "}
                      <p style={{ fontSize: "11px", color: "white" }}>
                        Inches
                      </p>{" "}
                    </div>
                  </div>
                </div>

                <div className="appointment-details-full-box">
                  <div className="appointment-details-list-im1">
                    <RiShirtLine
                      style={{ width: "20px", height: "20px", padding: "5px" }}
                    />
                  </div>

                  <div className="appointment-details-list-maindiv">
                    <div className="appointment-details-list-maindiv-div1">
                      <div
                        style={{
                          justifyContent: "left",
                          display: "flex",
                          // gap: "5px",
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
                          Shoulder
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
                </div>

                <div className="appointment-botton-save-cancel-div">
                  <div  >
                    {" "}
                    <button
                    className="appointment-botton-save1"
  
                    >
                      Save
                    </button>{" "}
                  </div>
                  <div>
                    <button
                    className="appointment-botton-cancel1"
           
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                {/* ur66yfu */}
              </div>
            </div>

            {/* right section ................................................................*/}

            <div className="appointment-box2">
              <div className="appointment-box2-div">
                <div
                  style={{
                    width: "auto",
                    // height: "40px",
                    display: "flex",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {" "}
                  <h4>Formal Shirt sizes Measuring Guide</h4>
                </div>

                <div className="appointment-video-box">
                  <video
                    width="100%"
                    height="100%"
                    border-radius="8px"
                    controls
                  >
                    <source src="movie.mp4" type="video/mp4" />
                  </video>
                </div>

                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                  <h5>Learn to measure sizes from here</h5>
                  <button
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: "4px",
                    }}
                    onClick={handleSize}
                  >
                    VIEW SIZE CHART
                  </button>
                </div>

                <div style={{ display: "flex", gap: "8px" }}>
                  <p>Did you find this video helpful?</p>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaRegThumbsDown />
                    <FaRegThumbsUp />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                  }}
                >
                  <p style={{ color: "#CACACA" }}>
                    Your Appointment has been scheduled
                  </p>
                </div>

                <div
                  style={{
                    width: "200px",
                    // height: "30px",
                    // border: "1px solid green",
                    display: "flex",
                    gap: "8px",
                    justifyContent: "left",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "30px",
                      borderRadius: "3px",
                      border: "1px solid grey",
                      margin: "0px auto",
                      borderRadius: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ABABAB",
                    }}
                  >
                    {" "}
                    <p style={{}}>23/04/2023</p>{" "}
                  </div>
                  <div
                    style={{
                      width: "100px",
                      height: "30px",
                      borderRadius: "3px",
                      border: "1px solid grey",
                      margin: "0px auto",
                      borderRadius: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#616161",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      color: "#ABABAB",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    <p style={{}}>10:30 AM </p>
                  </div>
                </div>

                <div
              
              className="appointment-container-last-ed-sa"
                >
                  <Link to="">
                    {" "}
                    <button
                      style={{
                        width: "50px",
                        height: "20px",
                        backgroundColor: "",
                        color: "black",
                        padding: "3px 0px",
                        border: "none",
                      }}
                    >
                      Cancel
                    </button>
                  </Link>
                  <button
                    style={{
                      width: "50px",
                      height: "20px",
                      backgroundColor: "",
                      padding: "3px 0px",
                      border: "none",
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="appointment-img-bottom">vfv</div> */}
        </div>

        <div className="appointment-img-bottom">
          <div className="appointment-img-bottom1">
            <div className="appointment-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
