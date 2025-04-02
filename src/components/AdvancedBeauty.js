import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ServiceDetail.css";
import Footer from "./Footer";

const beautyServices = [
  { name: "Laser Hair Removal", image: "/laserHair.jpeg", description: "Painless and permanent hair removal treatment." },
  { name: "Skin Whitening", image: "/sWhite.jpg", description: "Advanced skin brightening treatments for an even tone." },
  { name: "Acne Treatment", image: "/AcneTreat.jpg", description: "Effective solutions for acne and blemish-free skin." },
  { name: "Chemical Peels", image: "/chemPeals.jpg", description: "Skin rejuvenation and exfoliation using chemical peels." },
];

const AdvancedBeauty = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <section className="service-detail">
      <h2 className="service-detail-heading">Advanced Beauty Treatments</h2>
      <div className="service-detail-cards-container">
        {beautyServices.map((service, index) => (
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

export default AdvancedBeauty;
