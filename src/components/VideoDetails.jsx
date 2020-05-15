import React from "react";
// import { Paper, Typography } from "@material-ui/core";
import Loading from "./Loading";
import "./VideoDetails.css";

const VideoDetails = ({ video }) => {
  if (!video) return <Loading />;

  // console.log(video);
  console.log(video.id.videoId);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    // <div>
    //   <Paper elevation={6} style={{ height: "70%" }}>
    //     <iframe
    //       height="100%"
    //       width="100%"
    //       src={videoSrc}
    //       title="video player"
    //       frameBorder="0"
    //     />
    //   </Paper>
    //   <Paper elevation={6} style={{ padding: "15px" }}>
    //     <Typography variant="h5">{video.snippet.title}</Typography>
    //     <Typography variant="subtitle1">
    //       {video.snippet.channelTitle}
    //     </Typography>
    //     <Typography variant="subtitle2">{video.snippet.description}</Typography>
    //   </Paper>
    // </div>
    <div>
      <iframe className="frame" src={videoSrc} title="video player" />
    </div>
  );
};

export default VideoDetails;
