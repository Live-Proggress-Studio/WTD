import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import jwtdecode from "jwt-decode";
import RadioToggler from "@Features/DarkMode/RadioToggler";
import CheckBoxToggler from "@Features/DarkMode/CheckBoxToggler";
import { useAuth } from "@Hooks/useAuth";
import { KBMap } from "./KBMap";
import "./settings.scss";

const Settings = () => {
  const { setIsAuthenticated } = useAuth();
  const cookies = new Cookies();

  const cooks = cookies.getAll();
  const token = cookies.get("Authentication");
  console.log(cooks);
  // console.log(jwtDecode(token));

  const handleLogout = () => {
    setIsAuthenticated(false);

    cookies.remove("Authorization");
    setTimeout(() => {
      window.location.href = "/login";
    }, 0);
  };

  return (
    <>
      <div className="settings">
        <div className="settings__title">
          <h1>Настройки</h1>
        </div>
        <div className="settings__section">
          <div className="setion__item">
            <div className="item__title">
              <h2>Тема</h2>
              <div className="togglers-box">
                <CheckBoxToggler />
              </div>
            </div>
          </div>
          <div className="setion__item">
            <div className="item__title">
              <h2>Сочитания клавишь</h2>
              <div className="item-box">
                <div className="p-20">
                  <Link to="/kbmap">Keyboard Map</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="setion__item">
            <div className="item__title">
              <h2>Аккаунт</h2>
              <div className="item-box">
                <div className="p-20">
                  <Link to="/profile">Настройки аккаунта</Link>
                </div>
                <button type="button" className="button" onClick={handleLogout}>
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
