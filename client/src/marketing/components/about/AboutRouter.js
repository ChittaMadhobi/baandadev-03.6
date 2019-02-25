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
          <div className="row">
            <div className="col-1">&nbsp;</div>
            <div className="col-10"><MktOverview /></div>
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      );
    }

    if (selectValue === 'postQuestions') {
      output = (
        <div className="about-ans-panel">
        <div className="row">
          <div className="col-1">&nbsp;</div>
          <div className="col-10"><MktPost /></div>
          <div className="col-1">&nbsp;</div>
        </div>
      </div>
        
      );
    }

    if (selectValue === 'dashboardQuestion') {
      output = (
      <div className="about-ans-panel">
        <div className="row">
          <div className="col-1">&nbsp;</div>
          <div className="col-10"><MktDashboard /></div>
          <div className="col-1">&nbsp;</div>
        </div>
      </div>
        
      );
    }

    if (selectValue === 'browseQuestion') {
      output = (
        <div className="about-ans-panel">
        <div className="row">
          <div className="col-1">&nbsp;</div>
          <div className="col-10"><MktBrowse /></div>
          <div className="col-1">&nbsp;</div>
        </div>
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
