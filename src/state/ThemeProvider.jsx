import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value = {{
        theme, 
        setTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemes = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return { theme, setTheme };
};

export default ThemeProvider;
