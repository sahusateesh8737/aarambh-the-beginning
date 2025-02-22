import React, { useEffect, useRef } from 'react';
import './Home.css';
import LOGO from '../assets/images/logo2.png'; // Ensure the path is correct
import EventDetails from './EventDetails';

const Home = () => {
  const homeContentRef = useRef(null);
  const homeLogoRef = useRef(null);
  const homeEventDetailsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (homeContentRef.current) {
      observer.observe(homeContentRef.current);
    }
    if (homeLogoRef.current) {
      observer.observe(homeLogoRef.current);
    }
    if (homeEventDetailsRef.current) {
      observer.observe(homeEventDetailsRef.current);
    }

    return () => {
      if (homeContentRef.current) {
        observer.unobserve(homeContentRef.current);
      }
      if (homeLogoRef.current) {
        observer.unobserve(homeLogoRef.current);
      }
      if (homeEventDetailsRef.current) {
        observer.unobserve(homeEventDetailsRef.current);
      }
    };
  }, []);

  return (
    <div className="home-container">
      <div className="home-content" ref={homeContentRef}>
        <h1>Welcome to Our Organization</h1>
        <p>
          We are dedicated to providing the best services to our clients. Our team of experts is here to help you achieve your goals and succeed in your endeavors. Join us and be a part of our journey.
        </p>
      </div>
      <div className="home-logo" ref={homeLogoRef}>
        <img src={LOGO} alt="Organization Logo" />
        <h1 className='tagline'>Where Beginnings Transform Into Legacies</h1>
      </div>
      <div  ref={homeEventDetailsRef}>
        <EventDetails />
      </div>
    </div>
  );
};

export default Home;