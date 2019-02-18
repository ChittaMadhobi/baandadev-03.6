import React, { Component } from 'react';

import './mktAbout.css';

class DefaultAboutMessage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mx-auto text-center">
              <div className="card card-body bg-dark text_white">
                <h5 className="card-title">
                  <strong>
                    <font color="white">Market Space (CrowdFund, Catalog, Influence etc.) FAQ</font>
                  </strong>
                </h5>
                <p className="card-test">
                  Overview of Baanda Market Space Q&A
                </p>
                <p className="card-test">
                  Please select area of interest from drop down above. This contains
                  conceptual as well as field-details. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultAboutMessage;
