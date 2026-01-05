import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./Auth.css"

function Login() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      return alert("All fields are required")
    }

    try {
      const res = await axios.post(
        "http://localhost:1111/api/auth/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      alert(res.data.message || "Login successful")

      // 🔐 Save token
      if (res.data.token) {
        localStorage.setItem("token", res.data.token)
        navigate("/admin-dashboard")
      }

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login failed"
      )
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <span
            style={{ color: "#007bff", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
