import React, { Component } from 'react';

import '../../css/profile.css';

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
                    <font color="white">Nook Profile</font>
                  </strong>
                </h5>
                <p className="card-test">
                  
                </p>
                <p className="card-test">
                  A basic profile must be completed before using Baanda.
                </p>
                <p className="card-test">
                  Please provide as much information as possible. The more your provide,
                  the more Baanda AI has to work with.
                </p>
                <p className="card-test">
                  <font color="white">**</font> Mandatory fields will be
                  marked as such.
                </p>
                <p className="card-test">
                  <font color="white">**</font> Some fields may not be visible to
                  others. They are used by matching algorithms only and will be marked
                  as such.
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
