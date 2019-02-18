import React, { Component } from "react";
import Select from "react-select";
import TextFieldGroup from "../../../../../../../src/utils/TextFieldGroup";

// Data
import { membersForTeamCreation } from "../data/membersForTeamCreation";
import { roleObjectives } from "../data/roleObjectives";
import { specialContract } from "../data/specialContract";
import { teams } from "../data/teams";

import "../teams.css";

class CreateTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToCreateTeam: false,
      newMember: [],
      memberRoles: [],
      specifiContract: "",
      teamName: "",
      subTeam: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.gotoTeamCreatePanel = this.gotoTeamCreatePanel.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      'Eventually -- When you click this, your work will be saved in database. This will instantly be notified as message to the recipient. Once he/she accepts, the contract will appear in your "Agreement" office/button at the Lobby. You will also be notified of recipients actions.'
    );
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  handleNewMember = (newMember, { action }) => {
    //console.log("contracts handleNewMembers: " + JSON.stringify(newMember));
    this.setState({
      newMember
    });
  };

  handleNewSubteam = (subTeam, { action }) => {
    //console.log("contracts handleNewMembers: " + JSON.stringify(newMember));
    this.setState({
      subTeam
    });
  };

  handleMemberToRole = (memberRoles, { action }) => {
    // console.log(
    //   "contracts handleMemberToRoles : " + JSON.stringify(memberRoles)
    // );
    this.setState({
      memberRoles
    });
  };

  handleNewContract = (contracts, { action }) => {
    //console.log("contracts handleNewContract: " + JSON.stringify(contracts));
    this.setState({
      specifiContract: contracts
    });
  };

  gotoTeamCreatePanel = value => {
    // console.log("got here :" + value);
    // for (let name in this.state) {
    //   if (name !== value) {
    //     this.setState({
    //       [name]: false
    //     });
    //   } else {
    //     this.setState({
    //       [name]: true
    //     });
    //   }
    // }
    if (value === "createSteps") {
      this.setState({
        howToCreateTeam: !this.state.howToCreateTeam
      });
    }
  };

  render() {
    // console.log('CreateTeam this.props :' + JSON.stringify(this.props));
    // console.log("CreateTeam this.props.propsForward.thisProject.msg.engagementType : " +
    // this.props.propsForward.thisProject.msg.engagementType);

    const engagementType = this.props.propsForward.thisProject.msg
      .engagementType;

    const { memberRoles } = this.state;
    let createTeamSteps;

    if (this.state.howToCreateTeam) {
      createTeamSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              To find someone in the dropdown to annex him/her to your team you
              must have:
              <ul>
                <li>
                  Created a POST with Service Request for project, co-op etc.
                </li>
                <li>
                  You have shown mutual interst in working with each other.
                </li>
                <li>
                  You have come to a baseline team-agreement to work together
                </li>
              </ul>
              There may be additional agreements for a specific task for
              involvement with the project. The specific agreement will override
              the general one for the context (e.g. rate, travel-required etc.)
              may be specific.
              <ul>
                <li>Define a unique name for the team you are creating</li>
                <li>Select members from the drop down to be a part of the team</li>
                <li>Select a set of sub-teams (if required/needed)</li>
                <li>
                  Associate teams objective (mission)
                </li>
                <li>
                  Attach team-level agreement or request one as a task.
                </li>
                <li>
                  Click 'Save' to save the configuration. You can edit/modify via Edit button later on.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      createTeamSteps = null;
    }

    let createTeamBody;
    if (engagementType === "time-based") {
      createTeamBody = (
        <div>
          <div className="space-outside-buttons" />
          <div className="space-outside-buttons" />
          <div className="text-center how-to-create-team">
            <font color="">
              You have been inducted in the team by the manager. Since you are
              joining as barrista (time-based) and not the manager, you do not
              get to build teams.
            </font>
          </div>
        </div>
      );
    } else {
      createTeamBody = (
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="space-between-rows" />
            <div className="space-between-rows" />
            <div className="row">
              <div className="col-md-6">
                <TextFieldGroup
                  name="teamName"
                  placeholder="Enter a team name"
                  value={this.state.teamName}
                  onChange={this.onChange}
                  //error={errors.newName}
                  info="Enter a unique team name you are creating..."
                />
              </div>
              <div className="space-between-rows" />
              <div className="col-md-6">
                <div className="float-left">
                  <font color="#e0c38d">
                    A team-name for team-level interaction.{" "}
                  </font>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <font color="#293087">
                  <Select
                    value={this.state.newMember}
                    isMulti
                    options={membersForTeamCreation}
                    //className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleNewMember}
                    maxMenuHeight={150}
                    placeholder="Select team member (if any)"
                  />
                </font>
              </div>
              <div className="col-md-6">
                <div className="float-left">
                  <font color="#e0c38d">Select members from the list.</font>
                </div>
              </div>
            </div>
            <div className="space-between-rows" />
            <div className="space-between-rows" />
            <div className="row">
              <div className="col-md-6">
                <font color="#293087">
                  <Select
                    value={this.state.subTeam}
                    isMulti
                    options={teams}
                    //className="basic-multi-select"
                    classNamePrefix="select sub-teams"
                    onChange={this.handleNewSubteam}
                    maxMenuHeight={150}
                    placeholder="Select subteams (if any)..."
                  />
                </font>
              </div>
              <div className="col-md-6">
                <div className="float-left">
                  <font color="#e0c38d">Select sub-teams from the list.</font>
                </div>
              </div>
            </div>
            <div className="space-between-rows" />
            <div className="space-between-rows" />
            <div className="row">
              <div className="col-md-6">
                <font color="#293087">
                  <Select
                    value={memberRoles}
                    isMulti
                    options={roleObjectives}
                    // className="basic-multi-select"
                    classNamePrefix="select roles/objectives"
                    onChange={this.handleMemberToRole}
                    maxMenuHeight={150}
                    placeholder="Select one or more roles..."
                  />
                </font>
              </div>
              <div className="col-md-6">
                <font color="#e0c38d">
                  <div className="float-left">
                    Associate roles and/or objective of the team.
                  </div>
                </font>
              </div>
            </div>
            <div className="space-between-rows" />
            <div className="space-between-rows" />
            <div className="row">
              <div className="col-md-6">
                <font color="#293087">
                  <Select
                    value={this.state.specifiContract}
                    //isMulti
                    options={specialContract}
                    //className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleNewContract}
                    maxMenuHeight={150}
                    placeholder="Associate/request a contract"
                  />
                </font>
              </div>
              <div className="col-md-6">
                <div className="float-left">
                  <font color="#e0c38d">
                    Select a contract from the list or request one.
                  </font>
                </div>
              </div>
            </div>
            <div className="space-between-rows" />
            <div className="space-between-rows" />
            <div className="row">
              <div className="col">
                <div className="float-right">
                  <button
                    className="btn control-btn-team-save"
                    onClick={this.handleSaveClick}
                  >
                    Create & Request &nbsp;
                    {/* <i className="far fa-calendar-plus float-right" /> */}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div>
        <div className="form-panel-create-team">
          <div className="text-center">
            <h3>Team Creation</h3>
            <font color="green">
              <div className="row">
                <div className="float-left">
                  <button
                    className="btn control-btn-review"
                    onClick={() => {
                      this.gotoTeamCreatePanel("createSteps");
                    }}
                  >
                    Create Steps On/Off
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                  &nbsp;{" "}
                  <font color="white">
                    Click to review or close the creation steps.
                  </font>
                </div>
              </div>
              <div className="row">
                <div className="col">{createTeamSteps}</div>
              </div>
            </font>
            {createTeamBody}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTeam;
