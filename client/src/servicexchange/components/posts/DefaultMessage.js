import React, { Component } from 'react';

import './post.css';

class DefaultMessage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mx-auto text-center">
              <div className="card card-body bg-dark text_white">
                <h5 className="card-title">
                  <strong>
                    <font color="white">Post </font>
                  </strong>
                </h5>
                <p className="card-test">
                  Please select the posting type from the drop-down menu.
                </p>
                <p className="card-test">
                  The more information you provide, the more likely Baanda can provide you with a
                  refined match.
                </p>
                <p className="card-test">
                  <font color="lightblue">**</font> Mandatory fields are indicated as mandatory. 
                </p>
                <p className="card-test">
                  <font color="lightblue">**</font> Some fields are not visible to
                  anyone other than you. They are needed for matching algorithms only and will be indicated as such.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultMessage;
