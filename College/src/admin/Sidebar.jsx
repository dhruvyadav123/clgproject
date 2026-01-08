import React from "react"

const Sidebar = ({ setPage }) => {
  return (
    <div style={{
      width: "230px",
      background: "#1e1e2f",
      color: "#fff",
      padding: "20px"
    }}>
      <h2>Admin Panel</h2>

      <p onClick={() => setPage("dashboard")} className="menu">📊 Dashboard</p>
      <p onClick={() => setPage("admissions")} className="menu">🎓 Admissions</p>
      <p onClick={() => setPage("users")} className="menu">👤 Users</p>
      <p onClick={() => setPage("contacts")} className="menu">📩 Contacts</p>
      <p onClick={() => setPage("payments")} className="menu">💳 Payments</p>

      <style>
        {`
          .menu {
            cursor: pointer;
            margin: 15px 0;
          }
          .menu:hover {
            color: #00d8ff;
          }
        `}
      </style>
    </div>
  )
}

export default Sidebar
