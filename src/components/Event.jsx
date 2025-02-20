import React from 'react';
import './Event.css';
import BannerImage from '../assets/images/satish.jpg'; // Ensure the path is correct

const Event = () => {
  return (
    <div className="event-container">
      <div className="event-banner">
        <img src={BannerImage} alt="Event Banner" />
      </div>
      <div className="event-details">
        <h1>Event Name: Tech Conference 2025</h1>
        <p><strong>Venue:</strong> Grand Hall, City Center</p>
        <p><strong>Date:</strong> March 15, 2025</p>
        <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
        <p><strong>Registration:</strong> Open</p>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="registration-link">Register Here</a>
      </div>
    </div>
  );
};

export default Event;