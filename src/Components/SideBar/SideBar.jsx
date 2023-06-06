import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button-sidebar"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        ACCOUNT SETTINGS
      </Button>
      <Menu
        id="demo-positioned-menu-list"
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
        <Link to="/profile" className="sidebar-link">
          <MenuItem onClick={handleClose}>Profile Information</MenuItem>
        </Link>
        <Link to="/manageadd" className="sidebar-link">
          <MenuItem onClick={handleClose}>Manage Addresses</MenuItem>
        </Link>
        <Link to="/mysize" className="sidebar-link">
          <MenuItem onClick={handleClose}>My Size</MenuItem>
        </Link>

        <hr style={{ width: "90%", color: "grey", margin: "auto" }} />

        <Link to="" className="sidebar-link">
          <MenuItem onClick={handleClose}>Gift Cards</MenuItem>
        </Link>
        <Link to="/paymentpage" className="sidebar-link">
          <MenuItem onClick={handleClose}>Saved UPIs</MenuItem>
        </Link>
        <Link to="/saved" className="sidebar-link">
          <MenuItem onClick={handleClose}>Saved Cards</MenuItem>
        </Link>

        <hr style={{ width: "90%", color: "grey", margin: "auto" }} />

        <Link to="/mywish" className="sidebar-link">
          <MenuItem onClick={handleClose}>My Wishlist</MenuItem>
        </Link>
        <Link to="" className="sidebar-link">
          <MenuItem onClick={handleClose}>My Designs</MenuItem>
        </Link>
        <Link to="/notification" className="sidebar-link">
          <MenuItem onClick={handleClose}>My Notifications</MenuItem>
        </Link>
        <Link to="/rating" className="sidebar-link">
          <MenuItem onClick={handleClose}>My Ratings & Reviews</MenuItem>
        </Link>

      </Menu>
    </div>
  );
}

export default SideBar;
