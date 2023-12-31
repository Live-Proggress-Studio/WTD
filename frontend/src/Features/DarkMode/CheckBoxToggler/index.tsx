import blueMoon from "../icons/blueMoon.svg";
import blueSun from "../icons/blueSun.svg";
import "./CheckBoxToggler.scss";
import { useThemeManager } from "@/Shared/Hooks/useThemeManager";

const CheckBoxToggler = () => {
  const { theme, setTheme } = useThemeManager();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };

  return (
    <label className="theme__toggle">
      <input
        type="checkbox"
        id="darkmode-toggle"
        className="theme__toggle-input"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="theme__toggle-slider theme__toggle-round">
        <div className="theme__toggle-slider-wrap ">
          <div className="theme__toggle-slider-wrap-img">
            <img src={theme === "dark" ? blueMoon : blueSun} alt="toggle" />
          </div>
        </div>
      </span>
    </label>
  );
};

export default CheckBoxToggler;
