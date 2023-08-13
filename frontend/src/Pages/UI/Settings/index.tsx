import { Link } from "react-router-dom";
import RadioToggler from "../../../Components/Share/DarkMode/RadioToggler/RadioToggler";
import CheckBoxToggler from "../../../Components/Share/DarkMode/CheckBoxToggler/CheckBoxToggler";

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
