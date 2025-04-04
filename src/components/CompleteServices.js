import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CompleteServices.css";
import Footer from "./Footer";

const CompleteServices = () => {
  const navigate = useNavigate();
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

  const services = [
    { name: "Makeup", image: "/AllServices/A1.jpg", description: "HD, Airbrush, Nude, 3D, Smokey Makeup by professionals.", path: "/makeup" },
    { name: "Advanced Beauty Treatment", image: "/AllServices/AdvSkinT.jpg", description: "Laser Hair Removal, Skin Whitening, Acne Treatment, Chemical Peels, and more.", path: "/advanced-beauty" },
    { name: "Hair Services", image: "/AllServices/HairS.jpg", description: "Hair Botox, Permanent Straightening, Keratin, Anti Hair Fall Treatment.", path: "/hair-service" },
    { name: "Semi-Permanent Makeup", image: "/AllServices/SPmakup.jpg", description: "Eyebrow Defining, Lip Pigmentation, BB Glow, Advanced Hydra Facial.", path: "/semi-permanent-makeup" },
    { name: "Bridal & Non-Bridal Rental", image: "/AllServices/Brental.jpg", description: "Bridal and Non-Bridal Lehenga & Jewelry available on rent.", path: "/bridal-rental" },
  ];

  return (
    <>
      <section className="complete-services-section">
        <div className="complete-service-heading"><h2>Services</h2></div>
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
