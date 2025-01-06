import React, { useState } from "react";
import "./contact.css"; // CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.message) formErrors.message = "Message is required.";
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert("Thank you for reaching out! We will get back to you soon.");
      // Reset form after submission
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <p>We'd love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            aria-describedby="nameError"
          />
          {errors.name && <p id="nameError" className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby="emailError"
          />
          {errors.email && <p id="emailError" className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="What would you like to share?"
            value={formData.message}
            onChange={handleChange}
            aria-describedby="messageError"
          ></textarea>
          {errors.message && <p id="messageError" className="error-message">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
