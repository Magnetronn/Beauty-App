import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative', paddingBottom: '75%', height: 0, overflow: 'hidden' }}>
        <iframe
          title="Aesthetic Palace Location"
          style={{
            position: 'absolute',
            top: 15,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
            borderRadius: 20
          }}
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=Aesthetic+palace%2C+near+Gyandeep+Academy%2C+Anil+Nagar+Colony%2C+Chauraha%2C+Chitaipur%2C+Varanasi%2C+Uttar+Pradesh+221106&layer=c&output=embed"
        ></iframe>
      </div>
      <a
        href="https://eatcolumbus.com/"
        rel="noopener noreferrer"
        target="_blank"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          border: 0
        }}
      >
        eatcolumbus.com
      </a>
    </div>
  );
};

export default GoogleMapEmbed;
