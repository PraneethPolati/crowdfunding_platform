import React from 'react';

import { useState } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Passionate about innovative projects!",
    avatar: "https://via.placeholder.com/100",
  });

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.bio}</p>
        <button className="edit-btn">Edit Profile</button>
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
