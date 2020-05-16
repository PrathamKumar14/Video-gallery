import React from "react";
// import { Paper, Typography } from "@material-ui/core";
import Loading from "./Loading";
import "./VideoDetails.css";

const VideoDetails = ({ video }) => {
  if (!video) return <Loading />;

  // console.log(video);
  // console.log(video.id.videoId);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe className="frame" src={videoSrc} title="video player" />
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
    </div>
  );
};

export default VideoDetails;
