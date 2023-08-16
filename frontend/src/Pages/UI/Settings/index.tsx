import { useState } from "react";
import { Link } from "react-router-dom";
import { withCookies, Cookies, useCookies } from 'react-cookie';
import RadioToggler from "@Features/DarkMode/RadioToggler";
import CheckBoxToggler from "@Features/DarkMode/CheckBoxToggler";
import "./settings.scss";
import { useAuth } from "@Hooks/useAuth";

const Settings = () => {
  const { setIsAuthenticated } = useAuth();
  const [cookies, setCookie, removeCookie] = useCookies(["Authorization"]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    removeCookie('Authorization', { path: '/' });
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
              <h2>Аккаунт</h2>
              <div className="togglers-box">
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
