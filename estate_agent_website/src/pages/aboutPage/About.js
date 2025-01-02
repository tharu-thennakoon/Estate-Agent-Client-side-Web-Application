import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Our mission is to simplify your property search by offering a user-friendly platform to explore and save properties that match your preferences. We aim to provide a seamless experience for users searching for properties by combining advanced search functionality, a favourites management system, and a responsive design for all devices.
        </p>

        <h2>Features:</h2>
        <ul>
          <li><strong>Advanced Search:</strong> Effortlessly filter properties based on your specific criteria, including property type, price range, location, and more.</li>
          <li><strong>Favourites Management:</strong> Save your favourite properties and revisit them anytime. You can easily manage and track your preferred listings in one place.</li>
          <li><strong>Responsive Design:</strong> Our platform is fully responsive, providing an optimal browsing experience across all devices, including desktops, tablets, and mobile phones.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
