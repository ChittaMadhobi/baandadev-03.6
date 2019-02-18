import React, { Component } from 'react';

import DefaultMessage from './DefaultMessage';
import BasicProfileEntry from './profileInputForms/BasicProfileEntry';
import SelfEvaluation from './profileInputForms/SelfEvaluation';
import PersonalityTests from './profileInputForms/PersonalityTests';
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

    if (selectValue === 'basicProfile') {
      output = (
        <div>
          <BasicProfileEntry />
        </div>
      );
    }

    if (selectValue === 'selfEval') {
      output = (
        <div>
          {' '}
          <SelfEvaluation />{' '}
        </div>
      );
    }

    if (selectValue === 'personalityTests') {
      output = (
        <div>
          <PersonalityTests />
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
