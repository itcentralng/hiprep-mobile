import React, { createContext, useState, useContext } from 'react';
import { themes } from './theme'; // Import the theme object

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light); // Default to light theme

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light); // Switch between light and dark
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy access to the theme
export const useTheme = () => useContext(ThemeContext);
