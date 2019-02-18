import React, { Component } from "react";
import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import { usageLogArtGallery } from "./data/usageLogArtGallery";
import { usageLogCbtl } from "./data/usageLogCbtl";

import "./assistance.css";

class Usage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToUsageLog: false,
      usageLogList: true,
      logComments: false,

      name: "",
      requestor: "",
      reqDate: "",
      whatFactor: "",
      whyFactor: "",
      howFactor: "",
      assistanceType: "",
      status: "",
      comments: [],

      assistLog: "",

      errors: []
    };
    this.onChange = this.onChange.bind(this);
    this.gotoUsageLogProcess = this.gotoUsageLogProcess.bind(this);
    this.handleLogProcessing = this.handleLogProcessing.bind(this);
    this.handleResponseSave = this.handleResponseSave.bind(this);
  }

  handleResponseSave() {
    alert("At this point, your log will be saved and inlligence mined. ");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogProcessing = (
    name,
    requestor,
    reqDate,
    whatFactor,
    whyFactor,
    howFactor,
    assistanceType,
    status,
    comments
  ) => {
    this.setState({
      name,
      requestor,
      reqDate,
      whatFactor,
      whyFactor,
      howFactor,
      assistanceType,
      status,
      comments,
      howToUsageLog: false,
      usageLogList: false,
      logComments: true
    });
  };

  gotoUsageLogProcess = value => {
    if (value === "howToUse") {
      this.setState({
        howToUsageLog: !this.state.howToUsageLog,
        usageLogList: false,
        logComments: false
      });
    } else if (value === "usageLogList") {
      this.setState({
        howToUsageLog: false,
        usageLogList: true,
        logComments: false
      });
    }
  };

  render() {
    const { errors } = this.state;
    //let option;
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let logSource;

    if (engagementType === "time-based") {
      logSource = usageLogCbtl;
    } else {
      logSource = usageLogArtGallery;
    }

    let howtoUsageSteps;
    if (this.state.howToUsageLog) {
      howtoUsageSteps = (
        <div>
          <div className="row">
            <div className="howto-handle-inspection">
              <font color="lightyellow">
                <p>
                  This is your assistance usage log that includes you as a
                  requestor and as provider.
                </p>
                <br />
                <p>
                  <i>
                    Note: At this point, the external help inclusion has to be
                    done separately. The other person or entity would need to be
                    included in the team for direct notification. An agreement
                    has to be done with the external entity before direct
                    notifications.
                  </i>
                </p>
                <br />
              </font>
            </div>
          </div>
        </div>
      );
    } else {
      howtoUsageSteps = null;
    }

    let usageListPanel;
    usageListPanel = (
      <div>
        {logSource.map(obj => {
          return (
            <div key={obj.id}>
              <div className="row">
                <div className="col">
                  <div className="display-list-lines">
                    <p>
                      <p>
                        Request: <b>{obj.name}</b>, requested by{" "}
                        <b>{obj.requestor}</b>, of type{" "}
                        <b>{obj.assistanceType}</b>, requested on {obj.reqDate}.
                      </p>
                      <p>
                        Status: <b>{obj.status}</b>
                      </p>
                      <u>Request:</u> &nbsp;{obj.whatFactor}
                      <br />
                      <u>Why Factor:</u> &nbsp;{obj.whyFactor} <br />
                      <u>How Factor:</u>&nbsp;{obj.howFactor} <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="float-right">
                    <button
                      className="doc-btn-log"
                      onClick={() => {
                        this.handleLogProcessing(
                          obj.name,
                          obj.requestor,
                          obj.reqDate,
                          obj.whatFactor,
                          obj.whyFactor,
                          obj.howFactor,
                          obj.assistanceType,
                          obj.status,
                          obj.comments
                        );
                      }}
                    >
                      View-Log Comments&nbsp;
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

    let logViewHeader;
    if (this.state.logComments) {
      logViewHeader = (
        <div>
          <div className="row">
            <div className="col">
              <div className="display-list-lines">
                <p>
                  Request: <b>{this.state.name}</b>, requested by{" "}
                  <b>{this.state.requestor}</b>, of type{" "}
                  <b>{this.state.assistanceType}</b> &nbsp;, requested on{" "}
                  {this.state.reqDate}
                </p>
                <u>Request:</u> &nbsp;{this.state.whatFactor}
                <br />
                <u>Why Factor:</u> &nbsp;{this.state.whyFactor} <br />
                <u>How Factor:</u>&nbsp;{this.state.howFactor} <br />
              </div>
            </div>
          </div>
          <div className="space-between-buttons" />
          <hr />
          {this.state.comments.map(ob => {
            return (
              <div key={ob.seq}>
                <div className="row">
                  <div className="col-1">&nbsp;</div>
                  <div className="col-11">
                    <div className="display-list-lines">
                      <p>
                        Response Type: {ob.responseType}; Replied/Commented on{" "}
                        {ob.respondDate}
                      </p>
                      {ob.comment} <br />
                      <u>Forwarded to:</u> {ob.forwardedTo}
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
      logViewHeader = null;
    }

    let logViewPanelForm;
    if (this.state.logComments) {
      logViewPanelForm = (
        <div>
          {logViewHeader}
          <div className="row">
            <div className="col">
              <div className="textarea-list-lines">
                <TextAreaFieldGroup
                  placeholder="Enter comments on the assistance process"
                  name="assistLog"
                  value={this.state.assistLog}
                  rows={4}
                  onChange={this.onChange}
                  error={errors.assistLog}
                  info="Enter log your point-of-view and other stuff you may want to remember."
                />
              </div>
            </div>
          </div>
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col-11">
              <div className="float-right">
                <button
                  className="btn-locate"
                  onClick={this.handleResponseSave}
                >
                  Save & Notify &nbsp;
                  <i className="fas fa-check" />
                </button>
              </div>
            </div>
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      );
    }

    let output;

    if (this.state.howToUsageLog) {
      output = howtoUsageSteps;
    } else if (this.state.usageLogList) {
      output = (
        <div className="view-doc-list">
          <h5>
            <u>List of Active Tasks</u>
          </h5>
          {usageListPanel}
        </div>
      );
    } else if (this.state.logComments) {
      output = (
        <div className="view-doc-list">
          <h5>
            <u>View and Log Comments</u>
          </h5>
          {logViewPanelForm}
        </div>
      );
    }

    return (
      <div>
        <div className="form-panel-publish">
          <div className="text-center">
            <h5>Assistance Usage Log</h5>
            <div className="row">
              <div className="col-md-3">
                <div className="float-left">
                  <button
                    className="control-btn-consume"
                    onClick={() => {
                      this.gotoUsageLogProcess("howToUse");
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
                    className="btn btn-howto-assist"
                    onClick={() => {
                      this.gotoUsageLogProcess("usageLogList");
                    }}
                  >
                    List Requests
                    <div className="float-right">
                      <i className="fas fa-chalkboard-teacher" />
                    </div>
                  </button>{" "}
                </div>
              </div>
              <div className="col-md-3">&nbsp;</div>
            </div>
            {/* <div className="row">
              <div className="col">{howtoRespondSteps}</div>
            </div> */}
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Usage;
