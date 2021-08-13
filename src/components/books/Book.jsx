import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, year, isbn, description }) => (
  <>
    <p>{title}</p>
    <p>{year}</p>
    <p>{isbn}</p>
    <p>{description}</p>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  isbn: PropTypes.string,
  description: PropTypes.string,
};

export default Book;
