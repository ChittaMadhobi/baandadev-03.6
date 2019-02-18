import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="float-right">
              <strong>Category Filter : </strong> (case sensitive)
            </div>
          </div>
          <div className="col-md-4 float-left">
            <input
              type="text"
              size="20"
              placeholder="Search..."
              value={this.props.filterText}
              ref="filterTextInput"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="col-md-4" />
        </div>
        <div className="top-space" />
      </div>
    );
  }
}

export default SearchBar;
