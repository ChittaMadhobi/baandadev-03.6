import React, { Component } from 'react';

class SelectionBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center margin-top-select">
              <select
                id="postType"
                name="postType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select</option>
                <option value="crowdsource">
                  CrowdFund, and/or Investment campaign authoring (create) 
                </option>
                <option value="msgPropagation">
                  Ideas, Messages, Fundraising, Investment Campaign Propagation 
                </option>
                <option value="catalogue">
                  Post your service and/or product catalogues
                </option>
                <option value="participate">
                  Describe for Baanda to assist you to intelligently contribute / participate  
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
