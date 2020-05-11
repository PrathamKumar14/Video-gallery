import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    // console.log(event.target.value);
    this.setState({ searchTerm: event.targets });
  };

  handleSubmit = event => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

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
        <button type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
