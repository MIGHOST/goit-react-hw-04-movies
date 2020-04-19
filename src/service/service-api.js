import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=b6962f1fab74d8b40a296f48247902a5';

const fetchTrendMovies = (trend = 'trending/all/day?') =>
  axios.get(trend + KEY).then(response => response.data.results);

const fetchFindMovies = query =>
  axios
    .get(
      `search/movie?${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    )
    .then(response => response.data.results);

const fetchFindMoviesID = id =>
  axios
    .get(`movie/${id}?${KEY}&language=en-US`)
    .then(response => response.data);

const fetchMovieCast = id =>
  axios.get(`movie/${id}/credits?${KEY}`).then(response => response.data.cast);

const fetchMovieReviews = id =>
  axios.get(`movie/${id}/reviews?${KEY}`).then(response => response.data.results);

export {
  fetchTrendMovies,
  fetchFindMovies,
  fetchFindMoviesID,
  fetchMovieCast,
  fetchMovieReviews,
};
