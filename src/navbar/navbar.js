import React, { useState } from 'react';
import './navbar.css'; // Import the CSS file
import { Link as ScrollLink } from 'react-scroll'; 
import { Link } from 'react-router';
import logo from "../assets/logo2.png"; // Import your logo image

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/"><img src={logo} alt="Company Logo" className="image" /></Link>

          <div className="burger" id="burger" onClick={toggleMenu}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>

          <span className={`overlay ${isMenuActive ? 'is-active' : ''}`} onClick={closeMenu}></span>

          <div className={`menu ${isMenuActive ? 'is-active' : ''}`} id="menu">
            {/* Close Button */}
            <button className="close-btn" onClick={closeMenu}>&times;</button>

            <ul className="menu-inner">
              <Link to="/" onClick={closeMenu}><li className="menu-item"><a className="menu-link">Home</a></li></Link>
              <Link to="services" onClick={closeMenu}><li className="menu-item"><a className="menu-link">Services</a></li></Link>
              <Link to="issue" onClick={closeMenu}><li className="menu-item"><a className="menu-link">Send Issue</a></li></Link>
              <Link to="product" onClick={closeMenu}><li className="menu-item"><a className="menu-link">Products</a></li></Link>
              <ScrollLink to="contact" smooth={true} duration={900} onClick={closeMenu}>
                <li className="menu-item"><a className="menu-link">Contact</a></li>
              </ScrollLink>
            </ul>
          </div>

          <Link to="admin"><a className="menu-block">Admin</a></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
