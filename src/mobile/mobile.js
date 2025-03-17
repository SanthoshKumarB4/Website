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
         <Link to='services'>Learn More</Link> 
        </div>
      </div>
      <div className="main">
        <img src={image2} alt="Responsive 2-column layout" />
        <div>
        <h1>Send Mobile And Laptop Issues</h1>
          <p>
          Welcome to our Mobile and Laptop Service Management platform! We understand how frustrating it can be when your devices stop working. Whether it’s a cracked screen, battery issues, slow performance, or software malfunctions, we’re here to help. Our platform allows you to easily submit your service request, track repair status using a unique ID, and get your device fixed quickly and efficiently.</p>
          <Link to='issue'>Learn More</Link> 
        </div>
      </div>
    </div>
  );
};

export default Mainpage;