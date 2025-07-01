import React from 'react';
import { MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <MapPin className="icon" />
              <span className="brand-text">Patenagi Ilam</span>
            </div>
            <p className="footer-description">
              Discover the beauty of Nepal's eastern hills and immerse yourself in the culture of tea.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#attractions" className="footer-link">Attractions</a></li>
              <li><a href="#gallery" className="footer-link">Gallery</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-link"><Facebook className="social-icon" /></a>
              <a href="#" className="social-link"><Instagram className="social-icon" /></a>
              <a href="#" className="social-link"><Twitter className="social-icon" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Patenagi Ilam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
