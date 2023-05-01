import React, { useState, useEffect, useRef } from 'react';
import styles from './newsTicker.module.css';

interface IMessage {
  id: number;
  text: string;
}

interface INewsTickerProps {
  messages?: IMessage[];
}

const NewsTicker: React.FC<INewsTickerProps> = ({ messages }) => {
  if (!messages || messages.length === 0) {
    return null;
  }

  const tickerRef = useRef<HTMLUListElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tickerPosition, setTickerPosition] = useState(-1);

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth ?? 0;

    const intervalId = setInterval(() => {
      const messageWidth = tickerRef.current?.offsetWidth ?? 0;
      const nextPos = tickerPosition - 1;
      if (nextPos <= -messageWidth) {
        setTickerPosition(containerWidth);
      } else {
        setTickerPosition(nextPos);
      }
    }, 30);

    return () => clearInterval(intervalId);
  }, [tickerPosition]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.tickerContainer}>
        <ul
          ref={tickerRef}
          className={styles.ticker}
          style={{ transform: `translateX(${tickerPosition}px)` }}
        >
          {messages.map((message) => (
            <li key={message.id} className={styles.tickerItem}>
              {message.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsTicker;
