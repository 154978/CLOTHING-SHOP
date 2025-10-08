// src/pages/Contact.js
import React, { useState } from "react";
import "../styles/Contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-page-container submitted">
        <div className="contact-submitted-message">
          <h2>Thank you, {form.name || 'Friend'}!</h2>
          <p>Your message has been received. We’ll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page-container">
      
    
      <section className="contact-header-section">
        <h1 className="contact-main-title">Contact Us</h1>
        <p className="contact-main-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      
      <section className="contact-content-grid">
        
        
        <div className="get-in-touch-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan eros, sit amet auctor nunc. Nullam ac purus.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <span className="info-label">Address</span>
                <p className="info-value">London Eye, London, UK</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <span className="info-label">Phone Number</span>
                <p className="info-value">+123-456-7890</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <span className="info-label">E-Mail</span>
                <p className="info-value">mailto@subx.com</p>
              </div>
            </div>
          </div>

          <div className="follow-us-section">
            <p className="follow-us-label">Follow Us:</p>
            <div className="social-icons">
              <a href="#" className="social-icon-link"><FaFacebookF /></a>
              <a href="#" className="social-icon-link"><FaTwitter /></a>
              <a href="#" className="social-icon-link"><FaInstagram /></a>
              <a href="#" className="social-icon-link"><FaYoutube /></a>
            </div>
          </div>
        </div>

        
        <div className="send-message-section">
          <h2 className="section-title">Send a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail address"
              value={form.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              required
              className="form-input"
            />
            
            <p className="privacy-notice">
                By submitting you agree to the processing of your personal data by Subx as described in the Privacy Statement.
            </p>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Contact;