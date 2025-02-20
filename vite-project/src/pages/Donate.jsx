import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Donate.css";

const Donate = () => {
  const { id } = useParams(); // Get campaign ID from URL
  const [amount, setAmount] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Thank you for donating $${amount} to Campaign ID: ${id}`);
    setAmount(""); // Reset input field
  };

  return (
    <div className="donate-page">
      <h2>Make a Donation</h2>
      <form onSubmit={handleDonate}>
        <label>Enter Amount ($)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min="1"
        />
        <button type="submit">Donate Now</button>
      </form>
    </div>
  );
};

export default Donate;
