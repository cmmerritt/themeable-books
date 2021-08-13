import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, description }) => (
  <p>
    <p>{title}</p>
    <p>{author}</p>
    <p>{description}</p>
  </p>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Book;
