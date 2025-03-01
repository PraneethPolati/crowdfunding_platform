const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes"); 
const campaignRoutes = require("./routes/campaignRoutes");
const adminRoutes = require("./routes/adminRoutes"); // Import admin routes
const authRoutes = require("./routes/authRoutes");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes); 
app.use("/api/campaigns", campaignRoutes);
app.use("/api/admin", adminRoutes); // Use admin routes

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Crowdfunding API");
});

// Connect to MongoDB (Replace with your actual MongoDB URI)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
