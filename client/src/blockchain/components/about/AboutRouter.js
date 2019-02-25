import React, { Component } from 'react';

import DefaultMessage from './DefaultAboutMessage';
import BCOverview from './BCOverview';
import BCPost from './BCPost';
import BCBrowse from './BCBrowse';

import './bcAbout.css';

class AboutRouter extends Component {
  render() {
    const { selectValue } = this.props;
    //console.log('selectValue:' + selectValue);
    let output;
    if (selectValue === 'none') {
      output = (
        <div className="about-ans-panelbc">
          <DefaultMessage />
        </div>
      );
    }

    if (selectValue === 'overviewQuestions') {
      output = (
        <div className="about-ans-panelbc">
          <div className="row">
            <div className="col-1">&nbsp;</div>
            <div className="col-10"><BCOverview /></div>
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      );
    }

    if (selectValue === 'postQuestions') {
      output = (
        <div className="about-ans-panelbc">
          <div className="row">
            <div className="col-1">&nbsp;</div>
            <div className="col-10"><BCPost /></div>
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      );
    }

    if (selectValue === 'browseQuestion') {
      output = (
        <div className="about-ans-panelbc">
        <div className="row">
          <div className="col-1">&nbsp;</div>
          <div className="col-10"><BCBrowse /></div>
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
