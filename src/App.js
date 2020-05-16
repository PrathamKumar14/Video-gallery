import React from "react";
import "./styles.css";

// import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar.jsx";
import VideoDetails from "./components/VideoDetails.jsx";
import VideoList from "./components/VideoList.jsx";
import { DarkMode } from "./components/DarkMode.jsx";
import youtube from "./api/youtube";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Video player</h1>
//       <h2>Using youtube api</h2>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    videos: [],
    selectedVideos: null
  };

  handleSubmit = async searchTerm => {
    console.log(searchTerm);
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 50,
        key: "AIzaSyAsxZIi126Nr7dxk_0oRWQnIsfmlvsKdz8",
        q: searchTerm
      }
    });
    // console.log(response);
    // console.log(response.data.items);

    this.setState({
      videos: response.data.items,
      selectedVideos: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="App">
        <DarkMode />
        <SearchBar onFormSubmit={this.handleSubmit} />
        <VideoDetails video={this.state.selectedVideos} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
