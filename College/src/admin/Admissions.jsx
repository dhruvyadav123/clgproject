import React, { useEffect, useState } from "react"
import axios from "axios"
import "./Admissions.css"

const Admissions = () => {
  const [admissions, setAdmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editId, setEditId] = useState(null)

  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    paymentStatus: ""
  })

  const token = localStorage.getItem("token")

  // ================= FETCH =================
  const fetchAdmissions = async () => {
    try {
      const res = await axios.get(
        "http://localhost:1111/api/admission/all",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setAdmissions(res.data)
    } catch (err) {
      setError("Failed to load admissions")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAdmissions()
  }, [])

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return

    try {
      await axios.delete(
        `http://localhost:1111/api/admission/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      fetchAdmissions()
    } catch {
      alert("Delete failed")
    }
  }

  // ================= EDIT =================
  const handleEdit = (data) => {
    setEditId(data._id)
    setForm({
      name: data.name,
      email: data.email,
      course: data.course,
      paymentStatus: data.paymentStatus
    })
    setShowModal(true)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put(
        `http://localhost:1111/api/admission/${editId}`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setShowModal(false)
      fetchAdmissions()
    } catch {
      alert("Update failed")
    }
  }

  // ================= UI =================
  return (
    <div className="admission-container">
      <h2>Admissions</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admissions.map((a) => (
              <tr key={a._id}>
                <td data-label="Name">{a.name}</td>
                <td data-label="Email">{a.email}</td>
                <td data-label="Course">{a.course}</td>
                <td data-label="Payment">
                  <span className={`status ${a.paymentStatus}`}>
                    {a.paymentStatus}
                  </span>
                </td>
                <td data-label="Action">
                  <button className="btn edit" onClick={() => handleEdit(a)}>
                    Edit
                  </button>
                  <button
                    className="btn delete"
                    onClick={() => handleDelete(a._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="modal">
          <div className="modal-box">
            <h3>Edit Admission</h3>

            <form onSubmit={handleUpdate}>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
              />

              <input
                type="text"
                placeholder="Course"
                value={form.course}
                onChange={(e) =>
                  setForm({ ...form, course: e.target.value })
                }
                required
              />

              <select
                value={form.paymentStatus}
                onChange={(e) =>
                  setForm({ ...form, paymentStatus: e.target.value })
                }
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
              </select>

              <div className="modal-actions">
                <button className="btn edit">Update</button>
                <button
                  type="button"
                  className="btn delete"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admissions
