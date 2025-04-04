import React, { useState } from 'react';

const Services = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const flipCard = (card) => {
    if (flippedCard === card) {
      setFlippedCard(null); 
    } else {
      setFlippedCard(card);
    }
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className='serv-heading'><h1>Services</h1></div>
        <div className="service-cards">
          {/* Bridal Makeup Card */}
          <div
            className={`service-card ${flippedCard === 'bridal' ? 'flipped' : ''}`}
            onClick={() => flipCard('bridal')}
          >
            <div className="card-inner">
              <div className="card-front">
                <h3>Bridal Makeup</h3>
                <img src="/M3.jpg" alt="Bridal Makeup" />
                <p>Elegant bridal makeup to make you feel beautiful and look gorgeous on your special day.</p>
              </div>
              <div className="card-back">
                <h3>Bridal Makeup</h3>
                <p>Elegant bridal makeup to make you feel beautiful and look gorgeous on your special day.</p>
                <button
                  className="inquiry-btn"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    window.location.href = '#contact';
                  }}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>

          {/* Photoshoot Makeup Card */}
          <div
            className={`service-card ${flippedCard === 'photoshoot' ? 'flipped' : ''}`}
            onClick={() => flipCard('photoshoot')}
          >
            <div className="card-inner">
              <div className="card-front">
                <h3>Advanced Beauty Treatment</h3>
                <img src="/AllServices/AdvSkinT.jpg" alt="Advanced Beauty Treatment" />
                <p>we also provide permanent hair removal and Advanced skin brightening treatments and many more.</p>
              </div>
              <div className="card-back">
                <h3>Advanced Beauty Treatment</h3>
                <p>we also provide permanent hair removal and Advanced skin brightening treatments and many more.</p>
                <button
                  className="inquiry-btn"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    window.location.href = '#contact';
                  }}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>

          {/* Party Makeup Card */}
          <div
            className={`service-card ${flippedCard === 'party' ? 'flipped' : ''}`}
            onClick={() => flipCard('party')}
          >
            <div className="card-inner">
              <div className="card-front">
                <h3>Bridal Rental</h3>
                <img src="/BrideRental/Bjwel.jpg" alt="Bridal Rental" />
                <p>Rent beautiful bridal lehengas for your special day and we are also provide premium jewelry sets for weddings and special events.</p>
              </div>
              <div className="card-back">
                <h3>Bridal Rental</h3>
                <p>Rent beautiful bridal lehengas for your special day and we are also provide premium jewelry sets for weddings and special events.</p>
                <button
                  className="inquiry-btn"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    window.location.href = '#contact'; 
                  }}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
