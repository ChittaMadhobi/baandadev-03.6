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
                    <font color="white">Manage your Budget and Financials</font>
                  </strong>
                </h5>
                <p className="card-test">
                  Select one of three personal finance modules.
                </p>
                <p className="card-test">
                  Plan, setup and manage your budgets.
                </p>
                <p className="card-test">Input your actual financial data</p>

                <p className="card-test">
                  See personalized financial landscape intelligence
                  reflections.
                </p>
                <br />
                <p className="card-test">
                  <font color="lightblue">
                    ** In Baanda roadmap (future scope), you will be able to
                    attach your banking and credit cards for direct links.
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
