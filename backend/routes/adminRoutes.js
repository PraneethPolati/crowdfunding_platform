const express = require("express");
const { approveCampaign, suspendCampaign, disburseFunds, getAllUsers, toggleUserBan } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// Approve a campaign
router.put("/campaigns/:id/approve", authMiddleware, adminMiddleware, approveCampaign);

// Suspend a campaign
router.put("/campaigns/:id/suspend", authMiddleware, adminMiddleware, suspendCampaign);

// Disburse funds to campaign creator
router.put("/campaigns/:id/disburse", authMiddleware, adminMiddleware, disburseFunds);

// Get all users
router.get("/users", authMiddleware, adminMiddleware, getAllUsers);

// Ban/unban a user
router.put("/users/:id/ban", authMiddleware, adminMiddleware, toggleUserBan);

module.exports = router;