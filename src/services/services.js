import React from "react";
import "./services.css";

const AboutUs = () => {
  // Sample data for services
  const mobileRepairServices = [
    { name: "Screen Replacement", icon: "🖥️" },
    { name: "Battery Replacement", icon: "🔋" },
    { name: "Charging Port Repair", icon: "🔌" },
    { name: "Water Damage Repair", icon: "💧" },
    { name: "Software Troubleshooting", icon: "🛠️" },
    { name: "Camera Repair", icon: "📷" },
  ];

  const laptopRepairServices = [
    { name: "Screen Replacement", icon: "🖥️" },
    { name: "Battery Replacement", icon: "🔋" },
    { name: "Motherboard Repair", icon: "💻" },
    { name: "Keyboard Replacement", icon: "⌨️" },
    { name: "Virus Removal", icon: "🦠" },
    { name: "Data Recovery", icon: "💾" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Main Heading */}
      <h2 className="title">Welcome to Venkateshwara Repair Center</h2>
     

      {/* Laptop Repair Section */}
      <div className="mb-12">
        <h3 className="section-title">💻 Laptop Repair Services</h3>
        <div className="services-grid">
          {laptopRepairServices.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <p className="service-name">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Repair Section */}
      <div className="mb-12">
        <h3 className="section-title">📱 Mobile Repair Services</h3>
        <div className="services-grid">
          {mobileRepairServices.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <p className="service-name">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h3 className="section-title">🚀 Why Choose Us?</h3>
        <ul className="why-choose-list">
          <li>✅ **Certified Technicians** – Experienced professionals to handle your devices.</li>
          <li>✅ **Genuine Parts** – Only high-quality spare parts are used.</li>
          <li>✅ **Affordable Pricing** – Transparent pricing with no hidden charges.</li>
          <li>✅ **Fast Turnaround** – Most repairs are completed **within hours**.</li>
          <li>✅ **Warranty on Repairs** – Get warranty assurance on all repairs.</li>
          <li>✅ **Home Pickup & Delivery** – Convenient repair service at your doorstep.</li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h3 className="section-title">🌟 Customer Testimonials</h3>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"Great service! My laptop screen was replaced in under an hour. Highly recommend XYZ Repair Center!"</p>
            <p className="testimonial-author">– John Doe</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"Fixed my phone's charging port quickly and at a reasonable price. Very professional staff!"</p>
            <p className="testimonial-author">– Jane Smith</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"Excellent data recovery service. They saved all my important files. Thank you!"</p>
            <p className="testimonial-author">– Mike Johnson</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq">
        <h3 className="section-title">❓ Frequently Asked Questions</h3>
        <div className="faq-grid">
          <div className="faq-card">
            <h4 className="faq-question">Q: How long does a typical repair take?</h4>
            <p className="faq-answer">A: Most repairs, such as **screen replacements or battery changes**, are completed **within 1-2 hours**.</p>
          </div>
          <div className="faq-card">
            <h4 className="faq-question">Q: Do you offer a warranty on repairs?</h4>
            <p className="faq-answer">A: Yes, we provide a **warranty** on all repairs to ensure your satisfaction.</p>
          </div>
          <div className="faq-card">
            <h4 className="faq-question">Q: Can I book a repair online?</h4>
            <p className="faq-answer">A: Yes! You can **schedule a repair online**, and we also offer **home pickup and delivery**.</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h3 className="cta-title">Ready to Get Your Device Repaired?</h3>
        <p className="cta-text">Schedule a repair today and experience the best service in town!</p>
        <button className="cta-button">Book Now</button>
      </div>

      {/* Contact Us Section */}
      <div className="contact-section">
        <h3 className="section-title">📞 Contact Us</h3>
        <p className="contact-text">Have a question or need a repair? **Visit us or contact us today!**</p>
        <p className="contact-info">📍 Address: 123 Repair Street, City, Country</p>
        <p className="contact-info">📞 Phone: +123 456 7890</p>
        <p className="contact-info">📧 Email: support@xyzrepair.com</p>
      </div>
    </div>
  );
};

export default AboutUs;