import React, { Component } from 'react';

import '../../css/dashboard.css';

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
                    <font color="white">
                      Select 
                    </font>
                  </strong>
                </h5>
                <p className="card-test">
                  Pursuits refers to your current postings >> Who or what you are pursuing.
                </p>
                <p className="card-test">
                  Manage your endeavors >> These are your active projects/jobs.
                </p>
                <p className="card-test">
                  Historic refers to past projects. 
                </p>
                <p className="card-test">
                  <font color="white">
                    Personal SX reflection >> Get work/life reflection from those around you.
                  </font>
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
