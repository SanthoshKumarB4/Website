import React, { useState } from 'react';
import './navbar.css'; // Import the CSS file
import { Link } from 'react-router';

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
          <a  className="brand">Brand</a>
          <div className="burger" id="burger" onClick={toggleMenu}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <span className={`overlay ${isMenuActive ? 'is-active' : ''}`} onClick={closeMenu}></span>
          <div className={`menu ${isMenuActive ? 'is-active' : ''}`} id="menu">
            <ul className="menu-inner">
             <li className="menu-item"><a className="menu-link" onClick={closeMenu}>Home</a></li>
             <Link to="product"> <li className="menu-item"><a className="menu-link" onClick={closeMenu}>Products</a></li></Link>
            </ul>
          </div>
          <a  className="menu-block">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;