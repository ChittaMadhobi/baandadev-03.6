import React, { Component } from "react";
import Select from "react-select";

import fusioncharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import { cbtlIntel } from "./data/cbtlIntel";

import { pastConflicts } from "./data/pastConflicts";
import { intelLog } from "./data/intelLog";

// Resolves charts dependancy
charts(fusioncharts);

class ConflictIntel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToIntelUse: false,
      intel: false,
      logs: false,

      selectedConflict: ""
    };

    this.selectOperation = this.selectOperation.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
  }

  handleChangeTarget = (value, { action }) => {
    this.setState({
      selectedConflict: value
    });
  };

  selectOperation = value => {
    if (value === "intel") {
      this.setState({
        howToIntelUse: false,
        intel: true,
        logs: false
      });
    } else if (value === "logs") {
      this.setState({
        howToIntelUse: false,
        intel: false,
        logs: true
      });
    } else if (value === "howTo") {
      this.setState({
        howToIntelUse: true,
        intel: false,
        logs: false
      });
    }
  };

  render() {
    //let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    //let option;
    // if (engagementType === "time-based") {
    //   option = cbtlMembers;
    // } else {
    //   option = artGalleryMembers;
    // }

    let output, dataSource;

    dataSource = cbtlIntel;

    let intelGraph;

    intelGraph = (
      <div>
        <div className="chart-panel-feedback">
          <ReactFusioncharts
            type="scrollline2d"
            width="100%"
            height="100%"
            dataFormat="JSON"
            dataSource={dataSource}
          />
        </div>
        {/* <div className="row">
          <div className="col text-align-left-full">
             Note: Check incidents of sudden sentiment flux (from view logs) to learn for future.  
          </div>
        </div> */}
      </div>
    );

    let howToPanel;
    if (this.state.howToIntelUse) {
      howToPanel = (
        <div>
          <div className="row">
            <div className="how-to-read-intel">
              <p>Select a past conflict name from the drop down.</p>
              <p>
                Click TrendFlux to check sentiment trends associated with
                various events on that event.
              </p>
              <p>
                Click View Log to see details of the events and you can
                associated that with Sentiment Trends.
              </p>
            </div>
          </div>
        </div>
      );
    }

    let viewLogs;

    viewLogs = (
      <div>
        <div className="row">
          <div className="col">
            <div className="text-align-left-full">
              Against: <font color="black">Mercus Orilius</font>&nbsp;&nbsp;
              Witness: <font color="black">Sapho De Lesbos</font>
            </div>
          </div>
        </div>
        <div className="align-left">
          {intelLog.map(obj => {
            return (
              <div key={obj.seqNo}>
                <div className="row">
                  <div className="col">
                    <div className="edit-log-lines">
                      Log Date: <b>{obj.logDate}</b>
                      <br />
                      Description / Advice :{" "}
                      <font color="#3e5584">
                        <b>{obj.description}</b>
                      </font>
                      <br />
                      Incident:{" "}
                      <font color="#3e5584">
                        <b>{obj.incident}</b>
                      </font>
                      <br />
                      Your Sentiment:&nbsp;<b>{obj.yourSentiment}</b>{" "}
                      &nbsp;&nbsp;&nbsp; Team Sentiment:&nbsp;
                      <b>{obj.teamSentiment}</b>
                    </div>
                  </div>
                </div>
                <div className="space-between-rows" />
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );

    let noPastConflictSelectMsg = (
      <div>
        <font color="orange" fontSize="3">
          Please select a past conflict name to proceed.
        </font>
      </div>
    );
    if (this.state.intel) {
      if (this.state.selectedConflict) {
        output = intelGraph;
      } else {
        output = noPastConflictSelectMsg;
      }
    } else if (this.state.logs) {
      if (this.state.selectedConflict) {
        output = <div className="view-log">{viewLogs}</div>;
      } else {
        output = noPastConflictSelectMsg;
      }
    } else if (this.state.howToIntelUse) {
      output = howToPanel;
    } else {
      output = (
        <div>
          <font color="lightblue" fontSize="3">
            Please select a past conflict name and select operation to proceed.
          </font>
        </div>
      );
    }

    return (
      <div className="form-panel-create-team">
        <font color="lightblue">
          <h4>Conflict Intel</h4>
        </font>
        <div className="row">
          <div className="col-md-3">
            <div className="float-left">
              <button
                className="btn btn-save-ideation"
                onClick={() => {
                  this.selectOperation("howTo");
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
                  options={pastConflicts}
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
                  this.selectOperation("intel");
                }}
              >
                TrendFlux
                <div className="float-right">
                  <i className="fas fa-chess-bishop" />
                </div>
              </button>{" "}
              <button
                className="btn btn-target-feedback"
                onClick={() => {
                  this.selectOperation("logs");
                }}
              >
                View Log
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
    );
  }
}

export default ConflictIntel;
