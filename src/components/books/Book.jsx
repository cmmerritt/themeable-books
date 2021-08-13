import React from 'react';
import PropTypes from 'prop-types';
import { findCoverImg } from '../../services/bookCoverApi';

const Book = ({ title, year, coverId }) => (
  <figure>
    <img src={findCoverImg(coverId)} alt={title} />
    <figcaption>{title}</figcaption>
    <figcaption>{year}</figcaption>
  </figure>
  // <>
  //   <p>{title}</p>
  //   <p>{year}</p>
  //   <p>{coverId}</p>
  //   <p>{description}</p>
  // </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  coverId: PropTypes.string
};

export default Book;
