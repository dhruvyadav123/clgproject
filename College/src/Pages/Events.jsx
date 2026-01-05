import React from "react";
import "./Pages.css";

function Events() {
  const events = [
    {
      title: "Science Fair 2025",
      date: "March 15th, 2025",
      place: "Main Hall",
      icon: "🔬",
      desc: "Showcase innovative science projects, research work, and model presentations.",
    },
    {
      title: "Engineering Workshop",
      date: "April 10th, 2025",
      place: "Lab Block",
      icon: "🛠️",
      desc: "Hands-on workshop on robotics, IoT, AI tools, and mechanical models.",
    },
    {
      title: "Arts Exhibition",
      date: "May 5th, 2025",
      place: "Gallery",
      icon: "🎨",
      desc: "A colorful exhibition of painting, sculpture, photography, and craft.",
    },
    {
      title: "Cultural Fest 2025",
      date: "June 20th, 2025",
      place: "Open Ground",
      icon: "🎉",
      desc: "Music, dance, drama, fashion show, and talent performances.",
    },
    {
      title: "Annual Sports Meet",
      date: "August 12th, 2025",
      place: "Sports Ground",
      icon: "🏅",
      desc: "Athletics, cricket, football, badminton, indoor games, and more.",
    },
  ];

  const gallery = [
    "https://i.ibb.co/pn7c6M7/event1.jpg",
    "https://i.ibb.co/k0K1ck5/event2.jpg",
    "https://i.ibb.co/kBZdHn3/event3.jpg",
  ];

  return (
    <section className="events-section">
      <h2 className="section-title">Upcoming Events</h2>

      <p className="events-intro">
        Our college organizes various academic, cultural, and technical events throughout the year.  
        These events help students build skills, confidence, creativity, and teamwork.
      </p>

      {/* Event Cards */}
      <div className="events-grid">
        {events.map((e, i) => (
          <div className="event-card" key={i}>
            <div className="event-icon">{e.icon}</div>
            <h3>{e.title}</h3>
            <p className="event-info">{e.date} | {e.place}</p>
            <p className="event-desc">{e.desc}</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <h3 className="event-subtitle">Event Highlights</h3>

      <ul className="event-list">
        <li>Workshops and expert guest lectures</li>
        <li>Inter-college competitions and hackathons</li>
        <li>Creative cultural and art programs</li>
        <li>Sports events & leadership activities</li>
        <li>Modern arrangements with professional coordination</li>
      </ul>

      {/* Gallery */}
      <h3 className="event-subtitle">Event Gallery</h3>

      <div className="event-gallery">
        {gallery.map((img, i) => (
          <img src={img} key={i} alt="Event" />
        ))}
      </div>
    </section>
  );
}

export default Events;
