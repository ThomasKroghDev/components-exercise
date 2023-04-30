import React, { useEffect, useState } from 'react';
import styles from './iframeVideo.module.css';

function IFrameVideo({
  videoUrl,
  height,
  width,
  propStyles,
}: {
  videoUrl: string;
  height: number | string;
  width: number | string;
  propStyles?: string;
}) {
  return (
    <div className={`${styles.videoContainer} ${propStyles}`}>
      <iframe
        className={styles.videoContent}
        width={width}
        height={height}
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default IFrameVideo;
