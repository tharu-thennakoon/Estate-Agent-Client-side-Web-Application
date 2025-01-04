import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our platform, your trusted companion in finding the perfect property. We are dedicated to transforming the way you explore, discover, and manage properties, making your journey seamless and efficient. With innovation at our core, we strive to connect you with your dream home effortlessly.
        </p>

        <h2>What We Offer:</h2>
        <ul>
          <li><strong>Comprehensive Property Listings:</strong> Discover a wide range of properties tailored to suit every need, from cozy apartments to luxurious homes.</li>
          <li><strong>Personalized Experience:</strong> Customize your search with advanced filters and save your favorite properties to revisit them anytime.</li>
          <li><strong>Cross-Platform Accessibility:</strong> Enjoy a consistent experience across all your devices, whether you’re browsing on a computer, tablet, or smartphone.</li>
          <li><strong>Reliable Support:</strong> Our team is here to assist you at every step, ensuring that your property search is smooth and successful.</li>
        </ul>

        <p>
          Join us as we redefine the property search experience. Whether you're buying, renting, or just exploring, we’re here to help you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
