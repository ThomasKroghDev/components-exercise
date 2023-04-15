import React from 'react';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <p className={styles.logo}>logoText</p>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#">
            sds
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#">
            sds
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#">
            sds
          </a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} href="#">
            sds
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
