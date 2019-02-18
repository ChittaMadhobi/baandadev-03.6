import React, { Component } from 'react';

import BudgetTypeSelection from './BudgetTypeSelection';
import BudgetRouter from './BudgetRouter';

class BudgetContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: 'none' //default
    };
  }

  handleOnChange(e) {
    this.setState({
      selectValue: e.target.value
    });
  }

  render() {
    const { selectValue } = this.state;

    return (
      <div>
        <BudgetTypeSelection handleOnChange={this.handleOnChange.bind(this)} />
        <BudgetRouter selectValue={selectValue} />
      </div>
    );
  }
}

export default BudgetContainer;
