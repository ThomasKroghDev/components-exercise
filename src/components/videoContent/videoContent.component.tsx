import React from 'react';
import IFrameVideo from '@/components/iframeVideo/iframeVideo.component';
import { useWindowDimensions } from '@/common/hooks/useWindowDimensions';
import styles from './videoContent.module.css';

function VideoContent() {
  const videoUrl = 'https://www.youtube.com/embed/CSvFpBOe8eY';
  const { width, height } = useWindowDimensions();
  return (
    <div className={styles.contentContainer}>
      <IFrameVideo
        videoUrl={videoUrl}
        height={height}
        width={width}
        propStyles={styles.flexItem}
      />
      <div className={`${styles.dummy} ${styles.flexItem}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        laboriosam earum quas cupiditate sit possimus vel quaerat natus impedit
        veniam molestiae delectus, saepe, harum obcaecati vitae autem
        reprehenderit nam omnis.
      </div>

      <div className={`${styles.dummy} ${styles.flexItem}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        laboriosam earum quas cupiditate sit possimus vel
      </div>
      <IFrameVideo
        videoUrl={videoUrl}
        height={height}
        width={width}
        propStyles={styles.flexItem}
      />
    </div>
  );
}

export default VideoContent;
