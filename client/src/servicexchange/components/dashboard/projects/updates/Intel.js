import React, { Component } from "react";
import Select from "react-select";

import DatePicker from "react-datepicker";
import moment from "moment";

import { viewLogs } from "./data/viewLogs";
import { chartTypes } from "./data/chartTypes";

import ChartStacked from './ChartStacked';
import ChartDonutPi from './ChartDonutPi';

//import TextFieldGroup from "../../../../../utils/TextFieldGroup";

class Intel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoIntel: false,
      viewLocate: false,
      viewlog: false,
      comparitive: false,
      relative: false,
      viewDetails: false,
      viewChartSelect: false,

      thisDate: moment(),
      toDate: moment(),
      metaWords: "",
      filterDateComp: "",

      // For details ...
      taskName: "",
      taskCategory: "",
      parentTask: "",
      beginDate: "",
      endDate: "",
      assignTeam: "",
      assignMembers: "",
      description: "",
      deliverable: "",
      lastState: 0,
      request: "",
      status: "",
      lastUpdatedBy: "",
      comments: [],
      // Intel - charts
      chartTypeSelected: '',

      errors: []
    };
    this.onChange = this.onChange.bind(this);
    this.selectOperation = this.selectOperation.bind(this);
    this.handleThisDate = this.handleThisDate.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.gotoInspectReq = this.gotoInspectReq.bind(this);
    this.handleGoFind = this.handleGoFind.bind(this);
    this.prepToShowList = this.prepToShowList.bind(this);
    this.handleViewLogDetails = this.handleViewLogDetails.bind(this);
    this.handleChartContext = this.handleChartContext.bind(this);
  }

  handleChartContext = (value) => {
    this.setState({
      chartTypeSelected: value,
      viewChartSelect: false
    })
  }

  handleViewLogDetails = (
    // btnType,
    taskName,
    taskCategory,
    parentTask,
    beginDate,
    endDate,
    assignTeam,
    assignMembers,
    description,
    deliverable,
    lastState,
    request,
    status,
    lastUpdatedBy,
    comments
  ) => {
    this.setState({
      taskName,
      taskCategory,
      parentTask,
      beginDate,
      endDate,
      assignTeam,
      assignMembers,
      description,
      deliverable,
      lastState,
      request,
      status,
      lastUpdatedBy,
      comments,
      howtoIntel: false,
      viewLocate: false,
      viewlog: false,
      comparitive: false,
      relative: false,
      viewDetails: true,
      viewChartSelect: false
    });
  };

  handleGoFind() {
    alert(
      "Based on your search selection, it will fetch the results and list it for your interactions."
    );
    this.prepToShowList();
  }

  prepToShowList = () => {
    this.setState({
      howtoIntel: false,
      viewLocate: false,
      viewlog: true,
      comparitive: false,
      relative: false,
      viewDetails: false,
      viewChartSelect: false
    });
  };

  gotoInspectReq = value => {
    this.setState({
      filterDateComp: value
    });
  };

  handleThisDate(date) {
    this.setState({
      thisDate: date
    });
  }

  handleToDate(date) {
    this.setState({
      toDate: date
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  selectOperation = value => {
    if (value === "logs") {
      this.setState({
        howtoIntel: false,
        viewLocate: true,
        viewlog: false,
        comparitive: false,
        relative: false,
        viewDetails: false,
        viewChartSelect: false
      });
    } else if (value === "charts") {
      this.setState({
        howtoIntel: false,
        viewLocate: false,
        viewlog: false,
        comparitive: false,
        relative: false,
        viewDetails: false,
        viewChartSelect: true
      });
    }
  };

  render() {
    //const { errors } = this.state;
    let option;
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    //console.log("this.state:" + JSON.stringify(this.state));

    let toDatePanel;
    if (this.state.filterDateComp === "between") {
      toDatePanel = (
        <div>
          <div className="task_calendar_place">
            <div className="float-center">
              <DatePicker
                selected={this.state.toDate}
                onChange={this.handleToDate}
              />
            </div>
          </div>
        </div>
      );
    } else {
      toDatePanel = null;
    }

    let chartSelectPanel;
    if (this.state.viewChartSelect) {
      chartSelectPanel = (
        <div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-3"> &nbsp;</div>
            <div className="col-md-6">
              <div className="text-left-select">
                <font color="blue">
                  <Select
                    value={this.state.chartTypeSelected}
                    //isMulti
                    autosize={false}
                    options={chartTypes}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleChartContext}
                    maxMenuHeight={150}
                    isSearchable={true}
                    placeholder="Select a chart type for summary intel"
                  />
                </font>
              </div>
            </div>
            <div className="col-3"> &nbsp;</div>
          </div>
          <p>Select a chart-type for viewing summary intel </p>
          <hr />
          <p className="time-based-msg-intel">
            Note: These are sample summary-chart types that is configured now
            for this experience. Per user's request, various different types can
            be displayed based on endeavor types and the corresponding needs.
          </p>
        </div>
      );
    } else {
      chartSelectPanel = null;
    }

    let showLocate;
    if (this.state.viewLocate) {
      showLocate = (
        <div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-1"> &nbsp;</div>
            <div className="col-md-5 text-left-select">
              <font color="blue">
                <Select
                  value={this.state.pubProjectContext}
                  //isMulti
                  autosize={false}
                  options={option}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleProjContext}
                  maxMenuHeight={150}
                  isSearchable={true}
                  placeholder="Find by a task Category"
                />
              </font>
              <p>Find by a Project Component Context </p>
            </div>
            <div className="col-md-5 text-left-select">
              <font color="blue">
                <Select
                  value={this.state.domainName}
                  //isMulti
                  autosize={false}
                  options={option}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleDomainName}
                  maxMenuHeight={150}
                  isSearchable={true}
                  placeholder="Select Task Status"
                />
              </font>
              <p>Find by document domain ...</p>
            </div>
            <div className="col-1"> &nbsp;</div>
          </div>
          <div className="row">
            <div className="col">
              <font color="#3561a8">Date: </font>&nbsp;&nbsp;
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoInspectReq("before");
                    }}
                  />
                  Before
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoInspectReq("after");
                    }}
                  />
                  After
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoInspectReq("on");
                    }}
                  />
                  On
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoInspectReq("between");
                    }}
                  />
                  Between
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-1">&nbsp;</div>
            <div className="col-5">
              <div className="task_calendar_place">
                <div className="float-center">
                  <DatePicker
                    selected={this.state.thisDate}
                    onChange={this.handleThisDate}
                  />
                </div>
              </div>
            </div>
            <div className="col-5">{toDatePanel}</div>
            <div className="col-1">&nbsp;</div>
          </div>
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col">
              <div className="float-center">
                <button className="btn-locate" onClick={this.handleGoFind}>
                  Find & List &nbsp;
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      showLocate = null;
    }

    let viewLogPanel;
    if (this.state.viewlog) {
      viewLogPanel = (
        <div>
          {viewLogs.map(obj => {
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
                        assigned to <b>{obj.assignTeam}</b> &nbsp;
                        <b>{obj.assignMembers}</b> is {obj.lastState}% done
                        [Last pdated by <b>{obj.lastUpdatedBy}</b> ]
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="float-right">
                      <button
                        className="doc-btn"
                        onClick={() => {
                          this.handleViewLogDetails(
                            // "inspect",
                            obj.taskName,
                            obj.taskCategory,
                            obj.parentTask,
                            obj.beginDate,
                            obj.endDate,
                            obj.assignTeam,
                            obj.assignMembers,
                            obj.description,
                            obj.deliverable,
                            obj.lastState,
                            obj.request,
                            obj.status,
                            obj.lastUpdatedBy,
                            obj.comments
                          );
                        }}
                      >
                        Details&nbsp;
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
    } else {
      viewLogPanel = null;
    }

    let viewDetailPanel;
    if (this.state.viewDetails) {
      viewDetailPanel = (
        <div className="display-list-lines">
          <div className="row">
            <div className="col">
              <p>
                Task named <b>{this.state.taskName}</b> of category{" "}
                <b>{this.state.taskCategory}</b> and is a sub-task of{" "}
                <b>{this.state.parentTask}</b> to be done between{" "}
                <b>{this.state.beginDate}</b> and <b>{this.state.endDate}</b> is
                assigned to <b>{this.state.assignTeam}</b> &nbsp;
                <b>{this.state.assignMembers}</b> is {this.state.lastState}%
                done [Last pdated by <b>{this.state.lastUpdatedBy}</b> ]
              </p>
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
          <div className="row">
            <div className="col">
              <div className="display-list-lines">
                <u>Status</u>: <b>{this.state.status}</b>
              </div>
            </div>
          </div>
          <hr />
          <font color="#8e5925">
            <b>COMMENTS</b>
          </font>
          <div>
            {this.state.comments.map(ob => {
              return (
                <div key={ob.seq}>
                  <div className="row">
                    <div className="col-1">&nbsp;</div>
                    <div className="col-10">
                      <font color="#8e5925">
                        <p>
                          By: <b>{ob.by}</b>
                        </p>
                        <i>{ob.comment}</i>
                      </font>
                    </div>
                    <div className="col-1">&nbsp;</div>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
          <div className="space-at-top" />
        </div>
      );
    } else {
      viewDetailPanel = null;
    }

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
      if (this.state.viewLocate) {
        output = (
          <div className="view-doc-list">
            <h5>
              <u>Filter your log-viewing</u>
            </h5>
            {showLocate}
            <p className="time-based-msg-intel">
              <font color="brown" size="3">
                Note: The filters are inactive and indicative of how it will
                work when the system is hooked to database. Right now, it goes
                against data-file showing 'All' or 'no filter' scenario.
              </font>
            </p>
          </div>
        );
      } else if (this.state.viewlog) {
        output = (
          <div className="view-doc-list">
            <h5>
              <u>Task Log</u>
            </h5>
            <br />
            {viewLogPanel}
          </div>
        );
      } else if (this.state.viewDetails) {
        output = (
          <div className="view-doc-list">
            <h5>
              <u>Task Log Details</u>
            </h5>
            <br />
            {viewDetailPanel}
          </div>
        );
      } else if (this.state.viewChartSelect) {
        output = (
          <div className="view-doc-list">
            <h5>
              <u>Chart Type Select</u>
            </h5>
            <br />
            {chartSelectPanel}
          </div>
        );
      } else if (this.state.chartTypeSelected) {
        if (this.state.chartTypeSelected.label === 'Category to status (Stacked)'){
          output = (
            <div className="chart-panel">
              <ChartStacked /> 
            </div>
          );
        } 
        if (this.state.chartTypeSelected.label === 'Category Distribution (Donut Pi)'){
          output = (
            <div className="chart-panel">
              <ChartDonutPi /> 
            </div>
          );
        } 
      } 
      else {
        output = null;
      }
    }

    return (
      <div className="form-panel-create-team">
        <font color="lightblue">
          <h5>This Project Tasks Log & Intel</h5>
        </font>
        <div className="row">
          <div className="col-md-3">
            <div className="float-left">
              <button
                className="btn btn-save-ideation"
                onClick={() => {
                  this.selectOperation("howTo");
                }}
              >
                How-to-steps
                <div className="float-right">
                  <i className="fas fa-toggle-off" />
                </div>
              </button>{" "}
            </div>
          </div>
          <div className="col-md-9">
            <div className="text-center">
              <button
                className="btn btn-target-feedback"
                onClick={() => {
                  this.selectOperation("charts");
                }}
              >
                Charts
                <div className="float-right">
                  <i className="fas fa-chess-bishop" />
                </div>
              </button>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-target-feedback"
                onClick={() => {
                  this.selectOperation("logs");
                }}
              >
                View Log
                <div className="float-right">
                  <i className="fas fa-cogs" />
                </div>
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">{output}</div>
        </div>
      </div>
    );
  }
}

export default Intel;
