import express from "express"
import upload from "../middleware/multer.js"
import {
  createAdmission,
  getAllAdmissions
} from "../controller/admissionController.js"

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

export default router
