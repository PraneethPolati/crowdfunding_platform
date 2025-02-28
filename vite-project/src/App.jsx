import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; 
import ProtectedRoute from "./components/ProtectedRoute";

import Payment from "./pages/Payment";
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
import Login from "./pages/Login";  
import Signup from "./pages/Signup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<LayoutWithNavbar><Home /></LayoutWithNavbar>} />
          <Route path="/campaigns" element={<LayoutWithNavbar><Campaigns /></LayoutWithNavbar>} />
          <Route path="/login" element={<LayoutWithNavbar><Login /></LayoutWithNavbar>} />  
          <Route path="/signup" element={<LayoutWithNavbar><Signup /></LayoutWithNavbar>} /> 
          <Route path="/campaign/:id" element={<CampaignDetails />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><LayoutWithNavbar><Dashboard /></LayoutWithNavbar></ProtectedRoute>} />
          <Route path="/create-campaign" element={<ProtectedRoute><LayoutWithNavbar><CreateCampaign /></LayoutWithNavbar></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><LayoutWithNavbar><Profile /></LayoutWithNavbar></ProtectedRoute>} />
          <Route path="/donate/:id" element={<ProtectedRoute><Donate /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><LayoutWithNavbar><AdminDashboard /></LayoutWithNavbar></ProtectedRoute>} />
          
          <Route path="/payment/:id" element={<ProtectedRoute><Payment /></ProtectedRoute>} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        
        </Routes>
      </Router>
    </AuthProvider>
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
