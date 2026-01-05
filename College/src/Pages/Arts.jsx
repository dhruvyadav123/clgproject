import React from "react";
import "./Pages.css";

import art1 from "../assets/arts1.jpeg";
import art2 from "../assets/arts2.jpg";
import art3 from "../assets/arts3.jpg";

function Arts() {
  const courses = [
    {
      title: "B.A. English Literature",
      text: "Study poetry, drama, novels, linguistics, and creative writing.",
    },
    {
      title: "B.A. History",
      text: "Explore ancient, medieval, and modern world history.",
    },
    {
      title: "B.A. Psychology",
      text: "Learn human behavior, mental health, counseling, and research methods.",
    },
  ];

  return (
    <section className="dept-section">
      <h2 className="section-title">Arts Department</h2>

      <p className="dept-intro">
        The Arts Department nurtures creativity, knowledge, communication skills,
        and cultural understanding through a rich academic environment.
      </p>

      <div className="dept-images">
        <img src={art1} alt="Arts Classroom" />
        <img src={art2} alt="Library" />
        <img src={art3} alt="Cultural Activities" />
      </div>

      <h3 className="dept-subtitle">Courses Offered</h3>

      <div className="dept-grid">
  {courses.map((c, i) => (
    <div className="dept-card" key={i}>
      <div className="dept-icon">
        {i === 0 && "📚"}
        {i === 1 && "🏛️"}
        {i === 2 && "🧠"}
      </div>
      <h4>{c.title}</h4>
      <p>{c.text}</p>
    </div>
  ))}
</div>


      <h3 className="dept-subtitle">Department Highlights</h3>

      <ul className="dept-list">
        <li>Creative writing & communication workshops</li>
        <li>Debate, theatre, and cultural programs</li>
        <li>Experienced faculty from literature & humanities fields</li>
        <li>Skill-based learning and personality development</li>
        <li>Modern classrooms and digital learning environment</li>
      </ul>
    </section>
  );
}

export default Arts;
