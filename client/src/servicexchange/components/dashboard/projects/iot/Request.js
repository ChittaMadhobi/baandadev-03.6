import React, { Component } from "react";
import TextFieldGroup from "../../../../../utils/TextFieldGroup";
import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import Select from "react-select";
// Data
import { iotContexts } from "./data/iotContexts";
import { opsTypes } from "./data/opsTypes";
import { requestTargets } from "./data/requestTargets";

import './iot.css';

// Should be moved to S3 URL ... for now local
import HowToPic from "./img/IoTRequest.png";



const requestDesc =
  "(Example) We are requesting to place proximity sensors behind the artwork area that would advise audience not to come any closer towards the art-object (instead of rope-based barrier). The common EF (electric field) based IoT devices, that are used by ordinary robots to sense nearby entities, may be used. The sensor would generally act as barrier-advisor but would also trigger (activate) a small-tipped digital camera that would take facial photograph of the observer. The picture would sense repeat-observer, sentiment and emotional inclination that would enable art-gallery team to assess authenticity of a purchase-bid.";

class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoSetup: false,
      requestName: "",
      iotCaption: "",
      description: "",
      iotContext: "",
      iotopstype: "",
      requestTo: [],
      filenames: [],
      file1: "",

      errors: []
    };

    this.gotoIotProcess = this.gotoIotProcess.bind(this);
    this.onChange = this.onChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleiotContext = this.handleiotContext.bind(this);
    this.handleiotOpsType = this.handleiotOpsType.bind(this);
    this.handleReqTargets = this.handleReqTargets.bind(this);
  }

  componentWillMount() {
    this.setState({
      requestName: "ExampleRequestName",
      description: requestDesc,
      iotContext: {
        value: "2001",
        label: "Security (motion sensors, camera etc.)"
      },
      iotopstype: {
        value: "2002",
        label: "Receive Information Feed"
      },
      iotCaption: "Proximity sensor security barrier with emotion detection"
    });
  }
  handleReqTargets = (value, { action }) => {
    this.setState({
      requestTo: value
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

  uploadFile = e => {
    // var file = _("file1").files[0];
    // console.log('name:' + file.name + ' size:' + file.size + ' type:'+ file.type);
    console.log("Entered in the file upload :" + e.target.value);
    this.setState({
      file1: e.target.value
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
    //let option;

    let requestBody;

    requestBody = (
      <div className="form-panel-iot">
        <div className="row">
          <div className="col-md-4 text-left-pad">
            <TextFieldGroup
              name="requestName"
              style={{ color: "#408fef" }}
              placeholder="Enter a request reference name"
              value={this.state.requestName}
              onChange={this.onChange}
              error={errors.requestName}
              info="Enter a reference request name"
            />
          </div>
          <div className="col-md-8">
            <TextFieldGroup
              name="iotCaption"
              style={{ color: "#408fef" }}
              placeholder="Enter a caption for the request iot service"
              value={this.state.iotCaption}
              onChange={this.onChange}
              error={errors.iotCaption}
              info="Enter a caption for Association-dropdown of iot service (max 50 chars)"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="justify-content-md-left text-left-select">
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
            <div className="justify-content-md-left text-left-select">
              <font color="blue">
                <Select
                  value={this.state.requestTo}
                  isMulti
                  autosize={false}
                  options={requestTargets}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleReqTargets}
                  maxMenuHeight={150}
                  isSearchable={true}
                  placeholder="Select name request to be sent to."
                />
              </font>
              <p>Select target names for the request</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-left-pad">
            <TextAreaFieldGroup
              style={{ color: "#408fef" }}
              placeholder="Describe the IoT setup request."
              name="description"
              value={this.state.description}
              rows={4}
              onChange={this.onChange}
              error={errors.description}
              info="Please enter a backend IoT setup request with as much elaboration as possible."
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
                  id="file1"
                  name="file1"
                  onChange={this.uploadFile}
                />
                <label className="custom-file-label">
                  Additional documents ...
                </label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text">Upload</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="float-center">
              <button
                className="btn-save-notify"
                onClick={this.handleSaveClickNotify}
              >
                Save & Notify &nbsp;
                <div className="float-right">
                  <i className="fa fa-check" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <p className="upload-msg">
          Upload any reference document (digital assets) to elaborate the
          request.
        </p>
      </div>
    );

    let setupSteps;
    if (this.state.howtoSetup) {
      setupSteps = (
        <div className="how-to-request-iot">
          <img src={HowToPic} alt="..." />
          <p>The request process involves: </p>
          <ul>
            <li>
              Determine what is that your team needs for the project from IoT POV
            </li>
            <li>
              Identify, what kinds of data you would require. For e.g. you may need air-quality on carbon oxides, require motion sensor, want to see your inventory is there in the place, track movement of your goods and so on.
            </li>
            <li>
              Make a request stating that; attach additional documents if you happen to have as design and/or pictures you have seen etc.
            </li>
            <li>
              Let engineers setup the backend and report to you that it is done and ready for consumption. 
            </li>
          </ul>
        </div>
      );
    } else {
      setupSteps = null;
    }

    let output;
    if (engagementType === "time-based") {
      output = (
        <div>
          <font color="orange" size="3">
            At CBTL, you are not authorized to manage projects and/or request
            IoT backend setup
          </font>
        </div>
      );
    } else {
      if (this.state.howtoSetup) {
        output = null;
      } else {
        output = requestBody;
      }
    }

    return (
      <div>
        <div className="form-panel-iot">
        <div className="text-center">
          <font color="lightblue">
            <h5>Request for IoT Backend Setup</h5>
          </font>
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

export default Request;
