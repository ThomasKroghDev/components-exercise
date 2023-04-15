import Link from 'next/link';
import React from 'react';
import Button from '../button/button.componet';
import Image from 'next/image';
import styles from './hero.module.css';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={`${styles.leftContent} ${styles.gridItem}`}>
        <h2 className={styles.header}>title/eye catcher</h2>
        <p className={styles.tagline}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          soluta reprehenderit perspiciatis, velit amet necessitatibus laborum
          nostrum aperiam aliquid eos consectetur illo obcaecati quam explicabo
          magnam architecto fuga recusandae rem.
        </p>
        <Link className={styles.heroLink} href={'/'}>
          Click me ←
        </Link>
      </div>
      <div className={`${styles.rightContent} ${styles.gridItem}`}>
        <Image
          src={
            'https://images.unsplash.com/photo-1446889727648-8c23e3039b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=949&q=80'
          }
          alt="worm eye view of palm trees on a clear day"
          fill
        />
        <Button title="sdfr" />
        <Button title="learn more" />
      </div>
    </div>
  );
}

export default Hero;
