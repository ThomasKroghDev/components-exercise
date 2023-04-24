import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import Button from '../button/button.componet';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.textContent}>
          <h2>Get early access today</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.listContainer}>
          <h3>features</h3>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
        <div className={styles.listContainer}>
          <h3>features</h3>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
        <div className={styles.listContainer}>
          <h3>features</h3>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerCta}>
        <p>Get Started For Free</p>
        <Button title="click me seymour" />
      </div>
      <div className={styles.footerSocials}>
        <ul className={styles.socialsList}>
          <li>
            <a href="#">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copy}>
        <p>© Project. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
