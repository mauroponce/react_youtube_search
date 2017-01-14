import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleKeyPress(event){
    if(event.key == 'Enter') {
      let term = event.target.value;
      this.setState({ term: term });
      this.props.onSearchTermChange(term);
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search"
          onKeyPress={event => this.handleKeyPress(event)}
          className="form-control" />
      </div>
    );
  }
}

export default SearchBar;