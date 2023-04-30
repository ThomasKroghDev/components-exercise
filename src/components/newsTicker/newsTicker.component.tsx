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
  const [tickerPosition, setTickerPosition] = useState(0);
  const tickerRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function tickerContainerWidth() {
    return containerRef.current ? containerRef.current.offsetWidth : 0;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextPos = tickerPosition - 1;
      if (nextPos <= -tickerContainerWidth()) {
        setTickerPosition(tickerContainerWidth());
      } else {
        setTickerPosition(nextPos);
      }
    }, 15);

    return () => clearInterval(intervalId);
  }, [tickerPosition]);
  if (!messages || messages.length === 0) {
    return null;
  }
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
