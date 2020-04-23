import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from '../../utils/routes';

const Navigation = () => (
  <>
    <ul className={styles.nav_menu}>
      <li>
        <NavLink
          to={routes.HOME}
          exact
          className={styles.link}
          activeClassName={styles.activeStyle}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.MOVIES}
          className={styles.link}
          activeClassName={styles.activeStyle}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </>
);

export default Navigation;
