import React from "react";
import "./Pages.css";
import physicsImg from "../assets/physic.jpg";
import computerImg from "../assets/computer.webp";
import englishImg from "../assets/english.webp";

function Courses() {
  const courses = [
    {
      title: "B.Sc. Physics",
      text: "Explore the laws of nature and phenomena in physics.",
      img: physicsImg,
    },
    {
      title: "B.Tech Computer Engineering",
      text: "Innovative programs for aspiring engineers and developers.",
      img: computerImg,
    },
    {
      title: "B.A. English Literature",
      text: "Creative programs to develop literature and writing skills.",
      img: englishImg,
    },
  ];

  return (
    <section className="courses-section">
      <h2 className="section-title">Our Courses</h2>

      <div className="courses-grid">
        {courses.map((item, index) => (
          <div key={index} className="course-card">
            <img src={item.img} alt={item.title} className="course-img" />
            <div className="course-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
