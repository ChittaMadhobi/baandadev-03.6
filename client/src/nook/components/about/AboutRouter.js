import React, { Component } from 'react';

import DefaultMessage from './DefaultAboutMessage';
import NookOverview from './NookOverview';
import NookAboutProfile from './NookAboutProfile';
import NookAboutTaskDiary from './NookAboutTaskDiary';
import NookAboutSocialCircle from './NookAboutSocialCircle';
import NookAboutBudgeting from './NookAboutBudgeting';
import NookAboutHumanoid from './NookAboutHumanoid';

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
          <NookOverview />
        </div>
      );
    }

    if (selectValue === 'profileQuestions') {
      output = (
        <div>
          <NookAboutProfile />
        </div>
      );
    }

    if (selectValue === 'taskdiaryQuestion') {
      output = (
        <div>
          <NookAboutTaskDiary />
        </div>
      );
    }

    if (selectValue === 'societyQuestion') {
      output = (
        <div>
          <NookAboutSocialCircle />
        </div>
      );
    }

    if (selectValue === 'budgetingQuestion') {
      output = (
        <div>
          <NookAboutBudgeting />
        </div>
      );
    }

    if (selectValue === 'humanoid') {
      output = (
        <div>
          <NookAboutHumanoid />
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
