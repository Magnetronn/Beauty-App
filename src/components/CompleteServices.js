import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CompleteServices.css";
import Footer from "./Footer";

const CompleteServices = () => {
  const navigate = useNavigate();

  const services = [
    { name: "Makeup", image: "/A1.jpg", description: "HD, Airbrush, Nude, 3D, Smokey Makeup by professionals.", path: "/makeup" },
    { name: "Advanced Beauty Treatment", image: "/AdvSkinT.jpg", description: "Laser Hair Removal, Skin Whitening, Acne Treatment, Chemical Peels, and more.", path: "/advanced-beauty" },
    { name: "Hair Services", image: "/A4.jpg", description: "Hair Botox, Permanent Straightening, Keratin, Anti Hair Fall Treatment.", path: "/hair-service" },
    { name: "Semi-Permanent Makeup", image: "/A3.jpg", description: "Eyebrow Defining, Lip Pigmentation, BB Glow, Advanced Hydra Facial.", path: "/semi-permanent-makeup" },
    { name: "Bridal & Non-Bridal Rental", image: "/Z3.jpg", description: "Bridal and Non-Bridal Lehenga & Jewelry available on rent.", path: "/bridal-rental" },
  ];

  return (
    <>
      <section className="complete-services-section">
        <div className="complete-service-heading"><h2>Complete Services</h2></div>
        <div className="complete-services-container">
          {services.map((service, index) => (
            <div
              key={index}
              className="complete-service-card"
              onClick={() => navigate(service.path)}
              style={{ cursor: "pointer" }} // Makes it look clickable
            >
              <img src={service.image} alt={service.name} className="complete-service-image" />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CompleteServices;
