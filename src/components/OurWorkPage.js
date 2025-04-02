import React, { useState } from "react";
import "../styles/OurWorkPage.css";
import Footer from "./Footer";

const workData = [
  {
    title: "Bridal Makeup",
    images: ["/M1.jpg", "/M2.jpg", "/M3.jpg"],
    description: "Elegant bridal makeup with a flawless finish for your special day.",
  },
  {
    title: "Hair Styling",
    images: ["/images/hair1.jpg", "/images/hair2.jpg", "/images/hair3.jpg"],
    description: "Creative hair styling, from curls to updos, to enhance your beauty.",
  },
  {
    title: "Advanced Beauty Treatment",
    images: ["/images/beauty1.jpg", "/images/beauty2.jpg", "/images/beauty3.jpg"],
    description: "Premium skin care and treatments for a youthful and glowing look.",
  },
  {
    title: "Semi-Permanent Makeup",
    images: ["/images/semi1.jpg", "/images/semi2.jpg", "/images/semi3.jpg"],
    description: "Eyebrow defining, lip pigmentation, and BB glow treatments for long-lasting beauty.",
  },
  {
    title: "Hair Treatments",
    images: ["/images/hairtreat1.jpg", "/images/hairtreat2.jpg", "/images/hairtreat3.jpg"],
    description: "Hair Botox, Keratin, and Permanent Straightening treatments for smooth, healthy hair.",
  },
  {
    title: "Bridal & Non-Bridal Rentals",
    images: ["/images/rent1.jpg", "/images/rent2.jpg", "/images/rent3.jpg"],
    description: "Lehenga & jewelry available on rent for your special occasions.",
  },
];

const OurWorkPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <section className="our-work-page">
      <h2 className="page-heading">Our Work</h2>
      <div className="work-gallery">
        {workData.map((work, index) => (
          <div className="work-card" key={index}>
            <div className="work-images">
              {work.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={work.title}
                  className="work-image"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            <h3 className="work-title">{work.title}</h3>
            <p className="work-description">{work.description}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <img src={selectedImage} alt="Selected Work" className="lightbox-image" />
          </div>
        </div>
      )}
    </section>
    <Footer />
    </>
  );
};

export default OurWorkPage;
