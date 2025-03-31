import React from 'react';
import '../styles/CompleteServices.css';

const completeServicesList = [
  { name: 'Makeup', image: 'makeup.jpg', description: 'HD, Airbrush, Nude, 3D, Smokey Makeup by professionals.' },
  { name: 'Advanced Beauty Treatment', image: 'beauty_treatment.jpg', description: 'Laser Hair Removal, Skin Whitening, Acne Treatment, Chemical Peels, and more.' },
  { name: 'Semi-Permanent Makeup', image: 'semi_makeup.jpg', description: 'Eyebrow Defining, Lip Pigmentation, BB Glow, Advanced Hydra Facial.' },
  { name: 'Hair Services', image: 'hair_services.jpg', description: 'Hair Botox, Permanent Straightening, Keratin, Anti Hair Fall Treatment.' },
  { name: 'Bridal & Non-Bridal Rental', image: 'bridal_rental.jpg', description: 'Bridal and Non-Bridal Lehenga & Jewelry available on rent.' }
];

const CompleteServices = () => {
  return (
    <section className="services-section">
      <h2>Complete Services</h2>
      <div className="services-container">
        {completeServicesList.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompleteServices;
