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
    
      <div className="contact-box">
        <div className="contact-links">
          <h3>CONTACT</h3>
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
          <p>Have any questions or need assistance? Feel free to reach out to us! We're here to help with all your laptop service needs. You can contact us via email or phone, and we'll get back to you as soon as possible.
          <br></br>
          <br></br>📧 Email: Venkateshwara@gmail.com
          <br></br>📞 Phone:  9342948977
          <br></br>📍 Address: 123 Tech Street, City, Country</p>
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
  
  );
};

export default ContactSection;
