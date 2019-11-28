import React from 'react';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      autoPlay={false}
    />
  </div>
);
export default Video;
