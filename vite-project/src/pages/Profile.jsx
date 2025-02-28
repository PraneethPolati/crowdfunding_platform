import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

const Profile = () => {
  const { user, logout } = useAuth(); // Get user and logout function from AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  // Dummy user data (will be replaced with actual user data from context)
  const [profile, setProfile] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "johndoe@example.com",
    bio: "Passionate about innovative projects!",
    avatar: "https://via.placeholder.com/100",
  });

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={profile.avatar} alt="User Avatar" className="profile-avatar" />
        <h2>{profile.name}</h2>
        <p>{profile.email}</p>
        <p>{profile.bio}</p>
        <button className="edit-btn">Edit Profile</button>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="campaigns-list">
        <h3>Your Campaigns</h3>
        <div className="campaign-item">
          <img src="https://via.placeholder.com/150" alt="Campaign" />
          <div className="campaign-info">
            <h4>Education for All</h4>
            <p>Goal: $5000 | Raised: $2500</p>
          </div>
        </div>

        <div className="campaign-item">
          <img src="https://via.placeholder.com/150" alt="Campaign" />
          <div className="campaign-info">
            <h4>AI for Healthcare</h4>
            <p>Goal: $10,000 | Raised: $7,500</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
