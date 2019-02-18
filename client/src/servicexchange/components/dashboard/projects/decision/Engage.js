import React, { Component } from "react";
import Select from "react-select";

import { decisionNameOptions } from "./data/decisionNameOptions";

import { activeDocket1 } from "./data/activeDocket1";
import { activeDocket2 } from "./data/activeDocket2";

const noRequest = [
  {
    value: "9999",
    label: "No participation request"
  }
];

class Engage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoEngage: false,
      decisionName: "",
      participate: "",
      decision: ""
    };

    this.gotoEngageProcess = this.gotoEngageProcess.bind(this);
    this.SelectDecisionName = this.SelectDecisionName.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "This is a UX or usability experience. When you click this in production, your decision will be saved and accounted for. If you have opted not to participate, then even if you vote, your vote will not be counted. Be careful to check Yes to participate in you want to be a decider."
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  gotoEngageProcess = value => {
    if (value === "howtoSetup") {
      this.setState({
        howtoEngage: !this.state.howtoEngage,
        decisionName: ""
      });
    }
  };

  SelectDecisionName = (value, { action }) => {
    this.setState({
      decisionName: value,
      howtoEngage: false
    });
    // this.setWipValues("xx");
  };

  render() {
    //console.log("this.state:" + JSON.stringify(this.state));
    //console.log('this.props:' + JSON.stringify(this.props));
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let option;
    let showDocket;

    if (engagementType !== "time-based") {
      option = decisionNameOptions;
      if (this.state.decisionName) {
        //console.log ('inside this.state.decisionName:' + this.state.decisionName.label);
        if (this.state.decisionName.label === "Curabitur et eleifend") {
          showDocket = (
            <div className="view-docket">
              <div className="row">
                <div className="col-6 text-align-left-sm-docket">
                  Name: <b>{activeDocket1.decisionName}</b>
                </div>
                <div className="col-6 text-align-left-sm-docket">
                  Decision Type: <b>{activeDocket1.decisionType}</b>
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-align-left-sm-docket">
                  Context: <b>{activeDocket1.domainContext}</b>
                </div>
                <div className="col-6">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col text-align-left-full-docket">
                  Description: <b>{activeDocket1.description}</b>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 text-align-left-sm-docket">
                  Paradigm: <b>{activeDocket1.paradigm}</b>
                </div>
                <div className="col-md-6 text-align-left-sm-docket">
                  Decide By: <b>{activeDocket1.decidedBy}</b>
                </div>
              </div>
              <hr className="dark" />
              <div>
                {activeDocket1.docket.map(obj => {
                  return (
                    <div key={obj.seqNo}>
                      <div className="row">
                        <div className="col text-align-left-full-docket">
                          Solution: <b>{obj.solution}</b>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 text-align-left-sm-docket">
                          Pro (Advantages) :{" "}
                          <font color="green">
                            <b>{obj.pros}</b>
                          </font>
                        </div>
                        <div className="col-md-6 text-align-left-sm-docket">
                          Cons (Disadvantages) :{" "}
                          <font color="red">
                            <b>{obj.cons}</b>
                          </font>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 text-align-left-sm-docket">
                          Cost Estimate : <b>{obj.costEstimate}</b> &nbsp;$
                        </div>
                        <div className="col-md-6 text-align-left-sm-docket">
                          Time Estimate : <b>{obj.timeEstimate}</b> &nbsp;days
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        } else {
          showDocket = (
            <div className="view-docket">
              <div className="row">
                <div className="col-6 text-align-left-sm-docket">
                  Name: <b>{activeDocket2.decisionName}</b>
                </div>
                <div className="col-6 text-align-left-sm-docket">
                  Decision Type: <b>{activeDocket2.decisionType}</b>
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-align-left-sm-docket">
                  Context: <b>{activeDocket2.domainContext}</b>
                </div>
                <div className="col-6">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col text-align-left-full-docket">
                  Description: <b>{activeDocket2.description}</b>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 text-align-left-sm-docket">
                  Paradigm: <b>{activeDocket2.paradigm}</b>
                </div>
                <div className="col-md-6 text-align-left-sm-docket">
                  Decide By: <b>{activeDocket2.decidedBy}</b>
                </div>
              </div>
              <hr className="dark" />
              <div>
                {activeDocket2.docket.map(obj => {
                  return (
                    <div key={obj.seqNo}>
                      <div className="row">
                        <div className="col text-align-left-full-docket">
                          Solution-{obj.seqNo}: <b>{obj.solution}</b>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 text-align-left-sm-docket">
                          Pro (Advantages) :{" "}
                          <font color="green">
                            <b>{obj.pros}</b>
                          </font>
                        </div>
                        <div className="col-md-6 text-align-left-sm-docket">
                          Cons (Disadvantages) :{" "}
                          <font color="red">
                            <b>{obj.cons}</b>
                          </font>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 text-align-left-sm-docket">
                          Cost Estimate : <b>{obj.costEstimate}</b> &nbsp;$
                        </div>
                        <div className="col-md-6 text-align-left-sm-docket">
                          Time Estimate : <b>{obj.timeEstimate}</b> &nbsp;days
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      } else {
        showDocket = (
          <div>
            <font color="orange" size="3">
              Please select a decsion name to engage in decisioning.
            </font>
          </div>
        );
      }
    } else {
      // option = {
      //   value: '9999',
      //   label: 'No participation request'
      // };
      option = noRequest;
      showDocket = (
        <div>
          <font color="orange" size="3">
            In CBTL, you have not been asked to participate in making any
            decision.
          </font>
        </div>
      );
    }

    let howtoEngageSteps;
    if (this.state.howtoEngage) {
      howtoEngageSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              This is not a forum for solving an issue. This is a forum to take
              a decision towards a solution, among solutions, that has
              transpired. There are two ways of taking solution. They are:
              <ul>
                <li>Yea or Ney towards a solution or decision</li>
                <li>
                  Decide among few alternative options and decide which way to
                  go.
                </li>
              </ul>
              <p>
                NOTE: In this UX-demo version, one can select any decision
                paradigm. In production, this would be controlled by or
                defaulted to per agreement setup during projectization. For
                example, if the contract is that of peer-to-peer equivalency
                based decision process then other options may not be visible.
                If, in the contract, there are exceptions in equivalncy P-2-P
                contract, then p-2-p equal may be available.
              </p>
              <p>
                ** You can also opt to not participate or vote if you are
                either unsure or want to abstain for some reason. If you do not
                respond at all, it may eventually effect your DCCS/Equivalency
                score (e.g. like opening of lots of bank/CC accout adversely
                effect one's credit score).
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      howtoEngageSteps = null;
    }

    let participate;
    participate = (
      <div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-6">
            <strong>Want to participate: &nbsp;</strong>
            <font color="lightyellow">
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="participate"
                    id="participate1"
                    value="yes"
                    onChange={this.onChange}
                  />{" "}
                  Yes?
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="participate"
                    id="participate2"
                    value="no"
                    onChange={this.onChange}
                  />{" "}
                  No?
                </label>
              </div>
            </font>
          </div>
          <div className="col-md-6">&nbsp;</div>
        </div>
      </div>
    );

    let decisionChoice;
    if (this.state.decisionName.label === "Curabitur et eleifend") {
      decisionChoice = (
        <div>
          {/* <div className="textspaceTop" /> */}
          <div className="row">
            <div className="col-6">
              <strong>Go forward: &nbsp;</strong>
              <font color="lightyellow">
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="decision"
                      id="participate1"
                      value="yes"
                      onChange={this.onChange}
                    />{" "}
                    Yes?
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="decision"
                      id="participate2"
                      value="no"
                      onChange={this.onChange}
                    />{" "}
                    No?
                  </label>
                </div>
              </font>
            </div>
            <div className="col-md-6">
              <div className="float-right">
                <button
                  className="btn-check-ideation"
                  onClick={this.handleSaveClick}
                >
                  Save Decision &nbsp;
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
      decisionChoice = (
        <div>
          {/* <div className="textspaceTop" /> */}
          <div className="row">
            <div className="col-6">
              <strong>Your Choice: &nbsp;</strong>
              <font color="lightyellow">
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="decision"
                      id="participate1"
                      value="yes"
                      onChange={this.onChange}
                    />{" "}
                    Solution-1
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="decision"
                      id="participate2"
                      value="no"
                      onChange={this.onChange}
                    />{" "}
                    Solution-2
                  </label>
                </div>
              </font>
            </div>
            <div className="col-md-6">
              <div className="float-right">
                <button
                  className="btn-check-ideation"
                  onClick={this.handleSaveClick}
                >
                  Save Decision &nbsp;
                  <div className="float-right">
                    <i className="fa fa-check" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    let output;

    if (this.state.decisionName) {
      output = (
        <div>
          <div>{showDocket}</div>
          <div>{participate}</div>
          <div>{decisionChoice}</div>
        </div>
      );
    } else {
      output = <div>{showDocket}</div>;
    }

    return (
      <div>
        <div className="form-panel-conflict">
          <div className="text-center">
            <h4>Engage in Decisioning</h4>
            <font color="green">
              <div className="row">
                <div className="col-md-4">
                  <div className="float-left">
                    <button
                      className="btn btn-save-ideation"
                      onClick={() => {
                        this.gotoEngageProcess("howtoSetup");
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
                      value={this.state.wipDecisionName}
                      //isMulti
                      autosize={false}
                      options={option}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={this.SelectDecisionName}
                      maxMenuHeight={150}
                      isSearchable={true}
                      placeholder="Select WIP decsion name"
                    />
                  </font>
                </div>
                <div className="col-md-1">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col">{howtoEngageSteps}</div>
              </div>
            </font>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Engage;
