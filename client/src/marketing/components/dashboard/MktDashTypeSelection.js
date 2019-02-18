import React, { Component } from 'react';

import './mktdash.css';

class MktDashTypeSelection extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">&nbsp;</div>
          <div className="col-md-6 m-auto">
            <div className="form-group text-center margin-top-select">
              <select
                id="postType"
                name="postType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select your operation dashboard from the dropdown</option>
                <option value="crowdsource">
                  CrowdFund, and/or Investment Management Dashboard 
                </option>
                <option value="msgPropagation">
                  Ideas, Messages, Fundraising, Investment Propagation Dashboard
                </option>
                <option value="catalogue">
                  Catalogue, Services Providers Dashboars
                </option>
                <option value="message">
                  Market Space Messaging Center ...  
                </option>
              </select>
            </div>
          </div>
          <div className="col-3">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default MktDashTypeSelection;