import React from "react";
import "./Pages.css";

function Faculty() {
  const members = [
    {
      name: "Dr. Anil Sharma",
      role: "Head of Science Department",
      qualification: "Ph.D. in Physics, M.Sc. Physics",
      experience: "15+ Years",
      specialty: "Quantum Physics, Astrophysics",
      icon: "🔬",
    },
    {
      name: "Prof. Rohan Verma",
      role: "Senior Engineering Faculty",
      qualification: "M.Tech Computer Engineering, B.Tech CE",
      experience: "10+ Years",
      specialty: "Software Engineering, AI & Machine Learning",
      icon: "💻",
    },
    {
      name: "Ms. Sakshi Kapoor",
      role: "Arts & Literature Faculty",
      qualification: "M.A. English Literature, B.A. English",
      experience: "8+ Years",
      specialty: "Poetry, Creative Writing, Drama Studies",
      icon: "📚",
    },
    {
      name: "Dr. Priya Mehta",
      role: "Chemistry Professor",
      qualification: "Ph.D. Organic Chemistry",
      experience: "12+ Years",
      specialty: "Organic Chemistry & Chemical Research",
      icon: "⚗️",
    },
    {
      name: "Prof. Kunal Tiwari",
      role: "Computer Science Lecturer",
      qualification: "MCA, BCA",
      experience: "7+ Years",
      specialty: "Web Development, Data Structures",
      icon: "🖥️",
    },
    {
      name: "Dr. Neha Gulati",
      role: "Mathematics Professor",
      qualification: "Ph.D. Applied Mathematics",
      experience: "11+ Years",
      specialty: "Calculus, Statistics, Linear Algebra",
      icon: "📐",
    },
  ];

  return (
    <section className="faculty-section">
      <h2 className="section-title">Our Faculty</h2>
      <p className="faculty-intro">
        Our faculty members are experienced professionals dedicated to excellence in education 
        and student development. Each expert brings strong academic knowledge and practical 
        skills to guide students toward a bright future.
      </p>

      <div className="faculty-grid">
        {members.map((fac, index) => (
          <div className="faculty-card" key={index}>
            <div className="faculty-icon">{fac.icon}</div>

            <div className="faculty-content">
              <h3>{fac.name}</h3>
              <h4>{fac.role}</h4>

              <p><strong>Qualification:</strong> {fac.qualification}</p>
              <p><strong>Experience:</strong> {fac.experience}</p>
              <p><strong>Specialization:</strong> {fac.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faculty;
