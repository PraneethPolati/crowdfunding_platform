const Campaign = require("../models/Campaign");

// Create a new campaign
exports.createCampaign = async (req, res) => {
  try {
    const { title, description, goalAmount, category, deadline } = req.body;
    const newCampaign = new Campaign({
      title,
      description,
      goalAmount,
      category,
      deadline,
      createdBy: req.user.userId, // Get user ID from token
    });

    await newCampaign.save();
    res.status(201).json({ message: "Campaign created successfully", campaign: newCampaign });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all campaigns
exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find().populate("createdBy", "name email");
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get a single campaign by ID
exports.getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id).populate("createdBy", "name email");
    if (!campaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }
    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update Campaign
exports.updateCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCampaign = await Campaign.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCampaign) {
      return res.status(404).json({ message: "Campaign not found" });
    }

    res.status(200).json(updatedCampaign);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// Delete Campaign
exports.deleteCampaign = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedCampaign = await Campaign.findByIdAndDelete(id);
  
      if (!deletedCampaign) {
        return res.status(404).json({ message: "Campaign not found" });
      }
  
      res.status(200).json({ message: "Campaign deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };
  