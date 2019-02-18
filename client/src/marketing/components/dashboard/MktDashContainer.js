import React, { Component } from 'react';

import MktDashTypeSelection from './MktDashTypeSelection';
import MktDashRouter from './MktDashRouter';

import './mktdash.css';

class MktDashContainer extends Component {
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
      <div className="panel-mktContainer">
        <MktDashTypeSelection handleOnChange={this.handleOnChange.bind(this)} />
        <MktDashRouter selectValue={selectValue} />
      </div>
    );
  }
}

export default MktDashContainer;