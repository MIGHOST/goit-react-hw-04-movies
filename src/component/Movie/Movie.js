import React from 'react';
import PropTypes from 'prop-types';
import styles from './Movie.module.css';
import getData from '../../helpers/getYear';

const Movies = ({
  title,
  poster_path,
  vote_average,
  overview,
  genres,
  release_date,
  onGoBack,
}) => {
  const date = getData(release_date);
  return (
    <div>
      <h1 className={styles.title_page}>Movies details</h1>
      <div>
        <button type="button" onClick={onGoBack} className={styles.button}>
          <span className={styles.button_label}></span>
          Go back
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img
            width="200"
            height="300"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <div>
          <h2 className={styles.title}>
            {title} <span>({date})</span>
          </h2>
          <p>
            <span className={styles.vote}> </span>
            <b>User Score: {vote_average}</b>
          </p>
          <h3>Overview</h3>
          <p className={styles.overview}> {overview}</p>
          <h3>Genres</h3>
          <ul className={styles.genres_list}>
            {genres.length > 0 &&
              genres.map(({ id, name }) => (
                <li key={id}>
                  <span>{name}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Movies.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default Movies;
