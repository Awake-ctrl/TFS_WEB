import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logoImage from "../../assets/TFSlogo.png"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const [isInstiDropdownOpen, setIsInstiDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    // Function to toggle the mobile menu
    const handleToggleMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // const handleInstiMouseEnter = () => {
    //   setIsInstiDropdownOpen(true);
    // };

    // const handleInstiMouseLeave = () => {
    //   setIsInstiDropdownOpen(false);
    // };

    // Detect scroll to shrink logo
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      const logoImage = document.querySelector('.navbar-image');
      const navbarTitle = document.querySelector('.navbar-title');
      const scrollPosition = window.scrollY || window.pageYOffset;
    
      // Trigger the transition after scrolling 200px
      if (scrollPosition > 200) {
        navbar.classList.add('scrolled');
        logoImage.classList.add('small');
        navbarTitle.classList.add('small-title');
      } else {
        navbar.classList.remove('scrolled');
        logoImage.classList.remove('small');
        navbarTitle.classList.remove('small-title');
      }
    });

    return (
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-logo">
          <Link to="/#home-page-onset">
            <img 
              src={logoImage} 
              alt="My Logo" 
              className={`navbar-image ${isScrolled ? "small" : ""}`}
            />
            <div className={`navbar-title ${isScrolled ? "small-title" : ""}`}>
              <h1>THE FLEET STREET</h1>
            </div>
          </Link>
        </div>
        <div>
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
            
            <li>
              <Link to="/About_us" className="navbar-link">About</Link>
            </li>
            </ul>
        </div>
      </div>
      </nav>
    );
  };

export default Navbar;
