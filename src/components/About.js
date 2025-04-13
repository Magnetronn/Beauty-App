import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
      <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>About Me</h2>
        </Link>
        <p>
          I am a professional makeup artist with over <span style={{ color: '#ff6347' }}>5</span> years of experience in transforming my clients' looks for special occasions, photoshoots, and more. My passion is to help people feel beautiful and confident in their own skin.
        </p>
      </div>
    </section>
  );
};

export default About;
