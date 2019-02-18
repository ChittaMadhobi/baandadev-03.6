import React, { Component } from 'react';

import AboutTypeSelection from './AboutTypeSelection';
import AboutRouter from './AboutRouter';

import './mktAbout.css';

class AboutContainer extends Component {
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
        <AboutTypeSelection handleOnChange={this.handleOnChange.bind(this)} />
        <AboutRouter selectValue={selectValue} />
      </div>
    );
  }
}

export default AboutContainer;
