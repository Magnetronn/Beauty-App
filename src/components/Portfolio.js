import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, imgSrc: 'M1.jpg', alt: 'Portfolio Item 1' },
    { id: 2, imgSrc: 's3.JPG', alt: 'Portfolio Item 2' },
    { id: 3, imgSrc: 'G1.JPEG', alt: 'Portfolio Item 3' },
    { id: 4, imgSrc: 'M2.jpg', alt: 'Portfolio Item 4' },
    { id: 5, imgSrc: 'p5.JPEG', alt: 'Portfolio Item 5' },
    { id: 6, imgSrc: 'M6.jpg', alt: 'Portfolio Item 6' },
    { id: 7, imgSrc: 'p1.JPEG', alt: 'Portfolio Item 7' },
    { id: 8, imgSrc: 'G2.JPEG', alt: 'Portfolio Item 8' },
    
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
      <div className='portfolio-heading'>
        <Link to="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>Our Works</h2>
        </Link>
      </div>
        <div className="portfolio-grid">
          {portfolioItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <img src={item.imgSrc} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
