import React from 'react';
import './mobile.css'; // Import the CSS file
import image1 from "../assets/mobile.jpg"; // Import the image
import image2 from "../assets/laptop.jpg"; // Import the image

const Mainpage = () => {
  return (
    <div>
      <div className="main">
        <img src={image1} alt="Responsive 2-column layout" />
        <div>
          <h1>Mobile Services</h1>
          <p>
          we specialize in delivering top-notch mobile services tailored to meet your needs. Whether you're looking for mobile repairs, software solutions, device upgrades, or expert technical support, we've got you covered!          </p>
        </div>
      </div>
      <div className="main">
        <img src={image2} alt="Responsive 2-column layout" />
        <div>
          <h1> Laptop Services</h1>
          <p>
          we specialize in providing fast, reliable, and affordable laptop services to keep your device running smoothly. Whether you need repairs, upgrades, or maintenance, our team of experienced technicians is here to help.          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;