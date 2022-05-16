import React, { createContext, useContext, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext(null);
const ThemeUpdateContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleIntoDarkTheme = () => {
    setDarkTheme(true);
  };

  const toggleIntoLightTheme = () => {
    setDarkTheme(false);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider
        value={{ toggleIntoDarkTheme, toggleIntoLightTheme }}
      >
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
