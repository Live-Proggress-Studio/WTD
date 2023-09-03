import { FC } from "react";
import { Link } from "react-router-dom";
import { Keyboard } from "@/Utils/Constants/variables";
import burger from "@Icons/Burger.svg";
import home from "@Icons/Home.svg";
import notifications from "@Icons/notification_bel.svg";
import "./Header.scss";
import { Paths } from "@/App/Routing";

interface HeaderProps {
  onBurgerMenuClick: () => void;
  onSearchShortcut?: () => void;
}

const Header: FC<HeaderProps> = ({onBurgerMenuClick}) => {


  

  return (
    <header className="header">
      <div className="header__container">
        <nav className="nav-menu">
          <div className="nav-menu__left">
            <div className="menu-left__burger-menu" onClick={onBurgerMenuClick}>
              <img src={burger} alt="menu-burger" />
              <span className="tooltip">{Keyboard.MENU}</span>
            </div>
            <div className="menu-left__home">
              <Link to={Paths.Home}>
                <img src={home} alt="home button" />
              </Link>
            </div>
            <div className="menu-left__search">
              <div className="menu-left__search__wrapper">
                <input
                  // ref={''}
                  type="text"
                  placeholder="Найти..."
                />
                <div className="kb">{Keyboard.SEARCH}</div>
              </div>
            </div>
          </div>
          <div className="nav-menu__right">
            <div className="avatar">
              <img src={notifications} alt="user's avatar" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
