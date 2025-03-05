import React, { useState } from 'react';
import './contact.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    sender: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ sender: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h2>CONTACT</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
          <div className="links">
            <div className="link"></div>
            <div className="link"></div>
            <div className="link"></div>
            <div className="link"></div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-item">
            Name: <input 
                type="text" 
                name="sender" 
                value={formData.sender}
                onChange={handleChange}
                required 
              />
              <label className={formData.sender ? 'active' : ''}></label>
            </div>
            <div className="form-item">
            Email:<input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <label className={formData.email ? 'active' : ''}></label>
            </div>
            <div className="form-item">
            Message: <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label className={formData.message ? 'active' : ''}></label>
            </div>
            <button className="submit-btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
