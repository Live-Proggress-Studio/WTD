import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Providers/Theme-provider";
import "./App.scss";
import Settings from "../Pages/UI/Settings";
import Main from "../Pages/UI/Main";
import 'normalize.css'; // from npm package

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
