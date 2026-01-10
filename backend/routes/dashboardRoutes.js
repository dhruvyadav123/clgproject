const express = require("express")
const router = express.Router()

router.get("/stats", (req, res) => {
  res.json({
    users: 120,
    admissions: 45,
    payments: 30
  })
})

module.exports = router
