import React from 'react';
import Book from './Book';
import { useBooks } from '../../state/BookProvider';
import styles from './BookList.css';

const BookList = () => {
  const books = useBooks();

  const bookElements = books.map((book) => (
    <li key={book.title}>
      <Book {...book} />
    </li>
  ));
  return <ul className={styles.BookList}>{bookElements}</ul>;
};

export default BookList;
