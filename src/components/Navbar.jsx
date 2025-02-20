import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import LOGO from "../assets/images/logo.jpg"
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={LOGO} alt="Logo" /> 
      </div>
      <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
        &#9776;
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li ><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/event">Event</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;