import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovieCast } from '../../service/service-api';
import getIdFromProps from '../../helpers/getID';
import styles from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    const id = getIdFromProps(match);
    fetchMovieCast(id).then(item => setCast(item));
  }, [match]);
  return (
    <>
      <ul className={styles.cast_list}>
        {cast.length > 0 &&
          cast.map(({ id, character, name, profile_path }) => (
            <li key={id} className={styles.cast_list__item}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt="photo_actor"
                  className={styles.cast_img}
                  width="150"
                  height="200"
                />
              ) : (
                <img
                  src="https://farm3.staticflickr.com/2402/2413416514_ca76235ae7.jpg"
                  alt="photo_actor"
                  width="150"
                  height="200"
                  className={styles.cast_img}
                />
              )}
              <div className={styles.cast_text}>
                <p className={styles.cast_name}>{name}</p>
                <p className={styles.cast_character}>{character}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
