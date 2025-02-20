import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/CampaignDetails.css";
import { Link } from "react-router-dom";


const CampaignDetails = () => {
    
    const { id } = useParams(); // Get the campaign ID from URL
  const [campaign] = useState({
    id: id,
    title: "Education for All",
    description: "Help provide education to underprivileged children.",
    image: "/images/campaign1.jpg",
    goal: 5000,
    raised: 2500,
  });

  return (
    <div className="campaign-details">
      <div className="campaign-header">
        <img src={campaign.image} alt={campaign.title} className="campaign-image" />
        <h2>{campaign.title}</h2>
        <p>{campaign.description}</p>
      </div>

      <div className="campaign-stats">
        <p><strong>Funding Goal:</strong> ${campaign.goal}</p>
        <p><strong>Amount Raised:</strong> ${campaign.raised}</p>
        <progress value={campaign.raised} max={campaign.goal}></progress>
      </div>
      <Link to={`/donate/${campaign.id}`} className="donate-btn">Donate Now</Link>
    </div>
  );
};

export default CampaignDetails;
