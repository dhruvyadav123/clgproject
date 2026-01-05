import Admission from "../model/Admission.js"

export const createAdmission = async (req, res) => {
  try {
    const admission = new Admission({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      course: req.body.course,

      tenthMarksheet: req.files.tenthMarksheet[0].filename,
      twelfthMarksheet: req.files.twelfthMarksheet[0].filename,
      idProof: req.files.idProof[0].filename
    })

    await admission.save()   // 🔥 DB INSERT HERE

    res.status(201).json({
      message: "Admission created successfully"
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Admission failed"
    })
  }
}

export const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 })
    res.status(200).json(admissions)
  } catch (error) {
    res.status(500).json({ message: "Error fetching admissions" })
  }
}
