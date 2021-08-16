import React from 'react';
import { useThemes } from '../../state/ThemeProvider';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useThemes();

  return (
    <>
      <input
        type="radio"
        name="theme"
        value="light"
        checked={theme === 'light' ? true : false}
        onChange={setTheme}
      />
      <label htmlFor="light">Light theme</label>

      <input 
        type="radio"
        name="theme"
        value="dark"
        checked={theme === 'dark' ? true : false}
        onChange={setTheme}
      />
      <label htmlFor="dark">Dark theme</label>
    </>

  );
};

export default ThemeToggle;
