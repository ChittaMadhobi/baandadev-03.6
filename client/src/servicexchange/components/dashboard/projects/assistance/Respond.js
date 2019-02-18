import React, { Component } from "react";
import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import Select from "react-select";
//import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import { toRespondArtGallery } from "./data/toRespondArtGallery";
import { toRespondCbtl } from './data/toRespondCbtl';
import { artGalleryTargets } from "./data/artGalleryTargets";
import { cbtlTargets } from "./data/cbtlTargets";
import "./assistance.css";

class Respond extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToRespond: false,
      responseList: true,
      responsePanel: false,

      name: "",
      requestor: "",
      whatFactor: "",
      whyFactor: "",
      howFactor: "",
      assistanceType: "",
      comments: [],

      assistComment: "",
      repAssistanceType: "",
      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.gotoResponseProcess = this.gotoResponseProcess.bind(this);
    this.handleStatusProcessing = this.handleStatusProcessing.bind(this);
    this.gotoAssistReq = this.gotoAssistReq.bind(this);
    this.handleResponseSave = this.handleResponseSave.bind(this);
  }

  handleResponseSave() {
    alert(
      "At this point, your response will be saved and notified to the requestor. If you want to loop-in others or forward the request to someone else, they would be notified too. "
    );
  }

  gotoAssistReq = value => {
    //console.log('value:' + value);
    this.setState({
      repAssistanceType: value
    });
  };

  handleStatusProcessing = (
    name,
    requestor,
    whatFactor,
    whyFactor,
    howFactor,
    assistanceType,
    comments
  ) => {
    this.setState({
      name,
      requestor,
      whatFactor,
      whyFactor,
      howFactor,
      assistanceType,
      comments,
      howToRespond: false,
      responseList: false,
      responsePanel: true
    });
  };
  
  gotoResponseProcess = value => {
    if (value === "howToRespond") {
      this.setState({
        howToRespond: !this.state.howToRespond,
        responseList: false,
        responsePanel: false
      });
    } else if (value === "responseList") {
      this.setState({
        howToRespond: false,
        responseList: true,
        responsePanel: false
      });
    }
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    //console.log('this.state:' + JSON.stringify(this.state));
    const { errors } = this.state;
    
    let option, toRespond;
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    if (engagementType === "time-based") {
      option = cbtlTargets;
      toRespond = toRespondCbtl;
    } else {
      toRespond = toRespondArtGallery;
      option = artGalleryTargets;
    }

    let targetSelect;
    if (
      this.state.repAssistanceType === "forwardTo" ||
      this.state.repAssistanceType === "loopin"
    ) {
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
    } else {
      targetSelect = null;
    }

    let howtoRespondSteps;
    if (this.state.howToRespond) {
      howtoRespondSteps = (
        <div>
          <div className="row">
            <div className="howto-handle-inspection">
              <font color="lightyellow">
                <p>
                  The requestor has sent you a assistance-request. Please respond taking into considerations of your availability, or if you consider someone else would be more appropriate. If you are a PM, you may want the participant to get help from outside of the team.</p>
                  <br />
                  <p><i>Note: At this point, the external help inclusion has to be done separately. The other person or entity would need to be included in the team for direct notification. An agreement has to be done with the external entity before direct notifications.</i></p>
                  <br />
              </font>
            </div>
          </div>
        </div>
      );
    } else {
      howtoRespondSteps = null;
    }

    let responseHeader;
    if (this.state.responsePanel) {
      responseHeader = (
        <div>
          <div className="row">
            <div className="col">
              <div className="display-list-lines">
                <p>
                  Request: <b>{this.state.name}</b>, requested by{" "}
                  <b>{this.state.requestor}</b>, of type{" "}
                  <b>{this.state.assistanceType}</b>
                </p>
                <u>Request:</u> &nbsp;{this.state.whatFactor}
                <br />
                <u>Why Factor:</u> &nbsp;{this.state.whyFactor} <br />
                <u>How Factor:</u>&nbsp;{this.state.howFactor} <br />
              </div>
            </div>
          </div>
          {this.state.comments.map(ob => {
            return (
              <div key={ob.seq}>
                <div className="row">
                  <div className="col-1">&nbsp;</div>
                  <div className="col-11">
                    <div className="display-list-lines">
                      <p>
                        Response Type: {ob.responseType}; Replied on{" "}
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
      responseHeader = null;
    }

    let responseForm;
    if (this.state.responsePanel) {
      responseForm = (
        <div>
          {responseHeader}
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col">
              <font color="#3561a8">Response: </font>&nbsp;&nbsp;
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoAssistReq("will-do");
                    }}
                  />
                  Will-do
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoAssistReq("cannot");
                    }}
                  />
                  Cannot
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoAssistReq("conditional");
                    }}
                  />
                  Conditional
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoAssistReq("forwardTo");
                    }}
                  />
                  Forward to
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optradio"
                    onClick={() => {
                      this.gotoAssistReq("loopin");
                    }}
                  />
                  Loop-in
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">&nbsp;</div>
            <div className="col-6">{targetSelect}</div>
            <div className="col-3">&nbsp;</div>
          </div>
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col">
              <div className="textarea-list-lines">
                <TextAreaFieldGroup
                  placeholder="Enter comments on your assistance "
                  name="assistComment"
                  value={this.state.assistComment}
                  rows={4}
                  onChange={this.onChange}
                  error={errors.assistComment}
                  info="Enter comments to explain your response, including next-steps etc."
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
    } else {
      responseForm = null;
    }

    let responseListPanel;
    responseListPanel = (
      <div>
        {toRespond.map(obj => {
          return (
            <div key={obj.id}>
              <div className="row">
                <div className="col">
                  <div className="display-list-lines">
                    <p>
                      Request: <b>{obj.name}</b>, requested by{" "}
                      <b>{obj.requestor}</b>, of type{" "}
                      <b>{obj.assistanceType}</b>
                    </p>
                    <u>Request:</u> &nbsp;{obj.whatFactor}
                    <br />
                    <u>Why Factor:</u> &nbsp;{obj.whyFactor} <br />
                    <u>How Factor:</u>&nbsp;{obj.howFactor} <br />
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
                          obj.name,
                          obj.requestor,
                          obj.whatFactor,
                          obj.whyFactor,
                          obj.howFactor,
                          obj.assistanceType,
                          obj.comments
                        );
                      }}
                    >
                      Participate&nbsp;
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

    let output;
    if (this.state.howToRespond) {
      output = howtoRespondSteps;
    } else if (this.state.responseList) {
      output = (
        <div className="view-doc-list">
          <h5>
            <u>List of Active Tasks</u>
          </h5>
          {responseListPanel}
        </div>
      );
    } else if (this.state.responsePanel) {
      output = (
        <div className="view-doc-list">
          <h5>
            <u>Respond - Assists</u>
          </h5>
          {responseForm}
        </div>
      );
    }

    return (
      <div>
        <div className="form-panel-publish">
          <div className="text-center">
            <h5>Respond to Assistance Requests</h5>
            <div className="row">
              <div className="col-md-3">
                <div className="float-left">
                  <button
                    className="control-btn-consume"
                    onClick={() => {
                      this.gotoResponseProcess("howToRespond");
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
                      this.gotoResponseProcess("responseList");
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

export default Respond;
