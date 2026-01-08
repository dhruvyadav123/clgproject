require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const fs = require("fs")
const path = require("path")

const authRoutes = require("./routes/authRoutes")
const admissionRoutes = require("./routes/admissionRoutes")

const app = express()

// uploads folder
const uploadPath = path.join(process.cwd(), "uploads")
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath)
}

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static(uploadPath))

mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("Database connected"))
  .catch(err => console.log("DB Error:", err))

app.use("/api/auth", authRoutes)
app.use("/api/admission", admissionRoutes)

const PORT = process.env.PORT || 1234
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
