import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./Providers/Theme-provider";
import Settings from "../Pages/UI/Settings";
import Main from "../Pages/UI/Main";
import "normalize.css";
import Header from "@/Shared/UI/Header";
import { Sidebar } from "@/Widgets/UI/Sidebar";
import { Login, SignUP } from "@/Pages/UI/Auth";
import { AuthProvider } from "./Providers/AuthProvider";
import { useAuth } from "@Hooks/useAuth";
import UserProfile from "@/Pages/UI/Auth/UserProfile";
import Cookies from "universal-cookie";
import "./App.scss";

function App() {
  const cookies = new Cookies();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const savedSidebarState = JSON.parse(localStorage.getItem("sidebarVisible"));
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    savedSidebarState !== null ? savedSidebarState : true
  );
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  const handleSearchShortcut = () => {
    console.log("Search shortcut pressed");
  };

  useEffect(() => {
    localStorage.setItem("sidebarVisible", JSON.stringify(isSidebarVisible));
  }, [isSidebarVisible, isAuthenticated, cookies.get("Authorization")]);

  useEffect(() => {}, [isAuthenticated]);

  return (
    <ThemeProvider>
      <AuthProvider>
        <Header
          onBurgerMenuClick={toggleSidebar}
          onSearchShortcut={handleSearchShortcut}
        />
        <Sidebar
          isSidebarVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />

        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/signup" element={<SignUP />} />
              <Route path="/login" element={<Login />} />
            </>
          ) : (
            <>
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<UserProfile />} />
            </>
          )}
          <Route path="/" element={<Main />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
