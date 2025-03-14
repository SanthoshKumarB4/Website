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

      <img src={logo} alt="Company Logo" className="image" />
     
               <div className="burger" id="burger" onClick={toggleMenu}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <span className={`overlay ${isMenuActive ? 'is-active' : ''}`} onClick={closeMenu}></span>
          <div className={`menu ${isMenuActive ? 'is-active' : ''}`} id="menu">
            <ul className="menu-inner">
            <Link to="/" ><li className="menu-item"><a className="menu-link" onClick={closeMenu}>Home</a></li></Link>
            <Link to="services"> <li className="menu-item"><a className="menu-link" onClick={closeMenu}>services</a></li></Link>
            <Link to="mobilepage"> <li className="menu-item"><a className="menu-link" onClick={closeMenu}>Send Issue</a></li></Link>
             <Link to="product"> <li className="menu-item"><a className="menu-link" onClick={closeMenu}>Products</a></li></Link>
             <ScrollLink  to="contact" smooth={true} duration={900}><li className="menu-item"><a className="menu-link" onClick={closeMenu}>contact</a></li></ScrollLink>

            </ul>
          </div>
         <Link  to="admin" > <a  className="menu-block">Admin</a> </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;