import React, { Component } from "react";
import Select from "react-select";

import { outcomeDecisionNames } from "./data/outcomeDecisionNames";

const cbtlNoDecision = [
  {
    value: "2001",
    label: "No decisioning event in CBTL"
  }
];

class Outcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoViewOutcome: false,

      outcomeName: "",

      dlName: "",
      dlDecisionType: "",
      dlContext: "",
      dlDescription: "",
      dlSolution: "",
      dlParadigm: "",
      dlDecisionEndDate: "",
      dlPerVoted: 0,
      dlOutcome: 0,
      dlStatus: ""
    };

    this.gotoOutcomeProcess = this.gotoOutcomeProcess.bind(this);
    this.SelectOutcomeName = this.SelectOutcomeName.bind(this);
    this.setLiveDispValues = this.setLiveDispValues.bind(this);
  }

  SelectOutcomeName = (value, { action }) => {
    this.setState({
      outcomeName: value,
      howtoViewOutcome: false
    });
    this.setLiveDispValues(value);
  };

  setLiveDispValues = name => {
    if (name.label === "Curabitur et eleifend") {
      this.setState({
        dlName: "Curabitur et eleifend",
        dlDecisionType: "yesno",
        dlContext: "Vivamus auctor",
        dlDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget sapien arcu. Morbi vel felis eu ex malesuada vulputate. Vestibulum eros lectus, interdum ac leo sodales, vestibulum fringilla magna. Nulla vel ultricies diam. Mauris eu aliquam turpis. Proin elementum purus sit amet tortor fermentum, et finibus velit cursus.",
        dlSolution: "Not yet decided",
        dlParadigm: "peer-to-peer (equals)",
        dlDecisionEndDate: "03-02-2019",
        dlPerVoted: 20,
        dlOutcome: 0,
        dlStatus: "In Progress (Active)"
      });
    } else if (name.label === "Donec aliquam sollicitudin") {
      this.setState({
        dlName: "Donec aliquam sollicitudin",
        dlDecisionType: "multiple",
        dlContext: "Vivamus auctor",
        dlDescription:
          "Donec aliquam sollicitudin odio eu feugiat. Aenean pulvinar sed mauris a condimentum. Fusce felis massa, consequat et ex nec, egestas fringilla nulla. Nullam et pellentesque mauris, accumsan dignissim nunc. Praesent ut lorem fringilla, tincidunt tortor vel, cursus eros.",
        dlSolution: "Not yet decided",
        dlParadigm: "peer-to-peer (Equivalents)",
        dlDecisionEndDate: "03-22-2019",
        dlPerVoted: 25,
        dlOutcome: 0,
        dlStatus: "In Progress (Active)"
      });
    } else {
      this.setState({
        dlName: "Nullam tempor lacus",
        dlDecisionType: "multiple",
        dlContext: "Vivamus auctor",
        dlDescription:
          " Nullam id nulla consectetur lacus consequat ultricies. Quisque quam sapien, posuere et massa sit amet, imperdiet posuere urna.",
        dlSolution:
          "Donec aliquam sollicitudin odio eu feugiat. Aenean pulvinar sed mauris a condimentum. Fusce felis massa, consequat et ex nec, egestas fringilla nulla. Nullam et pellentesque mauris, accumsan dignissim nunc. Praesent ut lorem fringilla, tincidunt tortor vel, cursus eros.",
        dlParadigm: "peer-to-peer (Equivalents)",
        dlDecisionEndDate: "12-31-2018",
        dlPerVoted: 95,
        dlOutcome: 74,
        dlStatus: "Closed - Decision made for the solution"
      });
    }
  };

  gotoOutcomeProcess = value => {
    if (value === "howtoSetup") {
      this.setState({
        howtoViewOutcome: !this.state.howtoViewOutcome
      });
    }
  };

  render() {
    // console.log('this.state: ' + JSON.stringify(this.state));
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;

    let option;
    if (engagementType === "time-based") {
      option = cbtlNoDecision;
    } else {
      option = outcomeDecisionNames;
    }

    // Participation Bar Creation -------------------
    let participationBar, sentStr;
    sentStr = this.state.dlPerVoted;
    let yy = sentStr.toString() + "%";
    let barbg = "progress-bar bg-primary";
    let genStyle = { width: yy };

    participationBar = (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div className="float-right">Perticipation % :</div>
          </div>
          <div className="col-md-6">
            <div className="progress progbar-pad">
              <div
                className={barbg}
                //style={{ width: '70%' }}
                style={genStyle}
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {this.state.dlPerVoted}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="float-left">{this.state.dlPerVoted}</div>
          </div>
        </div>
      </div>
    );
    // Outcome bar creation
    let OutcomeBar;
    let sentStrO = this.state.dlOutcome;
    yy = sentStrO.toString() + "%";
    let barbgO = "progress-bar bg-success";
    let genStyleO = { width: yy };

    OutcomeBar = (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div className="float-right">Outcome with % :</div>
          </div>
          <div className="col-md-6">
            <div className="progress progbar-pad">
              <div
                className={barbgO}
                //style={{ width: '70%' }}
                style={genStyleO}
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {this.state.dlOutcome}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="float-left">{this.state.dlOutcome}</div>
          </div>
        </div>
      </div>
    );
    // Display Body
    let outcomeBody;
    // outcomeBody = (
    //   <div className="view-outcome"> Just Testing</div>
    // )
    outcomeBody = (
      <div className="view-outcome">
        <div className="space-at-top" />
        <div className="row">
          <div className="col-6 text-align-left-sm-docket">
            Name: <b>{this.state.dlName}</b>
          </div>
          <div className="col-6 text-align-left-sm-docket">
            Decision Type: <b>{this.state.dlDecisionType}</b>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-6 text-align-left-sm-docket">
            Context: <b>{this.state.dlContext}</b>
          </div>
          <div className="col-6">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col text-align-left-full-docket">
            Description: <b>{this.state.dlDescription}</b>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-align-left-sm-docket">
            Paradigm: <b>{this.state.dlParadigm}</b>
          </div>
          <div className="col-md-6 text-align-left-sm-docket">
            Decide By: <b>{this.state.dlDecisionEndDate}</b>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col text-align-left-full-docket">
            Solution: <b>{this.state.dlSolution}</b>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col text-align-left-full-docket">
            <b>{participationBar}</b>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col text-align-left-full-docket">
            <b>{OutcomeBar}</b>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col">
            Status: {this.state.dlStatus}
          </div>
        </div>

      </div>
    );

    let howtoReadOutcome;
    if (this.state.howtoViewOutcome) {
      howtoReadOutcome = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              The outcome is delivered in two stage. :
              <ul>
                <li>
                  When the decisioning process is in progress, the only intel
                  you will get is that it is in progress and what percentage of
                  participants has already decided. No additional information is
                  provided to keep decisioning process indpendent of each other.
                </li>
                <li>
                  The other provides a log of all historic outcome that show the
                  problem, the solution taken and the relative margin to
                  decision (if P-2-P).
                </li>
              </ul>
              <p>
                NOTE: This panel does not show the intelligence of the
                individual outcome to overall success of the project or if there
                is a correlation.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      howtoReadOutcome = null;
    }

    let output;
    if (this.state.outcomeName) {
      if (engagementType === "time-based") {
        output = (
          <div>
            <font color="orange" size="3">
              You do not have any decision making role in this (CBTL SM){" "}
            </font>
          </div>
        );
      } else {
        output = outcomeBody;
      }
    } else {
      output = (
        <div>
          <font color="orange" size="3">
            Please select a decision name to view outcome.
          </font>
        </div>
      );
    }

    return (
      <div>
        <div className="form-panel-conflict">
          <div className="text-center">
            <h4>The Outcomes</h4>
            <font color="green">
              <div className="row">
                <div className="col-md-4">
                  <div className="float-left">
                    <button
                      className="btn btn-save-ideation"
                      onClick={() => {
                        this.gotoOutcomeProcess("howtoSetup");
                      }}
                    >
                      How-to-steps
                      <div className="float-right">
                        <i className="fas fa-toggle-off" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-6">
                  <font color="blue">
                    <Select
                      value={this.state.outcomeName}
                      //isMulti
                      autosize={false}
                      options={option}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={this.SelectOutcomeName}
                      maxMenuHeight={150}
                      isSearchable={true}
                      placeholder="Select decsion name"
                    />
                  </font>
                </div>
                <div className="col-md-1">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col">{howtoReadOutcome}</div>
              </div>
            </font>

            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Outcome;
