import React from 'react';
import './Home.css';
import LOGO from '../assets/images/logo.jpg'; // Ensure the path is correct

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Organization</h1>
        <p>
          We are dedicated to providing the best services to our clients. Our team of experts is here to help you achieve your goals and succeed in your endeavors. Join us and be a part of our journey.
        </p>
      </div>
      <div className="home-logo">
        <img src={LOGO} alt="Organization Logo" />
      </div>
    </div>
  );
};

export default Home;