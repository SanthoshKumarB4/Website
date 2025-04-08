import React from 'react';
import './footer.css'; // Import the CSS file
import {  useLocation } from 'react-router-dom'; 
import logo from "../assets/logo2.png"; // Import your logo image
import { Link as ScrollLink } from 'react-scroll'; 
import { Link } from 'react-router';

const Footer = () => {
   const location = useLocation();
  
    // Don't render navbar if on admin page
    if (location.pathname === '/admin') {
      return null;
    }
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
      <div className="footer-logo">
      <img src={logo} alt="Company Logo" className="logo" />
       <ul className="footer-links">
        <Link to="/" ><li className="menu-item"><a className="menu-link" >Home</a></li></Link>
        <Link to="services"> <li className="menu-item"><a className="menu-link" >Services</a></li></Link>
        <Link to="issue"> <li className="menu-item"><a className="menu-link" >Send Issue</a></li></Link>
        <Link to="product"> <li className="menu-item"><a className="menu-link">Products</a></li></Link>
        <ScrollLink  to="contact" smooth={true} duration={900}><li className="menu-item"><a className="menu-link" >contact</a></li></ScrollLink>
       </ul>
      </div>
      </div>
       
       
    </footer>
  );
};

export default Footer;