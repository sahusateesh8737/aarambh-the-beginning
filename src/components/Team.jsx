import React, { useState, useEffect } from 'react';
import './Team.css';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'Elena Rodriguez',
    role: 'Creative Director',
    image: '/images/elena.webp',
    description: 'Visionary design leader transforming ideas into stunning visual experiences.',
    expertise: ['UX/UI Design', 'Brand Strategy', 'Creative Innovation'],
    socials: {
      linkedin: 'https://linkedin.com/in/elena',
      behance: 'https://behance.net/elena',
      dribbble: 'https://dribbble.com/elena'
    }
  },
  {
    id: 2,
    name: 'Kai Chen',
    role: 'Technology Architect',
    image: '/images/kai.webp',
    description: 'Tech innovator bridging cutting-edge technology with strategic solutions.',
    expertise: ['AI/ML', 'Cloud Infrastructure', 'Product Engineering'],
    socials: {
      linkedin: 'https://linkedin.com/in/kai',
      github: 'https://github.com/kai',
      twitter: 'https://twitter.com/kai'
    }
  },
  {
    id: 3,
    name: 'Marcus Thompson',
    role: 'Growth Strategist',
    image: '/images/marcus.webp',
    description: 'Strategic thinker driving business growth and digital transformation.',
    expertise: ['Business Development', 'Market Strategy', 'Entrepreneurship'],
    socials: {
      linkedin: 'https://linkedin.com/in/marcus',
      twitter: 'https://twitter.com/marcus',
      medium: 'https://medium.com/@marcus'
    }
  }
];

const socialIcons = {
  linkedin: 'fab fa-linkedin-in',
  github: 'fab fa-github',
  twitter: 'fab fa-twitter',
  behance: 'fab fa-behance',
  dribbble: 'fab fa-dribbble',
  medium: 'fab fa-medium-m'
};

const Team = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardHover = (id) => {
    setActiveCard(id);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="team-modern-container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="team-header"
      >
        <h1>Our Innovative Team</h1>
        <p>Passionate professionals driving transformative solutions</p>
      </motion.div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className={`team-card ${activeCard === member.id ? 'active' : ''}`}
            onHoverStart={() => handleCardHover(member.id)}
            onHoverEnd={handleCardLeave}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="team-card-content">
              <div className="team-member-image">
                <img src={member.image} alt={member.name} />
              </div>
              
              <AnimatePresence>
                {activeCard === member.id && (
                  <motion.div 
                    className="team-member-details"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <h2>{member.name}</h2>
                    <h3>{member.role}</h3>
                    <p>{member.description}</p>
                    <div className="member-expertise">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="expertise-tag">{skill}</span>
                      ))}
                    </div>
                    <div className="social-links">
                      {Object.entries(member.socials).map(([platform, url]) => (
                        <a 
                          key={platform} 
                          href={url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <i className={socialIcons[platform]}></i>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;