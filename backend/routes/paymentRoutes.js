const express = require("express")
const router = express.Router()
const Payment = require("../model/Payment")

// 🔹 Get all payments
router.get("/", async (req, res) => {
  const payments = await Payment.find().sort({ createdAt: -1 })
  res.json(payments)
})

// 🔹 Update payment status
router.put("/:id", async (req, res) => {
  await Payment.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  })
  res.json({ message: "Payment updated" })
})

// 🔹 Delete payment
router.delete("/:id", async (req, res) => {
  await Payment.findByIdAndDelete(req.params.id)
  res.json({ message: "Payment deleted" })
})

module.exports = router

