import mongoose from "mongoose"

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

export default mongoose.model("Register", RegisterSchema)
