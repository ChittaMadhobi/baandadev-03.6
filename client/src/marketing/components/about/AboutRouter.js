import React, { Component } from 'react';

import DefaultMessage from './DefaultAboutMessage';
import MktOverview from './MktOverview';
import MktPost from './MktPost';
import MktDashboard from './MktDashboard';
import MktBrowse from './MktBrowse';

import './mktAbout.css';

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
        <div className="about-ans-panel">
          <MktOverview />
        </div>
      );
    }

    if (selectValue === 'postQuestions') {
      output = (
        <div>
          <MktPost />
        </div>
      );
    }

    if (selectValue === 'dashboardQuestion') {
      output = (
        <div>
          <MktDashboard />
        </div>
      );
    }

    if (selectValue === 'browseQuestion') {
      output = (
        <div>
          <MktBrowse />
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
