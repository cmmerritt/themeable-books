import React from 'react';
import BookList from '../books/BookList';
import ThemeToggle from '../themes/ThemeToggle';
import { useThemes } from '../../state/ThemeProvider';
import styles from './App.css';

export default function App() {
  const { theme } = useThemes();
  console.log(theme);
  console.log(theme.theme);
  return (
    // <div style={{ backgroundColor: 'lightblue' }}>
    <div className={styles[theme]}>
      <ThemeToggle />
      <BookList />
    </div>
  );
}
