import React, { Component } from 'react';

class SelectionBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center">
              {/* <h5>Select profile type from drop down</h5> */}
              <select
                id="postType"
                name="postType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select </option>
                <option value="basicProfile">
                  Basic profile: Identity related (mandatory to start)
                </option>
                <option value="selfEval">
                  Multidimensional self-evaluation & self-perception
                </option>
                <option value="personalityTests">
                  Personality Tests with Core-Value Evaluations
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectionBox;
