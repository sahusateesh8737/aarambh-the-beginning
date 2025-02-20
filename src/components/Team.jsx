import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    photo: '/images/john.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      facebook: 'https://facebook.com/johndoe',
    },
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    photo: '/images/jane.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
    },
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    photo: '/images/jane.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
    },
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    photo: '/images/jane.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
    },
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    photo: '/images/jane.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
    },
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    photo: '/images/jane.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
    },
  },{
    name: 'Jane Smith',
    position: 'CTO',
    photo: '/images/jane.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
    },
  },{
    name: 'Jane Smith',
    position: 'CTO',
    photo: '/images/jane.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
    },
  },
  // Add more team members as needed
];

const Team = () => {
  return (
    
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div className="team-card" key={index}>
          <img src={member.photo} alt={member.name} className="team-photo" />
          <h3>{member.name}</h3>
          <p>{member.position}</p>
          <div className="social-icons">
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;