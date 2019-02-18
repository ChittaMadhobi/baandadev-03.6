import React, { Component } from 'react';

class TaskDiaryTypeSelection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center">
              {/* <h5>
                <font color="blue">To-Do List and Personal Wiki </font>
              </h5> */}
              <select
                id="taskType"
                name="taskType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select </option>
                <option value="handlingTasks">
                  Plan, create and manage your to-do list
                </option>
                <option value="journal">
                  Maintain your personal wiki
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskDiaryTypeSelection;