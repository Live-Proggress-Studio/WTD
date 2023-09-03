// import { SidebarItem } from "./SidebarItem";
// import sidebarLinks from "./SideBarLinks";
import { Link } from "react-router-dom";
import { Paths } from "@/App/Routing";
import { FC } from "react";
import "./Sidebar.scss";

interface SidebarProps {
  isSidebarVisible: boolean;
  setIsSidebarVisible?: (visible: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({isSidebarVisible}) => {

  return (
    <div className={`sidebar ${isSidebarVisible ? "" : "hidden"}`}>
        {/* <>
          {sidebarLinks.map((link, index) => (
            <SidebarItem
              key={index}
              icon={link.icon}
              text={link.text}
              link={link.link}
            />
          ))}
        </> */}
        <>
          <Link to={Paths.Signup}>
            <button>Регистрация</button>
          </Link>
          <Link to={Paths.Login}>
            <button>Вход</button>
          </Link>
        </>
    </div>
  );
};

export default Sidebar;
