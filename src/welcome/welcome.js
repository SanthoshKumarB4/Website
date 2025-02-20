import React from "react";
import "./welcome.css"; // Import the CSS file

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to Mobile Services</h1>
        <p className="welcome-text">
          Get the best mobile solutions at your fingertips. Explore our services now!
        </p>
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
};

export default WelcomePage;
