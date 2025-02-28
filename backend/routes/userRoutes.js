const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // Import middleware
const { getUserProfile, updateUserProfile } = require("../controllers/authController");

const router = express.Router();

// Protect this route with authMiddleware
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);

module.exports = router;
