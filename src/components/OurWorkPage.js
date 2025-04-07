import React, { useEffect, useState } from "react";
import "../styles/OurWorkPage.css";
import Footer from "./Footer";

const workData = [
  {
    title: "Bridal Makeup",
    images: ["/M1.jpg", "/G1.JPEG", "/S3.JPG"],
    description: "Elegant bridal makeup with a flawless finish for your special day.",
  },
  {
    title: "Hair Styling",
    images: ["/A3.jpg", "/A2.jpg", "/A4.jpg"],
    description: "Creative hair styling, from curls to updos, to enhance your beauty.",
  },
  {
    title: "Advanced Beauty Treatment",
    images: ["/AdvBeautyTreat/laserHair.jpeg", "/AdvBeautyTreat/sWhite.jpg", "/AdvBeautyTreat/chemPeals.jpg"],
    description: "Premium skin care and treatments for a youthful and glowing look.",
  },
  {
    title: "Semi-Permanent Makeup",
    images: ["/SemiPermaMakeup/AdvHydra.jpg", "/SemiPermaMakeup/Lpig.jpg", "/SemiPermaMakeup/BBglow.jpg"],
    description: "Eyebrow defining, lip pigmentation, and BB glow treatments for long-lasting beauty.",
  },
  {
    title: "Hair Treatments",
    images: ["/HairService/AntiHair1.jpg", "/HairService/HBotex.webp", "/HairService/Ktreat.jpg"],
    description: "Hair Botox, Keratin, and Permanent Straightening treatments for smooth, healthy hair.",
  },
  {
    title: "Bridal & Non-Bridal Rentals",
    images: ["/BrideRental/Brent.jpg", "/BrideRental/Bjwel.jpg", "/BrideRental/NonB.webp"],
    description: "Lehenga & jewelry available on rent for your special occasions.",
  },
];

const OurWorkPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

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
