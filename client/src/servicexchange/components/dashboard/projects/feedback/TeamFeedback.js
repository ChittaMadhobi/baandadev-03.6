import React, { Component } from "react";
import Select from "react-select";
import Slider from "react-rangeslider";

import TeamFeedbackView from "./TeamFeedbackView";

import { teams } from "./data/teams";

class TeamFeedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howTeamFeedback: false,
      giveFeedback: false,
      viewTeamState: false,

      likeTeam: 5,
      emergized: 5,
      workPressure: 5,
      motivated: 5,
      teamEmpathy: 5,
      progress: 5,

      selectedTeam: ""
    };

    this.gotoFeedbackProcess = this.gotoFeedbackProcess.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
    this.selectOperation = this.selectOperation.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "This is a UX or usability experience. Your entries are not currently being saved or validated. When released, the click of this button will save the feedback entered for processing."
    );
  }

  selectOperation = value => {
    if (value === "giveFeedback") {
      this.setState({
        giveFeedback: true,
        viewTeamState: false,
        howTeamFeedback: false
      });
    } else if (value === "viewTeamState") {
      this.setState({
        giveFeedback: false,
        viewTeamState: true,
        howTeamFeedback: false
      });
    }
  };

  handleSliderOnChange = (value, sliderName) => {
    //console.log("value: " + value + " --SN: " + sliderName);
    // console.log("got here :" + value);
    for (let name in this.state) {
      if (name === sliderName) {
        this.setState({
          [name]: value
        });
      }
    }
  };

  handleChangeTarget = (value, { action }) => {
    this.setState({
      selectedTeam: value
    });
  };

  gotoFeedbackProcess = value => {
    if (value === "feedbackSteps") {
      this.setState({
        howTeamFeedback: !this.state.howTeamFeedback
      });
    }
  };

  render() {
    let feedbackSteps, sharebody, teamViewBody;

    sharebody = (
      <div>
        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Like Team: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.likeTeam}
                orientation="horizontal"
                min={0}
                max={10}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handleSliderOnChange(e, "likeTeam");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.likeTeam}</font>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Team Energy: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.emergized}
                orientation="horizontal"
                min={0}
                max={10}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handleSliderOnChange(e, "emergized");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.emergized}</font>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Work Pressure: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.workPressure}
                orientation="horizontal"
                min={0}
                max={10}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handleSliderOnChange(e, "workPressure");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.workPressure}</font>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Motivated: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.motivated}
                orientation="horizontal"
                min={0}
                max={10}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handleSliderOnChange(e, "motivated");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.motivated}</font>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Team Empathy: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.teamEmpathy}
                orientation="horizontal"
                min={0}
                max={10}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handleSliderOnChange(e, "teamEmpathy");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.teamEmpathy}</font>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">
              Productive/Progress:{" "}
            </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.progress}
                orientation="horizontal"
                min={0}
                max={10}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handleSliderOnChange(e, "progress");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.progress}</font>
            </div>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="float-right">
          <button className="btn-check-ideation" onClick={this.handleSaveClick}>
            Save &nbsp;
            <div className="float-right">
              <i className="fa fa-check" />
            </div>
          </button>
        </div>
      </div>
    );

    if (this.state.howTeamFeedback) {
      feedbackSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              Select a team for which you would like to provide your feedback. <br />
              Slide rules to select a score for each of the dynamics of the team as you feel now. <br />
              By default all values are at point 5. If you leave it at this, it indicates you are not participating in stating the dynamics of this dimension at this point of time or you are indicating it is just about average.
              <br /><br />
              When you clieck 'Save', your selections would be stored and reflected in the team based view charts post time-series adjustments.  
            </div>
          </div>
        </div>
      );
    } else {
      feedbackSteps = null;
    }
 
    if (!this.state.selectedTeam.label) {
      teamViewBody = (
        <div className="chart-panel-feedback">
          <font color="red">Please select a team to view</font>
        </div>
      );
    } else if (this.state.selectedTeam.label === "Art Gallery") {
      teamViewBody = (
        <div className="chart-panel-feedback">
          <TeamFeedbackView teamName="Art-Gallery"/>
        </div>
      );
    } else if (this.state.selectedTeam.label === "CBTL Cafe") {

      teamViewBody = (
        <div className="chart-panel-feedback">
          <TeamFeedbackView teamName="CBTL Cafe"/>
        </div>
      );
    } else {

      teamViewBody = (
        <div className="chart-panel-feedback">
          <font color="Yellow">No data is available for team {this.state.selectedTeam.label} at this point of time. </font>
        </div>
      );
    }

    let output;
    if (this.state.howTeamFeedback) {
      output = feedbackSteps;
    } else if (this.state.giveFeedback) {
      output = sharebody;
    } else if (this.state.viewTeamState) {
      output = teamViewBody;
    } else {
      output = <div><font color="white">Click on operation or learn from How-to-steps</font></div>;
    }

    return (
      <div>
        <div className="form-panel-create-team">
          <div className="text-center">
            <h3>Team Feedback</h3>

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
              <div className="col-md-4">
                <div className="justify-content-md-left">
                  <font color="blue">
                    <Select
                      value={this.state.selectedTeam}
                      //isMulti
                      autosize={false}
                      options={teams}
                      // className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={this.handleChangeTarget}
                      maxMenuHeight={150}
                      isSearchable={true}
                      placeholder="Select the team "
                    />
                  </font>
                </div>
              </div>
              <div className="col-md-5">
                <div className="float-left">
                  <button
                    className="btn btn-target-feedback"
                    onClick={() => {
                      this.selectOperation("giveFeedback");
                    }}
                  >
                    Feedback
                    <div className="float-right">
                      <i className="fas fa-chess-bishop" />
                    </div>
                  </button>{" "}
                  <button
                    className="btn btn-target-feedback"
                    onClick={() => {
                      this.selectOperation("viewTeamState");
                    }}
                  >
                    View
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
        </div>
      </div>
    );
  }
}

export default TeamFeedback;
