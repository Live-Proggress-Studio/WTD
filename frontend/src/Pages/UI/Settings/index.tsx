import { Link } from "react-router-dom";
import RadioToggler from "@Features/DarkMode/RadioToggler";
import CheckBoxToggler from "@Features/DarkMode/CheckBoxToggler";

const Settings = () => {
  return (
    <>
      <div className="togglers-box">
        <CheckBoxToggler />
        <RadioToggler />
      </div>
      <h1 className="title">Settings</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default Settings;
