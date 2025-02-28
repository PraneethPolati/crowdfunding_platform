import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Payment.css";

const Payment = () => {
  const { id } = useParams(); // Get campaign ID from URL
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    alert(`Proceeding to payment of $${amount} for campaign ${id}`);
    // Here, we will later integrate the actual payment gateway
  };

  return (
    <div className="payment-container">
      <h2>Donate to Campaign #{id}</h2>
      <input
        type="number"
        placeholder="Enter amount ($)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Proceed to Pay</button>
    </div>
  );
};

export default Payment;
