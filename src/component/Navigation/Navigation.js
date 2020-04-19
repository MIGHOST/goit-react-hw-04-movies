import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';


const Navigation = () => (
  <>
    <ul className={styles.nav_menu}>
      <li>
        <NavLink to="/" exact className={styles.link} activeClassName={styles.activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={styles.link}  activeClassName={styles.activeStyle}>
          Movies
        </NavLink>
      </li>
    </ul>
  </>
);

export default Navigation;
