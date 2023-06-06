import React from "react";

import "./Payment.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import ph from "../../Assets/Image/ph.svg";
import ptm from "../../Assets/Image/ptm.svg";
import goog from "../../Assets/Image/goog.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import dum from "../../Assets/Image/dum.svg";
import dum1 from "../../Assets/Image/dum1.svg";
// import { RiDeleteBin5Line} from "react-icons/ri";
import { RiDeleteBin5Line, RiShirtLine } from "react-icons/ri";
// import { MdOutlineEdit } from "react-icons/md";
// import { GiArmoredPants } from "react-icons/gi";
// import { AiOutlineRight, AiOutlineSearch,AiOutlineClose } from "react-icons/ai";
// import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
// import { Box, Button, Modal, Typography } from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers";

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

function Payment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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

  const handleNote = ()=>{
    navigate("/notification")
  }
  const handleRate = ()=>{
    navigate("/rating")
  }


  return (
    <div className="paymentpage-container">
      <div className="paymentpage-container-div1">
        <div className="paymentpage-name-box">
          <div className="paymentpage-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="paymentpage-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="paymentpage-icon-box">
          <div className="paymentpage-name-icon">
            <FaDropbox />
          </div>
          <div className="paymentpage-name-text" onClick={handleOrder}>
            <p style={{ margin: "0px", fontWeight: "700" }}>My Order</p>
          </div>
        </div>
        <div className="paymentpage-text2">
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
        <div className="paymentpage-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="paymentpage-address-text" onClick={handlemanage}>
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

        <div className="paymentpage-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Sizes</p>
        </div>

        <div className="paymentpage-text2">
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
        <div className="paymentpage-card-opton1">
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

        <div className="paymentpage-card-opton1" onClick={handleUpi}>
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

        <div className="paymentpage-card-opton1" onClick={handleCard}>
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

        <div className="paymentpage-text2">
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

        <div className="paymentpage-card-opton1" onClick={handleWish}>
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

        <div className="paymentpage-card-opton1">
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

        <div className="paymentpage-card-opton1" onClick={handleNote}>
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

        <div className="paymentpage-card-opton1" onClick={handleRate}>
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

      <div className="paymentpage-container-div2">
        <div className="paymentpage-container-div2-box1">
          <div style={{ display: "flex", justifyContent: "left" }}>
            {/* <h4 style={{ color: "#999999" }}>My Size/</h4> */}
            <h4 className="paymentpage-container-div2-box1-head">Managed Saved UPIs</h4>
          </div>

          <div className="paymentpage-container-div2-box1-sizebox">
            <div className="paymentpage-box1">
              <div
                style={{
                  width: "100%",
                  height: "70px",
                  // border: "1px solid red",
                  marginTop: "5px",
                  display:"flex",
                  flexDirection:"column",
                  padding:"0px 0px 0px 10px"
                }}
              >
                <div
                  style={{
                    width: "95%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // border:"1px solid green"
                  }}
                >
                  <p>Phonepe UPI ID</p>
                  <RiDeleteBin5Line />
                </div>

                <div
                  style={{
                    width: "30%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={ph}
                    alt="pic"
                  />
                  <p>6304897782@ybl</p>
                </div>

              </div>


<hr style={{width:"97%",height:"1px",color:"grey"}} />

              <div
                style={{
                  width: "100%",
                  height: "70px",
                  // border: "1px solid red",
                  marginTop: "5px",
                  display:"flex",
                  flexDirection:"column",
                  padding:"0px 0px 0px 10px"
                }}
              >
                <div
                  style={{
                    width: "95%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // border:"1px solid green"
                  }}
                >
                  <p>Google Pay UPI ID</p>
                  <RiDeleteBin5Line />
                </div>

                <div
                  style={{
                    width: "30%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={goog}
                    alt="pic"
                  />
                  <p>6304897782@ybl</p>
                </div>

              </div>

              <hr style={{width:"97%",height:"1px",color:"grey"}} />
              <div
                style={{
                  width: "100%",
                  height: "70px",
                  // border: "1px solid red",
                  marginTop: "5px",
                  display:"flex",
                  flexDirection:"column",
                  padding:"0px 0px 0px 10px"
                }}
              >
                <div
                  style={{
                    width: "95%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // border:"1px solid green"
                  }}
                >
                  <p>Paytm UPI ID</p>
                  <RiDeleteBin5Line />
                </div>

                <div
                  style={{
                    width: "30%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={ptm}
                    alt="pic"
                  />
                  <p>6304897782@ybl</p>
                </div>

              </div>

              {/* <div style={{}}>detailx</div> */}
            </div>

            <div className="paymentpage-container-div2-box2">
              <div style={{ textAlign: "left" }}>
                <h4>FAQs</h4>
              </div>

              <div className="paymentpage-faq1">
                <h5 style={{ textAlign: "justify" }}>
                Why is my UPI being saved on Flipkart?{" "}
                </h5>
                <p
                
                  className="paymentpage-faq1-ptag"
                >
             FAQs


It's quicker. You can save the hassle of typing in the complete UPI information every time you shop at Flipkart by saving your UPI details. You can make your payment by selecting the saved UPI ID of your choice at checkout. While this is obviously faster, it is also very secure.

Is it safe to save my UPI on Flipkart?
Absolutely. Your UPI ID information is 100 percent safe with us. UPI ID details are non PCI compliant and are non confidential data.

What all UPI information does Flipkart store?
Flipkart only stores UPI ID and payment provider details. We do not store UPI PIN/MPIN.



                </p>
              </div>
              <div className="paymentpage-faq2">
                <h5 style={{ textAlign: "justify" }}>
                Why is my UPI being saved on Flipkart?{" "}
                </h5>
                <p
                 className="paymentpage-faq1-ptag"
                >
                


It's quicker. You can save the hassle of typing in the complete UPI information every time you shop at Flipkart by saving your UPI details. You can make your payment by selecting the saved UPI ID of your choice at checkout. While this is obviously faster, it is also very secure.

Is it safe to save my UPI on Flipkart?
Absolutely. Your UPI ID information is 100 percent safe with us. UPI ID details are non PCI compliant and are non confidential data.

What all UPI information does Flipkart store?
Flipkart only stores UPI ID and payment provider details. We do not store UPI PIN/MPIN.

                </p>
              </div>
              <div className="paymentpage-faq3">
                <h5 style={{ textAlign: "justify" }}>
                Why is my UPI being saved on Flipkart?{" "}
                </h5>
                <p
                className="paymentpage-faq1-ptag"
                >
               FAQs


It's quicker. You can save the hassle of typing in the complete UPI information every time you shop at Flipkart by saving your UPI details. You can make your payment by selecting the saved UPI ID of your choice at checkout. While this is obviously faster, it is also very secure.

Is it safe to save my UPI on Flipkart?
Absolutely. Your UPI ID information is 100 percent safe with us. UPI ID details are non PCI compliant and are non confidential data.

What all UPI information does Flipkart store?
Flipkart only stores UPI ID and payment provider details. We do not store UPI PIN/MPIN.

                </p>
              </div>
              <div className="paymentpage-faq4">
                <h5 style={{ textAlign: "justify" }}>
                  What happens when I update my email address or(mobile number)?{" "}
                </h5>
                <p
                 className="paymentpage-faq1-ptag"
                >
                  Your login email id(or mobile number)changes, likewise. You
                  will receive all account related communications on your
                  updated mobile number(or email address)
                </p>
              </div>
              <div className="paymentpage-faq5"></div>
            </div>

            {/* right section ................................................................*/}

            <div className="paymentpage-box2">
              <div className="paymentpage-box2-div"></div>
            </div>
          </div>

          {/* <div className="paymentpage-img-bottom">vfv</div> */}
        </div>

        <div className="paymentpage-img-bottom">
          <div className="paymentpage-img-bottom1">
            <div className="paymentpage-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
