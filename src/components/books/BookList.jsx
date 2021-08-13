import React from 'react';
import Book from './Book';
import { useBooks } from '../../state/BookProvider';

const BookList = () => {
  const books = useBooks();

  const bookElements = books.map((book) => (
    <li key={book.title}>
      <Book {...book} />
    </li>
  ));
  return <ul>{bookElements}</ul>;
};

export default BookList;
