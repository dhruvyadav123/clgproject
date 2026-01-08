const mongoose = require("mongoose")

const admissionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    course: { type: String, required: true },

    tenthMarksheet: String,
    twelfthMarksheet: String,
    idProof: String,

    paymentStatus: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending"
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Admission", admissionSchema)
