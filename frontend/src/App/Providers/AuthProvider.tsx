import React, { createContext, useContext, useEffect, useState } from "react";
import useApi from "@Hooks/useAPI";

export const AuthContext = createContext(false);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    checkAuthStatus();
    if (!isAuthenticated) return localStorage.removeItem("userdata");
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await useApi("check-auth", "GET", null, true);
      console.log(response?.message);

      if (response.message === "Authorized") {
        setIsAuthenticated(true);
      } else if (response.message === "Unauthorized") {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default React.memo(AuthProvider);
