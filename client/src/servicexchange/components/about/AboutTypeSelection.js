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
                  Service Xchange Overview Questions  
                </option>
                <option value="postQuestions">
                  How to Post in Service Xchange 
                </option>
                <option value="dashboardQuestion">
                  How to use Service Xchange Dashboard 
                </option>
                <option value="browseQuestion">
                  How to Browse in Service Xchange 
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
