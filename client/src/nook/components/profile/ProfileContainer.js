import React, { Component } from 'react';

import ProfileTypeSelection from './ProfileTypeSelection';
import ProfileRouter from './ProfileRouter';

class ProfileContainer extends Component {
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
        <ProfileTypeSelection handleOnChange={this.handleOnChange.bind(this)} />
        <ProfileRouter selectValue={selectValue} />
      </div>
    );
  }
}

export default ProfileContainer;
