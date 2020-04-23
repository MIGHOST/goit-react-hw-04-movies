import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovieCast } from '../../service/service-api';
import getIdFromProps from '../../helpers/getID';
import styles from './Cast.module.css';
import imgPath from '../../utils/imgPath';
import ErrorNotification from '../Error/ErrorNotification';
import Spinner from '../Spinner/Spinner';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const match = useRouteMatch();
  const [error, setError] = useState(null);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const id = getIdFromProps(match);
    fetchMovieCast(id)
      .then(item => setCast(item))
      .catch(error => setError(error))
      .finally(() => setIsLoader(false));
  }, [match]);

  return (
    <>
      {isLoader && <Spinner />}
      {cast.length > 0 ? (
        <ul className={styles.cast_list}>
          {cast.length > 0 &&
            cast.map(
              ({ cast_id, character, name, profile_path: profilePhoto }) => (
                <li key={cast_id} className={styles.cast_list__item}>
                  {profilePhoto ? (
                    <img
                      src={imgPath.ACTOR_PHOTO + profilePhoto}
                      alt="photo_actor"
                      className={styles.cast_img}
                      width="150"
                      height="200"
                    />
                  ) : (
                    <img
                      src={imgPath.NO_PHOTO}
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
              ),
            )}
        </ul>
      ) : (
        <h4 className={styles.title}>
          Sorry but we haven't any cast for this movie :(....
        </h4>
      )}
      {error && <ErrorNotification text={error.message} />}
    </>
  );
};

export default Cast;
