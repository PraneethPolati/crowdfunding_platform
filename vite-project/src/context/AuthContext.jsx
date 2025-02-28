import { createContext, useContext, useState } from "react";

// Create authentication context
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Simulated login function
  const login = (email, password) => {
    // Replace with real authentication logic
    const dummyUser = { email };
    setUser(dummyUser);
    localStorage.setItem("user", JSON.stringify(dummyUser));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
