import React from "react";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import "./EditAddress.css";
import { BiCurrentLocation } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";

function EditAddress() {

  const navigate = useNavigate();


  const handleOrder = ()=>{
    navigate("/order")
    }


    const handleProfile = ()=>{
      navigate("/profile")
      }
  
const handlemanage = ()=>{
navigate("/manageadd")
}

const handleSize = ()=>{
  navigate("/mysize")
  }
  
  const handleUpi = ()=>{
    navigate("/paymentpage")
  }

  const handleCard = ()=>{
    navigate("/saved")
  }

  
  const handleWish = ()=>{
    navigate("/mywish")
  }

  
  const handleRate = ()=>{
    navigate("/rating")
  }


  const handleNote = ()=>{
    navigate("/notification")
  }

  return (
    <div className="editaddress-container">
      
      <div className="editaddress-container-div1">
        <div className="editaddress-name-box">
          <div className="editaddress-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="editaddress-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="editaddress-icon-box">
          <div className="editaddress-name-icon">
            <FaDropbox />
          </div>
          <div className="editaddress-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="editaddress-text2">
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
        <div className="editaddress-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="editaddress-address-text">
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            edit Address
          </p>
        </div>

        <div className="editaddress-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "500" }}>My Size</p>
        </div>

        <div className="editaddress-text2">
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
        <div className="editaddress-card-opton1">
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

        <div className="editaddress-card-opton1" onClick={handleUpi}>
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

        <div className="editaddress-card-opton1" onClick={handleCard}>
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

        <div className="editaddress-text2">
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

        <div className="editaddress-card-opton1" onClick={handleWish}>
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

        <div className="editaddress-card-opton1">
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

        <div className="editaddress-card-opton1" onClick={handleNote}>
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

        <div className="editaddress-card-opton1" onClick={handleRate}>
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

      <div className="editaddress-container-div2">
        <div className="editaddress-container-div2-box1">
          <div className="editaddress-personal-div">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "700",
                textAlign: "left",
                margin: "0px",
              }}
            >
              Manage Addresses
            </p>

            <div className="editaddress-personal-add">
              <div className="">
                <button
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    marginLeft: "10px",
                  }}
                >
                  +
                </button>
              </div>
              <h4 style={{display:"flex",alignItems:"center"}}>AddNew Addresses</h4>
            </div>

            <div className="editaddress-main-div">
              <div style={{ float: "left", display: "flex" }}>
                <h4>Edit Address</h4>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  backgroundColor: "black",
                  width: "200px",
                  height: "55px",
                  alignItems: "center",
                  justifyContent: "left",
                  marginTop: "10px",
                  boxSizing: "border-box",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    width: "15%",
                    height: "100%",
                    backgroundColor: "",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "8px 0px",
                  }}
                >
                  <BiCurrentLocation style={{ color: "white" }} />
                </div>
                <button
                  style={{
                    width: "auto",
                    height: "100%",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                  }}
                >
                  use my current location
                </button>
              </div>

              <div className="editaddress-details-container">
                <div className="editaddress-details-container-box1">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid grey",
                      backgroundColor: "#E8E8E8",
                      width: "90%",
                      height: "50px",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        margin: "0px",
                        textAlign: "left",
                        color: "#898989",
                        marginLeft: "8px",
                      }}
                    >
                      Name
                    </p>
                    <input
                      type="text"
                      style={{
                        width: "93%",
                        height: "75%",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E8E8E8",
                        marginLeft: "8px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid grey",
                      backgroundColor: "#E8E8E8",
                      width: "90%",
                      height: "50px",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        margin: "0px",
                        textAlign: "left",
                        color: "#898989",
                        marginLeft: "8px",
                      }}
                    >
                      Pincode
                    </p>
                    <input
                      type="text"
                      style={{
                        width: "93%",
                        height: "75%",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E8E8E8",
                        marginLeft: "8px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid grey",
                      backgroundColor: "#E8E8E8",
                      width: "90%",
                      height: "50px",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        margin: "0px",
                        textAlign: "left",
                        color: "#898989",
                        marginLeft: "7px",
                        width: "auto",
                      }}
                    >
                      City/District/Town
                    </p>
                    <input
                      type="text"
                      style={{
                        width: "93%",
                        height: "75%",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E8E8E8",
                        marginLeft: "7px",
                      }}
                    />
                  </div>
                </div>
                <div className="editaddress-details-container-box2">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid grey",
                      backgroundColor: "#E8E8E8",
                      width: "90%",
                      height: "50px",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        margin: "0px",
                        textAlign: "left",
                        color: "#898989",
                        marginLeft: "7px",
                        width: "auto",
                      }}
                    >
                      10 digit Phone Number
                    </p>
                    <input
                      type="text"
                      style={{
                        width: "93%",
                        height: "75%",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E8E8E8",
                        marginLeft: "7px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid grey",
                      backgroundColor: "#E8E8E8",
                      width: "90%",
                      height: "50px",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        margin: "0px",
                        textAlign: "left",
                        color: "#898989",
                        marginLeft: "7px",
                        width: "auto",
                      }}
                    >
                      Locality
                    </p>
                    <input
                      type="text"
                      style={{
                        width: "93%",
                        height: "75%",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E8E8E8",
                        marginLeft: "7px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid grey",
                      backgroundColor: "#E8E8E8",
                      width: "90%",
                      height: "50px",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        margin: "0px",
                        textAlign: "left",
                        color: "#898989",
                        marginLeft: "7px",
                        width: "auto",
                      }}
                    >
                      State
                    </p>
                    <select
                      id=""
                      style={{
                        width: "93%",
                        height: "75%",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E8E8E8",
                        marginLeft: "7px",
                      }}
                    >
                      <option value="">Kerala</option>
                      <option value="">Andra</option>
                      <option value="">Andra</option>
                      <option value="">Andra</option>
                    </select>
                    {/* <input
                      type="text"
                      style={{
                        width: "93%",
                        height: "75%",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E8E8E8",
                        marginLeft: "7px",
                      }}
                    /> */}
                  </div>
                </div>
                <div className="editaddress-details-container-box3">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid grey",
                      backgroundColor: "#E8E8E8",
                      width: "90%",
                      height: "105px",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        margin: "0px",
                        textAlign: "left",
                        color: "#898989",
                        marginLeft: "7px",
                        width: "auto",
                      }}
                    >
                      Address(Area Streat)
                    </p>
                    <textarea
                      type="text"
                      style={{
                        width: "93%",
                        height: "75%",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E8E8E8",
                        marginLeft: "7px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid grey",
                      backgroundColor: "#E8E8E8",
                      width: "90%",
                      height: "50px",
                      borderRadius: "8px",
                      boxSizing: "border-box",
                      marginTop: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        margin: "0px",
                        textAlign: "left",
                        color: "#898989",
                        marginLeft: "7px",
                        width: "auto",
                      }}
                    >
                      Landmark(Optional)
                    </p>
                    <input
                      type="text"
                      style={{
                        width: "93%",
                        height: "75%",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E8E8E8",
                        marginLeft: "7px",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "120px",
                  height: "40px",
                  // border: "1px solid red",
                  display: "flex",
                  gap: "15px",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    width: "45%",
                    heigt: "40px",
                    border: "none",
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "3px",
                  }}
                >
                  Home
                </button>
                <button
                  style={{
                    width: "45%",
                    heigt: "40px",
                    border: "none",
                    color: "white",
                    backgroundColor: "#E8E8E8",
                    color: "#898989",
                    borderRadius: "3px",
                  }}
                >
                  Office
                </button>
              </div>

              <div
                style={{
                  width: "170px",
                  height: "100px",
                  // border: "1px solid red",
                  display: "flex",
                  gap: "15px",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    width: "45%",
                    border: "none",
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "3px",
                    height: "45px",
                  }}
                >
                  Save
                </button>
                <button
                  style={{
                    width: "45%",
                    height: "45px",
                    border: "none",
                    color: "white",
                    backgroundColor: "#E8E8E8",
                    color: "#898989",
                    borderRadius: "5px",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="editaddress-personal-add-details">
          <div style={{ float: "left", padding: "0px 15px" }}>
            <button
              style={{
                float: "left",
                padding: "0px 5px",
                fontSize: "12px",
                marginTop: "10px",
              }}
            >
              {"HOME"}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              height: "20px",
              alignItems: "center",
              width: "auto",
              justifyContent: "space-between",
              padding: "0px 15px",
              margin: "0px",
            }}
          >
            <h4>Anju</h4>
            <h4>{""}</h4>
            <div style={{ width: "40px", height: "40px" }}>
              <BsThreeDotsVertical />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              margin: "0px",
              height: "15px",
            }}
          >
            <p style={{ padding: "0px 15px", display: "flex" }}>
              Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu, Guntur,
              Guntur, Andhra Pradesh - 522007
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAddress;
