import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { Header } from "@/Shared/UI";
import { Sidebar } from "@/Widgets";
import { useAuth } from "@Hooks/useAuth";

//? Layout Component - содержит компоненты виджетов по-умолчанию, которые необходимо отображать на каждой странице
//* Components: header, sidebar

const Layout: React.FC = () => {
  // @cookies
  const cookies = new Cookies();
  //@ Authorization
  const { isAuthenticated } = useAuth();

  //@ Sidebar
  const savedSidebarState: boolean | null = JSON.parse(
    localStorage.getItem("sidebarVisible")
  );
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    savedSidebarState !== null ? savedSidebarState : true
  );

  useEffect(() => {
    localStorage.setItem("sidebarVisible", JSON.stringify(isSidebarVisible));
  }, [isSidebarVisible, isAuthenticated, cookies.get("Authorization")]);
  const toggleSidebar = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  //@ Search shortcuts
  const handleSearchShortcut = () => {
    return console.log("Search shortcut pressed");
  };

  return (
    <>
      <Header
        onBurgerMenuClick={toggleSidebar}
        onSearchShortcut={handleSearchShortcut}
      />
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </>
  );
};

export default Layout;
