import React from 'react';
import PropTypes from 'prop-types';
import { findCoverImg } from '../../services/bookCoverApi';
import styles from './Book.css';

const Book = ({ title, year, coverId }) => (
  <figure className={styles.figure}>
    <img src={findCoverImg(coverId)} alt={title} />
    <figcaption>{title}</figcaption>
    <figcaption>{year}</figcaption>
  </figure>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  coverId: PropTypes.string
};

export default Book;
