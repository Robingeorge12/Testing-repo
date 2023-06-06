import React from 'react'
import "./ShirtMeasure.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import sh from "../../Assets/Image/shirt.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import dum from "../../Assets/Image/dum.svg";
import dum1 from "../../Assets/Image/dum1.svg";
import { BiCurrentLocation } from "react-icons/bi";
import { RiDeleteBin5Line, RiShirtLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { GiArmoredPants } from "react-icons/gi";
import { AiOutlineRight, AiOutlineSearch,AiOutlineClose } from "react-icons/ai";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { Box, Button, Modal, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '450px',
  height:'450px',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


function ShirtMeasure() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className="sheduleappointment-container">
      <div className="sheduleappointment-container-div1">
        <div className="sheduleappointment-name-box">
          <div className="sheduleappointment-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="sheduleappointment-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="sheduleappointment-icon-box">
          <div className="sheduleappointment-name-icon">
            <FaDropbox />
          </div>
          <div className="sheduleappointment-name-text">
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="sheduleappointment-text2">
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
        <div className="sheduleappointment-button-info">
          <button>Profile Information</button>
        </div>

        <div className="sheduleappointment-address-text">
          <p
            style={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            Manage Addresses
          </p>
        </div>

        <div className="sheduleappointment-size-text">
          <p style={{ fontWeight: "500" }}>My Sizes</p>
        </div>

        <div className="sheduleappointment-text2">
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
        <div className="sheduleappointment-card-opton1">
          <p
            style={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            Gift Cards
          </p>
        </div>

        <div className="sheduleappointment-card-opton1">
          <p
            style={{
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            Saved UPIs
          </p>
        </div>

        <div className="sheduleappointment-card-opton1">
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

        <div className="sheduleappointment-text2">
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

        <div className="sheduleappointment-card-opton1">
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

        <div className="sheduleappointment-card-opton1">
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

        <div className="sheduleappointment-card-opton1">
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

        <div className="sheduleappointment-card-opton1">
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

      <div className="sheduleappointment-container-div2">
        <div className="sheduleappointment-container-div2-box1">
          <div style={{ display: "flex", justifyContent: "left" }}>
            <h4 style={{ color: "#999999" }}>My Size/</h4>
            <h4>Add New Size</h4>
          </div>

          <div
            style={{
              display: "flex",
              width: "80%",
              height: "40px",
              //   border: "1px solid red",
              borderRadius: "6px",
              marginLeft: "20px",
              // backgroundColor: "black",
            }}
          >
            <div
              style={{
                width: "5%",
                height: "100%",
                backgroundColor: "#E8E8E8",
                borderRadius: "4px 0px 0px 4px",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              {" "}
              <AiOutlineSearch
                style={{ width: "80%", height: "80%", color: "white" }}
              />
            </div>

            <input
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "white",
                width: "90%",
                height: "97%",
                backgroundColor: "#E8E8E8",
                border: "none",
                borderRadius: "0px 6px 6px 0px",
              }}
              placeholder="Formal Shirts"
            />
          </div>

          <div className="sheduleappointment-container-div2-box1-sizebox">
            <div className="sheduleappointment-box1">
              <div style={{ width: "100%", height: "40%", display: "flex" }}>
                <div
                  style={{
                    width: "75%",
                    height: "100%",
                    // border: "1px solid yellow",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: "80%",
                      border: "1px solid black",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <img src={dum} alt="pic" />
                  </div>
                </div>

                <div
                  style={{
                    width: "20%",
                    height: "100%",
                    // border: "1px solid yellow",
                  }}
                >
                  <RiDeleteBin5Line
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                  />
                </div>
              </div>

              <div className="sheduleappointment-box1-details">
                <div>
                  <h4 style={{ margin: "0px", marginLeft: "-90px" }}>
                    {"Manju"}
                  </h4>
                </div>

                <div
                  style={{
                    width: "30%",
                    height: "50px",
                    // border: "1px solid red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    margin: "auto",
                    margin: "5px 0px 0px 80px",
                    gap: "5px",
                  }}
                >
                  <input
                    type="text"
                    style={{ width: "100%", height: "25px", border: "none" }}
                    placeholder="Type Name here ..."
                  />
                  <div
                    style={{
                      width: "100%",
                      height: "22px",
                      display: "flex",
                      backgroundColor: "#E8E8E8",
                      borderRadius: "6px",
                    }}
                  >
                    <div
                      className="sheduleappointment-input-button1"
                      style={{
                        width: "33%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        borderRadius: "6px",
                        backgroundColor: "black",
                      }}
                    >
                      {" "}
                      <p style={{ fontSize: "11px", color: "white" }}>
                        cm
                      </p>{" "}
                    </div>
                    <div
                      className="sheduleappointment-input-button2"
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
                      <p style={{ fontSize: "11px", color: "white" }}>meters</p>
                    </div>
                    <div
                      className="sheduleappointment-input-button3"
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    padding: "3px 0px",
                  }}
                >
                  <RiShirtLine
                    style={{ width: "20px", height: "20px", padding: "5px" }}
                  />
                </div>

                <div
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    gap: "5px",
                    // border: "1px solid green",
                    alignItems: "center",
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

            {/* right section ................................................................*/}

            <div className="sheduleappointment-box2">
              <div className="sheduleappointment-box2-div">
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

                <div className="sheduleappointment-video-box">
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
                    onClick={handleOpen} >
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
                  <h5>Not able to measure yourself?</h5>
                  <p>Don’t worry. We’ll do that for you</p>
                </div>

                <button
                  style={{
                    fontSize: "10px",
                    fontWeight: "200",
                    padding: "7px",
                    color: "white",
                    backgroundColor: "black",
                    width: "150px",
                    borderRadius: "4px",
                    // justifyContent:"left",
                    float: "left",
                  }}
                
                >
                  BOOK APPOINTMENT
                </button>
                {open && (
                  <>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Box style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                          {" "}
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Shirt Measurement
                          </Typography>
                          <AiOutlineClose />
                        </Box>

                        <Box style={{ width: "300px", height: "300px",margin:"auto" }}>
                          
<img style={{width:"100%",height:"100%"}} src={sh} alt="im" />

                        </Box>

              
     
                      </Box>
                    </Modal>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* <div className="sheduleappointment-img-bottom">vfv</div> */}
        </div>

        <div className="sheduleappointment-img-bottom">
          <div className="sheduleappointment-img-bottom1">
            <div className="sheduleappointment-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShirtMeasure