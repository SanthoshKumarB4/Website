import React from "react";
import "./services.css";

const AboutUs = () => {
  // Enhanced service data with more detailed descriptions
  const mobileRepairServices = [
    { 
      name: "Screen Replacement", 
      icon: "🖥️",
      description: "Cracked or broken display? We replace screens with high-quality OEM or premium aftermarket parts."
    },
    { 
      name: "Battery Replacement", 
      icon: "🔋",
      description: "Is your phone dying too quickly? We install new batteries that restore original capacity."
    },
    { 
      name: "Charging Port Repair", 
      icon: "🔌",
      description: "Trouble charging your device? We clean or replace faulty charging ports for reliable connections."
    },
    { 
      name: "Water Damage Repair", 
      icon: "💧",
      description: "Accidental water exposure? Our specialized cleaning and component replacement can often save your device."
    },
    { 
      name: "Software Troubleshooting", 
      icon: "🛠️",
      description: "Frozen, slow, or malfunctioning software? We diagnose and fix operating system issues."
    },
    { 
      name: "Camera Repair", 
      icon: "📷",
      description: "Blurry photos or non-working camera? We repair or replace front and rear cameras."
    },
    { 
      name: "Speaker/Microphone Repair", 
      icon: "🎤",
      description: "Audio issues? We replace faulty speakers, microphones, and clean debris from audio ports."
    },
    { 
      name: "Back Glass Replacement", 
      icon: "📱",
      description: "Cracked back panel? We replace it while maintaining water resistance where applicable."
    }
  ];

  const laptopRepairServices = [
    { 
      name: "Screen Replacement", 
      icon: "💻",
      description: "We replace cracked or malfunctioning laptop displays with high-quality panels matching your original specs."
    },
    { 
      name: "Battery Replacement", 
      icon: "⚡",
      description: "Restore your laptop's mobility with a new battery that provides full runtime capacity."
    },
    { 
      name: "Motherboard Repair", 
      icon: "🧠",
      description: "Complex motherboard issues diagnosed and repaired by our certified technicians."
    },
    { 
      name: "Keyboard Replacement", 
      icon: "⌨️",
      description: "Sticky or non-responsive keys? We replace keyboards with OEM or high-quality alternatives."
    },
    { 
      name: "Virus Removal", 
      icon: "🦠",
      description: "Complete malware removal with data protection and system optimization."
    },
    { 
      name: "Data Recovery", 
      icon: "💾",
      description: "Critical file recovery from crashed drives, water-damaged devices, and corrupted storage."
    },
    { 
      name: "Hardware Upgrade", 
      icon: "📈",
      description: "Boost performance with RAM upgrades, SSD installations, and other enhancements."
    },
    { 
      name: "Overheating Solution", 
      icon: "🌡️",
      description: "Thermal paste replacement and cooling system cleaning to prevent overheating."
    }
  ];

  return (
    <div className="services-container">
      {/* Main Heading */}
      <section className="hero-section">
        <h1 className="main-title">Welcome to Venkateshwara Repair Center</h1>
        <p className="hero-description">
          Your trusted partner for all mobile and laptop repair needs. With over 15 years of experience, 
          we provide reliable, affordable, and fast repair services using genuine parts and certified techniques.
        </p>
      </section>

      {/* Laptop Repair Section */}
      <section className="service-section">
        <h2 className="section-title">
          <span className="icon">💻</span> Professional Laptop Repair Services
        </h2>
        <p className="section-intro">
          From hardware failures to software issues, our laptop repair experts can handle all major brands 
          including Dell, HP, Lenovo, Asus, Acer, and Apple MacBooks.
        </p>
        <div className="services-grid">
          {laptopRepairServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Repair Section */}
      <section className="service-section">
        <h2 className="section-title">
          <span className="icon">📱</span> Comprehensive Mobile Repair Services
        </h2>
        <p className="section-intro">
          We repair all smartphone models including iPhone, Samsung, OnePlus, Xiaomi, Oppo, Vivo and more. 
          Same-day service available for most repairs.
        </p>
        <div className="services-grid">
          {mobileRepairServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <h2 className="section-title">
          <span className="icon">🚀</span> Why Choose Venkateshwara Repair Center?
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Certified Technicians</h3>
            <p>Our team undergoes regular training to stay updated with the latest repair technologies.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Genuine Parts</h3>
            <p>We use OEM or premium-quality aftermarket parts for all repairs.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💲</div>
            <h3>Affordable Pricing</h3>
            <p>Competitive prices with no hidden charges - we provide upfront quotes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Fast Turnaround</h3>
            <p>70% of repairs completed same-day, with most taking just 1-2 hours.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Repair Warranty</h3>
            <p>All repairs come with a 90-day warranty for your peace of mind.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Doorstep Service</h3>
            <p>Free pickup and delivery available for all major repairs.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">
          <span className="icon">🌟</span> What Our Customers Say
        </h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "My MacBook Pro had water damage and wouldn't turn on. Venkateshwara Repair Center not only fixed it 
              but also recovered all my data. Their service was professional and reasonably priced."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👨</div>
              <div>
                <p className="author-name">Rajesh Kumar</p>
                <p className="author-location">Bangalore</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "I got my iPhone screen replaced in just 45 minutes while I waited. The new screen looks and works 
              perfectly - just like the original. Highly recommend their services!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👩</div>
              <div>
                <p className="author-name">Priya Sharma</p>
                <p className="author-location">Hyderabad</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "After being quoted an outrageous price by the brand service center for my laptop motherboard repair, 
              Venkateshwara fixed it for half the cost with a 3-month warranty. Excellent work!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">👨</div>
              <div>
                <p className="author-name">Amit Patel</p>
                <p className="author-location">Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">
          <span className="icon">❓</span> Frequently Asked Questions
        </h2>
        <div className="faq-grid">
          <div className="faq-card">
            <h3 className="faq-question">How long does a typical repair take?</h3>
            <p className="faq-answer">
              Most common repairs like screen replacements or battery changes are completed within 1-2 hours. 
              More complex repairs like motherboard issues may take 24-48 hours. We offer priority service for urgent cases.
            </p>
          </div>
          <div className="faq-card">
            <h3 className="faq-question">Do you provide warranty on repairs?</h3>
            <p className="faq-answer">
              Yes! All our repairs come with a 90-day warranty covering both parts and labor. Water damage repairs 
              have a 30-day warranty due to the nature of the issue.
            </p>
          </div>
          <div className="faq-card">
            <h3 className="faq-question">Can I get my device repaired at home?</h3>
            <p className="faq-answer">
              We offer free pickup and delivery service for repairs above ₹2000. For minor repairs, you can visit 
              our center or use our mobile technician service (available at nominal charges).
            </p>
          </div>
          <div className="faq-card">
            <h3 className="faq-question">How do I know if my device needs repair?</h3>
            <p className="faq-answer">
              Common signs include: battery draining quickly, screen flickering, device overheating, charging issues, 
              unresponsive touch, or physical damage. You can always bring it in for a free diagnostic.
            </p>
          </div>
          <div className="faq-card">
            <h3 className="faq-question">Do you repair gaming laptops and consoles?</h3>
            <p className="faq-answer">
              Yes, we specialize in gaming devices including ASUS ROG, Alienware, MSI laptops, and PlayStation/Xbox 
              consoles. We understand their unique cooling and performance requirements.
            </p>
          </div>
          <div className="faq-card">
            <h3 className="faq-question">What payment methods do you accept?</h3>
            <p className="faq-answer">
              We accept cash, UPI payments (PhonePe, Google Pay, Paytm), credit/debit cards, and net banking. 
              Corporate accounts and bulk repair discounts are available.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Repair Your Device?</h2>
          <p className="cta-text">
            Get a free diagnostic and quote today. We're committed to providing fast, reliable service 
            that gets your devices working like new again.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">📞 Call Now: +91 98765 43210</button>
            <button className="cta-button secondary">📅 Book Appointment Online</button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2 className="section-title">
          <span className="icon">📞</span> Contact Venkateshwara Repair Center
        </h2>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">🏢</div>
            <h3>Visit Us</h3>
            <p>#45, MG Road, Brigade Road Cross</p>
            <p>Bangalore, Karnataka - 560001</p>
            <p>Near Metro Station</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">⏰</div>
            <h3>Working Hours</h3>
            <p>Monday to Saturday: 9:30 AM - 8:00 PM</p>
            <p>Sunday: 10:00 AM - 4:00 PM</p>
            <p>Emergency Service Available</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <h3>Contact Info</h3>
            <p>Phone: +91 98765 43210</p>
            <p>WhatsApp: +91 98765 43210</p>
            <p>Email: info@venkateshwararepair.com</p>
          </div>
        </div>
       
      </section>
    </div>
  );
};

export default AboutUs;