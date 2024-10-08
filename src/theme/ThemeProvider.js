import React, { createContext, useState, useContext } from 'react';
import { themes } from './theme'; 

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light); 

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light); 
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = () => useContext(ThemeContext);
