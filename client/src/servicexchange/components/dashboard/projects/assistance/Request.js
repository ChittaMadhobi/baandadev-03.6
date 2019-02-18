import React, { Component } from "react";
import Select from "react-select";
// import Slider from "react-rangeslider";

import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import TextFieldGroup from "../../../../../utils/TextFieldGroup";

import { artGalleryTargets } from "./data/artGalleryTargets";
import { cbtlTargets } from "./data/cbtlTargets";
import { assistanceType } from "./data/assistanceType";

import "./assistance.css";

class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoRequest: false,
      requestTarget: [],
      requestName: "",
      whatFactorDesc: "",
      whyFactorDesc: "",
      howFactorDesc: "",
      assistanceType: "",

      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.gotoRequestingProcess = this.gotoRequestingProcess.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
    this.gotoFundReq = this.gotoFundReq.bind(this);
    this.handleRequestSave = this.handleRequestSave.bind(this);
    this.handleAssiatanceType = this.handleAssiatanceType.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
  }

  handleChangeTarget = value => {
    this.setState({
      requestTarget: value
    });
  };

  handleAssiatanceType = value => {
    this.setState({
      assistanceType: value
    });
  };
  handleRequestSave() {
    alert(
      "At this point, in production, the request will be sent to the target(s). Target will also see it when they click the Assistance's Respond button"
    );
  }

  gotoFundReq = value => {
    //console.log('value:' + value);
    this.setState({
      requestInspectRelease: value
    });
  };

  handleChangeTarget = (value, { action }) => {
    this.setState({
      requestTarget: value
    });
  };

  gotoRequestingProcess = value => {
    this.setState({
      howtoRequest: !this.state.howtoRequest
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let option;

    if (engagementType === "time-based") {
      option = cbtlTargets;
    } else {
      option = artGalleryTargets;
    }
    let requestingSteps;

    if (this.state.howtoRequest) {
      requestingSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              <p>
                Requesting for assistance needs to be done via specifying a name
                (For reference) and target audience.
              </p>
              <p>
                Include what-factor, why-factor and how factor (include how you
                want to be assisted and if you want to fund the assistance in
                points or other ways.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      requestingSteps = null;
    }

    let requestPanel;
    requestPanel = (
      <div>
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col-6 text-inputarea-md6">
            <TextFieldGroup
              name="requestName"
              placeholder="One word conflict domain"
              value={this.state.requestName}
              onChange={this.onChange}
              //error={errors.newName}
              info="One word conflict domain if not in the list"
            />
          </div>
          <div className="col-6">
            <div className="justify-content-md-left">
              <font color="blue">
                <Select
                  value={this.state.requestTarget}
                  isMulti
                  autosize={false}
                  options={option}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleChangeTarget}
                  maxMenuHeight={150}
                  isSearchable={true}
                  placeholder="Select target of request"
                />
              </font>
            </div>
          </div>
        </div>
        {/* <div className="space-between-buttons" /> */}
        <div className="row">
          <div className="col text-inputarea-md12">
            <TextAreaFieldGroup
              placeholder="Describe the what-factor fo your request"
              name="whatFactorDesc"
              value={this.state.whatFactorDesc}
              rows={3}
              onChange={this.onChange}
              error={errors.whatFactorDesc}
              info="Describe the what factor of the request. Include URL if required for elaboration."
            />
          </div>
        </div>
        {/* <div className="space-between-buttons" /> */}
        <div className="row">
          <div className="col text-inputarea-md12">
            <TextAreaFieldGroup
              placeholder="Describe the why-factor fo your request"
              name="whyFactorDesc"
              value={this.state.whyFactorDesc}
              rows={3}
              onChange={this.onChange}
              error={errors.whyFactorDesc}
              info="Describe the why factor of the request. Say how it effects the engagement positively."
            />
          </div>
        </div>
        {/* <div className="space-between-buttons" /> */}
        <div className="row">
          <div className="col text-inputarea-md12">
            <TextAreaFieldGroup
              placeholder="Describe the how-factor fo your request for assistance."
              name="howFactorDesc"
              value={this.state.howFactorDesc}
              rows={3}
              onChange={this.onChange}
              error={errors.howFactorDesc}
              info="Describe the how-factor. Describe approaches and your fund share in points, $, from future etc."
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <font color="#e5c09c">Participate in expense: </font>&nbsp;&nbsp;
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  onClick={() => {
                    this.gotoFundReq("yes");
                  }}
                />
                Yes
              </label>
            </div>
            &nbsp;&nbsp;
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  onClick={() => {
                    this.gotoFundReq("no");
                  }}
                />
                No
              </label>
            </div>
            &nbsp;&nbsp;
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  onClick={() => {
                    this.gotoFundReq("part");
                  }}
                />
                Partial
              </label>
            </div>
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col-6">
            <div className="justify-content-md-right">
              <font color="blue">
                <Select
                  value={this.state.assistanceType}
                  //isMulti
                  autosize={false}
                  options={assistanceType}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleAssiatanceType}
                  maxMenuHeight={150}
                  isSearchable={true}
                  placeholder="Select target of request"
                />
              </font>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="float-right">
              <button className="btn-locate" onClick={this.handleRequestSave}>
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

    let output = requestPanel;

    return (
      <div>
        <div className="form-panel-create-team">
          <div className="text-center">
            <h5>Request Assistance</h5>
            <div className="row">
              <div className="col-md-4">
                <div className="float-left">
                  <button
                    className="btn btn-howto-assist"
                    onClick={() => {
                      this.gotoRequestingProcess("reportingSteps");
                    }}
                  >
                    How-to-steps
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                </div>
              </div>
              {/* <div className="col-md-2">
                {" "}
                <div className="float-right"> Request To:</div>{" "}
              </div>
              <div className="col-md-6">
                <div className="justify-content-md-left">
                  <font color="blue">
                    <Select
                      value={this.state.requestTarget}
                      isMulti
                      autosize={false}
                      options={option}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={this.handleChangeTarget}
                      maxMenuHeight={150}
                      isSearchable={true}
                      placeholder="Select target of request"
                    />
                  </font>
                </div>
              </div> */}
              <div className="col-8">&nbsp;</div>
            </div>
            <div className="row">
              <div className="col">{requestingSteps}</div>
            </div>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Request;
