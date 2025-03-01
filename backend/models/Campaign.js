const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  goalAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum: ["pending", "approved", "suspended"], default: "pending" },
  fundsDisbursed: { type: Boolean, default: false }, // New field
}, { timestamps: true });

module.exports = mongoose.model("Campaign", campaignSchema);