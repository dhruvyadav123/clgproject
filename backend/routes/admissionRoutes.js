const express = require("express")
const upload = require("../middleware/multer")
const {
  createAdmission,
  getAllAdmissions
} = require("../controller/admissionController")

const router = express.Router()

router.post(
  "/create",
  upload.fields([
    { name: "tenthMarksheet", maxCount: 1 },
    { name: "twelfthMarksheet", maxCount: 1 },
    { name: "idProof", maxCount: 1 }
  ]),
  createAdmission
)

router.get("/all", getAllAdmissions)

module.exports = router
