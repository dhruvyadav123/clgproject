import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import ProtectedRoute from './Component/ProtectedRoute'

import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Admissions from './Pages/Admissions'
import Faculty from './Pages/Faculty'
import Science from './Pages/Science'
import Engineering from './Pages/Engineering'
import Arts from './Pages/Arts'
import Events from './Pages/Events'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Signup from "./Pages/Signup"
import AdminDashboard from "./Pages/AdminDashboard"

function App() {
  return (
    <div>
      <Navbar />

      <div style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/science" element={<Science />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admissions" element={<Admissions />} />

          {/* 🔓 Public */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

         
          

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
