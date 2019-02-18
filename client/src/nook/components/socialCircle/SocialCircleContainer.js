import React, { Component } from 'react';

import SocialTypeSelection from './SocialTypeSelection';
import SocialCircleRouter from './SocialCircleRouter';

class SocialCircleContainer extends Component {
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
      <div>
        <div className="textspaceTop" />
        <SocialTypeSelection handleOnChange={this.handleOnChange.bind(this)} />
        <SocialCircleRouter selectValue={selectValue} />
      </div>
    );
  }
}

export default SocialCircleContainer;
