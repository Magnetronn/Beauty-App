import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPaintBrush, FaMagic, FaTint, FaCut, FaGem } from "react-icons/fa"; 
import "../styles/AboutPage.css";
import Footer from "./Footer";

const AboutPage = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <section className="about-page">
        <div className="about-card-container">
          <div className="about-card">
            <h2 className="about-heading">About Us</h2>
            <p>
              Welcome to <strong>Asthatic Palace</strong>, your premier beauty destination. We specialize in professional makeup, hair services, advanced beauty treatments, and bridal rentals. Our expert team is dedicated to making you look and feel your best for any occasion.
            </p>
            <p>
              At <strong>Asthatic Palace</strong>, we believe that beauty is an art. With years of experience in the industry, we offer high-quality services tailored to your needs. Whether it's a wedding, party, or a personal beauty transformation, we ensure you receive the best care. Our team stays updated with the latest beauty trends and techniques to provide you with the most innovative and effective treatments.
            </p>
            <p>
              We take pride in using <strong>premium products</strong> and personalized approaches to meet the unique beauty requirements of each client. Our goal is to enhance your natural beauty while providing a <strong>relaxing and luxurious experience</strong>, you can checkout our below services.
            </p>
          </div>
          
          <div className="studio-image-container">
            <img src="/Z32.png" alt="Our Studio" className="studio-image" />
          </div>

          {/* Decorative Symbol */}
          <h3 className="about-services-heading">Our Services</h3>
          <div className="separator">✦ ✧ ✦</div>

          <div className="about-services-cards-container">
            <Link to="/makeup" className="about-service-card">
              <FaPaintBrush className="about-service-icon" />
              <h4>Makeup</h4>
              <p>HD, Airbrush, Nude, 3D, Smokey</p>
            </Link>
            <Link to="/advanced-beauty" className="about-service-card">
              <FaMagic className="about-service-icon" />
              <h4>Advanced Beauty Treatment</h4>
              <p>Laser Hair Removal, Skin Whitening, Acne Treatment</p>
            </Link>
            <Link to="/semi-permanent-makeup" className="about-service-card">
              <FaTint className="about-service-icon" />
              <h4>Semi-Permanent Makeup</h4>
              <p>Eyebrow Defining, Lip Pigmentation, BB Glow</p>
            </Link>
            <Link to="/hair-service" className="about-service-card">
              <FaCut className="about-service-icon" />
              <h4>Hair Services</h4>
              <p>Hair Botox, Permanent Straightening, Keratin Treatment</p>
            </Link>
            <Link to="/bridal-rental" className="about-service-card">
              <FaGem className="about-service-icon" />
              <h4>Bridal & Non-Bridal Rentals</h4>
              <p>Lehenga & Jewelry available on rent</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
