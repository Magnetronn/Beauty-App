import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <h1><span>Aesthetic</span> Palace</h1>
        </div>
        <div className="footer-nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://www.facebook.com/profile.php?id=61573584556708&mibextid=qi2Omg&rdid=zt79XO8jWHIDroPr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F167cyyH7aE%2F%3Fmibextid%3Dqi2Omg#" target="_blank" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/aesthetic_palace_vns?igsh=MXhqc2Y1c2ZyZ2Nrag%3D%3D" target="_blank" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.google.com/maps/place/Aesthetic+Palace/@25.2691138,82.9670889,16.86z/data=!4m6!3m5!1s0x398e3369e1e7fb0b:0x5b92eca2f4854e4f!8m2!3d25.2689824!4d82.9670967!16s%2Fg%2F11y8f9rnm1?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="social-icon">
            <i className="fas fa-map-marker-alt"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 The Aesthetic Palace. All rights reserved.</p>
          <p>Professional Makeup Artist & International Certified Clinical Cosmetologist <span style={{ color: '#ff6347' }}>❤️</span> by Anita Singh<span style={{ color: '#ff6347' }}> (Shalu)</span> </p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
