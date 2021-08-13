import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchBooks } from '../services/openLibraryApi';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <BookContext.Provider
      value={{ books }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const { books } = useContext(BookContext);
  return books;
};
