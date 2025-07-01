import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Send the form data to the backend API (POST request)
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus('Message sent successfully!');
      } else {
        setStatus(data.error || 'An error occurred');
      }

      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('An error occurred while sending the message');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Fell free to reach out to us.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="info-title">Contact Information</h3>
            <div className="info-items">
              <div className="info-item">
                <Phone className="info-icon" />
                <span>+977 123-456-7890</span>
              </div>
              <div className="info-item">
                <Mail className="info-icon" />
                <span>info@patenagiilam.com</span>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <span>Ilam Municipality, Nepal</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>

          {/* Displaying status messages */}
          {status && <p>{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
