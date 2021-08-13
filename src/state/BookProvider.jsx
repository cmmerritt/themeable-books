import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchLocBooks } from '../services/locBooks';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchLocBooks().then(setBooks);
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
