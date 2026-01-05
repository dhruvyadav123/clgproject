import React, { useEffect, useState } from "react"
import axios from "axios"

function AdminDashboard() {
  const [admissions, setAdmissions] = useState([])
  const [stats, setStats] = useState({ totalAdmissions: 0, totalUsers: 0 })

  useEffect(() => {
    const token = localStorage.getItem("token")

    // Fetch admissions list
    axios.get("http://localhost:1111/api/admission/all", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res=>setAdmissions(res.data))

    // Fetch dashboard stats
    axios.get("http://localhost:1111/api/dashboard/stats", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res=>setStats(res.data))
  }, [])

  return (
    <div style={{ padding:"20px" }}>
      <h2>Admin Dashboard</h2>
      <div style={{ display:"flex", gap:"20px", marginBottom:"20px" }}>
        <div className="card">
          <h3>Total Admissions</h3>
          <p>{stats.totalAdmissions}</p>
        </div>
        <div className="card">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Documents Uploaded</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {admissions.map(a=>(
            <tr key={a._id}>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>{a.course}</td>
              <td>{a.documentsUploaded?"Yes":"No"}</td>
              <td>{a.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminDashboard
