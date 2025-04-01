import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ServiceDetail.css";
import Footer from "./Footer";

const hairServices = [
  { name: "Hair Botox", image: "Z1.png", description: "Strengthen and repair damaged hair with Botox treatment." },
  { name: "Permanent Straightening", image: "/images/straightening.jpg", description: "Long-lasting straight hair with professional techniques." },
  { name: "Keratin Treatment", image: "/images/keratin.jpg", description: "Frizz-free and silky-smooth hair with keratin therapy." },
  { name: "Anti Hair Fall Treatment", image: "/images/anti-hairfall.jpg", description: "Prevent hair fall with specialized scalp treatments." },
];

const HairService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <section className="service-detail">
      <h2 className="service-detail-heading">Hair Services</h2>
      <div className="service-detail-cards-container">
        {hairServices.map((service, index) => (
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

export default HairService;
