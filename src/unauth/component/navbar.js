import React from 'react';
import './navbar.css';
import logo from '/home/tanay-salunke/Tanay/my-demo-app4/src/assets/LOGO.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <ul className="navbar-menu">
          <li><a href="#about">About us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <button className="navbar-button">Do more with video</button>
      </div>
    </nav>
  );
};

export default Navbar;
