import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ServiceDetail.css";
import Footer from "./Footer";

const semiPermanentMakeupServices = [
  { name: "Eyebrow Defining", image: "/SemiPermaMakeup/Edif.jpg", description: "Enhance your eyebrows with precision and natural-looking definition." },
  { name: "Lip Pigmentation", image: "/SemiPermaMakeup/Lpig.jpg", description: "Get naturally tinted lips with semi-permanent pigmentation." },
  { name: "BB Glow", image: "/SemiPermaMakeup/BBglow.jpg", description: "Achieve a radiant, even skin tone with our BB Glow treatment." },
  { name: "Advanced Hydra Facial", image: "/SemiPermaMakeup/AdvHydra.jpg", description: "Deep cleansing and hydration for healthy, glowing skin." },
];

const SemiPermanentMakeup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <section className="service-detail">
      <h2 className="service-detail-heading">Semi-Permanent Makeup</h2>
      <div className="service-detail-cards-container">
        {semiPermanentMakeupServices.map((service, index) => (
          <div key={index} className="service-detail-card">
            <img src={service.image} alt={service.name} className="service-detail-card-image" />
            <h3 className="service-detail-card-title">{service.name}</h3>
            <p className="service-detail-card-description">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
                <Link to="/contact" className="custom-button enquiry-button">📩 Enquiry Services</Link>
                <Link to="/services" className="custom-button back-button">⬅ Back to All Services</Link>
       </div>
    </section>
    <Footer />
    </>
  );
};

export default SemiPermanentMakeup;
