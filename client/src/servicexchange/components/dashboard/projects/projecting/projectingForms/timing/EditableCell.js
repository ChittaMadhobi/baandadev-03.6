import React, { Component } from "react";

class EditableCell extends Component {
  render() {
    //console.log('EditableCell props: ' + JSON.stringify(this.props));
    let type = this.props.cellData.type;
    let width = this.props.cellData.width;
    let retval;
    
    // console.log('type:' + type + '  value:' + this.props.cellData.value);

    if (type === "unit") {
      retval = (
        <select
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          name={this.props.cellData.type}
          onChange={this.props.onTimingTableUpdate}
        >
          <option value="hour">Hr</option>
          <option value="day">Day</option>
          <option value="week">Wk</option>
          {/* <option value="month">Mon</option>
          <option value="year">Yr</option> */}
          {/* <option value="none">None</option> */}
        </select>
      );
    } else if (type === "goalName") {
      //console.log('..itemName:' + type);
      retval = (
        <input
          type="text"
          className="milestone-name"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onTimingTableUpdate}
        />
      );
    } else if (type === "timeEstimates") {
      //console.log('timeEstimate name:' + this.props.cellData.type);
      retval = (
        <input
          type="number"
          className="time-estimate"
          size={10}
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onTimingTableUpdate}
        />
      );
    } else if (type === "parallelDependencyPer") {
      retval = (
        <input
          type="number"
          className="confidence-percentage"
          step="1"
          data-number-to-fixed="2"
          data-number-stepfactor="100"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          min="1" 
          max="99"
          onChange={this.props.onTimingTableUpdate}
        />
      );
    } else if (type === "confidencePer") {
      retval = (
        <input
          type="number"
          className="confidence-percentage"
          step="1"
          data-number-to-fixed="2"
          data-number-stepfactor="100"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          min="1" max="99"
          onChange={this.props.onTimingTableUpdate}
        />
      );
    } 
     else {
      retval = (
        <div className="text-right">
          <input
            type="number"
            className="row-time-projection"
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
