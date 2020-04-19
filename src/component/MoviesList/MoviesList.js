import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ items }) => {
  const location = useLocation();
  return (
    <ul className={styles.list}>
      {items.length > 0 &&
        items.map(({ id, title, original_name }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title || original_name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape([]).isRequired).isRequired,
};

export default MoviesList;
