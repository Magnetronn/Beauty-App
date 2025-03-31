import React from "react";
import "../styles/CompleteServices.css";
import Footer from "./Footer";

const completeServicesList = [
  { name: "Makeup", image: "A1.jpg", description: "HD, Airbrush, Nude, 3D, Smokey Makeup by professionals." },
  { name: "Advanced Beauty Treatment", image: "A2.jpg", description: "Laser Hair Removal, Skin Whitening, Acne Treatment, Chemical Peels, and more." },
  { name: "Semi-Permanent Makeup", image: "A3.jpg", description: "Eyebrow Defining, Lip Pigmentation, BB Glow, Advanced Hydra Facial." },
  { name: "Hair Services", image: "A4.jpg", description: "Hair Botox, Permanent Straightening, Keratin, Anti Hair Fall Treatment." },
  { name: "Bridal & Non-Bridal Rental", image: "Z3.jpg", description: "Bridal and Non-Bridal Lehenga & Jewelry available on rent." }
];

const CompleteServices = () => {
  return (
    <>
      <section className="complete-services-section">
        <div className="complete-service-heading"><h2>Complete Services</h2></div>
        <div className="complete-services-container">
          {completeServicesList.map((service, index) => (
            <div key={index} className="complete-service-card">
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
