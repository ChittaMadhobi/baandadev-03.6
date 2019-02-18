import React, { Component } from 'react';

import BarIncome from './BarBudgetRealIncome';
import BarExpense from './BarBudgetRealExpense';

class BarBudgetToReal extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <BarIncome />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <BarExpense />
          </div>
        </div>
      </div>
    );
  }
}

export default BarBudgetToReal;
