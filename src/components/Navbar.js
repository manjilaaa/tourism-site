import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="brand">
            <MapPin className="icon" />
            <span className="brand-name">Patenagi Ilam</span>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#attractions" className="nav-link">Attractions</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-icon"
            >
              {isOpen ? <X className="menu-svg" /> : <Menu className="menu-svg" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#home" className="mobile-link">Home</a>
          <a href="#attractions" className="mobile-link">Attractions</a>
          <a href="#gallery" className="mobile-link">Gallery</a>
          <a href="#contact" className="mobile-link">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
