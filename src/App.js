import React from "react";
import "./styles.css";

import { Grid } from "@material-ui/core";
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
  render() {
    return (
      <div className="App">
        <h1>Video player</h1>
        <Grid container spacing={16} />
      </div>
    );
  }
}

export default App;
