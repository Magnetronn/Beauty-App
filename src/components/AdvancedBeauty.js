import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ServiceDetail.css";
import Footer from "./Footer";

const beautyServices = [
  { name: "Laser Hair Removal", image: "A2.jpg", description: "Painless and permanent hair removal treatment." },
  { name: "Skin Whitening", image: "/images/skin-whitening.jpg", description: "Advanced skin brightening treatments for an even tone." },
  { name: "Acne Treatment", image: "/images/acne-treatment.jpg", description: "Effective solutions for acne and blemish-free skin." },
  { name: "Chemical Peels", image: "/images/chemical-peels.jpg", description: "Skin rejuvenation and exfoliation using chemical peels." },
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
      <Link to="/services" className="back-button">Back to Services</Link>
    </section>
    <Footer />
    </>
  );
};

export default AdvancedBeauty;
