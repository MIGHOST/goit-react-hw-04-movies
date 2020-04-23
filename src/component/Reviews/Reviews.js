import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovieReviews } from '../../service/service-api';
import getIdFromProps from '../../helpers/getID';
import styles from './Reviews.module.css';
import ErrorNotification from '../Error/ErrorNotification';
import Spinner from '../Spinner/Spinner';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const match = useRouteMatch();
  const [error, setError] = useState(null);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const id = getIdFromProps(match);
    fetchMovieReviews(id)
      .then(item => setReviews(item))
      .catch(error => setError(error))
      .finally(() => setIsLoader(false));
  }, [match]);

  return (
    <>
      {isLoader && <Spinner />}
      <ul className={styles.reviews_list}>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <h4>We don't have any reviews fo this movie...</h4>
        )}
      </ul>
      {error && <ErrorNotification text={error.message} />}
    </>
  );
};

export default Reviews;
