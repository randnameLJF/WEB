/**
 * Filename: Navbar.js
 * Author: jingfuLuo
 * Student ID: 301451463
 * Date: 2024 09 26
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // ------------------------
  // Style Definitions
  // ------------------------
  const navbarStyle = {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#222',
    padding: '10px 0',
  };

  const navLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const linkStyle = {
    margin: '0 15px',
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#ff9800',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(225,225,225,1)',
    textDecoration: 'none',
    fontSize: '100px',
    fontWeight: 'bold',
  };

  // ------------------------
  // Render Navbar
  // ------------------------
  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoStyle}>JingfuLogo</Link>
      <ul style={navLinksStyle}>
        <li>
          <Link 
            to="/" 
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}>
            HomePage
          </Link>
        </li>
        <li>
          <Link 
            to="/About" 
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}>
            About Me
          </Link>
        </li>
        <li>
          <Link 
            to="/Project" 
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}>
            Projects
          </Link>
        </li>
        <li>
          <Link 
            to="/Services" 
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}>
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="/Contactme" 
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}>
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
