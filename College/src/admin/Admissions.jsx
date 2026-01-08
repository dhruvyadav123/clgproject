import React, { useEffect, useState } from "react"
import axios from "axios"

const Admissions = () => {
  const [admissions, setAdmissions] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token")

    axios.get("http://localhost:1111/api/admission/all", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setAdmissions(res.data))
  }, [])

  return (
    <>
      <h2>Admissions</h2>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {admissions.map(a => (
            <tr key={a._id}>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.course}</td>
              <td>{a.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Admissions
