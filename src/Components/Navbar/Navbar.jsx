'use client'

import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://static.wixstatic.com/media/a065f2_8066744694014295adf44b9ae12883d6~mv2.png/v1/fill/w_176,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bit%20logo%20.png" alt="Logo" />
      </div>
      <div className="nav-items">
        <Link to="features" smooth={true} duration={500}>
          <button>About Us</button>
        </Link>
        <Link to='download-section' smooth={true} duration={500}>
        <button>Download</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
