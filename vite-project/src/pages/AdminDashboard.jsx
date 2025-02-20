import { useState } from "react";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [campaigns, setCampaigns] = useState([
    { id: 1, title: "Education for All", status: "Pending", amount: "$2500" },
    { id: 2, title: "AI for Healthcare", status: "Approved", amount: "$7500" },
    { id: 3, title: "Clean Water Project", status: "Pending", amount: "$3200" },
  ]);

  const handleApprove = (id) => {
    setCampaigns(
      campaigns.map((campaign) =>
        campaign.id === id ? { ...campaign, status: "Approved" } : campaign
      )
    );
  };

  const handleSuspend = (id) => {
    setCampaigns(
      campaigns.map((campaign) =>
        campaign.id === id ? { ...campaign, status: "Suspended" } : campaign
      )
    );
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <h4>{campaign.title}</h4>
            <p>Raised: {campaign.amount}</p>
            <p>Status: <span className={`status ${campaign.status.toLowerCase()}`}>{campaign.status}</span></p>

            {campaign.status === "Pending" && (
              <div className="admin-actions">
                <button onClick={() => handleApprove(campaign.id)} className="approve-btn">Approve</button>
                <button onClick={() => handleSuspend(campaign.id)} className="suspend-btn">Suspend</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
