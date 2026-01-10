



import React, { useEffect, useState } from "react"
import axios from "axios"
import DashboardHome from "../admin/DashboardHome"
import Admissions from "../admin/Admissions"
import Users from "../admin/Users"
import Payments from "../admin/Payments"
import Contacts from "../admin/Contacts"

const sidebarLinks = [
  { key: "dashboard", label: "Dashboard" },
  { key: "admissions", label: "Admissions" },
  { key: "users", label: "Users" },
  { key: "payments", label: "Payments" },
  { key: "contacts", label: "Contacts" },
  { key: "logout", label: "Logout" }
];

function AdminDashboard() {
  const [admissions, setAdmissions] = useState([])
  const [stats, setStats] = useState({ totalAdmissions: 0, totalUsers: 0 })
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 900)
  const [active, setActive] = useState("dashboard")

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth > 900)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const token = localStorage.getItem("token")
    axios.get("http://localhost:1111/api/admission/all", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setAdmissions(res.data))
    axios.get("http://localhost:1111/api/dashboard/stats", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setStats(res.data))
  }, [])

  const handleSidebarClick = (key) => {
    if (key === "logout") {
      localStorage.removeItem("token")
      window.location.href = "/login"
      return
    }
    setActive(key)
    if (window.innerWidth <= 900) setSidebarOpen(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e40af 0%, #17bac0 100%)',
      display: 'flex',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      position: 'relative'
    }}>
      {/* Sidebar */}
      <div style={{
        width: sidebarOpen ? 220 : 0,
        background: '#1e40af',
        color: 'white',
        transition: 'width 0.3s',
        overflow: 'hidden',
        minHeight: '100vh',
        boxShadow: sidebarOpen ? '2px 0 8px rgba(30,64,175,0.08)' : 'none',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ padding: '32px 0 0 0', textAlign: 'center', fontWeight: 700, fontSize: '1.3rem', letterSpacing: 1 }}>Admin Panel</div>
        <nav style={{ marginTop: 32 }}>
          {sidebarLinks.map(link => (
            <div
              key={link.key}
              onClick={() => handleSidebarClick(link.key)}
              style={{
                padding: '14px 32px',
                cursor: 'pointer',
                background: active === link.key ? '#17bac0' : 'none',
                color: active === link.key ? '#fff' : 'inherit',
                fontWeight: active === link.key ? 700 : 500,
                borderLeft: active === link.key ? '4px solid #fff' : '4px solid transparent',
                transition: 'background 0.2s, color 0.2s'
              }}
            >{link.label}</div>
          ))}
        </nav>
        {/* Hamburger for mobile */}
        {!sidebarOpen && (
          <button
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              background: '#17bac0',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              fontSize: 24,
              zIndex: 10
            }}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >☰</button>
        )}
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        minHeight: '100vh',
        position: 'relative'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.98)',
          borderRadius: 24,
          boxShadow: '0 8px 32px rgba(30,64,175,0.18)',
          padding: '40px 32px',
          maxWidth: 1000,
          width: '98%',
          margin: '32px 0',
          textAlign: 'center',
          border: '1px solid #e5e7eb',
          transition: 'box-shadow 0.2s',
        }}>
          {active === "dashboard" && <DashboardHome />}
          {active === "admissions" && <Admissions />}
          {active === "users" && <Users />}
          {active === "payments" && <Payments />}
          {active === "contacts" && <Contacts />}
        </div>
      </div>
      <style>{`
        @media (max-width: 1200px) {
          .dashboard-cards {
            flex-direction: column !important;
            gap: 20px !important;
          }
          table {
            font-size: 0.98rem;
          }
          .dashboard-main {
            padding: 12px !important;
          }
        }
        @media (max-width: 900px) {
          .dashboard-cards {
            flex-direction: column !important;
            gap: 16px !important;
          }
          table {
            font-size: 0.95rem;
          }
          .dashboard-main {
            padding: 6px !important;
          }
        }
        @media (max-width: 600px) {
          .dashboard-cards {
            flex-direction: column !important;
            gap: 10px !important;
          }
          table {
            font-size: 0.92rem;
          }
          .dashboard-main {
            padding: 2px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default AdminDashboard
