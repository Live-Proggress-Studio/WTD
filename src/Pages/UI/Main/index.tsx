import { Link } from "react-router-dom";
import "./main.scss";
import RadioToggler from "../../../Components/Share/DarkMode/RadioToggler/RadioToggler";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import CheckBoxToggler from "../../../Components/Share/DarkMode/CheckBoxToggler/CheckBoxToggler";

const Main = () => {
  return (
    <>
      <div className="stack">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React <br />Theme Controls Templates</h1>
      </div>
      <div className="togglers-box">
        <CheckBoxToggler />
        <RadioToggler />
      </div>
      <h2>Main Page</h2>
      <Link to="/settings">Settings</Link>
      <p>
        This app working with <code>.css</code>, <code>.scss</code>,{" "}
        <code>.js</code> and <code>.ts</code>
      </p>
      <a href="https://github.com/Avdushin" target="_blank">
        github.com/Advushin
      </a>
    </>
  );
};

export default Main;
