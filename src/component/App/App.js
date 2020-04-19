// import React, { lazy, Suspense } from 'react';
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import routes from '../../utils/routes';
import Navigation from '../Navigation/Navigation';
import Loader from 'react-loader-spinner';

const AsyncHome = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home-page"*/),
);
const AsyncMoviesPage = lazy(() =>
  import('../../pages/MoviesPage' /* webpackChunkName: "movie-page"*/),
);
const AsyncMoviesDetails = lazy(() =>
  import(
    '../../pages/MovieDetailsPage' /* webpackChunkName: "movies-details-page"*/
  ),
);
const AsyncNotFound = lazy(() =>
  import('../../pages/NotFounded' /* webpackChunkName: "not-found-page"*/),
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#000000"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route exact path={routes.HOME} component={AsyncHome} />
          <Route path={routes.MOVIES_DETAILS} component={AsyncMoviesDetails} />
          <Route path={routes.MOVIES} component={AsyncMoviesPage} />
          <Route component={AsyncNotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
