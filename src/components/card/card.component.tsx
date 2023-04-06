import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Button from '../button/button.componet';

export default function Card({
  title,
  subtitle,
  body,
  imageSrc,
}: {
  title?: string;
  subtitle?: string;
  body?: string;
  imageSrc?: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.cardTitle}>{title}</p>
        {imageSrc && (
          <div className={styles.headerImageContainer}>
            <Image
              src={imageSrc}
              alt="Picture of the author"
              width={150}
              height={150}
            />
          </div>
        )}
        <p className={styles.cardSubTitle}>{subtitle}</p>
      </div>

      <div className={styles.cardBodyContainer}>
        <p className={styles.cardBody}>{body}</p>
      </div>
      <div className={styles.footerContainer}>
        <Button title="Back" type="button" />
        <Button title="Read More" type="button" />
      </div>
    </div>
  );
}
