const Campaign = require("../models/Campaign");
const User = require("../models/User");

// Approve a Campaign
const approveCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });

    // Check if campaign is already approved
    if (campaign.status === "approved") {
      return res.status(400).json({ message: "Campaign is already approved" });
    }

    // Approve the campaign
    campaign.status = "approved";
    await campaign.save();

    res.json({ message: "Campaign approved successfully", campaign });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Suspend a Campaign
const suspendCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });

    // Check if campaign is already suspended
    if (campaign.status === "suspended") {
      return res.status(400).json({ message: "Campaign is already suspended" });
    }

    // Suspend the campaign
    campaign.status = "suspended";
    await campaign.save();

    res.json({ message: "Campaign suspended successfully", campaign });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Disburse Funds to Campaign Creator
const disburseFunds = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id).populate("createdBy", "email");
    if (!campaign) return res.status(404).json({ message: "Campaign not found" });

    // Check if campaign goal is met
    if (campaign.currentAmount < campaign.goalAmount) {
      return res.status(400).json({ message: "Campaign goal not met" });
    }

    // Check if funds are already disbursed
    if (campaign.fundsDisbursed) {
      return res.status(400).json({ message: "Funds already disbursed" });
    }

    // Mark funds as disbursed
    campaign.fundsDisbursed = true;
    await campaign.save();

    // Notify the campaign creator (you can integrate email or notification service here)
    res.json({ message: "Funds disbursed successfully", campaign });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  List All Users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude passwords
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Ban/Unban a User
const toggleUserBan = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Toggle ban status
    user.isBanned = !user.isBanned;
    await user.save();

    // Suspend all campaigns if user is banned
    if (user.isBanned) {
      await Campaign.updateMany({ createdBy: user._id }, { status: "suspended" });
    }

    res.json({ message: `User ${user.isBanned ? "banned" : "unbanned"} successfully`, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { approveCampaign, suspendCampaign, disburseFunds, getAllUsers, toggleUserBan };