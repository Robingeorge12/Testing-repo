import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import "./Drope.css";
import { Box, Divider, Typography } from "@mui/material";


import MenuIcon from '@mui/icons-material/Menu';

function DropeBox() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
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

        {/* <div><MenuIcon /></div> */}
      <span
        id="demo-positioned-button"
        // aria-controls={open ? "demo-positioned-menu" : undefined}
        // aria-haspopup="true"
        // aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Profile
      </span >
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
        <Box
          style={{ width: "100%", height: "54px" }}
          className="navbar-modal-hover"
        >
          <Typography style={{ fontWeight: "600" }}>Welcome</Typography>
          <Typography style={{ fontSize: "12px", lineHeight: "12px" }}>
            To access account and manage orders
          </Typography>
        </Box>

        <Button
          onClick={handleLogin}
          style={{
            color: "black",
            margin: "5px 0px",
            backgroundColor: "white",
            border: "1px solid black",
            width: "70%",
          }}
        >
          LOGIN/SIGNUP
        </Button>

        <Divider
          variant="inset"
          style={{ width: "100%", color: "grey", margin: "7px 0px" }}
        />

        <Link
          to="/order"
          onClose={handleClose}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Orders</MenuItem>
        </Link>

        <Link
          to="/wishlist"
          onClose={handleClose}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Wishlist</MenuItem>
        </Link>

        <Link
          to="/gift"
          onClose={handleClose}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Gift Cards</MenuItem>
        </Link>
        <Link
          to="/mysize"
          onClose={handleClose}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>My Size</MenuItem>
        </Link>
        <Link
          to=""
          onClose={handleClose}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Contact Us</MenuItem>
        </Link>

        <Divider
          variant="inset"
          style={{ width: "100%", color: "grey", margin: "7px 0px" }}
        />

        <Link
          to=""
          onClose={handleClose}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Coupons</MenuItem>
        </Link>
        <Link
          to="/saved"
          onClose={handleClose}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Saved Cards</MenuItem>
        </Link>
        <Link
          to=""
          onClose={handleClose}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Saved VPAs</MenuItem>
        </Link>
        <Link
          to="/addaddress"
          onClose={handleClose}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Saved Addresses</MenuItem>
        </Link>

        {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}

export default DropeBox;
