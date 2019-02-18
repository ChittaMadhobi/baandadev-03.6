import React, { Component } from 'react';

import DefaultMessage from './DefaultAboutMessage';
import SXOverview from './SXOverview';
import SXPost from './SXPost';
import SXDashboard from './SXDashboard';
import SXBrowse from './SXBrowse';

class AboutRouter extends Component {
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

    if (selectValue === 'overviewQuestions') {
      output = (
        <div>
          <SXOverview />
        </div>
      );
    }

    if (selectValue === 'postQuestions') {
      output = (
        <div>
          <SXPost />
        </div>
      );
    }

    if (selectValue === 'dashboardQuestion') {
      output = (
        <div>
          <SXDashboard />
        </div>
      );
    }

    if (selectValue === 'browseQuestion') {
      output = (
        <div>
          <SXBrowse />
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

export default AboutRouter;
