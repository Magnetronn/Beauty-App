import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ServiceDetail.css";
import Footer from "./Footer";

const makeupServices = [
  { name: "HD Makeup", image: "A1.jpg", description: "Flawless high-definition makeup for a radiant look." },
  { name: "Airbrush Makeup", image: "/images/airbrush-makeup.jpg", description: "Long-lasting, lightweight airbrush makeup for special events." },
  { name: "Nude Makeup", image: "/images/nude-makeup.jpg", description: "Minimalist makeup to enhance natural beauty." },
  { name: "3D Makeup", image: "/images/3d-makeup.jpg", description: "Three-dimensional makeup for depth and vibrancy." },
  { name: "Smokey Makeup", image: "/images/smokey-makeup.jpg", description: "Bold and dramatic smokey eye makeup." },
];

const Makeup = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
    <section className="service-detail">
      <h2 className="service-detail-heading">Makeup Services</h2>
      <div className="service-detail-cards-container">
        {makeupServices.map((service, index) => (
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

export default Makeup;
