import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ServiceDetail.css";
import Footer from "./Footer";

const bridalRentalOptions = [
  { name: "Bridal Lehenga Rental", image: "M2.jpg", description: "Rent beautiful bridal lehengas for your special day." },
  { name: "Non-Bridal Lehenga Rental", image: "/images/non-bridal-lehenga.jpg", description: "Stylish lehengas available for every occasion." },
  { name: "Jewelry Rental", image: "/images/jewelry-rental.jpg", description: "Get premium jewelry sets for weddings and special events." },
];

const BridalRental = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <section className="service-detail">
      <h2 className="service-detail-heading">Bridal & Non-Bridal Rental</h2>
      <div className="service-detail-cards-container">
        {bridalRentalOptions.map((service, index) => (
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

export default BridalRental;
