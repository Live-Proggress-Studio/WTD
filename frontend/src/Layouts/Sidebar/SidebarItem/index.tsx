import { NavLink } from "react-router-dom";

import "./SidebarItem.scss";

interface SidebarItemProps {
  icon: string,
  text: string,
  link: string,
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, link }) => {
  return (
    <div className="sidebar-item">
      <NavLink to={link}>
        <div className="sidebar-item__icon">
          <img src={icon} alt={text} />
        </div>
        <div className="sidebar-item__text">{text}</div>
      </NavLink>
    </div>
  );
};

export { SidebarItem };
