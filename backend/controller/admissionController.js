// Update Admission
exports.updateAdmission = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const admission = await Admission.findByIdAndUpdate(id, update, { new: true });
    if (!admission) return res.status(404).json({ message: "Admission not found" });
    res.status(200).json(admission);
  } catch (error) {
    res.status(500).json({ message: "Error updating admission" });
  }
};

// Delete Admission
exports.deleteAdmission = async (req, res) => {
  try {
    const { id } = req.params;
    const admission = await Admission.findByIdAndDelete(id);
    if (!admission) return res.status(404).json({ message: "Admission not found" });
    res.status(200).json({ message: "Admission deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting admission" });
  }
};
const Admission = require("../model/Admission")

exports.createAdmission = async (req, res) => {
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

    await admission.save()

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

exports.getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 })
    res.status(200).json(admissions)
  } catch (error) {
    res.status(500).json({ message: "Error fetching admissions" })
  }
}
