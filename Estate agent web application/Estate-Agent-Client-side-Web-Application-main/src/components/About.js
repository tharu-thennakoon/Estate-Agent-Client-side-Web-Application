import React from "react";
import "./about.css"; // CSS for styling

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to Estate Explorer, your go-to platform for exploring properties. 
        We offer an easy-to-use search interface, detailed property listings, and a user-friendly 
        way to manage your favorites. Our mission is to help you find your dream home with ease.
      </p>
      <p>
        Whether you're looking to buy or rent, we aim to make your property search efficient and enjoyable. 
        Feel free to browse through our listings and contact us if you have any questions!
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>User-Friendly Interface:</strong> Designed for ease of use, helping you find properties with minimal effort.</li>
        <li><strong>Diverse Listings:</strong> We offer a wide range of property types, from affordable apartments to luxurious homes.</li>
        <li><strong>Quick Access:</strong> Our advanced search filters help you find exactly what you're looking for in seconds.</li>
      </ul>

      <h2>Our Values</h2>
      <p>
        We believe in transparency, reliability, and customer satisfaction. Our goal is to offer the best real estate 
        experience possible, ensuring every client finds a home that meets their needs and expectations.
      </p>
    </div>
  );
};

export default About;
