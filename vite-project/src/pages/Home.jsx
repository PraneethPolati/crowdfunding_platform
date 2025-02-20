import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fund Your Dreams with Crowdfunding</h1>
          <p>Start your campaign today and bring your ideas to life with the power of the community.</p>
          <Link to="/create-campaign" className="btn">Start a Campaign</Link>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="featured">
        <h2>Featured Campaigns</h2>
        <div className="campaigns-grid">
          <div className="campaign-card">Campaign 1</div>
          <div className="campaign-card">Campaign 2</div>
          <div className="campaign-card">Campaign 3</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">📌 Create a Campaign</div>
          <div className="step">💰 Receive Contributions</div>
          <div className="step">🎉 Bring Ideas to Life</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Crowdfunding Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
