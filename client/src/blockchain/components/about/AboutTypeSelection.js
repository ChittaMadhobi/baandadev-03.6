import React, { Component } from 'react';

class AboutTypeSelection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center">
              <select
                id="aboutType"
                name="aboutType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select</option>
                <option value="overviewQuestions">
                  Agreements, AI, Blockchain, IoT companionship overview  
                </option>
                <option value="postQuestions">
                  How to create (Author & Factory) Agreements  
                </option>
                {/* <option value="dashboardQuestion">
                  How to operate existing contracts in yuor dashbaord
                </option> */}
                <option value="browseQuestion">
                  How to Browse historic agreements and intelligence
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
