import { ThemeProvider } from "./Providers/Theme-provider";
import { default as Layout } from "../Layouts/Layout";
import { default as Routing } from "./Routing/Routing";
import { default as AuthProvider } from "./Providers/AuthProvider";
import "normalize.css";
import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout />
        <Routing />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
