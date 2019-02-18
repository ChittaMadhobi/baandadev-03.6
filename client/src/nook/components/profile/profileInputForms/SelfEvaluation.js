import React, { Component } from 'react';

import FiveFactorDirect from '../../utils/FiveFactorDirect';

class SelfEvaluation extends Component {
  render() {
    return (
      <div className="text-center">
        <h3 className="self-eval-head-padding">
          <font color="#5b749b">Self-Perception of Personality Dimensions</font>

          <button
            className="btn btn-outline-info btn-sm tooltip-top5"
            data-toggle="tooltip"
            data-placement="top"
            title="Click on buttons and share what you think of yourself in each dimension."
          >
            ?
          </button>
        </h3>
        <div>
          <u>Click on dimension buttons</u>
        </div>
        <div className="textspaceTop" />
        <FiveFactorDirect />
      </div>
    );
  }
}

export default SelfEvaluation;
