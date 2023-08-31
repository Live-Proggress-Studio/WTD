import React, { createContext, ReactNode, useEffect, useState } from "react";
import { ResponseData } from "@/Services/Interfaces";
import useApi from "@Hooks/useAPI";

export interface AuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    // @ts-ignore
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
      const response = (await useApi(
        "check-auth",
        "GET",
        null,
        true
      )) as ResponseData;
      // console.log(response?.message);

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
