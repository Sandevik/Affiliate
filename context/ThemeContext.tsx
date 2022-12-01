import React, { useState, useContext } from "react";

const ThemeContext = React.createContext(false);
const ThemeUpdateContext = React.createContext(() => {});

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const useTheme = () =>{
  return { darkMode: useContext(ThemeContext), toggleDarkMode: useContext(ThemeUpdateContext) }
}


export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [darkmode, setDarkmode] = useState<boolean>(false);
  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <ThemeContext.Provider value={darkmode}>
      <ThemeUpdateContext.Provider value={toggleDarkMode}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
