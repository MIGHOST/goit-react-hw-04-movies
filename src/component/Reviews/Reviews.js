import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovieReviews } from '../../service/service-api';
import getIdFromProps from '../../helpers/getID';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    const id = getIdFromProps(match);
    fetchMovieReviews(id).then(item => setReviews(item));
  }, [match]);

  return (
    <>
      <ul className={styles.reviews_list}>
        {reviews.length>0 ? (
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
    </>
  );
};

export default Reviews;
