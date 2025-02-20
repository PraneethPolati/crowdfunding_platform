import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import CreateCampaign from "./pages/CreateCampaign";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import CampaignDetails from "./pages/CampaignDetails";
import Donate from "./pages/Donate";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages that should have the Navbar */}
        <Route path="/" element={<LayoutWithNavbar><Home /></LayoutWithNavbar>} />
        <Route path="/dashboard" element={<LayoutWithNavbar><Dashboard /></LayoutWithNavbar>} />
        <Route path="/campaigns" element={<LayoutWithNavbar><Campaigns /></LayoutWithNavbar>} />
        <Route path="/create-campaign" element={<LayoutWithNavbar><CreateCampaign /></LayoutWithNavbar>} />
        <Route path="/profile" element={<LayoutWithNavbar><Profile /></LayoutWithNavbar>} />
        <Route path="/admin" element={<LayoutWithNavbar><AdminDashboard /></LayoutWithNavbar>} />

        {/* Pages without the Navbar */}
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/donate/:id" element={<Donate />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Layout wrapper to include Navbar only on selected pages
const LayoutWithNavbar = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="page-content">{children}</div>
    </>
  );
};

export default App;
