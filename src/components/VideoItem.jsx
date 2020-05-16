import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="parent-div">
      <iframe src={videoSrc} title="video player" />
    </div>
  );
};

export default VideoItem;
