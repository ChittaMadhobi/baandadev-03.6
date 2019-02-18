import React, { Component } from 'react';

import DefaultMessage from './DefaultMessage';

import ManagePursuits from './details/ManagePursuits';
import ManageMessages from './details/ManageMessages';
import ManageAgreements from './details/ManageAgreements';
import ManageProject from './details/ManageProjects';

class DashboardRouter extends Component {
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

    if (selectValue === 'sxpursuits') {
      output = (
        <div>
          <ManagePursuits />
        </div>
      );
    }

    if (selectValue === 'pursuitMessages') {
      output = (
        <div>
          <ManageMessages />
        </div>
      );
    }

    if (selectValue === 'agreements') {
      output = (
        <div>
          <ManageAgreements />
        </div>
      );
    }

    if (selectValue === 'activeSX') {
      output = (
        <div>
          <ManageProject />
        </div>
      );
    }

    if (selectValue === 'historicSX') {
      output = (
        <div>
          <h1>Historic </h1>
        </div>
      );
    }

    if (selectValue === 'sxreflection') {
      output = (
        <div>
          <h1>Overall SX reflection </h1>
        </div>
      );
    }

    if (selectValue === 'historicSX') {
      output = (
        <div>
          <h1>Historic </h1>
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

export default DashboardRouter;
