const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // Import middleware
const { getUserProfile, updateUserProfile } = require("../controllers/authController");
const {registerAdmin, loginUser} =require("../controllers/userController")
const router = express.Router();

// Protect this route with authMiddleware
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);

router.post("/register-admin", registerAdmin);
router.post("/login", loginUser);
module.exports = router;
