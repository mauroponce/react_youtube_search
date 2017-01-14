import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleInputChange(term) {
    this.setState({ term: term });
  }

  render() {
    return (
      <div className="search-bar">
        <form className="navbar-form">
          <div className="form-group">
            <div className="input-group">
              <input
                placeholder="Search"
                onChange={event => this.handleInputChange(event.target.value)}
                className="form-control" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;