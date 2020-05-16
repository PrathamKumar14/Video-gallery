import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    // console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    console.log(searchTerm);
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Search..."
        />
        <button className="search-button" type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
