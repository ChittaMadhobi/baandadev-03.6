import React, { Component } from 'react';
import Fusion1 from './Pi3DExpense';
import Fusion2 from './Pi3DIncome';

class Pi3D extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Fusion1 />
          </div>
          <div className="col-md-6">
            <Fusion2 />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <b>Comment:</b> To work for 10 months a year lifestyle (per your
            strategy), you are <font color="red">13.04% in red </font>; you can
            increase your income via{' '}
            <font color="#196327">
              <b>Service Xchange</b>
            </font>{' '}
            to get to 13%+ more income.
            {/* <div className="card">
              <div class="card-header">
                <font color="blue">
                  <b>Budget Based Analytics</b>
                </font>
              </div>
              <div class="card-body">
                You wanted to work for 10 months and sustain your lifestyle. You
                are <font color="red">13.04% in red </font>
                to attain that. You can increase your income via Service Xchange
                to get to 13%+ more income. Further, your rainy-day savings is
                not really what it means.
                <p>
                  <font color="brown">
                    <b>Note:</b> The projection is same as default budget plans.
                    In production, this will reflect your plan modifications.
                  </font>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Pi3D;
