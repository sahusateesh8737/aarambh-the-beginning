import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// Import images
import FounderImage from '../assets/images/meeting2.jpeg';
import MissionImage from '../assets/images/meeting2.jpeg';
import VisionImage from '../assets/images/meeting.jpeg';

const About = () => {
  const companyValues = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries and creating transformative solutions.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Integrity',
      description: 'Maintaining the highest standards of ethical conduct.',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Collaboration',
      description: 'Believing in the power of diverse, collective intelligence.',
      icon: 'fas fa-users'
    }
  ];

  const milestones = [
    { year: 2018, event: 'Company Founded' },
    { year: 2020, event: 'First Major Product Launch' },
    { year: 2022, event: 'Expanded to International Markets' },
    { year: 2024, event: 'Innovation Leadership Award' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="about-container"
    >
      <section className="about-hero">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="about-hero-content"
        >
          <h1>Where Beginnings Transform Into Legacies</h1>
          <p>We are a passionate team dedicated to creating innovative solutions that make a difference.</p>
        </motion.div>
      </section>

      <section className="about-story">
        <div className="story-content">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="story-text"
          >
            <h2>Our Journey</h2>
            <p>Founded with a vision to revolutionize technology, our company has grown from a small startup to a global innovator. We believe in the power of creativity, collaboration, and continuous learning.</p>
            <img src={FounderImage} alt="Company Founder" className="founder-image" />
          </motion.div>
        </div>
      </section>

      <section className="about-mission-vision">
        <div className="mission-vision-grid">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mission-card"
          >
            <img src={MissionImage} alt="Our Mission" />
            <div className="mission-content">
              <h3>Our Mission</h3>
              <p>To empower businesses and individuals through cutting-edge technology and innovative solutions.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="vision-card"
          >
            <img src={VisionImage} alt="Our Vision" />
            <div className="vision-content">
              <h3>Our Vision</h3>
              <p>To be a global leader in technological innovation, driving positive change across industries.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {companyValues.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="value-card"
            >
              <i className={value.icon}></i>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-milestones">
        <h2>Our Journey Milestones</h2>
        <div className="milestones-timeline">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="milestone-item"
            >
              <div className="milestone-year">{milestone.year}</div>
              <div className="milestone-event">{milestone.event}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;