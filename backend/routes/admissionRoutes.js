const express = require("express")
const upload = require("../middleware/multer")
const {
  createAdmission,
  getAllAdmissions,
  updateAdmission,
  deleteAdmission
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
router.put("/update/:id", updateAdmission)
router.delete("/delete/:id", deleteAdmission)

module.exports = router
