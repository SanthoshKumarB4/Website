import React, { useState } from 'react';
import './navbar.css'; // Import the CSS file
import { Link, useLocation } from 'react-router-dom'; // Note: Changed from 'react-router' to 'react-router-dom'
import logo from "../assets/logo2.png"; // Import your logo image

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const location = useLocation();

  // Don't render navbar if on admin page
  if (location.pathname === '/admin') {
    return null;
  }
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
              <Link to="/" onClick={closeMenu}><li className="menu-item"><a className="menu-link">Home 🏠</a></li></Link>
              <Link to="services" onClick={closeMenu}><li className="menu-item"><a className="menu-link">Services 🛠️</a></li></Link>
              <Link to="issue" onClick={closeMenu}><li className="menu-item"><a className="menu-link">Send Issue 📩</a></li></Link>
              <Link to="product" onClick={closeMenu}><li className="menu-item"><a className="menu-link">Products 📦</a></li></Link>
            
              <Link to="contact" onClick={closeMenu}><li className="menu-item"><a className="menu-link">Contact 📞</a></li></Link>
              
            </ul>
          </div>

          <Link to="admin"><a className="menu-block">🔒Admin</a></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;