// import { SidebarItem } from "./SidebarItem";
// import sidebarLinks from "./SideBarLinks";
import { Link } from "react-router-dom";
import { Paths } from "@/App/Routing";
import { FC, useState } from "react";
import "./Sidebar.scss";
import sidebarLinks from "./SideBarLinks";
import { SidebarItem } from "./SidebarItem";
import {IoLogInSharp} from "react-icons/io5"



const Sidebar: FC = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

    const toggleSidebar = () => {
      setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
    };

    const isAuthenticated = false

  return (
    <div className={`sidebar ${isSidebarVisible ? "open" : ""}`}>
        <div className="sidebar__burger" onClick={toggleSidebar}>
          <span className="sidebar__burger-bar"></span>
          <span className="sidebar__burger-bar"></span>
          <span className="sidebar__burger-bar"></span>
        </div>
          {sidebarLinks.map((link, index) => (
            <SidebarItem
              key={index}
              icon={link.icon}
              text={link.text}
              link={link.link}
            />
          ))}
          <hr />
          {!isAuthenticated ? (
          <Link to={Paths.Login}>
            <button className="login_button">{isSidebarVisible ? "Войти" : <IoLogInSharp />}</button>
          </Link>
          ) : null }
    </div>
  );
};

export default Sidebar;