// src/components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsDropdownOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="header">
          <div className="logo">
            <h1>Digafe</h1>
          </div>
          <div className="dropdown">
            <button 
              className="dropbtn" 
              onClick={toggleDropdown}
            >
              Main
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content show">
                <a href="#about" className="main-content" onClick={() => scrollToSection('about')}>
                  About
                </a>
                <a href="#services" className="main-content" onClick={() => scrollToSection('services')}>
                  Service
                </a>
                <a href="#recent-work" className="main-content" onClick={() => scrollToSection('recent-work')}>
                  Recent Work
                </a>
                <a href="#contact" className="main-content" onClick={() => scrollToSection('contact')}>
                  Contact
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;