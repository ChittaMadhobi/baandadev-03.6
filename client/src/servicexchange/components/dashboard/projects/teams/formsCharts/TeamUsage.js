import React, { Component } from "react";
import Select from "react-select";

import { teamsForArtGallery } from "../data/teamsForArtGallery";

import "../teams.css";

import fusioncharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import { teamRootArtGallery } from "../data/teamRootArtGallery";
import { teamWolves } from "../data/teamWolves";
import { teamElephant } from "../data/teamElephant";
import { teamHawks } from "../data/teamHawks";
import { teamHippos } from "../data/teamHippos";
import { teamMembersOnly } from "../data/teamMembersOnly";

// Resolves charts dependancy
charts(fusioncharts);

//import { teams } from "../data/teams";

class TeamUsage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //howToEditTeam: false,
      team: {
        value: "100",
        label: "Root Art-Gallery",
        color: "#FF8B00"
      }
    };

    this.handleSelectTeam = this.handleSelectTeam.bind(this);
  }

  handleSelectTeam = (team, { action }) => {
    this.setState({
      team
    });
  };

  render() {
    //console.log('team selected : ' + JSON.stringify(this.state.team));
    // console.log(
    //   "props : " + JSON.stringify(this.props.propsForward.thisProject.msg)
    // );

    const { engagementType } = this.props.propsForward.thisProject.msg;

    let dataSource;

    if (this.state.team.label === "Root Art-Gallery") {
      dataSource = teamRootArtGallery;
    } else if (this.state.team.label === "Elephants") {
      dataSource = teamElephant;
    } else if (this.state.team.label === "Wolves") {
      dataSource = teamWolves;
    } else if (this.state.team.label === "Hawks") {
      dataSource = teamHawks;
    } else if (this.state.team.label === "Hippos") {
      dataSource = teamHippos;
    } else if (this.state.team.label === "Members-only") {
      dataSource = teamMembersOnly;
    } else {
      dataSource = null;
    }

    let piChart;
    piChart = (
      <div>
        <ReactFusioncharts
          type="doughnut3d"
          width="100%"
          height="100%"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </div>
    );

    let selectOutput;
    selectOutput = (
      <div>
        <div className="row">
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.team}
                //selectedValue={this.state.team}
                options={teamsForArtGallery}
                classNamePrefix="select a team"
                onChange={this.handleSelectTeam}
                maxMenuHeight={150}
                placeholder="Select a team ..."
              />
            </font>
          </div>
          <div className="col-md-6">
            <div className="float-left">
              <font color="#e0c38d">
                Select a team for usage metric (default - Root)
              </font>
            </div>
          </div>
        </div>
      </div>
    );

    if (engagementType === "time-based") {
      selectOutput = (
        <div>
          <div className="space-outside-buttons" />
          <div className="space-outside-buttons" />
          <div className="text-center how-to-create-team">
            <font color="">
              You have been inducted in the team by the CBTL manager. Since you
              are joining as barrista (time-based) and not the manager of
              project or co-op, you do not get to build teams, do allocations pr
              see usage. That is, based on your role and authorization, various
              operations will be enabled, disabled, or contextually modified.
            </font>
          </div>
        </div>
      );
      piChart = null;
    } else {
      selectOutput = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <font color="#293087">
                <Select
                  value={this.state.team}
                  //selectedValue={this.state.team}
                  options={teamsForArtGallery}
                  classNamePrefix="select a team"
                  onChange={this.handleSelectTeam}
                  maxMenuHeight={150}
                  placeholder="Select a team ..."
                />
              </font>
            </div>
            <div className="col-md-6">
              <div className="float-left">
                <font color="#e0c38d">
                  Select a team for usage metric (default - Root)
                </font>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>
          <font color="white">
            <h3>Team Usage</h3>
          </font>
          {selectOutput}
        </div>
        {piChart}
      </div>
    );
  }
}

export default TeamUsage;
