import { useEffect, useState } from 'react';

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined || 0,
    height: undefined || 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 930) {
        setWindowDimensions({
          width: window.innerWidth / 2,
          height: window.innerHeight / 2,
        });
      } else {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight / 2,
        });
      }
    };

    // Check if window object is available before adding event listener
    if (typeof window !== 'undefined') {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight / 2,
      });
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
};
