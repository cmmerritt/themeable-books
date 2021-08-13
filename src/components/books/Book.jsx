import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, description }) => (
  <p>
    <span>{title}</span>
    <span>{author}</span>
    <span>{description}</span>
  </p>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Book;
