import React from "react";
import "./welcome.css"; // Import the CSS file
import { Link as ScrollLink } from 'react-scroll'; 




const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to Venkateshwara Mobile Services</h1>
        <p className="welcome-text">
          Get the best mobile solutions at your fingertips. Explore our services now!
        </p>
        <ScrollLink to="mobile" smooth={true} duration={900}><button className="explore-button">Explore Now</button></ScrollLink>
      </div>
    </div>
  );
};

export default WelcomePage;
