import React from "react";
import "./Pages.css";

import labImg from "../assets/lab.jpg";
import researchImg from "../assets/research.webp";
import biologyImg from "../assets/biology.jpg";
import physicsImg from "../assets/physic1.jpg";
import chemistryImg from "../assets/chemistry.jpg";

function Science() {
  const programs = [
    {
      title: "B.Sc. Physics",
      desc: "Study motion, energy, quantum mechanics, astronomy and modern physics with practical lab training.",
      img: physicsImg,
    },
    {
      title: "B.Sc. Chemistry",
      desc: "Focus on organic, inorganic, physical chemistry with research-based laboratories and experiments.",
      img: chemistryImg,
    },
    {
      title: "B.Sc. Biology",
      desc: "Learn anatomy, microbiology, genetics, botany & zoology with hands-on research exposure.",
      img: biologyImg,
    },
  ];

  const features = [
    {
      title: "Advanced Laboratories",
      text: "Fully equipped Physics, Chemistry & Biology labs for practical experiments.",
      icon: "🔬",
    },
    {
      title: "Research Opportunities",
      text: "Students participate in real scientific research, internships & national level projects.",
      icon: "📚",
    },
    {
      title: "Expert Faculty",
      text: "Highly qualified professors with PhDs and years of teaching & research experience.",
      icon: "👨‍🏫",
    },
  ];

  return (
    <section className="science-section">
      <h2 className="section-title">Science Department</h2>
      <p className="science-intro">
        The Science Department focuses on innovation, research, and hands-on learning in Physics,
        Chemistry, and Biology. Our aim is to develop scientific thinkers and skilled researchers.
      </p>

      {/* ===== FEATURES ===== */}
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* ===== PROGRAMS ===== */}
      <h3 className="sub-title">Our Programs</h3>
      <div className="science-grid">
        {programs.map((course, index) => (
          <div className="science-card" key={index}>
            <img src={course.img} alt={course.title} className="science-img" />
            <div className="science-content">
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== FACILITIES ===== */}
      <div className="science-extra">
        <img src={labImg} alt="Science Lab" className="science-extra-img" />
        <div className="science-extra-text">
          <h3>World-Class Laboratories</h3>
          <p>
            Our department provides state-of-the-art labs for Physics, Chemistry, 
            and Biology, enabling students to perform practical experiments and 
            research activities with modern equipment.
          </p>
          <p>
            Students regularly participate in scientific model-making competitions, 
            innovation projects, and national-level science exhibitions.
          </p>
        </div>
      </div>

      <div className="science-extra reverse">
        <div className="science-extra-text">
          <h3>Research & Innovation</h3>
          <p>
            From molecular biology to astrophysics, students are guided to explore 
            various scientific domains. Our department encourages research culture 
            through mini-projects, internships, and publications.
          </p>
          <p>
            Students get opportunities to work with the latest research tools and 
            technologies under guidance of expert faculty members.
          </p>
        </div>
        <img src={researchImg} alt="Research" className="science-extra-img" />
      </div>
    </section>
  );
}

export default Science;
