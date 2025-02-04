import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import contactButton from '../assets/contactbutton.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <NavLink to="/" className="desktopmenuList" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" className="desktopmenuList" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/skills" className="desktopmenuList" activeClassName="active">
          Skills
        </NavLink>
        <NavLink to="/projects" className="desktopmenuList" activeClassName="active">
          Projects
        </NavLink>
      </div>
      <button className="Desktop_menubtn">
        <img src={contactButton} alt="Contact" className="contactbutton" />
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
