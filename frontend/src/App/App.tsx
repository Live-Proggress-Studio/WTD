import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Providers/Theme-provider";
import "./App.scss";
import Settings from "../Pages/UI/Settings";
import Main from "../Pages/UI/Main";
import "normalize.css"; // from npm package
import Header from "@/Shared/UI/Header";
import { Sidebar } from "@/Widgets/UI/Sidebar";

function App() {
  const savedSidebarState = JSON.parse(localStorage.getItem("sidebarVisible"));

  const [isSidebarVisible, setIsSidebarVisible] = useState(
    savedSidebarState !== null ? savedSidebarState : true
  );

  const toggleSidebar = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  const handleSearchShortcut = () => {
    console.log("Search shortcut pressed");
  };

  useEffect(() => {
    localStorage.setItem("sidebarVisible", JSON.stringify(isSidebarVisible));
  }, [isSidebarVisible]);

  return (
    <ThemeProvider>
      <Header
        onBurgerMenuClick={toggleSidebar}
        onSearchShortcut={handleSearchShortcut}
      />
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
