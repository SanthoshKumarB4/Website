import React from 'react';
import './mobile.css';
import image1 from "../assets/mobile.jpg";
import image2 from "../assets/laptop.jpg";
import { Link } from 'react-router';
const Mainpage = () => {
  return (
    <div className='mainpage'>
      <div className="main">
        <img src={image1} alt="Responsive 2-column layout" />
        <div>
          <h1>Mobile And Laptop Services</h1>
          <p>
            We specialize in delivering top-notch mobile services tailored to meet your needs. Whether you're looking for mobile repairs,  device upgrades, or expert technical support,
           . We specialize in providing fast,and affordable laptop services to keep your device running smoothly. our team of experienced technicians is here to help.

          </p>
         <Link to='mobilepage'>Learn More</Link> 
        </div>
      </div>
      <div className="main">
        <img src={image2} alt="Responsive 2-column layout" />
        <div>
          <h1></h1>
          <p>
          </p>
          <a href="/laptop-services">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;