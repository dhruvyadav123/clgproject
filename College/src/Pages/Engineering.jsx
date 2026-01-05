import React from "react";
import "./Pages.css";

import eng1 from "../assets/eng1.jpg";
import eng2 from "../assets/eng2.jpg";
import eng3 from "../assets/eng3.jpg";

function Engineering() {
  return (
    <section className="department-section">
      <h2 className="section-title">Engineering Department</h2>

      <p className="department-intro">
        The Engineering Department is committed to providing high-quality technical
        education with a strong emphasis on innovation, research, and hands-on
        practical learning. Our programs are designed to prepare students for
        successful careers in the fast-growing engineering world.
      </p>

      {/* ======= Highlights Section ======= */}
      <div className="department-grid">
        <div className="department-card">
          <img src={eng1} className="dept-img" alt="Engineering Lab" />
          <h3>Modern Computer Labs</h3>
          <p>
            Fully equipped labs with high-performance systems and industry-level
            software for coding, algorithms, AI, machine learning, and
            development practices.
          </p>
        </div>

        <div className="department-card">
          <img src={eng2} className="dept-img" alt="Workshops" />
          <h3>Industry-Oriented Workshops</h3>
          <p>
            Regular workshops on robotics, IoT, ethical hacking, cloud
            computing, cybersecurity, mechanical design, and data science.
          </p>
        </div>

        <div className="department-card">
          <img src={eng3} className="dept-img" alt="Seminars" />
          <h3>Expert Seminars & Training</h3>
          <p>
            Sessions conducted by industry experts from top companies like
            Google, Infosys, TCS, and Microsoft to guide students for real-world
            challenges.
          </p>
        </div>
      </div>

      {/* ======= Courses Offered ======= */}
      <h3 className="section-subtitle">Courses Offered</h3>
      <ul className="course-list">
        <li>B.Tech in Computer Engineering</li>
        <li>B.Tech in Mechanical Engineering</li>
        <li>B.Tech in Civil Engineering</li>
        <li>B.Tech in Electrical Engineering</li>
        <li>B.Tech in Electronics & Communication Engineering</li>
        <li>Diploma in Engineering (All Branches)</li>
      </ul>

      {/* ======= Facilities ======= */}
      <h3 className="section-subtitle">Department Facilities</h3>
      <ul className="facility-list">
        <li>Smart Classrooms with Digital Boards</li>
        <li>Advanced Laboratories & Research Centers</li>
        <li>Project & Innovation Labs</li>
        <li>Library with Technical Books & e-Resources</li>
        <li>Placement Training & Internships</li>
        <li>24x7 High-Speed Internet & Wi-Fi</li>
      </ul>
    </section>
  );
}

export default Engineering;
