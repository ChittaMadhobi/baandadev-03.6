import React, { Component } from 'react';

import DefaultMessage from './DefaultMessage';
import ServiceRequestor from './postInputForms/SRForm';
import ServiceProvider from './postInputForms/SPForm';
import MasterForApprentice from './postInputForms/MasterForApprentice';
import ApprenticeForMaster from './postInputForms/ApprenticeForMaster';
import WhoRUinSX from './postInputForms/WhoRUinSX';
import CoopPost from './postInputForms/CoopPost';

class PostFormRouter extends Component {
  render() {
    const { selectValue } = this.props;
    //console.log('selectValue:' + selectValue);
    let output;
    if (selectValue === 'none') {
      output = (
        <div>
          <DefaultMessage />
        </div>
      );
    }

    if (selectValue === 'whoruInSx') {
      output = (
        <div>
          <WhoRUinSX />
        </div>
      );
    }

    if (selectValue === 'srvRequestor') {
      output = (
        <div>
          <ServiceRequestor />
        </div>
      );
    }

    if (selectValue === 'srvProvider') {
      output = (
        <div>
          <ServiceProvider />
        </div>
      );
    }

    if (selectValue === 'masterForIntern') {
      output = (
        <div>
          <MasterForApprentice />
        </div>
      );
    }

    if (selectValue === 'internForMaster') {
      output = (
        <div>
          <ApprenticeForMaster />
        </div>
      );
    }

    if (selectValue === 'formCoOp') {
      output = (
        <div>
          <CoopPost />
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
