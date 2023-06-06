import React from "react";

import "./TrackPage.css";
import { FaDropbox } from "react-icons/fa";
import man from "../../Assets/Image/manj.svg";
import line from "../../Assets/Image/line.svg";
import r1 from "../../Assets/Image/r1.svg";
import rw from "../../Assets/Image/rw.svg";
import { GoStar } from "react-icons/go";
import ro from "../../Assets/Image/ro.svg";
import tik from "../../Assets/Image/tik.svg";
import log from "../../Assets/Image/log.svg";
import goog from "../../Assets/Image/goog.svg";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import dum1 from "../../Assets/Image/dum1.svg";
import { AiFillStar } from "react-icons/ai";
import { RiDeleteBin5Line, RiShirtLine } from "react-icons/ri";


import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const real= ["Order Confirmed","Stiched","Shipped","Out for Delivey","Delivered"]
const realDate = ["16th March ,2023","17th March ,2023","18th March ,2023","19th March ,2023","20th March ,2023"]

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

function TrackPage() {
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


  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <div className="trackpage-container">
      <div className="trackpage-container-div1">
        <div className="trackpage-name-box">
          <div className="trackpage-name-box1">
            <div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="trackpage-name-box2">
            <p>Hello,</p>
            <p style={{ margin: "0px", fontWeight: "700" }}>Mr Manjunadha</p>
          </div>
        </div>

        <div className="trackpage-icon-box">
          <div className="trackpage-name-icon">
            <FaDropbox />
          </div>
          <div className="trackpage-name-text" onClick={handleOrder}>
            <p className="trackpage-name-text-ptag">My Order</p>
          </div>
        </div>
        <div className="trackpage-text2">
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
        <div className="trackpage-button-info" onClick={handleProfile}>
          <button>Profile Information</button>
        </div>

        <div className="trackpage-address-text" onClick={handleProfile}>
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

        <div className="trackpage-size-text" onClick={handleSize}>
          <p style={{ fontWeight: "400" }}>My Sizes</p>
        </div>

        <div className="trackpage-text2">
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
        <div className="trackpage-card-opton1">
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

        <div className="trackpage-card-opton1" onClick={handleUpi}>
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

        <div className="trackpage-card-opton1" onClick={handleCard}>
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

        <div className="trackpage-text2">
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

        <div className="trackpage-card-opton1" onClick={handleWish}>
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

        <div className="trackpage-card-opton1">
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

        <div className="trackpage-card-opton1" onClick={handleNote}>
          <p
            style={{
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            My Notification
          </p>
        </div>

        <div className="trackpage-card-opton1" onClick={handleRate}>
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

      <div className="trackpage-container-div2">
        <div className="trackpage-container-div2-box1">
          <div className="trackpage-container-div2-box1-head">
            {/* <h4 style={{ color: "#999999" }}>My Size/</h4> */}
            <h4>My Orders</h4>
          </div>

          <div className="trackpage-container-div2-box1-ipdiv">
            <input
              className="trackpage-container-div2-box1-ip"
              type="text"
              placeholder="| Type to search your ordered products"
            />
            <HiOutlineSearch />
          </div>

          <div className="trackpage-container-div2-box1-cart-div">
            <div className="trackpage-container-div2-box1-cart-sub-div">
              <img
                className="trackpage-container-div2-box1-cart-img"
                src={log}
                alt="pic"
              />
              <div className="trackpage-container-div2-box1-cart-details">
                <p className="trackpage-container-div2-box1-cart-details-p1" >Long Bottom</p>
                <p className="trackpage-container-div2-box1-cart-details-p2">Color</p>
                <p className="trackpage-container-div2-box1-cart-details-p3" >Style</p>
              </div>
            </div>

            <div className="trackpage-container-div2-box1-cart-details-price">
              <h4>$1899</h4>
            </div>
            <div className="trackpage-container-div2-box1-cart-details-div2">
              <div className="trackpage-container-div2-box1-cart-details-div2-exp">
                <div className="trackpage-container-div2-box1-cart-details-div2-round"></div>
                <p className="trackpage-container-div2-box1-cart-details-div2-deli-ptag">
                  Delivered on 20th March, 2023
                </p>
              </div>

              <p>Your item has been delivered</p>

              <div className="trackpage-container-div2-box1-cart-details-div2-icon-div">
                <GoStar />
                <p style={{ fontSize: "15px", fontWeight: "500" }}>
                  Rate & Review your purchase
                </p>
              </div>
            </div>
          </div>

          <div className="trackpage-container-div2-box1-cart-details-div2-planeline">
            <div></div>
            <img
              className="trackpage-container-div2-box1-cart-details-div2-im2"
              src={line}
              alt="pic"
            />
            {/* <img src={rw} style={{position:"relative",width:"18px",left:"-807px"}} alt="yr" />
<img src={r1} style={{width:"14px",position:"relative",left:"-807px"}} alt="ji" /> */}


<div   className="trackpage-container-div2-trackingpage-div">

<Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>

</div>







            <div className="trackpage-trackpic-div1">
              <p style={{ fontSize: "10px", marginLeft: "-104px" }}>
                Order Confirmed
              </p>
              <img
                src={rw}
                style={{
                  position: "relative",
                  width: "18px",
                  top: "9px",
                  left: "-12px",
                }}
                alt="pr"
              />
              <img
                src={r1}
                style={{
                  width: "8px",
                  position: "relative",
                  top: "-4px",
                  left: "-7px",
                }}
                alt="pc"
              />
              <p style={{ fontSize: "10px", marginLeft: "-100px" }}>
                24th March 2023
              </p>
            </div>

            <div className="trackpage-trackpic-div2">
              <p style={{ fontSize: "10px", marginLeft: "-104px" }}>Stiched</p>
              <img
                src={rw}
                style={{
                  position: "relative",
                  width: "18px",
                  top: "9px",
                  left: "-12px",
                }}
                alt="pr"
              />
              <img
                src={r1}
                style={{
                  width: "8px",
                  position: "relative",
                  top: "-4px",
                  left: "-7px",
                }}
                alt="pc"
              />
              <p style={{ fontSize: "10px", marginLeft: "-96px" }}>
                18th March 2023
              </p>
            </div>

            <div className="trackpage-trackpic-div3">
              <p style={{ fontSize: "10px", marginLeft: "-113px" }}>Shipped</p>
              <img
                src={rw}
                style={{
                  position: "relative",
                  width: "18px",
                  top: "9px",
                  left: "-12px",
                }}
                alt="pr"
              />
              <img
                src={r1}
                style={{
                  width: "8px",
                  position: "relative",
                  top: "-4px",
                  left: "-7px",
                }}
                alt="pc"
              />
              <p style={{ fontSize: "10px", marginLeft: "-100px" }}>
                19th March 2023
              </p>
            </div>

            <div className="trackpage-trackpic-div4">
              <p style={{ fontSize: "10px", marginLeft: "-146px" }}>
                Out for Delivary
              </p>
              <img
                src={rw}
                style={{
                  position: "relative",
                  width: "18px",
                  top: "9px",
                  left: "-12px",
                }}
                alt="pr"
              />
              <img
                src={r1}
                style={{
                  width: "8px",
                  position: "relative",
                  top: "-4px",
                  left: "-7px",
                }}
                alt="pc"
              />
              <p style={{ fontSize: "10px", marginLeft: "-146px" }}>
                20th March 2023
              </p>
            </div>

            <div className="trackpage-trackpic-div5">
              <p style={{ fontSize: "10px", marginLeft: "-126px" }}>
                Delivered
              </p>
              <img
                src={rw}
                style={{
                  position: "relative",
                  width: "18px",
                  top: "9px",
                  left: "-12px",
                }}
                alt="pr"
              />
              <img
                src={r1}
                style={{
                  width: "8px",
                  position: "relative",
                  top: "-4px",
                  left: "-7px",
                }}
                alt="pc"
              />
              <p style={{ fontSize: "10px", marginLeft: "-126px" }}>
                21th March 2023
              </p>
            </div>
          </div>

          <div className="trackpage-address-div">
            <p className="trackpage-address-div-ptag">Delivery Address</p>
            <p className="trackpage-address-div-ptag-name">Venkata Subbarao</p>
            <p className="trackpage-address-div-ptag-name2">
              Flat no. 133, door no. 52-1/4-5 Veterinary Colony, vijayawada
            </p>
            <p className="trackpage-address-div-ptag-name3">
              urban, Krishna district, Vj Polytechnic Vijayawada - 520008
            </p>
            <p className="trackpage-address-div-ptag-name4">Andhra Pradesh </p>
            <p className="trackpage-address-div-ptag-name5"> Phone number</p>
            <p className="trackpage-address-div-ptag-name6">
              9032138888, 6304897782
            </p>
          </div>

          <div className="trackpage-address-div-invoice">
            <p style={{ color: "#B9B9B9", fontSize: "13px" }}>
              {" "}
              This order is also tracked by 9032138888
            </p>
            <Link to="">
              <button style={{ border: "none" }}>Download Invoice</button>
            </Link>
          </div>
        </div>

        <div className="trackpage-img-bottom">
          <div className="trackpage-img-bottom1">
            <div className="trackpage-img-bottom3">
              {" "}
              <img src={dum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackPage;
