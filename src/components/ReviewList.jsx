import React, { useEffect, useState } from 'react';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div>
      <h2>Visitor Testimonials</h2>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      {reviews.map((r) => (
        <div key={r.id} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
          <strong>{r.name}</strong> – {r.rating}⭐
          <p>{r.comment}</p>
          <small>{new Date(r.created_at).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
