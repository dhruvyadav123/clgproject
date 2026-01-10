const express = require("express");
const { loginUser, registerUser } = require("../controller/authController");
const Register = require("../model/register");
const router = express.Router();

// ================= AUTH =================
router.post("/signup", registerUser);
router.post("/login", loginUser);

// ================= GET ALL USERS =================
router.get("/users", async (req, res) => {
  try {
    const users = await Register.find({}, { password: 0 }); // hide password
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ================= UPDATE USER =================
router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email required" });
    }

    const updatedUser = await Register.findByIdAndUpdate(
      id,
      { name, email },
      { new: true, runValidators: true, select: "-password" }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update failed" });
  }
});

// ================= DELETE USER =================
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await Register.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
