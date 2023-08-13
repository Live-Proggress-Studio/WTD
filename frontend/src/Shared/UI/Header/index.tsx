import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Keyboard } from "@/Shared/variables";
import burger from "@Icons/Burger.svg";
import home from "@Icons/Home.svg";
import userAvatar from "@Icons/User.svg";
import "./header.scss";

const Header = ({ onBurgerMenuClick, onSearchShortcut }) => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && (event.key === "k" || event.key === "л" || event.key === "f" || event.key === "а"   || event.keyCode === 75)) {
        event.preventDefault(); // Prevent browser search
        onSearchShortcut();
        searchInputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSearchShortcut]);

  return (
    <header className="header">
      <div className="header__container">
        <nav className="nav-menu">
          <div className="nav-menu__left">
            <div className="menu-left__burger-menu" onClick={onBurgerMenuClick}>
              <img src={burger} alt="menu-burger" />
            </div>
            <div className="menu-left__home">
              <Link to="/">
                <img src={home} alt="home button" />
              </Link>
            </div>
            <div className="menu-left__search">
              <div className="menu-left__search__wrapper">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Найти..."
                />
                <div className="kb">{Keyboard.SEARCH}</div>
              </div>
            </div>
          </div>
          <div className="nav-menu__right">
            <div className="avatar">
              <img src={userAvatar} alt="user's avatar" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
