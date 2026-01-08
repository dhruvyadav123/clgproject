import React, { useEffect, useState } from "react"
import axios from "axios"

const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalAdmissions: 0,
    totalUsers: 0
  })

  useEffect(() => {
    // future API
    setStats({ totalAdmissions: 25, totalUsers: 10 })
  }, [])

  return (
    <>
      <h2>Dashboard Overview</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div className="card">Total Admissions: {stats.totalAdmissions}</div>
        <div className="card">Total Users: {stats.totalUsers}</div>

        <style>
          {`
            .card {
              background: white;
              padding: 20px;
              border-radius: 8px;
              width: 200px;
            }
          `}
        </style>
      </div>
    </>
  )
}

export default DashboardHome
