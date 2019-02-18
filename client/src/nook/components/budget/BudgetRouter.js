import React, { Component } from 'react';

import BudgetPlanning from './budgetFunctions/BudgetPlanning';
import ActualIncomeExpense from './budgetFunctions/ActualIncomeExpenses';
import FinancialIntel from './budgetFunctions/FinancialIntel';
import DefaultMessage from './DefaultMessage';

class PostFormRouter extends Component {
  render() {
    const { selectValue } = this.props;
    //console.log('selectValue:' + selectValue);
    let output;

    if (selectValue === 'none') {
      output = (
        <div>
          <DefaultMessage />{' '}
        </div>
      );
    }

    if (selectValue === 'budgetPlanning') {
      output = (
        <div>
          <BudgetPlanning />{' '}
        </div>
      );
    }

    if (selectValue === 'actualIncomeExpense') {
      output = (
        <div>
          <ActualIncomeExpense />
        </div>
      );
    }

    if (selectValue === 'financialIntel') {
      output = (
        <div>
          {' '}
          <FinancialIntel />{' '}
        </div>
      );
    }

    return (
      <div className="col-lg-12 col-md-8 col-sm-6">
        <div>{output}</div>
      </div>
    );
  }
}

export default PostFormRouter;
