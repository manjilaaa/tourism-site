import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewForm.css'
export default function ReviewForm() {
  const [formData, setFormData] = useState({ name: '', rating: 0 });
  const [hover, setHover] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.rating) {
      setMessage("Please select a star rating.");
      return;
    }

    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("✅ Review submitted!");
      setFormData({ name: '', rating: 0 });
    } else {
      setMessage("❌ " + data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-section">
      <h3>Leave a Review</h3>
      
      <input
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Your Name"
        required
      />

      {/* ⭐ Star Rating */}
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={30}
            onClick={() => setFormData({ ...formData, rating: star })}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            color={(hover || formData.rating) >= star ? '#ffc107' : '#e4e5e9'}
            style={{ cursor: 'pointer', transition: 'color 200ms' }}
          />
        ))}
      </div>

      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}
