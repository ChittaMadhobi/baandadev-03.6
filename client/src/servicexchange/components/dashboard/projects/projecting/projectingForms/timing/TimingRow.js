import React, { Component } from "react";
import EditableCell from "./EditableCell";
import "../../project.css";

class TimingRow extends Component {
  onDelEvent() {
    //console.log('Inside TimingRow onDelEven :' + JSON.stringify(this.props.timing));
    this.props.onDelEvent(this.props.timing);
  }

  onAddEvent() {
    this.props.onAddEvent(this.props.budget);
  }

  numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render() {
    //console.log("TimingRow props:" + JSON.stringify(this.props));
    //let price = (this.props.budget.price * 1).toFixed(2);
    let ts = this.props.timing.timeEstimates;
    let pp = this.props.timing.parallelDependencyPer;
    let cp = this.props.timing.confidencePer;
    // The following should not happen because input has min = "1". If, in remote case
    // zero value do get in, the minimum is assumed to eliminate 
    if ( pp < 1) {
      pp = 1;
    }
    if (cp < 1) {
      cp = 1
    }
    let ptl = ts * ( 1 + ((pp/100) * (cp/100))); // project time line

    let ptlPointTwo = ptl.toFixed(2); // up to 2 decimal places
    //let projectTimeLength = this.numberWithCommas(ptlPointTwo); // formatte


    return (
      // <tr className="eachRow">
      <tr>
        <EditableCell
          onTimingTableUpdate={this.props.onTimingTableUpdate}
          cellData={{
            type: "goalName",
            //width: '35%',
            value: this.props.timing.goalName,
            id: this.props.timing.id
          }}
        />
        <EditableCell
          onTimingTableUpdate={this.props.onTimingTableUpdate}
          cellData={{
            type: "timeEstimates",
            //width: '15%',
            value: this.props.timing.timeEstimates,
            id: this.props.timing.id
          }}
        />
        <EditableCell
          onTimingTableUpdate={this.props.onTimingTableUpdate}
          cellData={{
            type: "unit",
            //width: '10%',
            value: this.props.timing.unit,
            id: this.props.timing.id
          }}
        />
        <EditableCell
          onTimingTableUpdate={this.props.onTimingTableUpdate}
          cellData={{
            type: "parallelDependencyPer",
            //width: '10%',
            value: this.props.timing.parallelDependencyPer,
            id: this.props.timing.id
          }}
        />

        <EditableCell
          onTimingTableUpdate={this.props.onTimingTableUpdate}
          cellData={{
            type: "confidencePer",
            //width: '10%',
            value: this.props.timing.confidencePer,
            id: this.props.timing.id
          }}
        />

        <EditableCell
          onTimingTableUpdate={this.props.onTimingTableUpdate}
          cellData={{
            type: "timeLength",
            // value: this.props.timing.timeLength,
            value : ptlPointTwo,
            id: this.props.timing.id
          }}
        />

        <td width="10%" className="del-cell">
          <input
            type="button"
            onClick={this.onDelEvent.bind(this)}
            value="X"
            className="control-btn-del-time"
          />
        </td>
      </tr>
    );
  }
}

export default TimingRow;
