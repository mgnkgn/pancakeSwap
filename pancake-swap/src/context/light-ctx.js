import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(
    localStorage.getItem("theme") === "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);
  const toggleTheme = () => {
    setIsLight(!isLight);
  };
  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
