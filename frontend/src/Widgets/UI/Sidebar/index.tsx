import React, { useEffect } from "react";
import { SidebarItem } from "./SidebarItem";
import sidebarLinks from "./SideBarLinks";
import "./sidebar.scss";
import { useAuth } from "@/Shared/Hooks/useAuth";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarVisible, setIsSidebarVisible }) => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "m" || event.key === "ь") {
        const activeElement = document.activeElement;
        const isInputFocused =
          activeElement.tagName === "INPUT" && activeElement.type === "text";

        if (!isInputFocused) {
          setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsSidebarVisible]);

  return (
    <div className={`sidebar ${isSidebarVisible ? "" : "hidden"}`}>
      {isAuthenticated ? (
        <>
          {sidebarLinks.map((link, index) => (
            <SidebarItem
              key={index}
              icon={link.icon}
              text={link.text}
              link={link.link}
            />
          ))}
        </>
      ) : (
        <>
          <Link to="/signup">
            <button>Регистрация</button>
          </Link>
          <Link to="/login">
            <button>Вход</button>
          </Link>
        </>
      )}
    </div>
  );
};

export { Sidebar };
