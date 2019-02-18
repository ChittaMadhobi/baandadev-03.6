import React, { Component } from "react";

import "./tasks.css";
import EnableTasks from './formCharts/EnableTasks';
import ViewTasks from './formCharts/TaskView';
import EditTask from './formCharts/EditTask';
import TaskLog from './formCharts/TaskLog';
import Scheduling from "./formCharts/Scheduling";

class TaskManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enableTasks: false,
      handleSchedule: false,
      viewTasks: false,
      editTask: false,
      taskLog: false,
      schedule: false

    };

    this.gotoTaskMgmtPanel = this.gotoTaskMgmtPanel.bind(this);
  }

  gotoTaskMgmtPanel = value => {
    //console.log("got here :" + value);
    for (let name in this.state) {
      if (name !== value) {
        this.setState({
          [name]: false
        });
      } else {
        this.setState({
          [name]: true
        });
      }
    }
  };


  render() {
    let workarea;
    let defaultMsg;
    defaultMsg = (
      <div className="default-msg">
        <div className="left-align">
          <div>
            <b>Name:&nbsp; </b>{" "}
            <font color="#ddd1a8">
              {this.props.thisProject.msg.engagementName}{" "}
            </font>
          </div>
          <div>
            <b>Description: </b>{" "}
            <font color="#ddd1a8">
              {this.props.thisProject.msg.description}
            </font>
          </div>
          <div>
            <b>Project Type: </b>{" "}
            <font color="#ddd1a8">
              {this.props.thisProject.msg.engagementType}
            </font>
          </div>
          <div>
            <b>Project Manager: </b>
            <font color="#ddd1a8"> You </font>
          </div>
        </div>
        <br />
        <br />
        <div className="text-center">
          <font color="#ddd1a8">
            For UX review and comments, system is not doing true authorization
            but assuming you are the PM so that you can experience other
            project/co-op related actions and see statuses from pre-defined
            intelligence. In real world, if you are not the authorized, your
            access will be limited.
          </font>
        </div>
      </div>
    );

    let controlBar = (
      <div className="text-center ctrl-panel-x">
        <div className="space-at-top" />
        <h4>
          <div className="header-shadow">
            <b>
              <font color="#cbd8ed">Task Management</font>
            </b>
          </div>
        </h4>

        <div className="space-at-top" />

        <div className="text-center">
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.gotoTaskMgmtPanel("enableTasks");
            }}
          >
            Enable Tasks
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.gotoTaskMgmtPanel("viewTasks");
            }}
          >
            View Tasks
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.gotoTaskMgmtPanel("editTask");
            }}
          >
            Edit Task
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.gotoTaskMgmtPanel("taskLog");
            }}
          >
            Task Log
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.gotoTaskMgmtPanel("schedule");
            }}
          >
            Schedule
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col-1">&nbsp;</div>
            <div className="col-10">
              <div className="text-center vedio-msg">
                Click the option to work on a context.
              </div>
            </div>
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      </div>
    );

    if (this.state.enableTasks) {
      workarea = (<EnableTasks propsForward={this.props} />);
    } else if (this.state.viewTasks) {
      workarea = (<ViewTasks propsForward={this.props} /> );
    } else if (this.state.editTask) {
      workarea = (<EditTask propsForward={this.props} /> );
    } else if (this.state.taskLog) {
      workarea = (<TaskLog propsForward={this.props} /> );
    } else if (this.state.schedule) {
      workarea = (<Scheduling propsForward={this.props} /> );
    }
    else {
      workarea = defaultMsg;
    }

    return (
      <div className="container the-box-background">
        <div ref="app">
          <div className="text-center">
            <div className="row">
              <div className="col-md-4 col-sm-6">{controlBar}</div>
              <div className="col-md-8 col-sm-6">
                <div className="chart-panel">{workarea}</div>
                {/* {speakout} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskManagement;
