import React, { useState } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  // Close menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <header className="header">
      <div className="navbar-logo">
        <img src="logos.png" alt="Asthatic Palace Logo" className="logo" />
        <h1 className="studio-name">Asthatic Palace</h1>
      </div>


      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navbar Drawer */}
      <nav className={`navbar ${isMobile ? "active" : ""}`}>
        <ul className="nav-links">
          <li><a href="#" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
          <li><a href="#portfolio" onClick={closeMobileMenu}>Our Works</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </nav>
      
      {/* Overlay to close menu when clicking outside */}
      {isMobile && <div className="overlay" onClick={closeMobileMenu}></div>}
    </header>
  );
}

export default Header;
