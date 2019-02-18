import React, { Component } from "react";
import '../../project.css';

class EditableCell extends Component {
  render() {
    //console.log('EditableCell props: ' + JSON.stringify(this.props));
    let type = this.props.cellData.type;
    let width = this.props.cellData.width;
    let retval;
    
    // let size;
    // if (type === "itemName") {
    //   size = "40";
    // } else if (type === "cost") {
    //   size = "20";
    // } else if (type === "unit") {
    //   size = "8";
    // } else {
    //   size = "12";
    // }

    if (type === "unit") {
      retval = (
        <select
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          name={this.props.cellData.type}
          onChange={this.props.onBudgetTableUpdate}
        >
          <option value="hour">hour</option>
          <option value="day">day</option>
          <option value="week">week</option>
          <option value="month">month</option>
          <option value="year">year</option>
          <option value="none">none</option>
        </select>
      );
    } else if (type === "itemName") {
      //console.log('..itemName:' + type);
      retval = (
        <input
          type="text"
          className="set-width-cost"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onBudgetTableUpdate}
        />
      );
    } else if (type === "quantity") {
      retval = (
        <input
          type="number"
          className="narrow-font-qty-cost"
          size={10}
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onBudgetTableUpdate}
        />
      );
    } else if (type === "price") {
      retval = (
        <input
          type="number"
          className="narrow-font-price-cost currency"
          step="0.01"
          data-number-to-fixed="2"
          data-number-stepfactor="100"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onBudgetTableUpdate}
        />
      );
    } else {
      retval = (
        <div className="text-right">
          <input
            type="number"
            className="text-amount-cost"
            name={this.props.cellData.type}
            id={this.props.cellData.id}
            value={this.props.cellData.value}
            readOnly={true}
          />
        </div>
      );
    }

    return <td width={width}>{retval}</td>;
  }
}

export default EditableCell;
