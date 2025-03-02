import React, { useState } from 'react';
import './contact.css';

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
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ sender: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h2>CONTACT</h2>
          <div className="links">
            <div className="link">
              <a href="#linkedin">
                <img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" />
              </a>
            </div>
            <div className="link">
              <a href="#github">
                <img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" />
              </a>
            </div>
            <div className="link">
              <a href="#codepen">
                <img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" />
              </a>
            </div>
            <div className="link">
              <a href="#email">
                <img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <input 
                type="text" 
                name="sender" 
                value={formData.sender}
                onChange={handleChange}
                required 
              />
              <label className={formData.sender ? 'active' : ''}>Name:</label>
            </div>
            <div className="form-item">
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <label className={formData.email ? 'active' : ''}>Email:</label>
            </div>
            <div className="form-item">
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label className={formData.message ? 'active' : ''}>Message:</label>
            </div>
            <button className="submit-btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;