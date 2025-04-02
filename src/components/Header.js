import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import "../styles/Header.css";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobile(!isMobile);
  const closeMobileMenu = () => setIsMobile(false);
  const handleLogoClick = () => {
    closeMobileMenu();
    navigate("/"); // Redirects to home page on click
  };

  return (
    <header className="header">
      <div className="navbar-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <img src="/logos.png" alt="Asthatic Palace Logo" className="logo" />
        <h1 className="studio-name">Asthatic Palace</h1>
      </div>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`navbar ${isMobile ? "active" : ""}`}>
        <ul className="nav-links">
          <li><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMobileMenu}>About</NavLink></li>
          <li><NavLink to="/services" onClick={closeMobileMenu}>All Services</NavLink></li>
          <li><NavLink to="/portfolio" onClick={closeMobileMenu}>Our Works</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
        </ul>
      </nav>

      {isMobile && <div className="overlay" onClick={closeMobileMenu}></div>}
    </header>
  );
}

export default Header;
