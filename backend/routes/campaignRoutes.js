const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { createCampaign, getAllCampaigns, getCampaignById, updateCampaign, deleteCampaign } = require("../controllers/campaignController");

// Create a new campaign (Protected Route)
router.post("/", authMiddleware, createCampaign);

// Get all campaigns (Public Route)
router.get("/", getAllCampaigns);

// Get single campaign by ID (Public Route)
router.get("/:id", getCampaignById);

router.put("/:id", authMiddleware, updateCampaign);
router.delete("/:id", authMiddleware, deleteCampaign);

router.post("/", async (req, res) => {
    try {
      const { title, description, goal, creator, startDate, endDate } = req.body;
  
      if (!title || !description || !goal || !creator) {
        return res.status(400).json({ message: "Please provide all required fields" });
      }
  
      const campaign = new Campaign({
        title,
        description,
        goal,
        raised: 0, // Initial raised amount is 0
        creator,
        startDate,
        endDate,
      });
  
      await campaign.save();
      res.status(201).json({ message: "Campaign created successfully", campaign });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  });
  
module.exports = router;
