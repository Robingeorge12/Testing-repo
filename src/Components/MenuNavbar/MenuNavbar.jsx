import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import "./MenuNavbar.css";
import { Box, Divider, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { GrSearch } from "react-icons/gr";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import DropeBox from "../DropeDownBox/DropeBox";
import SideBar from "../SideBar/SideBar";

function MenuNavbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <span id="demo-positioned-button" onClick={handleClick}>
        <MenuIcon />
      </span>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box className="menu-modal-hover">
          {/* <div className="menu-pages-box"> */}
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
        </Box>

        <Button
          onClick={handleLogin}
          style={{
            color: "black",
            margin: "5px 0px",
            backgroundColor: "white",
            border: "1px solid black",
            width: "50%",
          }}
        >
          Try Now
        </Button>

        <div className="menu-search-box">
          <div style={{ marginLeft: "10px" }}>
            <GrSearch onClick={() => alert("search")} />
          </div>
          <input
            type="text"
            placeholder="Search for products , brands and more"
            className="menu-search"
          />
        </div>

        {/* <Divider
          variant="inset"
          style={{ width: "100%", color: "grey", margin: "7px 0px" }}
        /> */}

        <div className="menu-userprofile-box">
          <div
            className="menu-userprofile-login"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            // onClick={handleOpen}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <Link className="menu-link">
              {" "}
              <AiOutlineUser />
              <DropeBox />
            </Link>
          </div>

          <div className="menu-userprofile-wish">
            <Link
              to="/mywish"
              style={{ color: "black", textDecoration: "none" }}
              className="menu-link"
            >
              {" "}
              <AiOutlineHeart />
              <p style={{ margin: "0px", paddding: "0px" }}>Wishlist</p>
            </Link>
          </div>
          <div className="menu-userprofile-cart">
            <div
              style={{
                margin: "0px",
                paddding: "0px",
                display: "flex",
                gap: "4px",
              }}
            >
              <Link
                to="/cartone"
                className="menu-link"
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
                backgroundColor:"red"
              }}
            >
              {}
            </p>
          </div>
        </div>


        <div><SideBar /></div>
      </Menu>
    </div>
  );
}

export default MenuNavbar;
