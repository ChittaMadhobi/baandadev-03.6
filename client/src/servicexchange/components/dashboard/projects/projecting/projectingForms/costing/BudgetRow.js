import React, { Component } from "react";
import EditableCell from "./EditableCell";
import '../../project.css';

class BudgetRow extends Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.budget);
  }

  onAddEvent() {
    this.props.onAddEvent(this.props.budget);
  }

  render() {
    //console.log("budgetRow props:" + JSON.stringify(this.props));
    let price = (this.props.budget.price * 1).toFixed(2);
    
    return (
      // <tr className="eachRow">
      <tr>
        <EditableCell
          onBudgetTableUpdate={this.props.onBudgetTableUpdate}
          cellData={{
            type: "itemName",
            width: '35%',
            value: this.props.budget.itemName,
            id: this.props.budget.id,
          }}
        />
        <EditableCell
          onBudgetTableUpdate={this.props.onBudgetTableUpdate}
          cellData={{
            type: "price",
            width: '15%',
            value: price,
            id: this.props.budget.id
          }}
        />
        <EditableCell
          onBudgetTableUpdate={this.props.onBudgetTableUpdate}
          cellData={{
            type: "unit",
            width: '10%',
            value: this.props.budget.unit,
            id: this.props.budget.id
          }}
        />
        <EditableCell
          onBudgetTableUpdate={this.props.onBudgetTableUpdate}
          cellData={{
            type: "quantity",
            width: '10%',
            value: this.props.budget.quantity,
            id: this.props.budget.id
          }}
        />

          <EditableCell
            onBudgetTableUpdate={this.props.onBudgetTableUpdate}
            cellData={{
              type: "cost",
              width: '20%',
              value: (
                this.props.budget.price * this.props.budget.quantity
              ).toFixed(2),
              id: this.props.budget.id
            }}
          />

        <td width="10%" className="del-cell">
          <input
            type="button"
            onClick={this.onDelEvent.bind(this)}
            value="X"
            className="control-btn-del-cost"
          />
        </td>
      </tr>
    );
  }
}

export default BudgetRow;