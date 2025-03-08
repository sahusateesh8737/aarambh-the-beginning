import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section reach-us">
          <h4>Reach Us</h4>
          <p>Arambh LPU,</p>
          <p>Block 13, Division of student welfare,</p>
          <p>Lovely Professional University,</p>
          <p>Kapurthala, Pin 144402, Punjab</p>
        </div>
        <div className="footer-section contact-us">
          <h4>Contact Us</h4>
          <p>✉️ arambh.orgz01@gmail.com</p>
          <p>📞6307170446</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Arambh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;