import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@Hooks/useAuth";
import RadioToggler from "@Features/DarkMode/RadioToggler";
import CheckBoxToggler from "@Features/DarkMode/CheckBoxToggler";
import { KBMap } from "./KBMap";
import jwtdecode from "jwt-decode";
import { useCookies } from "react-cookie";
import "./settings.scss";
import useApi from "@Hooks/useAPI";

const Settings = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      // ? Вызываем хендлен `logout` на сервере
      await useApi("logout", "POST", {}, true);
      setIsAuthenticated(false);
      // removeCookie("Authorization"); //! Не рпботает, т.к мы устанавливаем cookie с сервеа
      window.location.href = "/login";
    } catch (error) {
      console.error("Ошибка выхода:", error);
    }
  };

  return (
    <>
      {isAuthenticated ? (
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
                    <button
                      type="button"
                      className="button"
                      onClick={handleLogout}
                    >
                      Выйти
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="settings">
          {window.location.href = "/login"}
        </div>
      )}
    </>
  );
};

export default Settings;
