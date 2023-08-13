import React, { useEffect } from "react";
import { SidebarItem } from "./SidebarItem";
import sidebarLinks from './SideBarLinks';
import "./sidebar.scss";

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "m" || event.key === "ь") {
        setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsSidebarVisible]);

  return (
    <div className={`sidebar ${isSidebarVisible ? "" : "hidden"}`}>
      {sidebarLinks.map((link, index) => (
        <SidebarItem
          key={index}
          icon={link.icon}
          text={link.text}
          link={link.link}
        />
      ))}
    </div>
  );
};

export { Sidebar };
