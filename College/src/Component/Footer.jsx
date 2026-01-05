import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About / College Info */}
        <div className="footer-section">
          <h3 className="footer-title">CollegeName</h3>
          <p className="footer-text">
            Providing quality education since 1990. Your future starts here!
          </p>

          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-text">📧 info@college.com</p>
          <p className="footer-text">📞 +91 123 456 7890</p>
          <p className="footer-text">📍 123 College Road, City, Country</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CollegeName. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
