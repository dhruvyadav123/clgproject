import React, { useState } from "react"
import Sidebar from "./Sidebar"
import DashboardHome from "./DashboardHome"
import Admissions from "./Admissions"
import Users from "./Users"
import Contacts from "./Contacts"
import Payments from "./Payments"

const AdminLayout = () => {
  const [page, setPage] = useState("dashboard")

  const renderPage = () => {
    switch (page) {
      case "admissions": return <Admissions />
      case "users": return <Users />
      case "contacts": return <Contacts />
      case "payments": return <Payments />
      default: return <DashboardHome />
    }
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar setPage={setPage} />
      <div style={{ flex: 1, padding: "20px", background: "#f4f6f8" }}>
        {renderPage()}
      </div>
    </div>
  )
}

export default AdminLayout
