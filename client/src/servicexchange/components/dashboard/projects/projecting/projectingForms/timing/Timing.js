import React, { Component } from "react";
import TimingTable from "./TimingTable";

import "../../project.css";

// import { costingRowData } from '../../data/costingRowData';
import { timingProjectionData } from "../../data/timingProjectionData";

class Timing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timings: []
    };
    this.state.filterText = "";
    //this.state.timing = initialBudgetItems;
    // this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  // handleSaveClick() {
  //   alert(
  //     "This will save the present state of Timing Projection. You can continue to work on it later. In present scenario (UX-reflection) the data is not saved. You are getting the initial state from a pre-defined JSON."
  //   );
  // }
  componentWillMount() {
    this.setState({
      timings: timingProjectionData
    });
  }

  // handleUserInput(filterText) {
  //   this.setState({ filterText: filterText });
  // }

  handleRowDel(timing) {
    //console.log('handleRowDel: ' + JSON.stringify(timing));
    var index = this.state.timings.indexOf(timing);
    this.state.timings.splice(index, 1);
    this.setState(this.state.timings);
  }

  // handleRowAdd(budget) {
  //   console.log("handleRowAdd input:" + JSON.stringify(budget));
  // }

  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var timing = {
      id: id,
      goalName: "",
      timeEstimates: 10,
      parallelDependencyPer: 0,
      unit: "day",
      confidencePer: 1,
      timeLength: 1000.0
    };
    this.state.timings.push(timing);
    this.setState(this.state.timings);
  }

  handleTimingTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
      text: evt.target.type
    };
    //console.log("handleTimingTable item:" + JSON.stringify(item));

    var timing = this.state.timings.slice();
    var newTimings = timing.map(function(timing) {
      for (var key in timing) {
        //console.log("budget[key]:" + JSON.stringify(timing) + "  key=" + key);
        // eslint-disable-next-line
        if (key == item.name && timing.id == item.id) {
          timing[key] = item.value;
        }
      }
      return timing;
    });
    this.setState({ timings: newTimings });
    //console.log("handleTimingTable:" + JSON.stringify(this.state.budgets));
  }

  render() {
    //console.log("Timing  props:" + JSON.stringify(this.props));
    const engagementType = this.props.propsForward.thisProject.msg
      .engagementType;

    let createTimingBody;
    if (engagementType === "time-based") {
      createTimingBody = (
        <div>
          <div className="space-outside-buttons" />
          <div className="space-outside-buttons" />
          <div className="text-center how-to-create-team">
            <font color="">
              You have been inducted in the team by the manager. Since you are
              joining as barrista (time-based) and not the manager, you do not
              get to build teams.
            </font>
          </div>
        </div>
      );
    } else {
      createTimingBody = (
        <TimingTable
          onTimingTableUpdate={this.handleTimingTable.bind(this)}
          onRowAdd={this.handleAddEvent.bind(this)}
          onRowDel={this.handleRowDel.bind(this)}
          timings={this.state.timings}
        />
      );
    }
    return (
      <div>
        {/* <TimingTable
          onTimingTableUpdate={this.handleTimingTable.bind(this)}
          onRowAdd={this.handleAddEvent.bind(this)}
          onRowDel={this.handleRowDel.bind(this)}
          timings={this.state.timings}
        /> */}
        {createTimingBody}
      </div>
    );
  }
}

export default Timing;
