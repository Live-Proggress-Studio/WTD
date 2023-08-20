import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (theme: string) => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const userPreferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return localStorage.getItem("selectedTheme") || userPreferredTheme;
  });

  useEffect(() => {
    const currentTheme = localStorage.getItem("selectedTheme") || "light";
    document.querySelector("body")?.setAttribute("data-theme", currentTheme);
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);

    setTheme(() => localStorage.getItem("selectedTheme") || "");
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // @Обработчик изменения темы ОС
    const handleDarkModeChange = (event: any) => {
      const newTheme = event.matches ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("selectedTheme", newTheme);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
    };
  }, [theme]);

  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
    localStorage.setItem("selectedTheme", selectedTheme);
    document.querySelector("body")?.setAttribute("data-theme", selectedTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: theme, setTheme: handleThemeChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
