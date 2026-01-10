import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Navbar.css';

function Navbar() {
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1000;
      setIsMobile(mobile);
      setSidebarOpen(mobile); // Open sidebar on mobile, close on desktop
    };
    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const academicsRef = useRef();
  const departmentsRef = useRef();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // ⭐ Scroll to top function
  const GoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // -------------------------------
  // CLOSE DROPDOWN ON OUTSIDE CLICK
  // -------------------------------
  useEffect(() => {
    function handleClickOutside(e) {
      if (academicsRef.current && !academicsRef.current.contains(e.target)) {
        setAcademicsOpen(false);
      }
      if (departmentsRef.current && !departmentsRef.current.contains(e.target)) {
        setDepartmentsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/" onClick={GoTop}>Institute</Link>
          </div>
          {/* Desktop Nav */}
          <div className="nav-links">
            <Link to="/" onClick={GoTop}>Home</Link>
            <Link to="/about" onClick={GoTop}>About Us</Link>
            {/* Academics Dropdown */}
            <div
              className="dropdown"
              ref={academicsRef}
              onMouseEnter={() => !isMobile && setAcademicsOpen(true)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isMobile) setAcademicsOpen((prev) => !prev);
                  else setAcademicsOpen(true);
                }}
                aria-haspopup="true"
                aria-expanded={academicsOpen}
              >
                Academics ▼
              </button>
              {academicsOpen && (
                <div
                  className="dropdown-menu"
                  onClick={e => isMobile && e.stopPropagation()}
                >
                  <Link to="/courses" onClick={GoTop}>Courses</Link>
                  <Link to="/admissions" onClick={GoTop}>Admissions</Link>
                  <Link to="/faculty" onClick={GoTop}>Faculty</Link>
                </div>
              )}
            </div>
            {/* Departments Dropdown */}
            <div
              className="dropdown"
              ref={departmentsRef}
              onMouseEnter={() => !isMobile && setDepartmentsOpen(true)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isMobile) setDepartmentsOpen((prev) => !prev);
                  else setDepartmentsOpen(true);
                }}
                aria-haspopup="true"
                aria-expanded={departmentsOpen}
              >
                Departments ▼
              </button>
              {departmentsOpen && (
                <div
                  className="dropdown-menu"
                  onClick={e => isMobile && e.stopPropagation()}
                >
                  <Link to="/science" onClick={GoTop}>Science</Link>
                  <Link to="/engineering" onClick={GoTop}>Engineering</Link>
                  <Link to="/arts" onClick={GoTop}>Arts</Link>
                </div>
              )}
            </div>
            <Link to="/events" onClick={GoTop}>Events</Link>
            <Link to="/contact" onClick={GoTop}>Contact Us</Link>
            <Link className="login-btn" to="/login" onClick={GoTop}>Login</Link>
            <Link className="signup-btn" to="/signup" onClick={GoTop}>Signup</Link>
          </div>
          {/* Hamburger for mobile */}
          <div className="mobile-menu-button">
            <button onClick={toggleSidebar} aria-label="Open menu">☰</button>
          </div>
        </div>
      </nav>
      {/* Sidebar overlays for mobile */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Navbar;
