import React, { useState } from 'react';  // Ensure path is correct for your CSS file

const Services = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const flipCard = (card) => {
    if (flippedCard === card) {
      setFlippedCard(null);  // Unflip the card if the same one is clicked again
    } else {
      setFlippedCard(card);
    }
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className='serv-heading'><h1>My Services</h1></div>
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
                <p>Elegant bridal makeup to make you feel beautiful on your special day.</p>
              </div>
              <div className="card-back">
                <h3>Bridal Makeup</h3>
                <p>Elegant bridal makeup to make you feel beautiful on your special day.</p>
                <button
                  className="inquiry-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the flip when button is clicked
                    window.location.href = '#contact'; // Redirect to the contact section
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
                <h3>Photoshoot Makeup</h3>
                <img src="p3.jpeg" alt="Photoshoot Makeup" />
                <p>Expert makeup for photoshoots to highlight your best features.</p>
              </div>
              <div className="card-back">
                <h3>Photoshoot Makeup</h3>
                <p>Expert makeup for photoshoots to highlight your best features.</p>
                <button
                  className="inquiry-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the flip when button is clicked
                    window.location.href = '#contact'; // Redirect to the contact section
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
                <h3>Party Makeup</h3>
                <img src="s1.jpg" alt="Party Makeup" />
                <p>Perfect makeup for any party or event, designed to last all day.</p>
              </div>
              <div className="card-back">
                <h3>Party Makeup</h3>
                <p>Perfect makeup for any party or event, designed to last all day.</p>
                <button
                  className="inquiry-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the flip when button is clicked
                    window.location.href = '#contact'; // Redirect to the contact section
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
