import React, { Component } from "react";
import Select from "react-select";
import Slider from "react-rangeslider";
  
import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";

// All the following can be done from a single file exporting all. This separatelness
// is done for one-at-a-time transition into DB calls in future and refactoring the
// overall module.
import { suggestArtGallery } from "./data/suggestArtGallery";
import { suggestCbtl } from "./data/suggestCbtl";
import { receiveArtGallery } from "./data/receiveArtGallery";
import { receiveCbtl } from "./data/receiveCbtl";
import { artGalleryMembers } from "./data/artGalleryMembers";
import { cbtlMembers } from "./data/cbtlMembers";

import { cbtlResolve } from "./data/cbtlResolve";
import { artGalleryResolve } from "./data/artGalleryResolve";

class ResolveConflict extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoResolve: false,
      requestedBy: "",
      suggestedBy: "",
      resolvedName: "",
      resolve: false,
      receive: false,
      suggest: false,
      yourSentiment: 0,
      conflictNotifyTo: [],

      yourSuggestion: "",
      yourComment: "",
      resolvedContinueCheck: false,
      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.handleRequestedBy = this.handleRequestedBy.bind(this);
    this.handleReceiveSuggestionBy = this.handleReceiveSuggestionBy.bind(this);
    this.handleResolveName = this.handleResolveName.bind(this);
    this.selectOperation = this.selectOperation.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handSliderOnChange = this.handSliderOnChange.bind(this);
    this.handleNotifyTo = this.handleNotifyTo.bind(this);
    this.handleResolveContinue = this.handleResolveContinue.bind(this);
    this.gotoResolvingProcess = this.gotoResolvingProcess.bind(this);
  }

  gotoResolvingProcess = value => {
    if (value === "resolvingSteps") {
      this.setState({
        howtoResolve: !this.state.howtoResolve
      });
    }
  };

  handleNotifyTo = (conflictNotifyTo, { action }) => {
    this.setState({
      conflictNotifyTo
    });
  };

  handleResolveContinue() {
    this.setState({
      resolvedContinueCheck: !this.state.resolvedContinueCheck
    });
  }

  handSliderOnChange = (value, sliderName) => {
    for (let name in this.state) {
      if (name === sliderName) {
        this.setState({
          [name]: value
        });
      }
    }
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
    //console.log("selectOperation value:" + value);
    if (value === "suggest") {
      this.setState({
        resolve: false,
        receive: false,
        suggest: true,
        howtoResolve: false
      });
    } else if (value === "receive") {
      console.log('value === "receive"');
      this.setState({
        resolve: false,
        receive: true,
        suggest: false,
        howtoResolve: false
      });
    } else if (value === "resolve") {
      this.setState({
        resolve: true,
        receive: false,
        suggest: false,
        howtoResolve: false
      });
    }
  };

  handleRequestedBy = (value, { action }) => {
    this.setState({
      requestedBy: value
    });
  };

  handleReceiveSuggestionBy = (value, { action }) => {
    this.setState({
      suggestedBy: value
    });
  };

  handleResolveName = (value, { action }) => {
    this.setState({
      resolvedName: value
    });
  };

  render() {
    //console.log("requesetd by:" + JSON.stringify(this.state.suggestedBy));
    //console.log("this.state.receive:" + this.state.receive);

    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let options,
      optionsTeam,
      optionsResolve,
      sentimentBarScore = 0;

    if (engagementType === "time-based") {
      if (this.state.suggest) {
        options = suggestCbtl;
        sentimentBarScore = this.state.requestedBy.sentiment;
      } else if (this.state.receive) {
        options = receiveCbtl;
        optionsTeam = cbtlMembers;
        sentimentBarScore = this.state.suggestedBy.sentiment;
      } else if (this.state.resolve) {
        optionsResolve = cbtlResolve;
        sentimentBarScore = this.state.resolvedName.sentiment;
      }
    } else {
      if (this.state.suggest) {
        options = suggestArtGallery;
        sentimentBarScore = this.state.requestedBy.sentiment;
      } else if (this.state.receive) {
        options = receiveArtGallery;
        optionsTeam = artGalleryMembers;
        sentimentBarScore = this.state.suggestedBy.sentiment;
      } else if (this.state.resolve) {
        optionsResolve = artGalleryResolve;
        sentimentBarScore = this.state.resolvedName.sentiment;
      }
    }

    const { errors } = this.state;
    let resolutionSteps;

    let suggestSelect, suggestedBodyRest, suggestBody;
    let receiveBody, receiveSelect, receiveBodyRest;
    let resolveBody, resolveSelect, resolveBodyRest;
    let sentimentper, barbg, sentimentBar, genStyle;

    if (this.state.howtoResolve) {
      resolutionSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              Resolution of conflict, that is reported and peer involvement is
              requested has three main components.
              <br />
              <p>
                <u>Suggest Button:</u>{" "}
              </p>
              <p>
                Your peers may have some conflict scenarios where he/she may
                request your advise or involvement. In this case, you start by
                (if anyone did request):
              </p>
              <ul>
                <li>Who is requestor having conflict with ...</li>
                <li>Name of the conflict (for reference).</li>
                <li>Description of the conflict </li>
                <li>AList of witnesses (if any)</li>
                <li>
                  Shows the sentiment score. In the begining, the sentiment
                  would be of the reporter. However, this sentiment will
                  eventually show the average of all the members who would be
                  involved in the conflict.
                </li>
              </ul>
              <p>
                {" "}
                Then you are supposed to enter your advise. You can also request
                a in-person talk and then write your advice. Also provide your
                sentiment at this point of time.{" "}
              </p>
              <hr />
              <p>
                <u>Receive Button:</u>{" "}
              </p>
              <p>
                This is where you receive suggestions you have asked to be
                involved.
              </p>
              <ul>
                <li>
                  Select a name you asked suggestion from. On select, you will
                  be presented with information on the conflict. It will also
                  provide the team sentiment at the time you are checking.
                </li>
                <li>
                  You would be asked to enter your comments (if you want to). If
                  you do, you may continue to resolve the conflict if you are
                  not satisfied. Add your sentiment to the situation.{" "}
                </li>
                <li>
                  {" "}
                  Check if you want DO NOT want to conclude and continue. In
                  that case, you have to select names for asking their
                  involvement.
                </li>
              </ul>
              <hr />
              <p>
                <u>Resolve Button:</u>{" "}
              </p>
              <p>
                You see the conflict name in the drop down if and only if you
                have elected that as 'resolve' while in Resolve section. You
                will be presented with the latest scenario and sentiment. You
                could chose to enter a concluding comment and sentiment for
                postarity.
              </p>
              <p>
                After you click Save-Notify, all involved party would be
                notified that the conflict has been resolved. This name would
                then appear in 'Intel' button for sentiment trends and logs.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      resolutionSteps = null;
    }

    let reportTo;
    if (this.state.resolvedContinueCheck) {
      reportTo = (
        <div>
          <font color="#293087">
            <Select
              value={this.state.conflictNotifyTo}
              isMulti
              options={optionsTeam}
              //className="basic-multi-select"
              classNamePrefix="select"
              onChange={this.handleNotifyTo}
              maxMenuHeight={150}
              placeholder="Invite members for advice"
            />
          </font>
        </div>
      );
    } else {
      reportTo = null;
    }

    // Create Sentiment bar with responsive colors.
    if (
      this.state.requestedBy ||
      this.state.suggestedBy ||
      this.state.resolvedName
    ) {
      sentimentper = Math.floor(((sentimentBarScore + 1) / 2) * 100);

      if (sentimentper <= 25) {
        barbg = "progress-bar bg-danger";
      } else if (sentimentper > 25 && sentimentper <= 50) {
        barbg = "progress-bar bg-warning";
      } else if (sentimentper > 50 && sentimentper <= 75) {
        barbg = "progress-bar bg-primary";
      } else {
        barbg = "progress-bar bg-success";
      }

      var sentStr = sentimentper.toString() + "%";
      //console.log('sentStr:' + sentStr);
      genStyle = { width: sentStr };
      //console.log("barbg:" + barbg + " xx:" + JSON.stringify(genStyle));

      sentimentBar = (
        <div>
          <div className="row">
            <div className="col-md-3">
              <div className="float-right">Sentiment Score :</div>
            </div>
            <div className="col-md-6">
              <div className="progress progbar-pad">
                <div
                  className={barbg}
                  //style={{ width: '70%' }}
                  style={genStyle}
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {sentimentBarScore}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="float-left">
                <font color="white"> {sentimentBarScore} SS</font>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      sentimentper = 0;
      sentimentBar = null;
    }

    if (this.state.resolve) {
      resolveSelect = (
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="float-right">Conflict Name:</div>
            </div>
            <div className="col-md-6">
              <div className="justify-content-md-left">
                <font color="blue">
                  <Select
                    value={this.state.suggestedBy}
                    //isMulti
                    autosize={false}
                    options={optionsResolve}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleResolveName}
                    maxMenuHeight={150}
                    isSearchable={true}
                    placeholder="Select conflict name"
                  />
                </font>
              </div>
            </div>
            <div className="col-md-2">
              <div className="float-right">&nbsp;</div>
            </div>
          </div>
        </div>
      );
      if (this.state.resolvedName) {
        resolveBodyRest = (
          <div>
            <div className="space-between-buttons" />
            <div className="space-between-buttons" />

            <div className="row">
              <div className="col text-align-left-full">
                Your conflict, named &nbsp;
                <font color="lightyellow">{this.state.resolvedName.name}</font>,
                with{" "}
                <font color="lightyellow">
                  {this.state.resolvedName.against},{" "}
                </font>{" "}
                (as described below) is being closed per the resolution process
                all related parties went through.
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col text-align-left-full">
                Description :{" "}
                <font color="lightyellow">
                  {this.state.resolvedName.description}
                </font>
              </div>
            </div>

            <div className="space-between-buttons" />
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col text-align-left-full">
                The collective sentiment of this conflict among participants now
                is :
              </div>
            </div>
            {sentimentBar}
            <div className="space-between-buttons" />
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-12">
                <TextAreaFieldGroup
                  placeholder="Please log your closing comment ."
                  name="yourComment"
                  value={this.state.yourComment}
                  rows={4}
                  onChange={this.onChange}
                  error={errors.yourComment}
                  info="Please enter a closing comment for Baanda to inernalize your state."
                />
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-4">
                <div className="text-padding float-right">
                  Your Closing Sentiment is{" "}
                </div>
              </div>
              <div className="col-6">
                <div className="slider-padding">
                  <Slider
                    value={this.state.yourSentiment}
                    orientation="horizontal"
                    min={-100}
                    max={100}
                    handleLabel={"--Pts"}
                    onChange={e => {
                      this.handSliderOnChange(e, "yourSentiment");
                    }}
                  />
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="text-padding float-left">
                  <font color="lightgreen">
                    {this.state.yourSentiment / 100}
                  </font>
                </div>
              </div>
            </div>

            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-md-8">{reportTo}</div>
              <div className="col-md-4">
                <div className="float-right">
                  <button
                    className="btn-check-ideation"
                    onClick={this.handleSaveClick}
                  >
                    Save-Notify &nbsp;
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
        resolveBodyRest = (
          <div>
            <font color="orange" fontSize="3">
              Please select a Conflict-Name to proceed ...
            </font>
          </div>
        );
      }

      resolveBody = (
        <div>
          {resolveSelect}
          {resolveBodyRest}
        </div>
      );
    }

    if (this.state.receive) {
      receiveSelect = (
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="float-right">Suggestion From:</div>
            </div>
            <div className="col-md-6">
              <div className="justify-content-md-left">
                <font color="blue">
                  <Select
                    value={this.state.suggestedBy}
                    //isMulti
                    autosize={false}
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleReceiveSuggestionBy}
                    maxMenuHeight={150}
                    isSearchable={true}
                    placeholder="Select member"
                  />
                </font>
              </div>
            </div>
            <div className="col-md-2">
              <div className="float-right">&nbsp;</div>
            </div>
          </div>
        </div>
      );
      // Code rest of the suggestion body----------------
      if (this.state.suggestedBy) {
        receiveBodyRest = (
          <div>
            <div className="row">
              <div className="col">
                <div className="message-suggest">
                  <font color="lightyellow" size="2">
                    At this point, this experinece handles one-conflict at a
                    time.
                    {/* Multiple concurrent conflicts handling is for future releases. */}
                  </font>
                </div>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-2">Conflict With:</div>
              <div className="col-4 text-align-left">
                <font color="lightyellow">
                  {this.state.suggestedBy.against}
                </font>
              </div>
              <div className="col-2">Conflict Name:</div>
              <div className="col-4 text-align-left">
                <font color="lightyellow">{this.state.suggestedBy.name}</font>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col text-align-left-full">
                Description :{" "}
                <font color="lightyellow">
                  {this.state.suggestedBy.description}
                </font>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col text-align-left-full">
                Suggestion :{" "}
                <font color="lightyellow">
                  {this.state.suggestedBy.suggestion}
                </font>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-3">Witnesse (if any):</div>
              <div className="col-9 text-align-left">
                <font color="lightyellow">
                  {this.state.suggestedBy.witnesses}
                </font>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="space-between-buttons" />
            {sentimentBar}
            <div className="space-between-buttons" />
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-12">
                <TextAreaFieldGroup
                  placeholder="Comment on the suggestion and ask for more ."
                  name="yourComment"
                  value={this.state.yourComment}
                  rows={4}
                  onChange={this.onChange}
                  error={errors.yourComment}
                  info="Comment towards resolution or if you wish to continue..."
                />
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-4">
                <div className="text-padding float-right">Your Sentiment: </div>
              </div>
              <div className="col-6">
                <div className="slider-padding">
                  <Slider
                    value={this.state.yourSentiment}
                    orientation="horizontal"
                    min={-100}
                    max={100}
                    handleLabel={"--Pts"}
                    onChange={e => {
                      this.handSliderOnChange(e, "yourSentiment");
                    }}
                  />
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="text-padding float-left">
                  <font color="lightgreen">
                    {this.state.yourSentiment / 100}
                  </font>
                </div>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                  checked={this.state.resolvedContinueCheck}
                  onChange={this.handleResolveContinue}
                />{" "}
                <font color="lightgreen">
                  Check if you want to continue the resolution process...
                </font>
              </label>
            </div>
            {/* {This is where ... involvement  request goes in} */}

            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-md-8">{reportTo}</div>
              <div className="col-md-4">
                <div className="float-right">
                  <button
                    className="btn-check-ideation"
                    onClick={this.handleSaveClick}
                  >
                    Save-Notify &nbsp;
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
        receiveBodyRest = (
          <div>
            <font color="orange" fontSize="3">
              Please select someone from Suggested By to proceed
            </font>
          </div>
        );
      }

      receiveBody = (
        <div>
          {receiveSelect}
          {receiveBodyRest}
        </div>
      );
    }
    //--------------------------------------------------------
    if (this.state.suggest) {
      suggestSelect = (
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="float-right">Requested by:</div>
            </div>
            <div className="col-md-6">
              <div className="justify-content-md-left">
                <font color="blue">
                  <Select
                    value={this.state.requestedBy}
                    //isMulti
                    autosize={false}
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleRequestedBy}
                    maxMenuHeight={150}
                    isSearchable={true}
                    placeholder="Select member"
                  />
                </font>
              </div>
            </div>
            <div className="col-md-2">
              <div className="float-right">&nbsp;</div>
            </div>
          </div>
        </div>
      );

      if (this.state.requestedBy) {
        suggestedBodyRest = (
          <div>
            <div className="row">
              <div className="col">
                <div className="message-suggest">
                  <font color="lightyellow" size="2">
                    At this point, this experinece handles one-conflict at a
                    time.
                    {/* Multiple concurrent conflicts handling is for future releases. */}
                  </font>
                </div>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-2">Conflict With:</div>
              <div className="col-4 text-align-left">
                <font color="lightyellow">
                  {this.state.requestedBy.against}
                </font>
              </div>
              <div className="col-2">Conflict Name:</div>
              <div className="col-4 text-align-left">
                <font color="lightyellow">{this.state.requestedBy.name}</font>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col text-align-left-full">
                Description :{" "}
                <font color="lightyellow">
                  {this.state.requestedBy.description}
                </font>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col text-align-left-full">
                Incident :{" "}
                <font color="lightyellow">
                  {this.state.requestedBy.incident}
                </font>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-3">Witnesse (if any):</div>
              <div className="col-9 text-align-left">
                <font color="lightyellow">
                  {this.state.requestedBy.witnesses}
                </font>
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="space-between-buttons" />
            {sentimentBar}
            <div className="space-between-buttons" />
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-12">
                <TextAreaFieldGroup
                  placeholder="Share your verbose comment on your feedback."
                  name="yourSuggestion"
                  value={this.state.yourSuggestion}
                  rows={4}
                  onChange={this.onChange}
                  error={errors.yourSuggestion}
                  info="Provide your advice ir suggestion towards resolution ..."
                />
              </div>
            </div>
            <div className="space-between-buttons" />
            <div className="row">
              <div className="col-4">
                <div className="text-padding float-right">Your Sentiment: </div>
              </div>
              <div className="col-6">
                <div className="slider-padding">
                  <Slider
                    value={this.state.yourSentiment}
                    orientation="horizontal"
                    min={-100}
                    max={100}
                    handleLabel={"--Pts"}
                    onChange={e => {
                      this.handSliderOnChange(e, "yourSentiment");
                    }}
                  />
                </div>
              </div>
              <div className="col-2 text-center">
                <div className="text-padding float-left">
                  <font color="lightgreen">
                    {this.state.yourSentiment / 100}
                  </font>
                </div>
              </div>
            </div>

            <div className="space-between-buttons" />
            <div className="float-right">
              <button
                className="btn-check-ideation"
                onClick={this.handleSaveClick}
              >
                Save-Notify &nbsp;
                <div className="float-right">
                  <i className="fa fa-check" />
                </div>
              </button>
            </div>
          </div>
        );
      } else {
        suggestedBodyRest = (
          <div>
            <font color="orange" fontSize="3">
              Please select someone from Requested By to proceed
            </font>
          </div>
        );
      }

      suggestBody = (
        <div>
          {suggestSelect}
          {suggestedBodyRest}
        </div>
      );
    }

    let output;

    if (this.state.suggest) {
      output = suggestBody;
    } else if (this.state.receive) {
      output = receiveBody;
    } else if (this.state.resolve) {
      output = resolveBody;
    } else {
      output = (
        <div>
          <font color="lightblue" fontSize="3">
            Please click on an operation on top to procees
          </font>
        </div>
      );
    }

    return (
      <div>
        <div className="form-panel-conflict">
          <div className="text-center">
            <h3>Conflict Resolution</h3>
            <font color="green">
              <div className="row">
                <div className="col-md-3">
                  <div className="float-left">
                    <button
                      className="btn btn-save-ideation"
                      onClick={() => {
                        this.gotoResolvingProcess("resolvingSteps");
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
                        this.selectOperation("suggest");
                      }}
                    >
                      Suggest
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
                        this.selectOperation("receive");
                      }}
                    >
                      Receive
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
                        this.selectOperation("resolve");
                      }}
                    >
                      Resolve
                      <div className="float-right">
                        <i className="fas fa-cogs" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">{resolutionSteps}</div>
              </div>
            </font>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default ResolveConflict;
