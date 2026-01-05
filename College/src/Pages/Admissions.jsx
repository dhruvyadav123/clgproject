import React, { useState } from "react"
import axios from "axios"
import "./Pages.css"

function Admissions() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    course: ""
  })
  const [files, setFiles] = useState({
    tenthMarksheet: null,
    twelfthMarksheet: null,
    idProof: null
  })
  const [paymentMethod, setPaymentMethod] = useState("")

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = e => {
    setFiles(prev => ({ ...prev, [e.target.name]: e.target.files[0] }))
  }

  const handleSubmitStep1 = async e => {
    e.preventDefault()

    const data = new FormData()
    Object.keys(formData).forEach(key => data.append(key, formData[key]))
    Object.keys(files).forEach(key => {
      if (files[key]) data.append(key, files[key])
    })

    try {
      const res = await axios.post("http://localhost:1111/api/admission/create", data, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      alert(res.data.message)
      setStep(2)
    } catch (err) {
      console.error(err)
      alert("Submission failed")
    }
  }

  const handlePayment = e => {
    e.preventDefault()
    if (!paymentMethod) return alert("Select a payment method")

    // Dummy payment simulation
    alert(`Payment done via ${paymentMethod}`)
    setStep(3)
  }

  return (
    <section className="admissions-section">
      <h2 className="section-title">Admission Process</h2>

      <div className="admissions-grid">
        {["Online Registration","Document Upload","Payment","Confirmation"].map((title,index)=>(
          <div key={index} className={`admission-card ${step===index?"active":""}`} onClick={()=>setStep(index)}>
            <h3>{title}</h3>
          </div>
        ))}
      </div>

      {/* Step 0 & 1: Form */}
      {step === 0 && (
        <div className="step-box">
          <h3>Online Registration</h3>
          <form className="form-grid" onSubmit={handleSubmitStep1}>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <select name="course" value={formData.course} onChange={handleChange} required>
              <option value="">Select Course</option>
              <option>B.Sc. Physics</option>
              <option>B.Tech Computer Engineering</option>
              <option>B.A. English Literature</option>
            </select>

            <div className="upload-box">
              <label>10th Marksheet</label>
              <input type="file" name="tenthMarksheet" onChange={handleFileChange} required />
            </div>

            <div className="upload-box">
              <label>12th Marksheet</label>
              <input type="file" name="twelfthMarksheet" onChange={handleFileChange} required />
            </div>

            <div className="upload-box">
              <label>ID Proof</label>
              <input type="file" name="idProof" onChange={handleFileChange} required />
            </div>

            <button type="submit" className="next-btn">Submit Form & Upload Documents</button>
          </form>
        </div>
      )}

      {/* Step 2: Payment */}
      {step === 2 && (
        <div className="step-box">
          <h3>Payment Options</h3>
          <div className="payment-options">
            {["UPI","Debit/Credit Card","Net Banking","Offline"].map(method=>(
              <label key={method}>
                <input type="radio" name="payment" value={method} onChange={()=>setPaymentMethod(method)} /> {method}
              </label>
            ))}
          </div>
          <button onClick={handlePayment} className="next-btn">Pay Now</button>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="step-box">
          <h3>Admission Confirmed 🎉</h3>
          <p>Your admission is successfully completed.</p>
          <button className="download-btn">Download Confirmation Letter</button>
        </div>
      )}
    </section>
  )
}

export default Admissions
