import React, { Component } from "react";

import "./teams.css";
import RoleMgmt from './formsCharts/RoleMgmt';
import CreateTeam from './formsCharts/CreateTeam';
import EditTeam from './formsCharts/EditTeam';
import TreeD3 from './formsCharts/TreeD3';
import TeamAllocation from './formsCharts/TeamAllocation';
import TeamUsage from './formsCharts/TeamUsage';

class TeamManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roleMgmt: false,
      createTeam: false,
      treeView: false,
      teamUsage: false,
      memberEffort: false
    };

    this.gotoTeamMgmtPanel = this.gotoTeamMgmtPanel.bind(this);
  }

  gotoTeamMgmtPanel = value => {
    //console.log("got here :" + value);
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
  };

  render() {
    let workarea;
    let defaultMsg;
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

    let controlBar = (
      <div className="text-center ctrl-panel-x">
        <div className="space-at-top" />
        <h4>
          <div className="header-shadow">
            <b>
              <font color="#cbd8ed">Team Management</font>
            </b>
          </div>
        </h4>

        <div className="space-at-top" />

        <div className="text-center">
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.gotoTeamMgmtPanel("roleMgmt");
            }}
          >
            Role Mgmt.
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.gotoTeamMgmtPanel("createTeam");
            }}
          >
            Create Team
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.gotoTeamMgmtPanel("memberEffort");
            }}
          >
            Allocation
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.gotoTeamMgmtPanel("treeView");
            }}
          >
            Tree View
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.gotoTeamMgmtPanel("teamUsage");
            }}
          >
            Team Usage
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <div className="row">
            <div className="col-1">&nbsp;</div>
            <div className="col-10">
              <div className="text-center vedio-msg">
                Click the option to work on a context.
              </div>
            </div>
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      </div>
    );

    if ( this.state.roleMgmt){
      workarea = (<RoleMgmt propsForward={this.props} />);
    } else if ( this.state.createTeam) {
      workarea = (<CreateTeam  propsForward={this.props}/>);
    } else if ( this.state.editTeam) {
      workarea = (<EditTeam  propsForward={this.props}/>);
    } else if ( this.state.treeView) {
      workarea = (<TreeD3 propsForward={this.props}/>);
    } else if ( this.state.memberEffort) {
      workarea = (<TeamAllocation propsForward={this.props}/>);
    } else if ( this.state.teamUsage) {
      workarea = (<TeamUsage propsForward={this.props}/>);
    }
     else {
      workarea = defaultMsg;
    }
    

    return (
      <div className="container the-box-background">
        <div ref="app">
          <div className="text-center">
            <div className="row">
              <div className="col-md-4 col-sm-6">{controlBar}</div>
              <div className="col-md-8 col-sm-6">
                <div className="chart-panel">{workarea}</div>
                {/* {speakout} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamManagement;
