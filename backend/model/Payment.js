const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    method: { type: String, default: "UPI" },
    status: {
      type: String,
      enum: ["paid", "pending", "failed"],
      default: "pending"
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Payment", paymentSchema)

