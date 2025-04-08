import React from 'react';
import './mobile.css';
import image1 from "../assets/mobile.jpg";
import image2 from "../assets/laptop.jpg";
import { Link } from 'react-router-dom';
import { FaTools, FaClock, FaShieldAlt, FaMobileAlt, FaLaptop, FaArrowRight } from 'react-icons/fa';

const Mainpage = () => {
  return (
    <div className='mainpage'>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Expert Device Repair Services</h1>
          <p>Fast, reliable, and affordable solutions for all your mobile and laptop problems</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn primary">
              <FaTools /> Our Services
            </Link>
            <Link to="/issue" className="btn secondary">
              <FaClock /> Quick Repair
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <div className="main-section">
        <div className="main">
          <img src={image1} alt="Mobile repair services" />
          <div className="content">
            <h1>Comprehensive Mobile Services</h1>
            <p>
              We specialize in delivering top-notch mobile services tailored to meet your needs. Our certified technicians 
              handle everything from screen replacements to complex motherboard repairs using premium quality parts.
            </p>
            <ul className="service-list">
              <li><FaMobileAlt /> Screen replacements with OEM-quality displays</li>
              <li><FaMobileAlt /> Battery replacements that restore original capacity</li>
              <li><FaMobileAlt /> Water damage diagnostics and repair</li>
              <li><FaMobileAlt /> Software troubleshooting and optimization</li>
              <li><FaMobileAlt /> Charging port and microphone repairs</li>
            </ul>
            <Link to='/services' className="learn-more">
              Explore Mobile Services <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="main">
          <img src={image2} alt="Laptop repair services" />
          <div className="content">
            <h1>Professional Laptop Solutions</h1>
            <p>
              We provide expert laptop services to keep your device running smoothly. From hardware upgrades to virus removal, 
              our technicians have the skills to handle all major brands and models.
            </p>
            <ul className="service-list">
              <li><FaLaptop /> Screen and keyboard replacements</li>
              <li><FaLaptop /> Motherboard diagnostics and repair</li>
              <li><FaLaptop /> Data recovery services</li>
              <li><FaLaptop /> Performance upgrades (SSD, RAM)</li>
              <li><FaLaptop /> Overheating and cooling system repairs</li>
            </ul>
            <Link to='/services' className="learn-more">
              Explore Laptop Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Our Repair Services?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaClock className="feature-icon" />
            <h3>Fast Turnaround</h3>
            <p>Most repairs completed within 24 hours with our express service option.</p>
          </div>
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>90-Day Warranty</h3>
            <p>All repairs come with a warranty covering both parts and labor.</p>
          </div>
          <div className="feature-card">
            <FaTools className="feature-icon" />
            <h3>Certified Technicians</h3>
            <p>Our experts undergo regular training on the latest repair techniques.</p>
          </div>
          <div className="feature-card">
            <FaMobileAlt className="feature-icon" />
            <h3>Quality Parts</h3>
            <p>We use OEM or premium aftermarket components for all repairs.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="process-section">
        <h2>Our Simple Repair Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Diagnosis</h3>
            <p>Bring your device in for a free diagnostic assessment.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Quote</h3>
            <p>We provide a transparent, no-obligation repair quote.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Repair</h3>
            <p>Our technicians perform the repair using quality parts.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Testing</h3>
            <p>We thoroughly test your device before returning it.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Repair Your Device?</h2>
          <p>Get a free estimate today or track your existing repair status.</p>
          <div className="cta-buttons">
            <Link to="/issue" className="btn primary">
              Request Service
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainpage;