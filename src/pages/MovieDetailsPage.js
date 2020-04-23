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
import Spinner from '../component/Spinner/Spinner';
import ErrorNotification from '../component/Error/ErrorNotification';

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
  const [error, setError] = useState(null);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const id = getIdFromProps(match);
    fetchFindMoviesID(id)
      .then(film => setFilm(film))
      .catch(error => setError(error))
      .finally(() => setIsLoader(false));
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
      <Suspense fallback={isLoader && <Spinner />}>
        <Switch>
          <Route path={routes.CAST} component={AsyncCast} />
          <Route path={routes.REVIEWS} component={AsyncReviews} />
        </Switch>
      </Suspense>
      {error && <ErrorNotification text={error.message} />}
    </>
  );
};

export default MovieDetailsPage;
