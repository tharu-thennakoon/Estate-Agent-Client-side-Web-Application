import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1-234-567-890</a></p>
        </div>

        {/* Legal Section */}
        <div className="legal-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Your Estate Agent Website. All rights reserved.</p>
        <p>"Save your favourite properties and revisit them anytime."</p>
      </div>
    </footer>
  );
};

export default Footer;
