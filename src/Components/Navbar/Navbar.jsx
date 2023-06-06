import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GrSearch } from "react-icons/gr";
import logo from "../../Assets/Image/logo.svg";

import Divider from "@mui/material/Divider";
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DropeBox from "../DropeDownBox/DropeBox";

import MenuIcon from "@mui/icons-material/Menu";
import MenuNavbar from "../MenuNavbar/MenuNavbar";

const style = {
  position: "absolute",
  top: "39%",
  left: "85%",
  transform: "translate(-50%, -50%)",
  width: "186px",
  height: "364px",
  bgcolor: "background.paper",
  border: "1px solid #ABABAB",
  // boxShadow: 24,
  p: 4,
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(255, 255, 255, 0.59)",
  backdropFilter: "blur(56.5px)",
  // filter: 'blur(5px)',
  // alignContents: "space-between",
  // display: "none",
};

function Navbar() {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleHome = () =>{
    navigate("/");
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow] = useState(false);
const [menubar,setMenubar] = useState(false)


  return (
    <div className="navbar-container">
      <div className="navbar-icon-box" onClick={handleHome}>
        <img src={logo} alt="pic"  onClick={handleHome} />
      </div>
      <div className="navbar-pages-box">
        <Link
          to=""
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "700",
            color: "black",
          }}
        >
          <p>MEN</p>
        </Link>
        <Link
          to=""
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "700",
            color: "black",
          }}
        >
          <p>WOMEN</p>
        </Link>
        <Link
          to=""
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "700",
            color: "black",
          }}
        >
          <p>KIDS</p>
        </Link>
        <Link
          to=""
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "700",
            color: "black",
          }}
        >
          <p>TailuX Studio</p>
        </Link>
      </div>

      <div className="navbar-top-box">
        <button
          style={{
            width: "100%",
            height: "80%",
            fontSize: "13px",
            backgroundColor: "grey",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Try Now
        </button>
      </div>

      <div className="navbar-search-box">
        <div style={{ marginLeft: "10px" }}>
          <GrSearch onClick={() => alert("search")} />
        </div>
        <input
          type="text"
          placeholder="Search for products , brands and more"
        />
      </div>

      <div className="navbar-userprofile-box">
        <div
          className="navbar-userprofile-login"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          // onClick={handleOpen}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <Link style={{ color: "black", textDecoration: "none" }}>
            {" "}
            <AiOutlineUser />
            {/* <p style={{ margin: "0px", paddding: "0px" }}>Profile</p>{" "} */}
            <DropeBox />
          </Link>
          {show && (
            <div
              style={{ width: "62px", height: "5px", backgroundColor: "black" }}
            ></div>
          )}
        </div>

        

        <div className="navbar-userprofile-wish">
          <Link to="/mywish" style={{ color: "black", textDecoration: "none" }}>
            {" "}
            <AiOutlineHeart />
            <p style={{ margin: "0px", paddding: "0px" }}>Wishlist</p>
          </Link>
        </div>


        <div className="navbar-userprofile-cart">
          <div style={{ margin: "0px", paddding: "0px" }}>
            <Link
              to="/cartone"
              style={{ color: "black", textDecoration: "none" }}
            >
              {" "}
              <HiOutlineShoppingBag style={{ marginBottom: "-6px" }} />
              <p
                style={{
                  marginTop: "0px",
                  paddding: "0px",
                  marginBottom: "0px",
                }}
              >
                Bag
              </p>
            </Link>
          </div>
          <p
            style={{
              position: "relative",
              left: "10px",
              top: "-0px",
              margin: "0px",
              paddding: "0px",
              color: "green",
              fontWeight: "700",
            }}
          >
            {}
          </p>
        </div>
      </div>

    
  
      <div className="navbar-handburg">
        <div className="menu">
          <MenuNavbar  />
        </div>
   
      </div>
      
    </div>
  );
}

export default Navbar;
