import React from 'react';
import BookList from '../books/BookList';
import ThemeToggle from '../themes/ThemeToggle';
import { useThemes } from '../../state/ThemeProvider';
import './App.css';

export default function App() {
  const theme = useThemes();
  console.log(theme);
  return (
    <div className={theme}>
      <ThemeToggle />
      <BookList />
    </div>
  );
}
