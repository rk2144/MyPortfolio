import React from 'react';
import logo from './assets/logo.png';
import contactButton from './assets/contactbutton.png' // Adjust the path as needed
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='desktopMenu'>
        <Link to='/' className='desktopmenuList'>Home</Link>
        <Link to='/about' className='desktopmenuList'>About</Link>
        <Link to='/portfolio' className='desktopmenuList'>Portfolio</Link>
        <Link to='/project' className='desktopmenuList'>Project</Link>
      </div>
      <button className='Desktop_menubtn'>
        <img src={contactButton} alt=''className='contactbutton'/>
        Contact me
      </button>
    </nav>
  );
}

export default Navbar;
