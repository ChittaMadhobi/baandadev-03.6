import React, { Component } from 'react';

import MktBrowseTypeSelection from './MktBrowseTypeSelection';
import MktBrowsehRouter from './MktBrowseRouter';

import './mktbrowse.css';

class MktBrowseContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: 'none' //default
    };
  } 

  handleOnChange(e) {
    this.setState({
      selectValue: e.target.value
    });
  }
  render() {
    const { selectValue } = this.state;
    return (
      <div className="panel-browseContainer">
        <MktBrowseTypeSelection handleOnChange={this.handleOnChange.bind(this)} />
        <MktBrowsehRouter selectValue={selectValue} />
      </div>
    );
  }
}

export default MktBrowseContainer;