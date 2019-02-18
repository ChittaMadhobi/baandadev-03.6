import React, { Component } from "react";
import Select from "react-select";
import TextAreaFieldGroup from "../../../../../../../src/utils/TextAreaFieldGroup";

import { taskToEdit } from "../data/tasksToEdit";
import { taskLog } from "../data/tasklog";

import "../tasks.css";

class TaskLog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToCreateTask: false,
      description: "",
      addLog: false,
      viewLog: false,

      selectTask: "",

      errors: []
    };

    //this.gotoTaskCreatePanel = this.gotoTaskCreatePanel.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.handleParentTask = this.handleParentTask.bind(this);
    // this.handleStartDate = this.handleStartDate.bind(this);
    // this.handleEndDate = this.handleEndDate.bind(this);
    this.handleSaveLog = this.handleSaveLog.bind(this);
    this.handleAddLog = this.handleAddLog.bind(this);
    this.handleViewLog = this.handleViewLog.bind(this);
    this.handleSelectTask = this.handleSelectTask.bind(this);
  }

  handleSaveLog() {
    alert("In production, this would save (add/update) the log for this task.");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAddLog() {
    this.setState({
      addLog: true,
      viewLog: false
    });
  }

  handleViewLog() {
    this.setState({
      addLog: false,
      viewLog: true
    });
  }

  handleSelectTask = selectTask => {
    this.setState({
      selectTask,
      addLog: false,
      viewLog: false
    });
  };

  render() {
    let engagementType = this.props.propsForward.thisProject.msg.engagementType;
    console.log("engagementType: " + engagementType);
    const { errors } = this.state;

    let logActionSelect;

    if (engagementType !== "time-based") {
      logActionSelect = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <font color="#293087">
                <Select
                  value={this.state.selectTask}
                  options={taskToEdit}
                  classNamePrefix="select a task for log actions."
                  onChange={value => this.handleSelectTask(value)}
                  maxMenuHeight={150}
                />
              </font>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <button
                  className="control-btn-taskLog"
                  onClick={this.handleAddLog}
                >
                  Add&nbsp;
                  <div className="float-right">
                    <i className="far fa-plus-square" />
                  </div>
                </button>
                <button
                  className="control-btn-taskLog"
                  onClick={this.handleViewLog}
                >
                  View&nbsp;
                  <div className="float-right">
                    <i className="far fa-eye" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      logActionSelect = (
        <div>
          <div className="space-outside-buttons" />
          <div className="space-outside-buttons" />
          <div className="text-center how-to-create-team">
            <font color="white">
              You have been inducted in the team by the manager. Since you are
              joining as barrista (time-based) and not the manager of project or
              co-op. You have no log to update or view.
            </font>
          </div>
        </div>
      );
    }

    let addlog;

    addlog = (
      <div>
        <div className="row">
          <div className="col">
            <TextAreaFieldGroup
              placeholder="Log events and actions for the task ..."
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              rows={3}
              error={errors.description}
              info="Provide a short description to log. Date-time stamp would be current date-time."
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-6">&nbsp;</div>
          <div className="col-md-6">
            <div className="text-center">
              <button
                className="control-btn-taskLog"
                onClick={this.handleSaveLog}
              >
                Save&nbsp;
                <div className="float-right">
                  <i className="far fa-save" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    let viewlog;

    viewlog = (
      <div className="align-left">
        {taskLog.map(obj => {
          return (
            <div key={obj.seqNo}>
              <div className="row">
                <div className="col">
                  <div className="edit-log-lines">
                    Logged by: <b>{obj.loggedby}</b> at:{" "}
                    <b>{obj.atDateTime} </b>Description:{" "}
                    <font color="#3e5584">{obj.description}</font>
                  </div>
                </div>
              </div>
              <div className="space-between-rows" />
              <hr />
            </div>
          );
        })}
      </div>
    );

    let output;
    if (this.state.addLog) {
      if (this.state.selectTask) {
        output = addlog;
      } else {
        output = (
          <div>
            <font color="orange" size="3">
              Please select a task to add log to.
            </font>
          </div>
        );
      }
    } else if (this.state.viewLog) {
      if (this.state.selectTask) {
        output = (
          <div className="view-log">
            <h5>Log View</h5>
            {viewlog}
          </div>
        );
      } else {
        output = (
          <div>
            <font color="orange" size="3">
              Please select a task to see log of.
            </font>
          </div>
        );
      }
    } else {
      output = null;
    }

    return (
      <div className="form-panel-task-log">
        <div className="text-center">
          <h3>Task Logs</h3>
        </div>
        <div className="space-between-buttons" />
        <div>{logActionSelect}</div>
        <div>{output}</div>
      </div>
    );
  }
}

export default TaskLog;
