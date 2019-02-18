import React, { Component } from 'react';
import '../../../../css/profile.css';

class EditableCellAct extends Component {
  render() {
    let retVal;
    let calcType = this.props.cellData.calcType;
    let type = this.props.cellData.type;
    let amountColor = null;
    let typeCast = 'text';
    let rowType;
    let category;
    if (type === 'amount') {
      if (calcType === 'earning') {
        amountColor = 'number-align-earn';
      } else {
        amountColor = 'number-align-pay';
      }
      typeCast = 'number';
    }
    //console.log('EditaleCell props:' + JSON.stringify(this.props));
    // eslint-disable-next-line
    if (this.props.cellData.type == 'earnExpType') {
      rowType = 'expense';
      // eslint-disable-next-line
      if (this.props.cellData.calcType == 'earning') {
        rowType = 'earning';
      }
      retVal = (
        <select
          id={this.props.cellData.id}
          value={rowType}
          name={this.props.cellData.type}
          onChange={this.props.onProductTableUpdate}
        >
          <option value="earning">Earnings</option>
          <option value="expense">Expense</option>
        </select>
      );
      // eslint-disable-next-line
    } else if (this.props.cellData.type == 'category') {
      if (this.props.cellData.value.toLowerCase()) {
        category = this.props.cellData.value.toLowerCase();
        //console.log('caetgory got data:' + category);
      } else {
        category = 'groceries';
        //console.log('caetgory new or empty:' + category);
      }

      retVal = (
        <select
          id={this.props.cellData.id}
          value={category}
          name={this.props.cellData.type}
          onChange={this.props.onProductTableUpdate}
        >
          <option value="communication">Communication</option>
          <option value="education">Education</option>
          <option value="employment">Employment</option>
          <option value="entertainment">Entertainment</option>
          <option value="groceries">Groceries</option>
          <option value="healthcare">HealthCare</option>
          <option value="housing">Housing</option>
          <option value="insurance">Insurance</option>
          <option value="miscellaneous">Miscellaneous</option>
          <option value="otherincome">Other Income</option>
          <option value="saving">Savings</option>
          <option value="servxchange">Service Xchange</option>
          <option value="transport">Transportation</option>
        </select>
      );
    } else {
      retVal = (
        <input
          type={typeCast}
          className={amountColor}
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onProductTableUpdate}
        />
      );
    }

    return <td width={this.props.cellData.width}>{retVal}</td>;
  }
}

export default EditableCellAct;
