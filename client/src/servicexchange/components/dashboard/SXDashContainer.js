import React, { Component } from 'react';

// import SocialTypeSelection from './SocialTypeSelection';
// import SocialCircleRouter from './SocialCircleRouter';
import DashTypeSelection from './DashTypeSelection';
import DashboardRouter from './DashboardRouter';

class SXDashContainer extends Component {
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
        <DashTypeSelection handleOnChange={this.handleOnChange.bind(this)} />
        <DashboardRouter selectValue={selectValue} />
      </div>
    );
  }
}

export default SXDashContainer;
