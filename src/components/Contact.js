import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleMapEmbed from './GoogleMapEmbed';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.location || !formData.service || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://aesthetic-palace.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFormStatus(result.success);
        setFormData({ name: '', email: '', phone: '', location: '', service: '', message: '' });
      } else {
        setFormStatus(result.error);
      }
    } catch (error) {
      setFormStatus('Failed to send message. Try again later.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
      <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>Contact Us</h2>
        </Link>
        <p>
          Have questions about our beauty services? Reach out on 📞 <span style={{ color: '#ff6347' }}>9170094674</span> / 📧 <span style={{ color: '#ff6347' }}>aestheticpalace03@gmail.com</span> and let us know how we can help!
       </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" pattern="[0-9]{10}" maxLength="10" required />
          </div>

          <div className="form-group">
            <label htmlFor="location">Your Location</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Enter your city or address" required />
          </div>

          <div className="form-group">
            <label htmlFor="service">Select Service</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} required>
              <option value="">-- Choose a Service --</option>
              <option value="Haircut">Haircut</option>
              <option value="Facial">Facial</option>
              <option value="Makeup">Makeup</option>
              <option value="Nail Art">Nail Art</option>
              <option value="Bridal Package">Bridal Package</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" required />
          </div>

          {formStatus && <div className="form-status">{formStatus}</div>}

          <button type="submit" className="submit-btn">Send Enquiry</button>
        </form>
      </div>
      <h1>Our Location</h1>
      <div className="separator">✦ ✧ ✦</div>
      <GoogleMapEmbed/>
    </section>
  );
};

export default Contact;
