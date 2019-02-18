import React, { Component } from 'react';

import PostTypeSelection from './PostTypeSelection';
import PostFormRouter from './PostFormRouter';

class PostContainer extends Component {
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
        <PostTypeSelection handleOnChange={this.handleOnChange.bind(this)} />
        <PostFormRouter selectValue={selectValue} />
      </div>
    );
  }
}

export default PostContainer;
