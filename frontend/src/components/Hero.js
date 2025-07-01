import { useState } from 'react';
import './Hero.css';
import { ChevronDown,MapPin } from 'lucide-react';
import GoogleMapComponent from './GoogleMapComponent';

const Hero = () => {
  const [showMap,setShowMap] = useState(false);
  return (
    <div id="home" className="hero-container">
      <div 
        className="hero-background"
        style={{
          backgroundImage: "url('https://www.ilamaawaj.com/wp-content/uploads/2021/02/patenagi.jpg')",
        }}
      >
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Patenagi Ilam</h1>
        <p className="hero-subtitle">"Discover Patenagi — A Hidden Hilltop Haven <br></br>with Breathtaking Himalayan Views, Peaceful Trails,<br></br> and Untouched Beauty Waiting to Be Explored."</p>
        <a 
          href="#attractions"
          className="hero-button"
        >
          Explore Now
        </a>
        
         {/* Map icon and toggle */}
        <div
          className="map-icon-container"
          style={{ cursor: 'pointer', marginTop: '1.5rem', display: 'flex', alignItems: 'center', color: 'white' }}
          onClick={() => setShowMap(!showMap)}
        >
          <MapPin size={24} />
          <span style={{ marginLeft: '0.5rem', fontWeight: '600' }}>
            {showMap ? 'Hide Map' : 'Show Map'}
          </span>
        </div>



        <div className="hero-chevron">
          <ChevronDown className="chevron-icon" />
        </div>
      </div>

      {showMap && <GoogleMapComponent/>}
    </div>
  );
};

export default Hero;
