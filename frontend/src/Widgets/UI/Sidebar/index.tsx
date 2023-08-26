import { useEffect, KeyboardEvent } from "react";
import { SidebarItem } from "./SidebarItem";
import sidebarLinks from "./SideBarLinks";
import "./sidebar.scss";
import { useAuth } from "@/Shared/Hooks/useAuth";
import { Link } from "react-router-dom";

interface SidebarProps {
  isSidebarVisible: boolean;
  setIsSidebarVisible: (visible: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarVisible,
  setIsSidebarVisible,
}) => {
  const isAuthenticated = useAuth();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "m" || event.key === "ь") {
        const activeElement = document.activeElement as HTMLElement | null;
        const isInputFocused =
          activeElement?.tagName === "INPUT" &&
          activeElement?.getAttribute("type") === "text";

        if (!isInputFocused) {
          // @ts-ignore
          setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
        }
      }
    };
    // @ts-ignore
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // @ts-ignore
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

export default Sidebar;
