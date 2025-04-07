import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../../assets/TFSlogo.png";

const SCROLL_TRIGGER_Y = 200;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > SCROLL_TRIGGER_Y);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/#home-page-onset">
          <img
            src={logoImage}
            alt="The Fleet Street Logo"
            className={`navbar-image ${isScrolled ? "small" : ""}`}
          />
          <div className={`navbar-title ${isScrolled ? "small-title" : ""}`}>
            <h1>THE FLEET STREET</h1>
          </div>
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button className="navbar-toggle" onClick={handleToggleMenu}>
        <span className="navbar-toggle-icon">
          {isMobileMenuOpen ? "✕" : "☰"}
        </span>
      </button>

      {/* Menu Links */}
      <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="navbar-links">
          <li>
            <Link to="/About_us" className="navbar-link">About</Link>
          </li>
          <li>
            <Link to="/" className="navbar-link">Articles</Link>
          </li>
          <li>
            <Link to="/Bytes" className="navbar-link">Bytes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
