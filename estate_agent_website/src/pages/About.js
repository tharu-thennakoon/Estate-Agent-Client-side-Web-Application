import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Our mission is to simplify your property search by offering a user-friendly platform to explore and save properties that match your preferences.
        </p>
        <h2>Features:</h2>
        <ul>
          <li><strong>Advanced Search:</strong> Effortlessly search through thousands of listings tailored to your preferences.</li>
          <li><strong>Favourites Management:</strong> Save and manage your favourite properties with ease.</li>
          <li><strong>Responsive Design:</strong> Access our platform seamlessly on any device, anytime, anywhere.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
