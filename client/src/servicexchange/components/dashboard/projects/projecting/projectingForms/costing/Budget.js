import React, { Component } from "react";
import BudgetTable from "./BudgetTable";

import "../../project.css";

//import { rowBudgetData } from "./data/rowBudgetData";
import { costingRowData } from "../../data/costingRowData";

class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budgets: []
    };
    this.state.filterText = "";
    //this.state.budgets = initialBudgetItems;
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "This will save the present state of Costing of the project. You can continue to work on it later. In present scenario (UX-reflection) the data is not saved. You are getting the initial state from a pre-defined JSON."
    );
  }
  componentWillMount() {
    this.setState({
      budgets: costingRowData
    });
  }

  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  }
  handleRowDel(budget) {
    var index = this.state.budgets.indexOf(budget);
    this.state.budgets.splice(index, 1);
    this.setState(this.state.budgets);
  }

  // handleRowAdd(budget) {
  //   console.log("handleRowAdd input:" + JSON.stringify(budget));
  // }

  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var budget = {
      id: id,
      itemName: "",
      price: 0.0,
      unit: "none",
      quantity: 1,
      cost: 0.0
    };
    this.state.budgets.push(budget);
    this.setState(this.state.budgets);
  }

  handleBudgetTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
      text: evt.target.type
    };
    console.log("item:" + JSON.stringify(item));

    var budgets = this.state.budgets.slice();
    var newBudgets = budgets.map(function(budget) {
      for (var key in budget) {
        console.log("budget[key]:" + JSON.stringify(budget) + "  key=" + key);
        // eslint-disable-next-line
        if (key == item.name && budget.id == item.id) {
          budget[key] = item.value;
        }
      }
      return budget;
    });
    this.setState({ budgets: newBudgets });
    console.log("handleBudgetTable:" + JSON.stringify(this.state.budgets));
  }

  render() {
    const engagementType = this.props.propsForward.thisProject.msg
      .engagementType;

    let createBudgetBody;
    if (engagementType === "time-based") {
      createBudgetBody = (
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
      createBudgetBody = (
        <div>
          <BudgetTable
            onBudgetTableUpdate={this.handleBudgetTable.bind(this)}
            onRowAdd={this.handleAddEvent.bind(this)}
            // onRowAddInline={this.handleRowAdd.bind(this)}
            onRowDel={this.handleRowDel.bind(this)}
            budgets={this.state.budgets}
            filterText={this.state.filterText}
          />
          <div className="float-right button-padding-right">
            <button
              className="control-btn-cost"
              type="button"
              onClick={this.handleSaveClick}
            >
              Save &nbsp;&nbsp;
              <div className="float-right">
                <i className="far fa-envelope" />
              </div>
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        {createBudgetBody}
      </div>
    );
  }
}

export default Budget;
