import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(false);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    if (!isAuthenticated) {
      localStorage.removeItem("ID");
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}