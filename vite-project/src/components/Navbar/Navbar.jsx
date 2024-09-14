import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "../../assets/head.webp"; 
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isInstiDropdownOpen, setIsInstiDropdownOpen] = useState(false);
    const [isSciTechDropdownOpen, setIsSciTechDropdownOpen] = useState(false);
    
    // Function to toggle the mobile menu
    const handleToggleMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
      
    };
    const handleInstiMouseEnter = () => {
      setIsInstiDropdownOpen(true);
    };
  
    const handleInstiMouseLeave = () => {
      setIsInstiDropdownOpen(false);
    };
  
    const handleSciTechMouseEnter = () => {
      setIsSciTechDropdownOpen(true);
    };
  
    const handleSciTechMouseLeave = () => {
      setIsSciTechDropdownOpen(false);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
        <Link to="/">
          <img 
            src={logoImage} 
            alt="My Logo" 
            className="navbar-image"
          />
        </Link>
        </div>
        {/* Hamburger Menu Toggle */}
      <button className="navbar-toggle" onClick={handleToggleMenu}>
        <span className="navbar-toggle-icon">&#9776;</span>
      </button>
        <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            <li>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li>
              <Link to="/Bytes" className="navbar-link">Bytes</Link>
            </li>
            <li 
            className="dropdown"
            onMouseEnter={handleInstiMouseEnter}
            onMouseLeave={handleInstiMouseLeave}
          >
            <button className="navbar-link">Insti</button>
            <ul className={`dropdown-menu ${isInstiDropdownOpen ? "show" : ""}`}>
              <li><Link to="/News" className="navbar-link">News</Link></li>
              <li><Link to="/Events" className="navbar-link">Events</Link></li>
              <li><Link to="/Heritage" className="navbar-link">Heritage</Link></li>
              <li><Link to="/Freshine" className="navbar-link">Freshine</Link></li>
              <li><Link to="/Sports" className="navbar-link">Sports</Link></li>
            </ul>
          </li>
          <li 
            className="dropdown"
            onMouseEnter={handleSciTechMouseEnter}
            onMouseLeave={handleSciTechMouseLeave}
          >
            <button className="navbar-link ">SciTech</button>
            <ul className={`dropdown-menu ${isSciTechDropdownOpen ? "show" : ""}`}>
              <li><Link to="/Science_Deconstructed" className="navbar-link">Science Deconstructed</Link></li>
              <li><Link to="/COI" className="navbar-link">COI</Link></li>
              <li><Link to="/Spotlight" className="navbar-link">Spotlight</Link></li>
              <li><Link to="/Immerse" className="navbar-link">Immerse</Link></li>
            </ul>
          </li>
            <li>
              <Link to="/Interviews" className="navbar-link">Interviews</Link>
            </li>
            <li>
              <Link to="/Entertainment" className="navbar-link">Entertainment</Link>
            </li>
            <li>
              <Link to="/About_us" className="navbar-link">About Us</Link>
            </li>
            <li>
              <Link to="/Contact_us" className="navbar-link">Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* <button className="navbar-toggle" onClick={handleToggleMenu}>
          This button will appear on smaller screens
          <span className="navbar-toggle-icon">ffgsfdg</span>
        </button> */}


      </nav>
    );
  };

  export default Navbar;