import React from 'react';
import { Leaf, Mountain, Sun, Flower, LocateIcon , Footprints} from 'lucide-react';
import './Attraction.css';

const attractions = [
  {
    icon: <LocateIcon className="icon" />,
    title: "Patenagi Viewpoint",
    description: "Enjoy 360° panoramic views of Mt. Kanchenjunga, Mt. Kumbhakarna, the Mahabharat range, and the lowland Terai."
  },
  {
    icon: <Flower className="icon" />,
    title: "Seasonal Flowers & Rhododendrons",
    description: "Visit during spring to witness blooming rhododendrons and vibrant wildflowers."
  },
  {
    icon: <Sun className="icon" />,
    title: "Sunrise Point",
    description: "Capture the golden light over the hills — a photographer’s dream."
  },
  {
    icon: <Footprints className="icon" />,
    title: "Trecking Trails and Forest Paths",
    description: "Explore peaceful trails through lush greenery, perfect for short treks and nature walks."
  }
];

const Attractions = () => {
  return (
    <section id="attractions" className="attractions-section">
      <div className="container">
        <div className="header">
          <h2 className="title">Popular Attractions</h2>
          <p className="subtitle">Discover what makes Patenagi Ilam special</p>
        </div>

        <div className="cards">
          {attractions.map((attraction, index) => (
            <div key={index} className="card">
              <div className="icon-wrapper">{attraction.icon}</div>
              <h3 className="card-title">{attraction.title}</h3>
              <p className="card-description">{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
