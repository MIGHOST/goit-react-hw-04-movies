import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchBar from '../component/SearchBar/SearchBar';
import { fetchFindMovies } from '../service/service-api';
import MoviesList from '../component/MoviesList/MoviesList';
import getStringFromLocation from '../helpers/getStringFromLocation';

const movieTitle = {
  textAlign: 'center',
};
const MoviesPage = () => {
  const [films, setFilms] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const query = getStringFromLocation(location);
    if (query) {
      fetchFindMovies(query).then(items => setFilms(items));
    }
  }, [location]);

  const searchFilms = query => {
    if (query) {
      fetchFindMovies(query).then(items => setFilms(items));
      history.push({ ...location, search: `query=${query}` });
      return;
    }

    history.push({
      ...location,
      search: '',
    });
  };

  return (
    <>
      <h1 style={movieTitle}>Movies pages</h1>
      <SearchBar onSubmit={searchFilms} />
      <MoviesList items={films} />
    </>
  );
};

export default MoviesPage;
