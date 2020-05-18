import React, { useState } from "react";
import "./SearchBar.css";

// class SearchBar extends React.Component {
//   state = {
//     searchTerm: ""
//   };

//   handleChange = event => {
//     // console.log(event.target.value);
//     this.setState({ searchTerm: event.target.value });
//   };

//   handleSubmit = event => {
//     const { searchTerm } = this.state;
//     const { onFormSubmit } = this.props;

//     console.log(searchTerm);
//     onFormSubmit(searchTerm);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form className="form" onSubmit={this.handleSubmit}>
//         <input
//           onChange={this.handleChange}
//           type="text"
//           placeholder="Search..."
//         />
//         <button className="search-button" type="submit">
//           <i className="fas fa-search" />
//         </button>
//       </form>
//     );
//   }
// }

function SearchBar(props) {
  const { searchTerm, setSearchTerm } = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    props.onFormSubmit(searchTerm);
    event.preventDefault();
  }
  return (
    <form className="form" onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} type="text" placeholder="Search..." />
      <button className="search-button" type="submit">
        <i className="fas fa-search" />
      </button>
    </form>
  );
}

// function SearchBar(props) {
//   const { searchTerm, setSearchTerm } = useState("");

//   function handleChange(event) {
//     const temp = event.target.value;
//     setSearchTerm(temp);
//   }

//   const handleSubmit = event => {
//     // const { searchTerm } = this.state;
//     // const { onFormSubmit } = this.props;

//     console.log(searchTerm);
//     props.onFormSubmit(searchTerm);
//     event.preventDefault();
//   };

//   return (
//     <div>
//       <form className="form" onSubmit={handleSubmit}>
//         <input onChange={handleChange} type="text" placeholder="Search..." />
//         <button className="search-button" type="submit">
//           <i className="fas fa-search" />
//         </button>
//       </form>
//     </div>
//   );
// }

export default SearchBar;
