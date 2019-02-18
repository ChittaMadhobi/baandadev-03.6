import React, { Component } from "react";
import Select from "react-select";
import TextFieldGroup from "../../../../../../../src/utils/TextFieldGroup";
import TextAreaFieldGroup from "../../../../../../../src/utils/TextAreaFieldGroup";

import "../project.css";
import { discoveringForIdeas } from "../data/discoveryIdeas";
import { discoveryDomains } from "../data/discoveryDomamin";

class Dicovery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToDiscover: false,
      showDiscoverLogs: false,

      selecteIdeadName: "",
      selecteDomain: "",
      otherDomainName: "",
      discovery: "",

      errors: []
    };

    this.gotoDiscoveryProcess = this.gotoDiscoveryProcess.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSelectedIdea = this.handleSelectedIdea.bind(this);
    this.handleSelectedDomain = this.handleSelectedDomain.bind(this);
    this.handleViewLogs = this.handleViewLogs.bind(this);
    // this.handleCloseViewLogs = this.handleCloseViewLogs.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "Eventually -- When you click this, your work will be saved in database and right people notified. In future ideation session, this could be referenced for discussions and evolution."
    );
  }

  handleViewLogs = () => {
    this.setState({
      showDiscoverLogs: true
    });
  };

  handleCloseViewLogs = () => {
    this.setState({
      showDiscoverLogs: false
    });
  };

  handleSelectedDomain = (domainName, { action }) => {
    //console.log("Ideation handleNewIdea: " + JSON.stringify(ideaName) + ' ' + ideaName.label);
    this.setState({
      selecteDomain: domainName
    });
  };

  handleSelectedIdea = (ideaName, { action }) => {
    //console.log("Ideation handleNewIdea: " + JSON.stringify(ideaName) + ' ' + ideaName.label);
    this.setState({
      selecteIdeadName: ideaName
    });
  };

  onChange(e) {
    //console.log([e.target.name] + ' ' + e.target.value );
    this.setState({ [e.target.name]: e.target.value });
  }

  gotoDiscoveryProcess = value => {
    if (value === "discoverySteps") {
      this.setState({
        howToDiscover: !this.state.howToDiscover
      });
    }
  };

  render() {
    const { errors } = this.state;
    let discoveryProcess;

    if (this.state.howToDiscover) {
      discoveryProcess = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              Discovery process goes hand-in-hand with Ideation process for a
              project. Discovery process is thus associated with an Ideation
              name.:
              <br />
              <ul>
                <li>Select an ideation name from the drop down.</li>
                <li>
                  Select a discovery domain you would like to log about. If you
                  select 'other' then please state a distinct hyphenated
                  domain-name.
                </li>
                <li>
                  Enter discovery question, R&D you have performed. Include all
                  kinds of information, including reference to documents, URL
                  etc. If you want to attach a document, return to Ideation and
                  upload a document, picture, and so on.
                </li>
              </ul>
              Discovery panel is to assist the team in sysematic discovery
              around solidiying an idea leading to a project. Theis would assist
              the team in forming a well informed Baseline traits of the project
              to enable cost-time-risk budgeting.
            </div>
          </div>
        </div>
      );
    } else {
      discoveryProcess = null;
    }

    let discoveryHeader = (
      <div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.selecteIdeadName}
                options={discoveringForIdeas}
                classNamePrefix="select"
                onChange={this.handleSelectedIdea}
                maxMenuHeight={150}
                placeholder="Select idea for discovery"
              />
              />
            </font>
          </div>
          <div className="space-between-rows" />
          <div className="col-md-6">
            <font color="#f2d9b8">
              Select an idea to do your discovery logging
            </font>
          </div>
        </div>
      </div>
    );

    let discoveryBody;

    let discoveryLogs = (
      <div>
        <div className="view-log">
          <div className="space-outside-buttons" />
          <div className="row">
            <div className="col">
              You would be seeing all the information, chronologically reveresed
              order (last in first, with all the log entries.)
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="float-right" />
              <button
                className="btn-close-check-ideation"
                onClick={this.handleCloseViewLogs}
              >
                Close View &nbsp;
                <div className="float-right">
                  <i className="far fa-window-close" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    discoveryBody = (
      <div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.selecteDomain}
                options={discoveryDomains}
                classNamePrefix="select"
                onChange={this.handleSelectedDomain}
                maxMenuHeight={150}
                placeholder="Select domain for discovery"
              />
              />
            </font>
          </div>
          <div className="space-between-rows" />
          <div className="col-md-6">
            <TextFieldGroup
              name="otherDomainName"
              placeholder="If Other ... Enter a new domain"
              value={this.state.otherDomainName}
              onChange={this.onChange}
              //error={errors.newName}
              info="Enter the new domain for other ..."
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Enter your discoveries for the domain and idea"
              name="discovery"
              value={this.state.discovery}
              onChange={this.onChange}
              error={errors.discovery}
              rows={4}
              info="Enter your discovery notes and references."
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <div className="float-right">
              <button
                className="btn-check-ideation"
                onClick={this.handleViewLogs}
              >
                View Logs&nbsp;
                <div className="float-right">
                  <i className="fa fa-check" />
                </div>
              </button>
              <button
                className="btn-save-ideation"
                onClick={this.handleSaveClick}
              >
                Save & Notify&nbsp;
                <div className="float-right">
                  <i className="far fa-save" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="space-between-rows" />
      </div>
    );

    let output;

    if (this.state.showDiscoverLogs) {
      output = discoveryLogs;
    } else {
      output = discoveryBody;
    }

    const engagementType = this.props.propsForward.thisProject.msg
      .engagementType;

    let createDiscoveryBody;
    if (engagementType === "time-based") {
      createDiscoveryBody = (
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
    } else
      createDiscoveryBody = (
        <div className="form-panel-ideation">
          <div className="text-center">
            <h3>Discovery for an Idea</h3>
            <font color="green">
              <div className="row">
                <div className="float-left">
                  <button
                    className="btn control-btn-review"
                    onClick={() => {
                      this.gotoDiscoveryProcess("discoverySteps");
                    }}
                  >
                    Discvory Process
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                  &nbsp;{" "}
                  <font color="white">
                    Click to review Discovery-for-an-Idea steps.
                  </font>
                </div>
              </div>
              <div className="row">
                <div className="col">{discoveryProcess}</div>
              </div>
            </font>
            {discoveryHeader}
            {output}
          </div>
        </div>
      );

    return (
      <div>
        {/* <div className="form-panel-ideation">
          <div className="text-center">
            <h3>Discovery for an Idea</h3>
            <font color="green">
              <div className="row">
                <div className="float-left">
                  <button
                    className="btn control-btn-review"
                    onClick={() => {
                      this.gotoDiscoveryProcess("discoverySteps");
                    }}
                  >
                    Discvory Process 
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                  &nbsp;{" "}
                  <font color="white">
                    Click to review Discovery-for-an-Idea steps.
                  </font>
                </div>
              </div>
              <div className="row">
                <div className="col">{discoveryProcess}</div>
              </div>
            </font>
            {discoveryHeader}
            {output}
          </div>
        </div> */}
        {createDiscoveryBody}
      </div>
    );
  }
}

export default Dicovery;
