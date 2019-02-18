import React, { Component } from 'react';

class AboutTypeSelection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center">
              {/* <h5>Select area of curiosity</h5> */}
              <select
                id="aboutType"
                name="aboutType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select </option>
                <option value="overviewQuestions">
                  Nook Overview Q&A (Conceptual)
                </option>
                <option value="profileQuestions">
                  Nook Profile: Q&A (How-to)
                </option>
                <option value="taskdiaryQuestion">
                  Nook Tasks Q&A (User's guide)
                </option>
                <option value="societyQuestion">
                  Nook Social Circle Q&A (User's guide)
                </option>
                <option value="budgetingQuestion">
                  Nook Budgeting Q&A (User's guide)
                </option>
                <option value="humanoid">
                  Nook Humanoid Conversation Q&A - Nuances of the Mask
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutTypeSelection;
