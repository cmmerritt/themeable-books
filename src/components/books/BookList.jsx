import React from 'react';
import Book from './Book';

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
