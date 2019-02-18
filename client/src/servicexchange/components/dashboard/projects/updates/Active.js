import React, { Component } from "react";
import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import Select from "react-select";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import { activeTasks } from "./data/activeTasks";
import { inspectors } from "./data/inspectors";
import { cancelTargets } from "./data/cancelTargets";
import { transferTargets } from "./data/transferTargets";

import "./update.css";

class Active extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToUpdate: false,
      taskList: true,
      statusUpdate: false,
      taskCancel: false,
      taskTransfer: false,

      // Active.js - status
      inspectRelTarget: [],
      // Section deals with status updates
      statusComment: "",
      statusPerDone: 0,
      //reqInspection: false,
      opsTargets: [],
      cancelComment: "",
      transferComment: "",
      requestInspectRelease: '',

      // Section deals with selecting specific ops from the task list
      taskName: "",
      taskCategory: "",
      parentTask: "",
      beginDate: "",
      endDate: "",
      description: "",
      deliverable: "",
      lastState: 0,

      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.gotoUpdateProcess = this.gotoUpdateProcess.bind(this);
    this.handleStatusProcessing = this.handleStatusProcessing.bind(this);
    this.handlePercentageDone = this.handlePercentageDone.bind(this);
    //this.handleReqInspection = this.handleReqInspection.bind(this);
    this.handleTargets = this.handleTargets.bind(this);
    this.handleStatusSave = this.handleStatusSave.bind(this);
    this.handleTaskCancel = this.handleTaskCancel.bind(this);
    this.handleTaskTransfer = this.handleTaskTransfer.bind(this);
    this.gotoInspectReq = this.gotoInspectReq.bind(this);
  }

  gotoInspectReq = (value) => {
    //console.log('value:' + value);
    this.setState ({
      requestInspectRelease: value
    })
  }

  handleTaskTransfer() {
    alert(
      "At this point, in production, the task's responsibility will be transferred and the parties will be notified. NOTE: To be mindful, a task may be (like most other operations) transferred by the project manager, and may be, the owner of the project (in co-op mode of project handling)."
    );
  }

  handleTaskCancel() {
    alert(
      "At this point, in production, the task will be removed (soft delete) from the list and targets will be notified. NOTE: To be mindful, a task may be (like most other operations) canceled by the project manager, and may be, the owner of the project (in co-op mode of project handling)."
    );
  }

  handleStatusSave() {
    alert(
      "At this point, the update will be saved. If you have requested inspection then the  inspectors will be notified.."
    );
  }

  handleTargets = (value, { action }) => {
    this.setState({
      inspectRelTarget: value
    });
  };


  handlePercentageDone = value => {
    this.setState({
      statusPerDone: value
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  gotoUpdateProcess = value => {
    if (value === "howToUpdate") {
      this.setState({
        howToUpdate: !this.state.howToUpdate,
        taskList: false,
        statusUpdate: false,
        taskCancel: false,
        taskTransfer: false
      });
    } else if (value === "listTasks") {
      this.setState({
        howToUpdate: false,
        taskList: true,
        statusUpdate: false,
        taskCancel: false,
        taskTransfer: false
      });
    }
  };

  handleStatusProcessing = (
    btnType,
    taskName,
    taskCategory,
    parentTask,
    beginDate,
    endDate,
    description,
    deliverable,
    lastState
  ) => {
    this.setState({
      taskName,
      taskCategory,
      parentTask,
      beginDate,
      endDate,
      description,
      deliverable,
      lastState,
      statusPerDone: lastState
    });
    if (btnType === "status") {
      this.setState({
        howToUpdate: false,
        taskList: false,
        statusUpdate: true,
        taskCancel: false,
        taskTransfer: false
      });
    } else if (btnType === "cancel") {
      this.setState({
        howToUpdate: false,
        taskList: false,
        statusUpdate: false,
        taskCancel: true,
        taskTransfer: false
      });
    } else {
      this.setState({
        howToUpdate: false,
        taskList: false,
        statusUpdate: false,
        taskCancel: false,
        taskTransfer: true
      });
    }
  };

  render() {
    const { errors } = this.state;
    //let option;
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;

    let option;
    if (this.state.statusUpdate) {
      option = inspectors;
    } else if (this.state.taskCancel) {
      option = cancelTargets;
    } else if (this.state.taskTransfer) {
      option = transferTargets;
    }

    let howtoUpdateSteps;
    if (this.state.howToUpdate) {
      howtoUpdateSteps = (
        <div>
          <div className="row">
            <div className="howto-handle-inspection">
              <font color="lightyellow">
                <p>
                  The active status updates lists you all the tasks on your
                  plate. Each task (depending on your authorization) will have
                  up to three operations (update status, cancel the task or
                  transfer the task)
                  <br />
                  <br />
                  <b>
                    <p>
                      NOTE: In future, you would be allowed to filter by
                      category to have a subset of tasks that would be easier to
                      handle for large projects. Other filters may also be
                      provided progressively on other fields and/or date-ranges.
                    </p>
                  </b>
                </p>
              </font>
            </div>
          </div>
        </div>
      );
    } else {
      howtoUpdateSteps = null;
    }

    // Loop through to list all the active tasks
    let activeTasksList;

    activeTasksList = (
      <div>
        {activeTasks.map(obj => {
          return (
            <div key={obj.id}>
              <div className="row">
                <div className="col">
                  <div className="display-list-lines">
                    <p>
                      Task named <b>{obj.taskName}</b> of category{" "}
                      <b>{obj.taskCategory}</b> and is a sub-task of{" "}
                      <b>{obj.parentTask}</b> to be done between{" "}
                      <b>{obj.beginDate}</b> and <b>{obj.endDate}</b> is
                      assigned to <b>{obj.assignTeam}</b>, &nbsp;
                      <b>{obj.assignMembers}</b> is {obj.lastState}% done [Last
                      pdated by <b>{obj.lastUpdatedBy}</b> ]
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="display-list-lines">
                    <u>Description</u>: {obj.description}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="display-list-lines">
                    <u>Deliverable</u>: {obj.deliverable}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="float-right">
                    <button
                      className="doc-btn"
                      onClick={() => {
                        this.handleStatusProcessing(
                          "status",
                          obj.taskName,
                          obj.taskCategory,
                          obj.parentTask,
                          obj.beginDate,
                          obj.endDate,
                          obj.description,
                          obj.deliverable,
                          obj.lastState
                        );
                      }}
                    >
                      Status&nbsp;
                      <div className="float-right">
                        <i className="fa fa-check" />
                      </div>
                    </button>
                    <button
                      className="doc-btn"
                      onClick={() => {
                        this.handleStatusProcessing(
                          "cancel",
                          obj.taskName,
                          obj.taskCategory,
                          obj.parentTask,
                          obj.beginDate,
                          obj.endDate,
                          obj.description,
                          obj.deliverable,
                          obj.lastState
                        );
                      }}
                    >
                      Cancel&nbsp;
                      <div className="float-right">
                        <i className="fa fa-check" />
                      </div>
                    </button>
                    <button
                      className="doc-btn"
                      onClick={() => {
                        this.handleStatusProcessing(
                          "transfer",
                          obj.taskName,
                          obj.taskCategory,
                          obj.parentTask,
                          obj.beginDate,
                          obj.endDate,
                          obj.description,
                          obj.deliverable,
                          obj.lastState
                        );
                      }}
                    >
                      Transfer&nbsp;
                      <div className="float-right">
                        <i className="fa fa-check" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );

    let taskOpsHeader;
    if (
      this.state.statusUpdate ||
      this.state.taskCancel ||
      this.state.taskTransfer
    ) {
      taskOpsHeader = (
        <div>
          <div className="row">
            <div className="col">
              <div className="display-list-lines">
                <p>
                  Task named <b>{this.state.taskName}</b> of category{" "}
                  <b>{this.state.taskCategory}</b> and is a sub-task of{" "}
                  <b>{this.state.parentTask}</b> to be done between{" "}
                  <b>{this.state.beginDate}</b> and <b>{this.state.endDate}</b>{" "}
                  is {this.state.lastState}% done.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="display-list-lines">
                <u>Description</u>: {this.state.description}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="display-list-lines">
                <u>Deliverable</u>: {this.state.deliverable}
              </div>
            </div>
          </div>
        </div>
      );
    }

    let notifyTarget;

    if (this.state.requestInspectRelease === 'inspect' || this.state.requestInspectRelease === 'payRelease') {
      notifyTarget = (
        <div className="text-left-select-active">
          <font color="blue">
            <Select
              value={this.state.inspectRelTarget}
              isMulti
              autosize={false}
              options={option}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={this.handleTargets}
              maxMenuHeight={150}
              isSearchable={true}
              placeholder="Select target members "
            />
          </font>
        </div>
      );
    } else {
      notifyTarget = null;
    }

    let statusUpdatePanel;
    if (this.state.statusUpdate) {
      statusUpdatePanel = (
        <div>
          {taskOpsHeader}
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col-md-4">
              <div className="float-left">
                <b>
                  Percentage Done :
                  <font color="blue">
                    <strong> {this.state.statusPerDone}</strong>
                  </font>
                </b>
              </div>
            </div>
            <div className="col-md-8">
              <div className="slider-padding">
                <Slider
                  value={this.state.statusPerDone}
                  orientation="horizontal"
                  min={0}
                  max={100}
                  handleLabel={"--Pts"}
                  onChange={this.handlePercentageDone}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              {/* <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="reqInspection"
                    value="option1"
                    checked={this.state.reqInspection}
                    onChange={this.handleReqInspection}
                  />{" "}
                  <font color="green">
                    Check if you are requesting inspection.
                  </font>
                </label>
              </div> */}
              <font color="#3561a8">Request: </font>&nbsp;&nbsp;
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoInspectReq("inspect");
                    }}
                  />
                  Inspect
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoInspectReq("payRelease");
                    }}
                  />
                  Release
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoInspectReq("none");
                    }}
                  />
                  None
                </label>
              </div>
            </div>
            <div className="col-6">{notifyTarget}</div>
          </div>
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col">
              <div className="textarea-list-lines">
                <TextAreaFieldGroup
                  placeholder="Enter your status comments"
                  name="statusComment"
                  value={this.state.statusComment}
                  rows={4}
                  onChange={this.onChange}
                  error={errors.statusComment}
                  info="Enter your status comments,issues, corrections, recommendations ... "
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="float-right">
                <button className="btn-locate" onClick={this.handleStatusSave}>
                  Save & Notify &nbsp;
                  <i className="fas fa-check" />
                </button>
              </div>
            </div>
          </div>
          <div className="space-between-buttons" />
          <div className="space-between-buttons" />
        </div>
      );
    }

    let taskCancelPanel;
    if (this.state.taskCancel) {
      taskCancelPanel = (
        <div>
          <div className="space-between-buttons" />
          {taskOpsHeader}
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col">
              <div className="textarea-list-lines">
                <TextAreaFieldGroup
                  placeholder="Enter your cancel reasons"
                  name="cancelComment"
                  value={this.state.cancelComment}
                  rows={4}
                  onChange={this.onChange}
                  error={errors.cancelComment}
                  info="Enter your reasoning for canceling the task ... "
                />
              </div>
            </div>
          </div>
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col-6">{notifyTarget}</div>
            <div className="col-6">
              <div className="text-align-left-full">
                Please select targets to be notified about this task
                calcellation.
              </div>
            </div>
          </div>
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col">
              <div className="float-right">
                <button className="btn-locate" onClick={this.handleTaskCancel}>
                  Save & Notify &nbsp;
                  <i className="fas fa-check" />
                </button>
              </div>
            </div>
          </div>
          <div className="space-between-buttons" />
          <div className="space-between-buttons" />
        </div>
      );
    } else {
      taskCancelPanel = null;
    }

    let taskTransferPanel;
    if (this.state.taskTransfer) {
      taskTransferPanel = (
        <div>
          <div className="space-between-buttons" />
          {taskOpsHeader}
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col">
              <div className="textarea-list-lines">
                <TextAreaFieldGroup
                  placeholder="Enter your transfer reasons"
                  name="transferComment"
                  value={this.state.transferComment}
                  rows={4}
                  onChange={this.onChange}
                  error={errors.transferComment}
                  info="Enter your reasoning for transfering the task ... "
                />
              </div>
            </div>
          </div>
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col-6">{notifyTarget}</div>
            <div className="col-6">
              <div className="text-align-left-full">
                Please select targets to be notified about this task transfer.
              </div>
            </div>
          </div>
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col">
              <div className="float-right">
                <button
                  className="btn-locate"
                  onClick={this.handleTaskTransfer}
                >
                  Save & Notify &nbsp;
                  <i className="fas fa-check" />
                </button>
              </div>
            </div>
          </div>
          <div className="space-between-buttons" />
          <div className="space-between-buttons" />
        </div>
      );
    } else {
      taskTransferPanel = null;
    }

    let output;

    if (engagementType === "time-based") {
      output = (
        <div>
          <div className="space-outside-buttons" />
          <p className="time-based-msg">
            <font color="orange">
              You have not been allocated with any projectized tasks with
              deliverables. Your allocation is time-based set of services as
              barista.
            </font>
          </p>
        </div>
      );
    } else {
      if (this.state.howToUpdate) {
        output = null;
      } else if (this.state.taskList) {
        output = (
          <div className="view-doc-list">
            <h5>
              <u>List of Active Tasks</u>
            </h5>
            {activeTasksList}
          </div>
        );
      } else if (this.state.statusUpdate) {
        output = (
          <div className="view-doc-list">
            <h5>
              <u>Update Task Status</u>
            </h5>
            {statusUpdatePanel}
          </div>
        );
      } else if (this.state.taskCancel) {
        output = (
          <div className="view-doc-list">
            <h5>
              <u>Cancel the Task</u>
            </h5>
            {taskCancelPanel}
          </div>
        );
      } else if (this.state.taskTransfer) {
        output = (
          <div className="view-doc-list">
            <h5>
              <u>Transfer the Task</u>
            </h5>
            {taskTransferPanel}
          </div>
        );
      }
    }

    return (
      <div>
        <div className="form-panel-publish">
          <div className="text-center">
            <h5>Update Active Tasks</h5>
            <div className="row">
              <div className="col-md-3">
                <div className="float-left">
                  <button
                    className="control-btn-consume"
                    onClick={() => {
                      this.gotoUpdateProcess("howToUpdate");
                    }}
                  >
                    How-to
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                </div>
              </div>
              <div className="col-md-3">&nbsp;</div>
              <div className="col-md-3">
                <div className="float-left">
                  <button
                    className="btn btn-target-consume"
                    onClick={() => {
                      this.gotoUpdateProcess("listTasks");
                    }}
                  >
                    ListTasks
                    <div className="float-right">
                      <i className="fas fa-chalkboard-teacher" />
                    </div>
                  </button>{" "}
                </div>
              </div>
              <div className="col-md-3">&nbsp;</div>
            </div>
            <div className="row">
              <div className="col">{howtoUpdateSteps}</div>
            </div>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Active;
