import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending form data to server)
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <h1>Get in Touch</h1>
        <p>If you have any questions or need support, feel free to contact us.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea 
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Contact Information:</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +1-234-567-890</p>
          <p>Address: Placeholder address</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
