import React, { Component } from "react";
import TextFieldGroup from "../../../../../utils/TextFieldGroup";
import Select from "react-select";

import { iotContexts } from "./data/iotContexts";
import { opsTypes } from "./data/opsTypes";
import { availableServices } from "./data/availableServices";
import { artGalleryMembers } from "./data/artGalleryMembers";

class Associate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoSetup: false,
      iotOldsetupName: "",
      iotsetupname: "",
      iotContext: "",
      iotOpsType: "",
      availableIoTServices: "",
      availableTo: [],

      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.gotoIotProcess = this.gotoIotProcess.bind(this);
    this.handleResolveName = this.handleResolveName.bind(this);
    this.handleAvailableService = this.handleAvailableService.bind(this);
    this.handleiotContext = this.handleiotContext.bind(this);
    this.handleiotOpsType = this.handleiotOpsType.bind(this);
    this.handleAvailableTo = this.handleAvailableTo.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "This is a UX or usability experience. When you clicked 'Save & notify' it will save, make association in the server, and notify included members of the available IoT service."
    );
  }

  handleAvailableTo = (value, { action }) => {
    this.setState({
      availableTo: value
    });
  };

  handleAvailableService = (value, { action }) => {
    this.setState({
      availableIoTServices: value
    });
  };

  handleResolveName = (value, { action }) => {
    this.setState({
      iotOldsetupName: value
    });
  };

  handleiotContext = (value, { action }) => {
    this.setState({
      iotContext: value
    });
  };

  handleiotOpsType = (value, { action }) => {
    this.setState({
      iotOpsType: value
    });
  };

  gotoIotProcess = value => {
    if (value === "howtoSetup") {
      this.setState({
        howtoSetup: !this.state.howtoSetup
      });
    }
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let option;

    // if (engagementType !== 'time-based') {
    //   option =
    // }

    let setupSteps;
    if (this.state.howtoSetup) {
      setupSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              There are three main steps to associating a project-interest to
              IoT (device or hub). They are:
              <ul>
                <li>
                  Step 1 :: is to have an aspect-of-interest (e.g. workplace,
                  vehicle, home, items etc.) have attached IoT devices. These
                  IoT devices are available/connected to the internet.
                  {"Internet of Things "}
                </li>
                <li>
                  Step 2 :: is the have #1's IoT devices to be available in the
                  cloud-service somewhere (e.t. AWS IoT, Azure, Google, IBM, and
                  many other including micro-IoT Server like via Raspberry Pi
                  enabled) available as an API.
                </li>
                <p>
                  <font color="lightblue" size="3">
                    <i>
                      An addendum of step 2 would be to setup association with a
                      Rule-Engine to enable IFTTT (If this then that) scenario
                      to enable robotized-smarts to the project-interest. This
                      can be done in most available cloud-platforms (mentioned
                      above) or create your own in local hub (e.g. via Raspberry
                      Pi using (say) node.js server and/or with other options
                      depending on performance and other needs).{" "}
                    </i>
                  </font>
                </p>
                <li>
                  Step 3 :: Once #1 and #2 are done and if those robotized POI
                  (point of interest) have any relevance (authorized and
                  available as services) to the project then
                  project-team/manager should make association between POI and
                  the project via this panel.
                </li>
              </ul>
              <p>
                <b>SETUP ASSOCIATION</b>
              </p>
              <ul>
                <li>
                  Provide a name for the IoT association that would be used
                  elsewhere as reference.
                </li>
                <li>
                  Select a context that the 'project' would use this association
                  for from the drop down.
                </li>
                <li>
                  Select what this association would be used for (e.g. monitor,
                  interact, track ... etc.) from the drop down.
                </li>
                <li>
                  Select from an option of available IoT services that are ready
                  to be associated by the project.
                </li>
              </ul>
              <p>
                NOTE: Enabling of IoT based project management is very new. The
                assumption is that the project target is IoT (sensor - actuator)
                enabled to make the point-of-interest smart. That is, the
                project team / manager can now maneuver the project,
                get-intelligence, remote-control real time enabling distribuetd
                cooperation. This data could also emulate artificial
                intelligence to make project management much more efficient than
                legacy manual processes. All these steps are outside of this
                Baanda UX display.
              </p>
              <p>
                Baanda would have separate consulting wing to enable IoT
                environment setup, in conjunction with IoT oriented partnership
                with contextual manufacturers and other related organizations
                around the world. This is most relevant to global cooperation
                based endeavors of future.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      setupSteps = null;
    }

    let iotSetupBody;

    if (engagementType !== "time-based") {
      iotSetupBody = (
        <div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="iotsetupname"
                placeholder="Enter a IoT name to associate with ..."
                value={this.state.iotsetupname}
                onChange={this.onChange}
                error={errors.iotsetupname}
                info="Enter a IoT name to associate with ..."
              />
            </div>
            <div className="col-md-6">
              <div className="justify-content-md-left">
                <font color="blue">
                  <Select
                    value={this.state.iotOldsetupName}
                    //isMulti
                    autosize={false}
                    options={option}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleResolveName}
                    maxMenuHeight={150}
                    isSearchable={true}
                    placeholder="Select reference IoT names to edit"
                  />
                </font>
              </div>
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-6">
              <div className="justify-content-md-left">
                <font color="blue">
                  <Select
                    value={this.state.iotContext}
                    //isMulti
                    autosize={false}
                    options={iotContexts}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleiotContext}
                    maxMenuHeight={150}
                    isSearchable={true}
                    placeholder="Select IoT Context for the project"
                  />
                </font>
                <p>Select context type for the IoT association</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="justify-content-md-left">
                <font color="blue">
                  <Select
                    value={this.state.iotopstype}
                    //isMulti
                    autosize={false}
                    options={opsTypes}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleiotOpsType}
                    maxMenuHeight={150}
                    isSearchable={true}
                    placeholder="Select ops-type"
                  />
                </font>
                <p>Select operations type ... </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="justify-content-md-left">
                <font color="blue">
                  <Select
                    value={this.state.availableIoTServices}
                    //isMulti
                    autosize={false}
                    options={availableServices}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleAvailableService}
                    maxMenuHeight={150}
                    isSearchable={true}
                    placeholder="Select available IoT to be associated with the project."
                  />
                </font>
                <p>
                  Select available IoT (requested and configured) to be
                  associated with the project.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="justify-content-md-left">
                <font color="blue">
                  <Select
                    value={this.state.availableTo}
                    isMulti
                    autosize={false}
                    options={artGalleryMembers}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleAvailableTo}
                    maxMenuHeight={100}
                    isSearchable={true}
                    placeholder="Enable people who can access."
                  />
                </font>
                <p>Include team-members who can access this </p>
              </div>
            </div>
            <div className="col-md-6">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col">
              <div className="float-right">
                <button
                  className="btn-check-ideation"
                  onClick={this.handleSaveClick}
                >
                  Save & Notify &nbsp;
                  <div className="float-right">
                    <i className="fa fa-check" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      iotSetupBody = null;
    }

    let output;
    if (engagementType === "time-based") {
      output = (
        <div>
          <font color="orange" size="3">
            You are not authorized to associate IoT for the CBTL engagement.{" "}
          </font>
        </div>
      );
    } else {
      output = iotSetupBody;
    }

    return (
      <div>
        <div className="form-panel-conflict">
          <div className="text-center">
            <h4>Associate IoT to the Project</h4>
            <font color="green">
              <div className="row">
                <div className="col-md-4">
                  <div className="float-left">
                    <button
                      className="btn btn-save-ideation"
                      onClick={() => {
                        this.gotoIotProcess("howtoSetup");
                      }}
                    >
                      How-to-steps
                      <div className="float-right">
                        <i className="fas fa-toggle-off" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
                <div className="col-md-8">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col">{setupSteps}</div>
              </div>
            </font>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Associate;
