import React from 'react';
import './Pages.css';
import about1 from '../assets/about1.webp';
import about2 from '../assets/about2.png';
import about3 from '../assets/about3.png';
import about4 from '../assets/about4.webp';

function About() {
  return (
    <section className="about-section">
      <h2>About CollegeName</h2>
      <p className="about-intro">
        CollegeName is committed to providing quality education, fostering innovation, and creating leaders of tomorrow. 
        Our campus provides state-of-the-art facilities, experienced faculty, and a vibrant student community.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <img src={about1} alt="Campus Life" />
          <h3>Campus Life</h3>
          <p>
            Our campus offers a vibrant student life with clubs, sports, and cultural activities that encourage holistic growth.
          </p>
        </div>
        <div className="about-card">
          <img src={about2} alt="Modern Labs" />
          <h3>Modern Labs</h3>
          <p>
            Equipped with modern labs and technology, students gain hands-on experience to excel in their fields.
          </p>
        </div>
        <div className="about-card">
          <img src={about3} alt="Experienced Faculty" />
          <h3>Experienced Faculty</h3>
          <p>
            Our faculty comprises industry experts and academicians dedicated to mentoring students for success.
          </p>
        </div>
        <div className="about-card">
          <img src={about4} alt="Achievements" />
          <h3>Achievements</h3>
          <p>
            CollegeName has a rich legacy of academic excellence, awards, and notable alumni making a global impact.
          </p>
        </div>
      </div>

      <p className="about-footer">
        Our vision is to empower students with knowledge, skills, and values to excel in their careers and society. 
        Join us to become part of a journey towards excellence.
      </p>
    </section>
  );
}

export default About;
