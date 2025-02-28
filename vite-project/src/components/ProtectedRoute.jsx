import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Get authentication status

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
