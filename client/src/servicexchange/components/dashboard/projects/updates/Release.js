import React, { Component } from "react";
import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import Select from "react-select";

import { tobeReleased } from "./data/tobeReleased";
import { inspectionTargets } from "./data/inspectionTargets";
import { payReleaseTargets } from './data/payReleaseTarget';

class Release extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToRelease: false,
      taskList: true,
      inspection: false,
      payRelease: false,

      btnType: "",
      taskName: "",
      taskCategory: "",
      parentTask: "",
      beginDate: "",
      endDate: "",
      description: "",
      deliverable: "",
      lastState: 0,
      request: "",
      statusPerDone: 0,

      inspectionComment: "",
      payreleaseComment: '',
      requestInspectRelease: '',
      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.gotoReleaseOps = this.gotoReleaseOps.bind(this);
    this.handleReleaseProcessing = this.handleReleaseProcessing.bind(this);
    this.gotoInspectReq = this.gotoInspectReq.bind(this);
    this.handleInspectionSave = this.handleInspectionSave.bind(this);
    this.handlePayReleaseSave = this.handlePayReleaseSave.bind(this);
  }

  handlePayReleaseSave() {
    alert(
      "At this point, pay-release notification would be sent to finance targets. It will also consider this fund 'Burned' from your budget and shown in project status appropriately."
    );
  }

  handleInspectionSave() {
    alert(
      "At this point, your judgment would be saved and right parties (you have selected) would be notified. If your inspection was cleared, your task would be lisetd for payment release. "
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  gotoInspectReq = value => {
    //console.log('value:' + value);
    this.setState({
      requestInspectRelease: value
    });
  };

  handleReleaseProcessing = (
    btnType,
    taskName,
    taskCategory,
    parentTask,
    beginDate,
    endDate,
    description,
    deliverable,
    lastState,
    request
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
      request,
      statusPerDone: lastState
    });
    if (btnType === "inspect") {
      this.setState({
        howToRelease: false,
        taskList: false,
        inspection: true,
        payRelease: false
      });
    } else if (btnType === "payrelease") {
      this.setState({
        howToRelease: false,
        taskList: false,
        inspection: false,
        payRelease: true
      });
    }
  };

  gotoReleaseOps = value => {
    if (value === "howToRelease") {
      this.setState({
        howToRelease: !this.state.howToRelease,
        taskList: false,
        inspection: false,
        payRelease: false
      });
    } else if (value === "listTasks") {
      this.setState({
        howToUpdate: false,
        taskList: true,
        inspection: false,
        payRelease: false
      });
    }
  };
  render() {
    const { errors } = this.state;
    let option;
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;

    if (this.state.inspection) {
      option = inspectionTargets;
    } else {
      option = payReleaseTargets;
    }

    let targetSelect;
    targetSelect = (
      <div>
        <font color="blue">
          <Select
            value={this.state.opsTargets}
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

    let howtoReleaseSteps;
    if (this.state.howToRelease) {
      howtoReleaseSteps = (
        <div>
          <div className="row">
            <div className="howto-handle-inspection">
              <font color="lightyellow">
                <p>
                  The inspection and pay-release of tasks lists you all the tasks on your
                  plate that has one of the two requests; Inspect or Pay-release. If you inspect and clear it, the task would be ready for pay release.  </p>
                  <p>The difference between Reject Payment and Hold-Payment is the hold is temporary and will be resolved. Mostly, it is financial technicalities. Reject-payment is based on the initial agreement (it may be a part of a bigger task and will be paid on totla completion or ... other criteria). In either way, the reason must be clearly stated so the requestor knows that. </p>
                  <br />
                  <br />
                  <b>
                    <p>
                      NOTE: In future, you would be able to filter by either of the two kinds of requests. Further, for large projects, you would be able to filter via category and other factors.
                    </p>
                  </b>
               
              </font>
            </div>
          </div>
        </div>
      );
    } else {
      howtoReleaseSteps = null;
    }

    // Loop through to list all the active tasks
    let activeTasksList;

    activeTasksList = (
      <div>
        {tobeReleased.map(obj => {
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
                    {obj.request === "inspect" ? (
                      <button
                        className="doc-btn"
                        onClick={() => {
                          this.handleReleaseProcessing(
                            "inspect",
                            obj.taskName,
                            obj.taskCategory,
                            obj.parentTask,
                            obj.beginDate,
                            obj.endDate,
                            obj.description,
                            obj.deliverable,
                            obj.lastState,
                            obj.request
                          );
                        }}
                      >
                        Inspect&nbsp;
                        <div className="float-right">
                          <i className="fa fa-check" />
                        </div>
                      </button>
                    ) : (
                      <button
                        className="doc-btn"
                        onClick={() => {
                          this.handleReleaseProcessing(
                            "payrelease",
                            obj.taskName,
                            obj.taskCategory,
                            obj.parentTask,
                            obj.beginDate,
                            obj.endDate,
                            obj.description,
                            obj.deliverable,
                            obj.lastState,
                            obj.request
                          );
                        }}
                      >
                        Pay-Release&nbsp;
                        <div className="float-right">
                          <i className="fa fa-check" />
                        </div>
                      </button>
                    )}
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
    if (this.state.inspection || this.state.payRelease) {
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
                <p>
                  Request <b>{this.state.request}</b>
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

    let inspectionPanel;
    inspectionPanel = (
      <div>
        {taskOpsHeader}
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col">
            <font color="#3561a8">Inspection Outsome: </font>&nbsp;&nbsp;
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
                Cleared
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
                Reject
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
                Forward
              </label>
            </div>
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col">
            <div className="textarea-list-lines">
              <TextAreaFieldGroup
                placeholder="Enter your inspection comments"
                name="inspectionComment"
                value={this.state.inspectionComment}
                rows={4}
                onChange={this.onChange}
                error={errors.inspectionComment}
                info="Enter your inspection comments, corrections, recommendations ... "
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">{targetSelect}</div>
          <div className="col-6">
            <div className="float-right">
              <button
                className="btn-locate"
                onClick={this.handleInspectionSave}
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
    
    let payReleasePanel;
    payReleasePanel = (
      <div>
        {taskOpsHeader}
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col">
            <font color="#3561a8">Pay Release Judgement: </font>&nbsp;&nbsp;
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
                Cleared
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
                Reject
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
                Hold-pay
              </label>
            </div>
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col">
            <div className="textarea-list-lines">
              <TextAreaFieldGroup
                placeholder="Enter your pay-release related comments"
                name="payreleaseComment"
                value={this.state.payreleaseComment}
                rows={4}
                onChange={this.onChange}
                error={errors.payreleaseComment}
                info="Enter comments related to your pay-release judgement ... "
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">{targetSelect}</div>
          <div className="col-6">
            <div className="float-right">
              <button
                className="btn-locate"
                onClick={this.handlePayReleaseSave}
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
    
    
    let output;

    if (engagementType === "time-based") {
      output = (
        <div>
          <div className="space-outside-buttons" />
          <p className="time-based-msg">
            <font color="orange">
              You have not been allocated with any projectized tasks with
              deliverables or received any inspection requests. Your allocation
              is time-based set of services as barista.
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
              <u>List of Tasks for Inspection or Release</u>
            </h5>
            <br />
            {activeTasksList}
          </div>
        );
      } else if (this.state.inspection) {
        output = (
          <div className="view-doc-list">
            <h5>
              <u>Inspect</u>
            </h5>
            <br />
            {inspectionPanel}
          </div>
        );
      } else if (this.state.payRelease) {
        output = (
          <div className="view-doc-list">
            <h5>
              <u>Payment Release</u>
            </h5>
            <br />
            {payReleasePanel}
          </div>
        );
      }
    }

    return (
      <div>
        <div className="form-panel-publish">
          <div className="text-center">
            <h5>Release Active Tasks</h5>
            <div className="row">
              <div className="col-md-3">
                <div className="float-left">
                  <button
                    className="control-btn-consume"
                    onClick={() => {
                      this.gotoReleaseOps("howToRelease");
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
                      this.gotoReleaseOps("listTasks");
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
              <div className="col">{howtoReleaseSteps}</div>
            </div>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Release;
