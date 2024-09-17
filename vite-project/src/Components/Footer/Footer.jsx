// import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Microsites</h3>
          <ul>
            <li><Link to="/Immerse">Immerse</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Microsites</h3>
          <ul>
            <li><Link to="/">Microsite</Link></li>
            <li><Link to="https://www.google.com/">Google</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><Link to="/About_us">About Us</Link></li>
            <li><Link to="/Feedback">Feedback</Link></li>
            <li><Link to="/Contact_us">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
