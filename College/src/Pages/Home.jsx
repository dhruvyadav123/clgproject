import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './Pages.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.webp';
import aboutImg from '../assets/home.jpg';
import scienceImg from '../assets/science.jpg';
import engineeringImg from '../assets/engineering.webp';
import artsImg from '../assets/arts.jpg';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      {/* Hero Slider */}
      <section className="hero-slider">
        <Slider {...settings}>
          <div className="slide">
            <img src={slide1} alt="Slide 1" />
            <div className="hero-text">
              <h1>Welcome to Institute</h1>
              <p>Empowering students for a brighter future</p>
              <Link to="/admissions" className="btn">Apply Now</Link>
            </div>
          </div>
          <div className="slide">
            <img src={slide2} alt="Slide 2" />
            <div className="hero-text">
              <h1>Innovative Learning</h1>
              <p>Explore our science and engineering programs</p>
              <Link to="/about" className="btn">Learn More</Link>
            </div>
          </div>
          <div className="slide">
            <img src={slide3} alt="Slide 3" />
            <div className="hero-text">
              <h1>Arts & Creativity</h1>
              <p>Fostering creativity for a better tomorrow</p>
              <Link to="/arts" className="btn">Explore Arts</Link>
            </div>
          </div>
        </Slider>
      </section>

      {/* About Preview */}
      <section className="about-preview home-section">
        <div className="section-content">
          <div className="section-text">
            <h2>About CollegeName</h2>
            <p>
              CollegeName has been providing quality education for over 50 years. 
              We focus on excellence, innovation, and creating leaders of tomorrow.
            </p>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
          <div className="section-image">
            <img src={aboutImg} alt="About College" />
          </div>
        </div>
      </section>

      {/* Academics */}
      <section className="services-preview home-section">
        <h2>Our Academics</h2>
        <div className="cards">
          <Link to="/science" className="card">
            <img src={scienceImg} alt="Science" />
            <h3>Science</h3>
            <p>Explore courses in Physics, Chemistry, Biology, and more.</p>
          </Link>
          <Link to="/engineering" className="card">
            <img src={engineeringImg} alt="Engineering" />
            <h3>Engineering</h3>
            <p>Innovative programs in Computer, Mechanical, Electrical Engineering.</p>
          </Link>
          <Link to="/arts" className="card">
            <img src={artsImg} alt="Arts" />
            <h3>Arts</h3>
            <p>Programs in Literature, History, Fine Arts and creative studies.</p>
          </Link>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-preview home-section">
        <h2>Upcoming Events</h2>
        <div className="event-cards">
          <div className="event-card">
            <h4>Science Fair 2025</h4>
            <p>March 15th, 2025 | Main Hall</p>
          </div>
          <div className="event-card">
            <h4>Engineering Workshop</h4>
            <p>April 10th, 2025 | Lab Block</p>
          </div>
        </div>
        <Link to="/events" className="btn-secondary">View All Events</Link>
      </section>
    </>
  );
}

export default Home;
