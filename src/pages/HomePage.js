import React, { useEffect, useState } from 'react';
import MoviesList from '../component/MoviesList/MoviesList';
import { fetchTrendMovies } from '../service/service-api';

const homeTitle ={
  textAlign: "center",
}

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(items => setFilms(items));
  }, []);

  

  return (
    <>
      <h1 style={homeTitle}>Movies trend</h1>   
      {films.length > 0 && <MoviesList items={films}/>}
    </>
  );
};

export default HomePage;
