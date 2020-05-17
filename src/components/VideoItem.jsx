import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="parent-div">
      <iframe src={videoSrc} title="video player" />
      <h4 className="description">{video.snippet.title}</h4>
    </div>
  );
};

export default VideoItem;
