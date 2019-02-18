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
        <div>
          <DefaultMessage />
        </div>
      );
    }

    if (selectValue === 'overviewQuestions') {
      output = (
        <div className="about-ans-panelbc">
          <BCOverview />
        </div>
      );
    }

    if (selectValue === 'postQuestions') {
      output = (
        <div>
          <BCPost />
        </div>
      );
    }

    if (selectValue === 'browseQuestion') {
      output = (
        <div>
          <BCBrowse />
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
