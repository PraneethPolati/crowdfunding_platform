import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Campaigns.css";

const Campaigns = () => {
  // Dummy campaign data (Replace with real API data later)
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: "Smart Water Purifier",
      description: "An AI-powered water purifier for rural areas.",
      goal: 5000,
      raised: 3500,
      category: "Technology",
      image: "https://source.unsplash.com/400x300/?technology",
    },
    {
      id: 2,
      title: "Medical Aid for Children",
      description: "Providing medical support for underprivileged children.",
      goal: 10000,
      raised: 7500,
      category: "Health",
      image: "https://source.unsplash.com/400x300/?health",
    },
    {
      id: 3,
      title: "Free Online Education",
      description: "Bringing free educational courses to students worldwide.",
      goal: 8000,
      raised: 4500,
      category: "Education",
      image: "https://source.unsplash.com/400x300/?education",
    },
  ]);

  return (
    <div className="campaigns">
      <h1>Explore Campaigns</h1>
      <div className="campaign-list">
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <div key={campaign.id} className="campaign-card">
              <img src={campaign.image} alt={campaign.title} className="campaign-image" />
              <h2>{campaign.title}</h2>
              <p>{campaign.description}</p>
              <p><strong>Category:</strong> {campaign.category}</p>
              <p><strong>Goal:</strong> ${campaign.goal}</p>
              <p><strong>Raised:</strong> ${campaign.raised}</p>

              {/* Progress Bar */}
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                ></div>
              </div>

              <Link to={`/campaign/${campaign.id}`} className="btn">View Campaign</Link>
            </div>
          ))
        ) : (
          <p>No campaigns found.</p>
        )}
      </div>
    </div>
  );
};

export default Campaigns;
