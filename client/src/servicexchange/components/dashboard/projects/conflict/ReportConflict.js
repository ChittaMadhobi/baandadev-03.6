import React, { Component } from "react";
import Select from "react-select";
// import Slider from "react-rangeslider";

import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import TextFieldGroup from "../../../../../utils/TextFieldGroup";

import { artGalleryMembers } from "./data/artGalleryMembers";
import { cbtlMembers } from "./data/cbtlMembers";
import { conflictDomains } from "./data/conflictDomains";

class ReportConflict extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoReport: false,
      conflictName: '',
      conflictDesc: "",
      conflictIncident: "",
      conflictNotifyTo: [],
      logOnly: false,
      conflictDomain: "",
      otherDomain: "",

      reportAgainst: [],
      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
    this.handleConflictLogOnly = this.handleConflictLogOnly.bind(this);
    this.handleNotifyTo = this.handleNotifyTo.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "Eventually -- When you click this, your work will be saved in database and right people notified (if so desired)."
    );
  }

  handleConflictLogOnly() {
    this.setState({
      logOnly: !this.state.logOnly
    });
  }

  handleNotifyTo = (conflictNotifyTo, { action }) => {
    this.setState({
      conflictNotifyTo
    });
  };

  handleConflictDomain = (conflictDomain, { action }) => {
    this.setState({
      conflictDomain
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangeTarget = (value, { action }) => {
    this.setState({
      reportAgainst: value
    });
  };

  gotoReportingProcess = value => {
    if (value === "reportingSteps") {
      this.setState({
        howtoReport: !this.state.howtoReport
      });
    }
  };

  render() {
    const { errors } = this.state;

    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let option;
    if (engagementType === "time-based") {
      option = cbtlMembers;
    } else {
      option = artGalleryMembers;
    }

    let reportBody;

    let reportTo;
    if (!this.state.logOnly) {
      reportTo = (
        <div className="row">
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.conflictNotifyTo}
                isMulti
                options={option}
                //className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleNotifyTo}
                maxMenuHeight={150}
                placeholder="Invite members for advice"
              />
            </font>
          </div>
          <div className="col-md-6">Select names you want to be involved</div>
        </div>
      );
    } else {
      reportTo = null;
    }

    let conflictDomainOther;

    if (this.state.conflictDomain.label === "Other") {
      conflictDomainOther = (
        <TextFieldGroup
          name="otherDomain"
          placeholder="One word conflict domain"
          value={this.state.otherDomain}
          onChange={this.onChange}
          //error={errors.newName}
          info="One word conflict domain if not in the list"
        />
      );
    } else {
      conflictDomainOther = null;
    }

    reportBody = (
      <div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              name="conflictName"
              placeholder="Enter a conflict name ..."
              value={this.state.conflictName}
              onChange={this.onChange}
              //error={errors.newName}
              info="Enter a conflict Name ..."
            />
          </div>
          <div className="col-md-6">
            Provide a conflict name for reference
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Describe your complaint"
              name="conflictDesc"
              value={this.state.conflictDesc}
              rows={4}
              onChange={this.onChange}
              error={errors.conflictDesc}
              info="Describe the conflict situation and why you think this is a serious conflict situation."
            />
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Describe the incident"
              name="conflictIncident"
              value={this.state.conflictIncident}
              rows={4}
              onChange={this.onChange}
              error={errors.conflictIncident}
              info="Describe the incident(s) leading to the reporting. Include date-time etc."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile02"
                />
                <label className="custom-file-label">Proof ... video ???</label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text" id="">
                  Upload
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p>
              <small>
                Upload any picture, files, video you may want to log.
              </small>
            </p>
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.conflictDomain}
                // isMulti
                options={conflictDomains}
                // className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleConflictDomain}
                maxMenuHeight={150}
                placeholder="Main conflict domain ..."
              />
            </font>
          </div>
          <div className="col-md-6">{conflictDomainOther}</div>
        </div>
        <div className="space-at-top" />
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
              checked={this.state.logOnly}
              onChange={this.handleConflictLogOnly}
            />{" "}
            <font color="lightblue">
              Check if you just want to log this time for future & not notify.
            </font>
          </label>
        </div>
        <div className="space-between-rows" />
        {reportTo}
        <div className="textspaceTop" />
        <div className="row">
          <div className="col">
            <div className="float-right">
              <button
                className="btn-check-deliverable"
                onClick={this.handleSaveClick}
              >
                Report-Log &nbsp;
                <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    let reportingStep;

    if (this.state.howtoReport) {
      reportingStep = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              There are two options of reporting conflict. One can just log in
              case of future reference in case the conflict continues OR one can
              report the conflict. Report could be directed to the target (for
              mutual discussion), include other peers and/or reach out to
              external councilor. :
              <ul>
                <li>Provide a conflict name for future references</li>
                <li>Describe the complaint.</li>
                <li>Describe incident(s) as an example for the conflict.</li>
                <li>Upload any picture, audio, video file ... </li>
                <li>Select the main conflict-domain</li>
                <li>Indicate if this is just log and/or to include others</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      reportingStep = null;
    }

    return (
      <div>
        <div className="form-panel-create-team">
          <div className="text-center">
            <h3>Report or Log Conflict</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="float-left">
                  <button
                    className="btn control-btn-review"
                    onClick={() => {
                      this.gotoReportingProcess("reportingSteps");
                    }}
                  >
                    How-to-steps
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                </div>
              </div>
              <div className="col-md-2">
                {" "}
                <div className="float-right"> Against:</div>{" "}
              </div>
              <div className="col-md-6">
                <div className="justify-content-md-left">
                  <font color="blue">
                    <Select
                      value={this.state.reportAgainst}
                      isMulti
                      autosize={false}
                      options={option}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={this.handleChangeTarget}
                      maxMenuHeight={150}
                      isSearchable={true}
                      placeholder="Select member"
                    />
                  </font>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col">{reportingStep}</div>
            </div>
            {reportBody}
          </div>
        </div>
      </div>
    );
  }
}

export default ReportConflict;
