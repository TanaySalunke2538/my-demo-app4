import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/LOGO.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About us</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
          {/* Button inside menu for mobile */}
          <li style={{ borderTop: '1px solid #404040', paddingTop: '1rem', marginTop: '1rem' }}>
            <button className="navbar-button-mobile" onClick={closeMenu}>
              Do more with video
            </button>
          </li>
        </ul>

        {/* CTA Button (Desktop only) */}
        <button className="navbar-button" onClick={closeMenu}>Do more with video</button>
      </div>
    </nav>
  );
};

export default Navbar;
