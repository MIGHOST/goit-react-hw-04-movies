import React, { useEffect, useState } from 'react';
import MoviesList from '../component/MoviesList/MoviesList';
import { fetchTrendMovies } from '../service/service-api';
import ErrorNotification from '../component/Error/ErrorNotification';

const homeTitle = {
  textAlign: 'center',
};

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendMovies()
      .then(items => setFilms(items))
      .catch(error => setError(error));
  }, []);

  return (
    <>
      <h1 style={homeTitle}>Movies trend</h1>
      {films.length > 0 && <MoviesList items={films} />}
      {error && <ErrorNotification text={error.message} />}
    </>
  );
};

export default HomePage;
