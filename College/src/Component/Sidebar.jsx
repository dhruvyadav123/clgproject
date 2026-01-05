import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <div className="sidebar-links">
        <Link to="/" onClick={toggleSidebar}>Home</Link>
        <Link to="/about" onClick={toggleSidebar}>About Us</Link>

        <div className="sidebar-dropdown">
          <p>Academics ▼</p>
          <div className="sidebar-submenu">
            <Link to="/courses" onClick={toggleSidebar}>Courses</Link>
            <Link to="/admissions" onClick={toggleSidebar}>Admissions</Link>
            <Link to="/faculty" onClick={toggleSidebar}>Faculty</Link>
          </div>
        </div>

        <div className="sidebar-dropdown">
          <p>Departments ▼</p>
          <div className="sidebar-submenu">
            <Link to="/science" onClick={toggleSidebar}>Science</Link>
            <Link to="/engineering" onClick={toggleSidebar}>Engineering</Link>
            <Link to="/arts" onClick={toggleSidebar}>Arts</Link>
          </div>
        </div>

        <Link to="/events" onClick={toggleSidebar}>Events</Link>
        <Link to="/contact" onClick={toggleSidebar}>Contact Us</Link>
      </div>
    </div>
  );
}

export default Sidebar;
