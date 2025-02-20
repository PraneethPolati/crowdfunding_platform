import { useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  const [campaigns] = useState([
    { id: 1, title: "Save the Oceans", raised: 500, goal: 1000 },
    { id: 2, title: "Education for All", raised: 700, goal: 1500 },
  ]);

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>

      <h3>Your Campaigns</h3>
      {campaigns.length === 0 ? (
        <p>No campaigns yet.</p>
      ) : (
        <ul>
          {campaigns.map((campaign) => (
            <li key={campaign.id}>
              <strong>{campaign.title}</strong> - Raised ${campaign.raised} / ${campaign.goal}
            </li>
          ))}
        </ul>
      )}

      <button className="create-btn">Create New Campaign</button>
    </div>
  );
};

export default Dashboard;
