import React, { Component } from "react";
//import moment from 'moment';

import ProjInitiate from "../../../../servicexchange/components/dashboard/projects/ProjInitiate";
import EngagementStatus from "../../../../servicexchange/components/dashboard/projects/status/EngagementStatus";
import TeamManagement from "../../../../servicexchange/components/dashboard/projects/teams/TeamManagement";
import TaskManagement   from "../../../../servicexchange/components/dashboard/projects/tasks/TaskManagement";

import UpdateManagement from '../../../../servicexchange/components/dashboard/projects/updates/UpdateManagement';
import AssistanceMgmt   from '../../../../servicexchange/components/dashboard/projects/assistance/AssistanceMgmt';

import ProjectingMgmt from "../../../../servicexchange/components/dashboard/projects/projecting/ProjectingMgmt";
import FeedbackMgmt from '../../../../servicexchange/components/dashboard/projects/feedback/FeedbackMgmt';
import ConflictMgmt from '../../../../servicexchange/components/dashboard/projects/conflict/ConflictMgmt';
import DecisionMgmt from '../../../../servicexchange/components/dashboard/projects/decision/DecisionMgmt';
import DioMgmt from '../../../../servicexchange/components/dashboard/projects/documentio/DioMgmt';
import IotMgmt      from '../../../../servicexchange/components/dashboard/projects/iot/IotMgmt';

import DefaultMsg from "../../../../servicexchange/components/dashboard/projects/ProjDefaultMsg";

import "./css/sx.css";

class SXProjectBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projecting: false,
      projOnly: false,
      projInit: false,
      projTeam: false,
      projTasks: false,
      projUpdates: false,
      projStatus: false,

      defaultMsgType: "general",
      defaultlMsgFlag: true,

      geneFeedback: false,
      geneConflict: false,
      geneDecisioning: false,
      geneDocHandling: false,
      geneIotFeed: false,
      geneAssistance: false
    };

    this.toggleGeneralProject = this.toggleGeneralProject.bind(this);
    this.setSelectedButton = this.setSelectedButton.bind(this);
  }

  toggleGeneralProject = switchTo => {
    // this.setState({
    //   projOnly: !this.state.projOnly,
    //   defaultlMsgFlag: true
    // });
    if (switchTo === "project") {
      this.setState({
        defaultMsgType: "project"
      });
    } else {
      this.setState({
        defaultMsgType: "general"
      });
    }
    // set all to initial state of false except for projOnly and defaultMsgType
    for (let name in this.state) {
      if (name !== "projOnly" && name !== "defaultMsgType") {
        this.setState({
          [name]: false
        });
      }
    }
    // Set defaultMsgFlag to show right kind of messagse on switch.
    this.setState({
      projOnly: !this.state.projOnly,
      defaultlMsgFlag: true
    });
  };

  setSelectedButton = buttonName => {
    //console.log('setSelectedButton:' + buttonName);
    for (let name in this.state) {
      if (name === buttonName) {
        this.setState({
          [name]: true
        });
      } else {
        if (name !== "defaultMsgType") {
          this.setState({
            [name]: false
          });
        }
      }
    }
  };

  render() {
    //console.log('SXProjectBody props:' + JSON.stringify(this.props));
    // console.log('SXProjectBody this.state: ' + JSON.stringify(this.state));
    let newProj = false;

    if (this.props.msg.id === -1) {
      //console.log('detecting click of proj button');
      newProj = true; // Setting up a new project
    }

    // Set if default message is to be displayed, what kind of props need to be
    // send to DefaultMsg for the context.
    let defaultMsgProp;
    if (newProj) {
      defaultMsgProp = "NewProjectInit";
    } else {
      if (this.state.defaultMsgType === "project") {
        defaultMsgProp = "project";
      } else {
        defaultMsgProp = "general";
      }
    }

    let projbuttons; //, genebuttons;

    //let { projOnly } = this.state;

    let switchToProject = (
      <button
        className="btn button-message-switch"
        onClick={() => {
          this.toggleGeneralProject("project");
        }}
      >
        Switch to Project>>
        <div className="float-right">
          <i className="fas fa-toggle-on" />
        </div>
      </button>
    );

    let switchToGeneral = (
      <button
        className="btn button-message-switch"
        onClick={() => {
          this.toggleGeneralProject("general");
        }}
      >
        Switch to General>>
        <div className="float-right">
          <i className="fas fa-toggle-on" />
        </div>
      </button>
    );

    if (defaultMsgProp === "project") {
      projbuttons = (
        <div>
          {switchToGeneral}
          <div className="float-right">
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("projInit");
              }}
            >
              Init&nbsp;
              <div className="float-right">
                <i className="fas fa-paint-brush" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("projecting");
              }}
            >
              Project&nbsp;
              <div className="float-right">
                <i className="fas fa-clipboard-list" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("projTeam");
              }}
            >
              Team&nbsp;
              <div className="float-right">
                <i className="fab fa-teamspeak" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("projTasks");
              }}
            >
              Tasks&nbsp;
              <div className="float-right">
                <i className="fas fa-tasks" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("projUpdates");
              }}
            >
              Update&nbsp;
              <div className="float-right">
                <i className="fas fa-pen-fancy" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("projStatus");
              }}
            >
              Status&nbsp;
              <div className="float-right">
                <i className="fas fa-thermometer-half" />
              </div>
            </button>
          </div>
        </div>
      );
    } else if (defaultMsgProp === "general") {
      projbuttons = (
        <div>
          {switchToProject}
          <div className="float-right">
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("geneFeedback");
              }}
            >
              Feedback&nbsp;
              {/* <div className="float-right">
                <i class="far fa-comment" />
              </div> */}
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("geneConflict");
              }}
            >
              Conflict&nbsp;
              {/* <div className="float-right">
                <i class="fas fa-skull-crossbones" />
              </div> */}
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("geneDecisioning");
              }}
            >
              Decision&nbsp;
              {/* <div className="float-right">
                <i class="fas fa-asterisk" />
              </div> */}
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("geneDocHandling");
              }}
            >
              Document&nbsp;
              {/* <div className="float-right">
                <i className="fas fa-clipboard-list" />
              </div> */}
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("geneIotFeed");
              }}
            >
              IoT Feed&nbsp;
              {/* <div className="float-right">
                <i className="fas fa-pen-fancy" />
              </div> */}
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("geneAssistance");
              }}
            >
              Assistance&nbsp;
              {/* <div className="float-right">
                <i className="fas fa-thermometer-half" />
              </div> */}
            </button>
          </div>
        </div>
      );
    } else {
      // Enable this only when 'new project' button is clicked from SXProjectBody.js
      // if (newProj) {
      projbuttons = (
        <div>
          {switchToGeneral}
          <div className="float-right">
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("projInit");
              }}
            >
              Init&nbsp;
              <div className="float-right">
                <i className="fas fa-paint-brush" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops-inactive"
              // onClick={() => {
              //   this.setSelectedButton('projCosting');
              // }}
            >
              Project&nbsp;
              <div className="float-right">
                <i className="fas fa-clipboard-list" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops-inactive"
              // onClick={() => {
              //   this.setSelectedButton('projTeam');
              // }}
            >
              Team&nbsp;
              <div className="float-right">
                <i className="fab fa-teamspeak" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops-inactive"
              // onClick={() => {
              //   this.setSelectedButton('projTasks');
              // }}
            >
              Tasks&nbsp;
              <div className="float-right">
                <i className="fas fa-tasks" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops-inactive "
              // onClick={() => {
              //   this.setSelectedButton('projUpdates');
              // }}
            >
              Update&nbsp;
              <div className="float-right">
                <i className="fas fa-pen-fancy" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={() => {
                this.setSelectedButton("projStatus");
              }}
            >
              Status&nbsp;
              <div className="float-right">
                <i className="fas fa-thermometer-half" />
              </div>
            </button>
          </div>
        </div>
      );
    }

    let workArea = null;
    if (this.state.defaultlMsgFlag) {
      workArea = (
        <div>
          <DefaultMsg msgType={defaultMsgProp} />
        </div>
      );
    }
    if (this.state.projInit) {
      //console.log('SXProjectbody projInit props:' + JSON.stringify(this.props) + ' |defaultMsgProp:' + defaultMsgProp);
      // This logic needs to be replaced (like many others) by data from DB
      let owner = true;
      if (this.props.msg.id > 0) {
        owner = false;
      }
      workArea = (
        <div>
          <ProjInitiate
            msgType={defaultMsgProp}
            owner={owner}
            propForward={this.props}
          />
        </div>
      );
    }
    // Project Status
    if (this.state.projStatus) {
      workArea = <EngagementStatus thisProject={this.props} />;
    }
    if (this.state.projTeam) {
      workArea = <TeamManagement thisProject={this.props} />;
    }
    if (this.state.projTasks) {
      workArea = <TaskManagement thisProject={this.props} />;
    }
    if (this.state.projUpdates) {
      workArea = <UpdateManagement thisProject={this.props} />;
    } 
    if (this.state.geneAssistance) {
      workArea = <AssistanceMgmt thisProject={this.props} />;
    }
    if (this.state.projecting) {
      workArea = <ProjectingMgmt thisProject={this.props} />;
    } 
    if (this.state.geneFeedback) {
      workArea = <FeedbackMgmt  thisProject={this.props} />;
    }
    if (this.state.geneConflict) {
      workArea = <ConflictMgmt  thisProject={this.props} />;
    } if (this.state.geneDecisioning) {
      workArea = <DecisionMgmt  thisProject={this.props} />;
    } if (this.state.geneDocHandling) {
      workArea = <DioMgmt  thisProject={this.props} />;
    } if (this.state.geneIotFeed) {
      workArea = <IotMgmt  thisProject={this.props} />;
    }
    
    return (
      <div className="container">
        <div className="message-panel-size text-center">{workArea}</div>
        <div className="row">
          <div className="col">{projbuttons}</div>
        </div>
      </div>
    );
  }
}

export default SXProjectBody;
