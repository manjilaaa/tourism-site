import { useEffect, useState } from 'react';

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div>
      <h1>Patenagi Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {images.map((img) => (
          <div key={img.id}>
            <img src={img.image_url} alt={img.title} style={{ width: 200, height: 150, objectFit: 'cover' }} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
