import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa"; // Icons for menu
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          Crowdfund
        </Link>

        {/* Desktop Menu */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/campaigns" onClick={() => setMenuOpen(false)}>Campaigns</Link></li>
          <li><Link to="/create-campaign" onClick={() => setMenuOpen(false)}>Create Campaign</Link></li>
          <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
          <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
          <li><Link to="/login" className="login-btn">Login</Link></li>
          <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
