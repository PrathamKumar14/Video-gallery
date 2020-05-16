import React from "react";
import VideoItem from "./VideoItem.jsx";

function VideoList(props) {
  const listOfVideos = props.videos.map(video => <VideoItem video={video} />);

  return listOfVideos;
}

export default VideoList;
