import { useState } from "react";
import { Link } from "react-router-dom";
import RadioToggler from "@Features/DarkMode/RadioToggler";
import CheckBoxToggler from "@Features/DarkMode/CheckBoxToggler";
import "./settings.scss";

const Settings = () => {
  return (
    <>
      <div className="settings">
        <div className="settings__title">
          <h1>Настройки</h1>
        </div>
        <div className="settings__section">
          <div className="setion__item">
            <div className="item__title">
              <h2>Настройка темы</h2>
              <div className="togglers-box">
                <CheckBoxToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
