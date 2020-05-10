import React from "react";
import "./styles.css";

import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar.jsx";
import VideoDetails from "./components/VideoDetails.jsx";
import VideoList from "./components/VideoList.jsx";
// import youtube from "./api/youtube";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Video player</h1>
//       <h2>Using youtube api</h2>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Grid justify="center" container spacing={16}>
          <Grid item xs={12}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <SearchBar />
              </Grid>
              <Grid item xs={8}>
                <VideoDetails />
              </Grid>
              <Grid item xs={4}>
                <VideoList />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
