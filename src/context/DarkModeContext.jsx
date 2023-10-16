import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvidor({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)"),
    "isDarkMode"
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("DarkModeContext was used outside of DarkModeProvidor");
  return context;
}

export { DarkModeProvidor, useDarkMode };
