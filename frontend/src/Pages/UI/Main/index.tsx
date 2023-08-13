import React, { useState } from "react";
import Header from "@Shared/UI/Header";
import { Sidebar } from "@/Widgets/UI/Sidebar";
import "./main.scss";

const Main = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  const handleSearchShortcut = () => {
    console.log("Search shortcut pressed");
  };

  return (
    <>
      <Header onBurgerMenuClick={toggleSidebar} onSearchShortcut={handleSearchShortcut} />
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />
    </>
  );
};

export default Main;
