import React from 'react';
import './Gallery.css';
import sunrise from '../assets/images/sunrise.jpg';
import mountainview from '../assets/images/mountain.jpg';
import localculture from '../assets/images/localculture.jpg';
import landscape from '../assets/images/landscape.jpg';
import Trails from '../assets/images/trails.jpg';
import CulturalHeritage from '../assets/images/heritage.jpg';
const images = [
  {
    url: sunrise,
    title: "Sunrise"
  },
  {
    url: mountainview,
    title: "Mountain View"
  },
  {
    url: Trails,
    title: "Trekking and Trails"
  },
  {
    url: localculture,
    title: "Local Culture"
  },
  {
    url: CulturalHeritage,
    title: "Cultural Heritage"
  },
  {
    url:landscape,
    title: "Landscape"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">Capture the essence of Patenagi Ilam</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.title}
                className="gallery-image"
              />
              <div className="image-overlay">
                <h3 className="image-title">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
