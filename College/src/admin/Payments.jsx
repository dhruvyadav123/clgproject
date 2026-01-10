import React, { useEffect, useState } from "react"
import axios from "axios"
import "./Payments.css"

const Payments = () => {
  const [payments, setPayments] = useState([])
  const token = localStorage.getItem("token")

  const fetchPayments = async () => {
    const res = await axios.get("http://localhost:1111/api/payments", {
      headers: { Authorization: `Bearer ${token}` }
    })
    setPayments(res.data)
  }

  useEffect(() => {
    fetchPayments()
  }, [])

  const updateStatus = async (id, status) => {
    await axios.put(
      `http://localhost:1234/api/payments/${id}`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    fetchPayments()
  }

  const deletePayment = async (id) => {
    if (!window.confirm("Delete payment?")) return
    await axios.delete(
      `http://localhost:1234/api/payments/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    fetchPayments()
  }

  return (
    <div className="payment-container">
      <h2>Payments</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p) => (
              <tr key={p._id}>
                <td data-label="Name">{p.studentName}</td>
                <td data-label="Email">{p.email}</td>
                <td data-label="Amount">₹{p.amount}</td>
                <td data-label="Method">{p.method}</td>
                <td data-label="Status">
                  <select
                    value={p.status}
                    onChange={(e) =>
                      updateStatus(p._id, e.target.value)
                    }
                  >
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </td>
                <td data-label="Action">
                  <button
                    className="btn delete"
                    onClick={() => deletePayment(p._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Payments
