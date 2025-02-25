import React from 'react';
import { motion } from 'framer-motion';
import './EventDetails.css';
import EventBannerImage from '../assets/images/meeting.jpeg';

const EventDetails = () => {
  const eventDetails = {
    name: 'Tech Innovation Summit 2025',
    date: 'March 15-17, 2025',
    time: '9:00 AM - 6:00 PM',
    venue: 'Silicon Valley Convention Center',
    description: 'Explore the cutting-edge technologies shaping our future.',
    registrationLink: 'https://techinnovationsummit.com/register'
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="event-details-container"
    >

<motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="event-description"
      >
        <h2>About the Event</h2>
        <p>{eventDetails.description}</p>
      </motion.div>
      <div className="event-banner">
        <motion.img 
          src={EventBannerImage} 
          alt="Tech Innovation Summit"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="event-banner-overlay">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="event-banner-content"
          >
            <h1>{eventDetails.name}</h1>
            <div className="event-details-grid">
              <div className="event-detail-item">
                <i className="fas fa-calendar-alt"></i>
                <span>{eventDetails.date}</span>
              </div>
              <div className="event-detail-item">
                <i className="fas fa-clock"></i>
                <span>{eventDetails.time}</span>
              </div>
              <div className="event-detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{eventDetails.venue}</span>
              </div>
            </div>
            <motion.a 
              href={eventDetails.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="registration-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
          </motion.div>
        </div>
      </div>

    
    </motion.div>
  );
};

export default EventDetails;