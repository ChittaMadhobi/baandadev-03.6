import React, { Component } from "react";
import Select from "react-select";
import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import "./feedback.css";
// import { membersForTeamCreation } from "./data/membersForTeamCreation";
import { artGalleryMembers } from "./data/artGalleryMembers";
import { cbtlMembers } from './data/cbtlMembers';
import { artGalleryLog } from "./data/artGalleryLog";
import { cbtlLog } from "./data/cbtlLog";

let feedbackLog;

let localArr = [];

class TargetedFeedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howTragetFeedback: false,
      feedbackreq: "",
      feedbackres: "",
      request: false,
      response: false,
      logs: false,
      feedbackOf: "",
      logOf: "",

      errors: []
    };
    this.onChange = this.onChange.bind(this);
    this.gotoFeedbackProcess = this.gotoFeedbackProcess.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.filterFeedbackView = this.filterFeedbackView.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
  }

  filterFeedbackView(byName) {
    console.log('byName:' + byName);
    localArr = [];
    for (var i = 0; i < feedbackLog.length; i++) {
      if (byName !== "all") {
        if (feedbackLog[i].toFrom.trim() === byName.trim()) {
          localArr.push(feedbackLog[i]);
        }
      } else {
        localArr.push(feedbackLog[i]);
      }
    }
  }

  handleChangeTarget = (value, { action }) => {
    this.setState({
      feedbackOf: value
    });
  };

  handleChangeLogOf = (value, { action }) => {
    this.setState({
      logOf: value
    });
  };

  handleSaveClick() {
    alert(
      "This is a UX or usability experience. Your entries are not currently being saved or validated. When released, the click of this button will save the feedback entered for processing."
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  selectOperation = value => {
    // for (let name in this.state) {
    //   if (name === value) {
    //     this.setState({
    //       [name]: false
    //     });
    //   } else {
    //     this.setState({
    //       [name]: true
    //     });
    //   }
    // }
    if (value === "request") {
      this.setState({
        request: true,
        response: false,
        logs: false,
        logOf: '',
        feedbackOf: "",
        howTragetFeedback: false
      });
    } else if (value === "response") {
      this.setState({
        request: false,
        response: true,
        logs: false,
        logOf: '',
        feedbackOf: "",
        howTragetFeedback: false
      });
    } else {
      this.setState({
        request: false,
        response: false,
        logs: true,
        logOf: '',
        feedbackOf: "",
        howTragetFeedback: false
      });
    }
  };

  gotoFeedbackProcess = value => {
    if (value === "feedbackSteps") {
      this.setState({
        howTragetFeedback: !this.state.howTragetFeedback
      });
    }
  };

  render() {
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let options;

    if (engagementType === 'time-based') {
      options = cbtlMembers;
    } else {
      options = artGalleryMembers;
    }

    const { errors } = this.state;
    let feedbackSteps, feedbackReqBody, feedbackResBody, feedbackLogs;
    feedbackReqBody = null;

    if (this.state.howTragetFeedback) {
      feedbackSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              Targeted feedback, as it implies, if directly asking your teammate for some specific feedback. This enables one-on-one request-response. This is the only place where you would know who wants to say what to you and also, in the same way, you can provide personalized feedback for an individual.
              <br /><br />
              Logs shows all the conversation you had with your team mates as in asking each other for feedbacks. You can filter for a particular person or, by default, you see interactions with the whole team.
              <br />
              Sentimant score is mined/calculated from the verbose request and response. At this point of time Baanda uses external API but intends to use its own engine once Causal Inference engine is build.
            </div>
          </div>
        </div>
      );
    } else {
      feedbackSteps = null;
    }

    feedbackReqBody = (
      <div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-md-6">
            <div className="justify-content-md-left">
              <font color="blue">
                <Select
                  value={this.state.feedbackOf}
                  //isMulti
                  autosize={false}
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleChangeTarget}
                  maxMenuHeight={150}
                  isSearchable={true}
                  placeholder="Select the person to request ..."
                />
              </font>
            </div>
          </div>
          <div className="col-md-6">&nbsp;</div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Explain your request."
              name="feedbackreq"
              value={this.state.feedbackreq}
              rows={4}
              onChange={this.onChange}
              error={errors.feedbackreq}
              info="Request specific feedback from a specific person contextually. This would be one-on-one."
            />
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col">
            <div className="float-right">
              <button
                className="btn-check-deliverable"
                onClick={this.handleSaveClick}
              >
                Request &nbsp;
                <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    feedbackResBody = (
      <div>
        <div className="textspaceTop" />
         <div className="row">
          <div className="col-12">
            <div className="response-feedback-placement">
              From: Leonardo De Vinci <br />
              Aenean non consectetur justo, a rutrum neque. Nulla commodo enim justo, nec consequat risus bibendum ac. Aliquam erat volutpat. Proin quis nunc ut ligula lacinia congue mollis vel turpis. 
            </div>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Explain your request."
              name="feedbackres"
              value={this.state.feedbackres}
              rows={4}
              onChange={this.onChange}
              error={errors.feedbackres}
              info="Request specific feedback from a specific person contextually. This would be one-on-one."
            />
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col">
            <div className="float-right">
              <button
                className="btn-check-deliverable"
                onClick={this.handleSaveClick}
              >
                Respond &nbsp;
                <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    // If no name selected show all the feedback correspondences - else specific

    feedbackLog = artGalleryLog;     
    if (engagementType === 'time-based') {
      feedbackLog = cbtlLog;
    } else {
      feedbackLog = artGalleryLog;
    }

    let logReqEmpty = '';
    if (this.state.logs) {
      if (this.state.logOf === "") {
        this.filterFeedbackView("all");
        if (localArr.length === 0) {
          logReqEmpty = "You have no feedback exchange for this context so far";
        }
      } else {
        this.filterFeedbackView(this.state.logOf.label);
        if (localArr.length === 0) {
          logReqEmpty = "You have no feedback exchange for this context so far with " + this.state.logOf.label;
        }
      }

      // the feedbackLogs is generated only if this is the request.
      feedbackLogs = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="justify-content-md-left">
                <font color="blue">
                  <Select
                    value={this.state.logOf}
                    //isMulti
                    autosize={false}
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleChangeLogOf}
                    maxMenuHeight={150}
                    isSearchable={true}
                    placeholder="Select the person to view ..."
                  />
                </font>
              </div>
            </div>
            <div className="col-md-6">
              <div className="float-left">
                {" "}
                Please select target name to filter
              </div>
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col">
              {localArr.map(obj => {
                return (
                  <div key={obj.seqNo}>
                    <div className="row">
                      <div className="col">
                        <div className="edit-log-lines">
                          Interaction With: <b>{obj.toFrom}</b> at:{" "}
                          <b>{obj.atDateTime} </b> &nbsp;||&nbsp; Your origin
                          at:&nbsp; {obj.initType} <br />
                          Request:{" "}
                          <font color="#3e5584">
                            <b>{obj.reqDesc}</b>
                          </font>{" "}
                          <br />
                          Response:{" "}
                          <font color="#3e5584">
                            <b>{obj.respDesc}</b>
                          </font>{" "}
                          <br />
                          Sentiment: <b>{obj.respSentiment}</b>
                        </div>
                      </div>
                    </div>
                    <div className="space-between-rows" />
                    <hr />
                  </div>
                );
              })}
              <font color="brown">{logReqEmpty}</font>
            </div>
          </div>
        </div>
      );
    }

    let output;
    if (this.state.request) {
      output = feedbackReqBody;
      //feedbackSteps = null;
    }
    if (this.state.response) {
      output = feedbackResBody;
      //feedbackSteps = null;
    }
    if (this.state.logs) {
      output = <div className="view-log">{feedbackLogs}</div>;
    }

    return (
      <div>
        <div className="form-panel-create-team">
          <div className="text-center">
            <h3>Targeted Feedback</h3>
            <font color="green">
              <div className="row">
                <div className="col-md-3">
                  <div className="float-left">
                    <button
                      className="btn btn-save-ideation"
                      onClick={() => {
                        this.gotoFeedbackProcess("feedbackSteps");
                      }}
                    >
                      How-to-steps
                      <div className="float-right">
                        <i className="fas fa-toggle-off" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="float-left">
                    <button
                      className="btn btn-target-feedback"
                      onClick={() => {
                        this.selectOperation("request");
                      }}
                    >
                      Request
                      <div className="float-right">
                        <i className="fas fa-chalkboard-teacher" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="float-left">
                    <button
                      className="btn btn-target-feedback"
                      onClick={() => {
                        this.selectOperation("response");
                      }}
                    >
                      Respond
                      <div className="float-right">
                        <i className="fas fa-chess-bishop" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="float-left">
                    <button
                      className="btn btn-target-feedback"
                      onClick={() => {
                        this.selectOperation("logs");
                      }}
                    >
                      Req-Logs
                      <div className="float-right">
                        <i className="fas fa-cogs" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">{feedbackSteps}</div>
              </div>
            </font>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default TargetedFeedback;
