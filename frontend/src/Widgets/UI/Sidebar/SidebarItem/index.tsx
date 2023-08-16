import { Link } from "react-router-dom";
import "./SidebarItem.scss";

const SidebarItem = ({ icon, text, link }) => {
  return (
    <div className="sidebar-item">
      <Link to={link}>
        <div className="sidebar-item__icon">
          <img src={icon} alt={text} />
        </div>
        <div className="sidebar-item__text">{text}</div>
      </Link>
    </div>
  );
};

export { SidebarItem };
