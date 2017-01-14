import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleKeyPress(event) {
    let term = event.target.value;
    if(event.key == 'Enter') {
      this.performSearch();
    } else {
      this.setState({ term: term });
    }
  }

  performSearch() {
    this.props.onSearchTermChange(this.state.term);
  }

  render() {
    return (
      <div className="search-bar input-group">
        <input
          placeholder="Search"
          onKeyUp={event => this.handleKeyPress(event)}
          className="form-control" />
        <div className="input-group-btn">
          <button
            onClick={() => this.performSearch()}
            className="btn btn-default">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;