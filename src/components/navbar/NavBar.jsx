import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assests/mlogo.png";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div>
          <div onClick={() => setShow(!show)} className="navbar-icon-parent">
            <AiOutlineMenu className="navbar-icon" size={20} />
          </div>
          <div className="nav-list">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a className="services" href="">
              Services <AiOutlineDown id="ic" size={15} />
              <ul className="dropdown">
                <li>Our Services</li>
                <li>Rpo Service</li>
                <li>Hire Train-Deploy</li>
                <li>Assesment Service</li>
              </ul>
            </a>
            <a href="">contact Us</a>
          </div>
        </div>
      </div>
      {show && (
        <div className="nav-li">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Services</a>
          <a href="">contact Us</a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
