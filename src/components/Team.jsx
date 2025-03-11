import React, { useState } from 'react';
import { motion } from 'framer-motion';
import teamMembersData from '../data/teamMembers.json';
import UserForm from './UserForm';
import './Team.css';

// Import team member images
import rashiImage from '../assets/images/team/rashi.jpg';
import divyanshImage from '../assets/images/team/divyansh.jpg';
import nitishImage from '../assets/images/team/nitish.jpg';
import satishImage from '../assets/images/team/satish.jpg';

// Create a mapping of photo paths to imported images
const photoMap = {
  '/images/team/rashi.jpg': '/assets/rashi.jpg',
  '/images/team/divyansh.jpg': '/assets/divyansh.jpg',
  '/images/team/nitish.jpg': '/assets/nitish.jpg',
  '/images/team/satish.jpg': '/assets/satish.jpg'
};

const Team = () => {
  const { teamMembers } = teamMembersData;
  const [showForm, setShowForm] = useState(false);
  
  console.log("Team members data:", teamMembers);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="team-container"
    >
      <section className="team-hero">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="team-hero-content"
        >
          <h1>Our Amazing Team</h1>
          <p>Meet the talented individuals who make our organization thrive</p>
        </motion.div>
      </section>

      <section className="team-members">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="team-member-card"
            >
              <div className="member-inner">
                <div className="member-image">
                  <img src={photoMap[member.photo]} alt={member.name} />
                </div>
                <div className="member-details">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <div className="social-links">
                    {Object.entries(member.socialLinks).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s ${platform}`}
                      >
                        <i className={`fab fa-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="join-team">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="join-team-content"
        >
          <h2>Join Our Team</h2>
          <p>We're always looking for talented individuals to join our team. Check out our current openings.</p>
          <motion.button
            onClick={() => setShowForm(!showForm)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="join-button"
          >
            {showForm ? 'Close Form' : 'Apply Now'}
          </motion.button>
        </motion.div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <UserForm />
          </motion.div>
        )}
      </section>
    </motion.div>
  );
};

export default Team;