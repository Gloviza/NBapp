import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavHashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  // showSettings (event) {
  //   event.preventDefault();
  // }
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu
      width={"auto"}
      isOpen={menuOpen}
      onStateChange={(state) => setMenuOpen(state.isOpen)}
    >
      <Link className="menu-item" onClick={() => setMenuOpen(false)} to="/">
        Home
      </Link>
      <Link
        className="menu-item"
        onClick={() => setMenuOpen(false)}
        to="/Pediatric"
      >
        Pediatric
      </Link>
      <Link
        className="menu-item"
        onClick={() => setMenuOpen(false)}
        to="/Gyn-P1"
      >
        Gyn-P1
      </Link>
      <Link
        className="menu-item"
        onClick={() => setMenuOpen(false)}
        to="/Gyn-P2"
      >
        Gyn-P2
      </Link>
      <Link
        className="menu-item"
        onClick={() => setMenuOpen(false)}
        to="/Phy-P1"
      >
        Phy-P1
      </Link>
      <Link
        className="menu-item"
        onClick={() => setMenuOpen(false)}
        to="/Phy-P2"
      >
        Phy-P2
      </Link>
      <Link
        className="menu-item"
        onClick={() => setMenuOpen(false)}
        to="/Sur-P1"
      >
        Sur-P1
      </Link>
      <Link
        className="menu-item"
        onClick={() => setMenuOpen(false)}
        to="/Sur-P2"
      >
        Sur-P2
      </Link>

      {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
    </Menu>
  );
};

export default Navbar;
