import React from "react";
import { slide as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavHashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  // showSettings (event) {
  //   event.preventDefault();
  // }

  return (
    <Menu width={"auto"}>
      <Link className="menu-item" to="/Pediatric">
        Pediatric
      </Link>
      <Link className="menu-item" to="/GYN">
        GYN
      </Link>
      <Link className="menu-item" to="/PHY">
        PHY
      </Link>
      <Link className="menu-item" to="/SUR">
        SUR
      </Link>

      {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
    </Menu>
  );
};

export default Navbar;
