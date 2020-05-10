import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  render() {
    return (
      <form action="">
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
}

export default SearchBar;
