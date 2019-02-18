import React, { Component } from 'react';

import DefaultMessage from './DefaultMessage';
import CreateSocialCircle from './socialCircleForms/CreateSocialCircle';
//import ConnectToSocialCircle from './socialCircleForms/ConnectToSocialCircle';
import ConnectToSocialCircle from './socialCircleForms/ConnectToSC';

import AssessAndReflection from './socialCircleForms/AssessAndReflection';

//import TheMaskTalk from './profileInputForms/TheMaskTalk';

class PostFormRouter extends Component {
  render() {
    const { selectValue } = this.props;
    //console.log('selectValue:' + selectValue);
    let output;
    if (selectValue === 'none') {
      output = (
        <div>
          <DefaultMessage />{' '}
        </div>
      );
    }

    if (selectValue === 'createSocialCircle') {
      output = (
        <div>
          <CreateSocialCircle />
        </div>
      );
    }

    if (selectValue === 'connectWithCircle') {
      output = (
        <div>
          <ConnectToSocialCircle />
        </div>
      );
    }

    if (selectValue === 'assessAndReflection') {
      output = (
        <div>
          <AssessAndReflection />
        </div>
      );
    }

    return (
      <div className="col-lg-12 col-md-8 col-sm-6">
        <div>{output}</div>
      </div>
    );
  }
}

export default PostFormRouter;
