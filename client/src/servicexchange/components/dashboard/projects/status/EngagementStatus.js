import React, { Component } from "react";
//import MediaCapturer from 'react-multimedia-capture';

import ShowSchedule from "./charts/ShowSchedule.js";
import ShowReflectionTimebased from "./charts/ShowReflectionTimebased";
import ShowReflectionProject from "./charts/ShowReflectionProject";

import ShowBurnrate from "./charts/ShowBurnrate";

import "./status.css";
import ShowProgress from "./charts/ShowProgress.js";
import ShowMilestones from "./charts/ShowMilestones";
import ShowPlanVsReal from "./charts/ShowPlanVsReal";

import TTSFunction from "../../../../../utils/components/TTSFunction";

const timeBasedSuggestion =
  "Your peers are impressed with your know-how, punctuality, and communication. However, you may want to listen with your heart to some of your peers and customers to enhance being a team-player and issue solver.";
const projectSuggestion =
  "Your peers have high opinion of your knowledge and you meeting the milestones. However, you may think yourself to be more imaginative than your peers think you are. Possibly, you are not that imaginative. Also, you may want to use your heart to communicate, particularly in the realm of artistry. Your technical mind may be hindering heartful communication style needed in the art gallery.";

class EngagementStatus extends Component {
  constructor() {
    super();
    this.state = {
      defMsg: true,
      showSchedule: false,
      showProgress: false,
      showBurnrate: false,
      showMilestones: false,
      showPlanVsReal: false,
      showInactive: false,
      showReflectionTimebased: false,
      showSuggestionTimebased: false,
      showSuggestionProject: false,
      showReflectionProject: false,
      speakTimebased: false,
      speakProject: false,

      newProj: ""
    };

    this.viewCharts = this.viewCharts.bind(this);
  }

  componentWillMount() {
    let local = localStorage.getItem("newproj");

    if (local) {
      let localJson = JSON.parse(local);
      this.setState({
        newProj: localJson
      });
      console.log("show the new project:" + local + "  Name:" + localJson.name);
    } else {
      console.log("Please define a new project to see status");
    }
  }

  handleError(err) {
    console.log(err);
  }

  viewCharts = value => {
    if (value === "showReflection") {
      if (this.props.thisProject.msg.engagementType === "time-based") {
        value = "showReflectionTimebased";
      } else {
        value = "showReflectionProject";
      }
    }
    if (value === "showSuggestion") {
      if (this.props.thisProject.msg.engagementType === "time-based") {
        value = "showSuggestionTimebased";
      } else {
        value = "showSuggestionProject";
      }
    }
    for (let name in this.state) {
      if (name !== value) {
        this.setState({
          [name]: false
        });
      } else {
        this.setState({
          [name]: true
        });
      }
    }
    //console.log('this.state: ' + JSON.stringify(this.state));
  };

  render() {
    //console.log("EngagementStatus this.props:" + JSON.stringify(this.props));
    //console.log("this.state: " + JSON.stringify(this.state));
    let workarea;

    let defaultMsg;
    if (this.props.thisProject.msg.id === -1) {
      let msg;
      if (this.state.newProj) {
        msg = (
          <div className="text-center">
            Name: {this.state.newProj.name}
            <br />
            Description: {this.state.newProj.description}
            <br />
            <br />
            <font color="#ddd1a8">
              Please get confirmations, define teams, tasks, budget etc. to
              check further status. Buttons are disabled.
            </font>
          </div>
        );
      } else {
        msg = (
          <p>
            Define or refer a project, an engagement, or a co-op project to
            check the status.
          </p>
        );
      }
      defaultMsg = <div className="default-msg"> {msg}</div>;
    } else {
      defaultMsg = (
        <div className="default-msg">
          <div className="left-align">
            <div>
              <b>Name:&nbsp; </b>{" "}
              <font color="#ddd1a8">
                {this.props.thisProject.msg.engagementName}{" "}
              </font>
            </div>
            <div>
              <b>Description: </b>{" "}
              <font color="#ddd1a8">
                {this.props.thisProject.msg.description}
              </font>
            </div>
            <div>
              <b>Project Type: </b>{" "}
              <font color="#ddd1a8">
                {this.props.thisProject.msg.engagementType}
              </font>
            </div>
            <div>
              <b>Project Manager: </b>
              <font color="#ddd1a8"> You </font>
            </div>
          </div>
          <br />
          <br />
          <div className="text-center">
            <font color="#ddd1a8">
              For UX review and comments, system is not doing true authorization
              but assuming you are the PM so that you can experience other
              project/co-op related actions and see statuses from pre-defined
              intelligence. In real world, if you are not the authorized, your
              access will be limited.
            </font>
          </div>
        </div>
      );
    }

    // let speakout;
    // if (this.state.speakTimebased) {
    //   speakout = (
    //     <div>
    //       <TTSFunction value={timeBasedSuggestion} />
    //     </div>
    //   );
    // }
    // if (this.state.speakProject) {
    //   speakout = (
    //     <div>
    //       <TTSFunction value={projectSuggestion} />
    //     </div>
    //   );
    // }

    let suggestion;
    if (this.state.showSuggestionTimebased || this.state.speakTimebased) {
      suggestion = (
        <div className="default-msg">
          <div className="left-align">
            <div>
              <b>Hello Angelo:&nbsp; </b>(
              {this.props.thisProject.msg.engagementName})
              <p>
                {" "}
                <br />
                <br />
                <font color="#ddd1a8">{timeBasedSuggestion}</font>
              </p>
              <button
                className="btn control-btn-preview"
                onClick={() => {
                  this.viewCharts("speakTimebased");
                }}
              >
                Speak
                <div className="float-right">
                  <i className="fas fa-volume-down" />
                </div>
              </button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.showSuggestionProject || this.state.speakProject) {
      suggestion = (
        <div className="default-msg">
          <div className="left-align">
            <div>
              <b>
                Hello Angelo:&nbsp; ({this.props.thisProject.msg.engagementName}
                ){" "}
              </b>{" "}
              <br />
              <br />
              <p>
                <font color="#ddd1a8">{projectSuggestion}</font>
              </p>
              <button
                className="btn control-btn-preview"
                onClick={() => {
                  this.viewCharts("speakProject");
                }}
              >
                Speak
                <div className="float-right">
                  <i className="fas fa-volume-down" />
                </div>
              </button>
            </div>
          </div>
        </div>
      );
    }

    let speakout;
    if (this.state.speakTimebased) {
      speakout = (
        <div>
          <TTSFunction value={timeBasedSuggestion} />
        </div>
      );
    }
    if (this.state.speakProject) {
      speakout = (
        <div>
          <TTSFunction value={projectSuggestion} />
        </div>
      );
    }
    let ctrlbuttons;
    let inactive = false;
    let ptype = this.props.thisProject.msg.engagementType;
    if (ptype === "time-based") {
      ctrlbuttons = (
        <div>
          <div className="space-outside-buttons" />
          <div className="space-outside-buttons" />
          <div className="text-center">
            <button
              className="btn control-btn-preview"
              onClick={() => {
                this.viewCharts("showSchedule");
              }}
            >
              Schedule
              <div className="float-right">
                <i className="far fa-stop-circle" />
              </div>
            </button>
          </div>
        </div>
      );
    } else if (ptype === "project" || ptype === "co-op") {
      ctrlbuttons = (
        <div>
          <div className="space-on-top-project" />
          <div className="text-center">
            <button
              className="btn control-btn-preview"
              onClick={() => {
                this.viewCharts("showProgress");
              }}
            >
              Progress
              <div className="float-right">
                <i className="far fa-play-circle" />
              </div>
            </button>{" "}
          </div>
          <div className="space-between-buttons-project" />
          <div className="text-center">
            <button
              className="btn control-btn-preview"
              onClick={() => {
                this.viewCharts("showBurnrate");
              }}
            >
              Burn-Rate
              <div className="float-right">
                <i className="far fa-play-circle" />
              </div>
            </button>{" "}
          </div>
          <div className="space-between-buttons-project" />
          <div className="text-center">
            <button
              className="btn control-btn-preview"
              onClick={() => {
                this.viewCharts("showMilestones");
              }}
            >
              Milestones
              <div className="float-right">
                <i className="far fa-play-circle" />
              </div>
            </button>{" "}
          </div>
          <div className="space-between-buttons-project" />
          <div className="text-center">
            <button
              className="btn control-btn-preview"
              onClick={() => {
                this.viewCharts("showPlanVsReal");
              }}
            >
              Plan vs. Real
              <div className="float-right">
                <i className="far fa-play-circle" />
              </div>
            </button>{" "}
          </div>
        </div>
      );
    } else {
      inactive = true;
      ctrlbuttons = (
        <div>
          <div className="space-outside-buttons" />
          <div className="space-outside-buttons" />
          <div className="text-center">
            <button className="btn control-btn-preview">
              Inactive
              <div className="float-right">
                <i className="far fa-play-circle" />
              </div>
            </button>{" "}
          </div>
        </div>
      );
    }

    let commonButtons;
    if (inactive) {
      commonButtons = null;
    } else {
      commonButtons = (
        <div>
          <div className="text-center">
            <button
              className="btn control-btn-preview "
              type="button"
              onClick={() => {
                this.viewCharts("showReflection");
              }}
            >
              Reflection
              <div className="float-right">
                <i className="far fa-play-circle" />
              </div>
            </button>
          </div>
          <div className="space-between-buttons" />
          <div className="text-center">
            <button
              className="btn control-btn-preview"
              type="button"
              onClick={() => {
                this.viewCharts("showSuggestion");
              }}
            >
              Suggestion &nbsp;&nbsp;
              <div className="float-right">
                <i className="far fa-envelope" />
              </div>
            </button>
          </div>
        </div>
      );
    }

    let controlBar = (
      <div className="text-center ctrl-panel-x">
        <div className="space-on-top" />
        <h4>
          <div className="header-shadow">
            <b>
              <font color="#cbd8ed">Engagement Status</font>
            </b>
          </div>
        </h4>

        {ctrlbuttons}
        <div className="space-between-buttons" />

        {commonButtons}
        <div className="space-on-top" />

        <div className="row">
          <div className="col-1">&nbsp;</div>
          <div className="col-10">
            <div className="text-center vedio-msg">
              Click the option if active contextually.
            </div>
          </div>
          <div className="col-1">&nbsp;</div>
        </div>
      </div>
    );

    if (this.state.defMsg) {
      workarea = defaultMsg;
    } else if (this.state.showSchedule) {
      workarea = <ShowSchedule />;
    } else if (this.state.showReflectionTimebased) {
      workarea = <ShowReflectionTimebased />;
    } else if (this.state.showReflectionProject) {
      workarea = <ShowReflectionProject />;
    } else if (
      this.state.showSuggestionTimebased ||
      this.state.showSuggestionProject
    ) {
      workarea = suggestion;
    } else if (this.state.showProgress) {
      workarea = <ShowProgress />;
    } else if (this.state.showBurnrate) {
      workarea = <ShowBurnrate />;
    } else if (this.state.showMilestones) {
      workarea = <ShowMilestones />;
    } else if (this.state.showPlanVsReal) {
      workarea = <ShowPlanVsReal />;
    } else if (this.state.speakProject || this.state.speakTimebased) {
      workarea = suggestion;
    } else {
      workarea = <div>Non default msg</div>;
    }

    return (
      <div className="container the-box-background">
        <div ref="app">
          <div className="text-center">
            <div className="row">
              <div className="col-md-4 col-sm-6">{controlBar}</div>
              <div className="col-md-8 col-sm-6">
                <div className="chart-panel">{workarea}</div>
                {speakout}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EngagementStatus;
