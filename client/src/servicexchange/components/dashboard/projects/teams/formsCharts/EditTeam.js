import React, { Component } from "react";
import Select from "react-select";
import { teams } from "../data/teams";

class EditTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToEditTeam: false, 
      team: ''
    };

    this.gotoTeamEditPanel = this.gotoTeamEditPanel.bind(this);
  }

  handleSelectTeam = (team, { action }) => {
    //console.log("contracts handleNewMembers: " + JSON.stringify(newMember));
    this.setState({
      team
    });
  };

  gotoTeamEditPanel = value => {
    
    if (value === "editSteps") {
      this.setState({
        howToEditTeam: !this.state.howToEditTeam
      });
    }
  };

  render() {
    let editTeamSteps;

    if (this.state.howToEditTeam) {
      editTeamSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              To Edt a team, select one of your teams you created from the drop-down:
              <ul>
                <li>
                  You will get a summary of teams's taxonomy at this point of time.
                </li>
                <li>
                  You can annex or release members or sub-teams from this team.
                </li>
                <li>
                  You can attach a new-agreement you requested or request for one.
                </li>
              </ul>
              Note: If you release any member and/or the whole team, he/she/they would be notified. The notification will be in their message box.
            </div>
          </div>
        </div>
      );
    } else {
      editTeamSteps = null;
    }

    return (
      <div>
        <div className="form-panel">
          <div className="text-center">
            <h3>Team Edit-Management</h3>

            <div className="row">
              <div className="float-left">
                <button
                  className="btn control-btn-review"
                  onClick={() => {
                    this.gotoTeamEditPanel("editSteps");
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
                <div className="col">{editTeamSteps}</div>
              </div>
          </div>
          <div className="space-between-rows" />
            <div className="space-between-rows" />
            <div className="row">
              <div className="col-md-6">
                <font color="#293087">
                  <Select
                    value={this.state.tean}
                    //isMulti
                    options={teams}
                    //className="basic-multi-select"
                    classNamePrefix="select a team"
                    onChange={this.handleSelectTeam}
                    maxMenuHeight={150}
                    placeholder="Select team to edit..."
                  />
                </font>
              </div>
              <div className="col-md-6">
                <div className="float-left">
                  <font color="#e0c38d">Select a team for editing.</font>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default EditTeam;
