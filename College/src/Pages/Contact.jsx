import React, { useState } from "react";
import "./Pages.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>

      <p className="contact-intro">
        We'd love to hear from you! Get in touch with us for admissions,
        courses, events, or any general queries.
      </p>

      <div className="contact-container">
        
        {/* LEFT INFO SECTION */}
        <div className="contact-info">
          <h3>Reach Us</h3>
          <p><strong>Address:</strong> CollegeName Campus, City, State - 000000</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@collegename.edu</p>

          <h4>Office Hours</h4>
          <ul>
            <li>Mon - Fri: 9:00 AM to 5:00 PM</li>
            <li>Saturday: 9:00 AM to 1:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>

          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

        {/* CONTACT FORM SECTION */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>

      {/* MAP SECTION */}
      <div className="map-box">
        <iframe
          title="College Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609903584!2d72.7410996!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzU1LjkiTiA3MsKwNDQnNTYuNyJF!5e0!3m2!1sen!2sin!4v1679398700049"
          loading="lazy"
        ></iframe>
      </div>

    </section>
  );
}

export default Contact;
