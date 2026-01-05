import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import admissionRoutes from "./routes/admissionRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import fs from "fs"
import path from "path"

dotenv.config()

const app = express()

// ensure uploads folder
const uploadPath = path.join(process.cwd(), "uploads")
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath)
}

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static(uploadPath))

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err))

// 🔥 VERY IMPORTANT
app.use("/api/auth", authRoutes)
app.use("/api/admission", admissionRoutes)

app.listen(1111, () => {
  console.log("Server running on 1111")
})
