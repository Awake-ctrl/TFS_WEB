// import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import logoImage from "../../assets/TFSlogo.png"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/#home-page-onset">
            <img 
              src={logoImage} 
              alt="My Logo" 
              className="footer-image"
            />
            <div className= "footer-title">
              <h1>THE FLEET STREET</h1>
            </div>
          </Link>
        </div>
        <div className="footer-column">
          <h3>Microsites</h3>
          <ul>
            <li><Link to="https://www.google.com/">Google</Link></li>
            <li><Link to="https://www.youtube.com/">Youtube</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><Link to="/#home-page-onset">Home</Link></li>
            <li><Link to="/About_us#about-page-onset">About Us</Link></li>
            
            {/* <li><Link to="/Feedback">Feedback</Link></li> */}
            {/* <li><Link to="/Contact_us">Contact Us</Link></li> */}
          </ul>
        </div>
      </div>

      

       
      {/* Social Icons */}
      <ul className="socials-list">
        <li className="socials-item">
          <a
            href="https://www.instagram.com/your-instagram-page" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
            title="Visit The Fleet Street, IIT Palakkad on Instagram"
          >
            <span className="fa-brands fa-instagram"></span> {/* Instagram icon */}
          </a>
        </li>
        <li className="socials-item">
          <a
            href="https://www.linkedin.com/company/tfs-iitpkd/" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
            title="Visit The Fleet Street, IIT Palakkad on LinkedIn"
          >
            <span className="fa-brands fa-linkedin"></span> {/* Updated to LinkedIn */}
          </a>
        </li>
        <li className="socials-item">
          <a
            href="https://www.facebook.com/tfs.iitpkd" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
            title="Visit The Fleet Street, IIT Palakkad on Facebook"
          >
            <span className="fa-brands fa-facebook"></span> {/* Facebook icon */}
          </a>
        </li>
      </ul>
      <div className="footer-bottom">
      <p>Copyright © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
