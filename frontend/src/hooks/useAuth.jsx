import React, { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [sessionId, setSessionId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedSessionId = localStorage.getItem("sessionId");
    if (storedSessionId) {
      setSessionId(storedSessionId);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (newSessionId) => {
    localStorage.setItem("sessionId", newSessionId);
    setSessionId(newSessionId);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("sessionId");
    setSessionId(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ sessionId, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
