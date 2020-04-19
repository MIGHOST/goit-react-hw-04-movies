import React from 'react';
import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import styles from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  const match = useRouteMatch();
  const location = useLocation();
  return (
    <>
      <h3 className={styles.title}>Additional information</h3>
      <ul className={styles.list}>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}/cast`,
              state: {
                from: location.state.from,
              },
            }}
            activeClassName={styles.activeStyle}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              state: {
                from: location.state.from,
              },
            }}
            activeClassName={styles.activeStyle}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default AdditionalInfo;
