import { useEffect } from "react";
import { useTheme } from "@/App/Providers/Theme-provider";

const useThemeManager = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", theme);

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleDarkModeChange = (event) => {
      const newTheme = event.matches ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("selectedTheme", newTheme);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, [theme, setTheme]);

  return { theme, setTheme };
};

export { useThemeManager };
