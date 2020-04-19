import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  useHistory,
  useLocation,
  useRouteMatch,
  Route,
  Switch,
} from 'react-router-dom';
import { fetchFindMoviesID } from '../service/service-api';
import getIdFromProps from '../helpers/getID';
import Movies from '../component/Movie/Movie';
import routes from '../utils/routes';
import AdditionalInfo from '../component/AdditionalInfo/AdditionalInfo';
import Loader from 'react-loader-spinner'

const AsyncCast = lazy(() =>
  import('../component/Cast/Cast' /* webpackChunkName: "cast-page"*/),
);
const AsyncReviews = lazy(() =>
  import('../component/Reviews/Reviews' /* webpackChunkName: "reviews-page"*/),
);

const MovieDetailsPage = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const [film, setFilm] = useState(null);

  useEffect(() => {
    const id = getIdFromProps(match);
    fetchFindMoviesID(id).then(film => setFilm(film));
  }, [match]);

  const handleGoBack = () => {
    if (location.state) {
      history.push(location.state.from);
      return;
    }
    history.push(routes.HOME);
  };

  return (
    <>
      {film && <Movies {...film} onGoBack={handleGoBack} />}

      <AdditionalInfo />
      <Suspense fallback={
         <Loader
         type="Puff"
         color="#000000"
         height={100}
         width={100}
         timeout={3000} />
        }>
        <Switch>
          <Route path={`${match.path}/cast`} component={AsyncCast} />
          <Route path={`${match.path}/reviews`} component={AsyncReviews} />
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
