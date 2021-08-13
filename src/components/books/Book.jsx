import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, cover }) => (
  <figure>
    <img src={cover} alt={title} />
    <figcaption>{title}</figcaption>
  </figure>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string
};

export default Book;
