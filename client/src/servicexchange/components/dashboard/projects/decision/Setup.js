import React, { Component } from "react";

import Select from "react-select";
import TextFieldGroup from "../../../../../utils/TextFieldGroup";
import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import CurrencyInput from "react-currency-input";
import InputNumber from "react-input-just-numbers";

import { frameitWIP } from "./data/frameitWIP";
import { decisionRolesArtGallery } from "./data/decisionRolesArtGallery";
import { decisionRolesCBTL } from "./data/decisionRolesCBTL";
import { decisionDomainArtGallery } from "./data/decisionDomainArtGallery";
import { decisionDomainCBTL } from "./data/decisionDomainCBTL";
import { decisionParadigm } from "./data/decisionParadigm";
import { decisionMakerArtGallery } from "./data/decisionMakerArtGallery";
import { decisionMakerCbtl } from "./data/decisionMakerCbtl";

class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoSetup: false,
      framing: false,
      docket: false,

      decisionName: "",
      wipDecisionName: "",
      roles: [],
      decisionDomain: "",
      decisionParadigm: "",
      decisionMakers: [],
      decisionType: "",

      solution1: "",
      solution1Pro: "",
      costEstimate1: 0.0,
      timeEstimate1: 0,
      solution1Con: "",
      solution2: "",
      solution2Pro: "",
      solution2Con: "",
      costEstimate2: 0.0,
      timeEstimate2: 0,
      decideBy: moment(),
      problemToSolve: "",

      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.gotoSetupProcess = this.gotoSetupProcess.bind(this);
    this.selectOperation = this.selectOperation.bind(this);
    this.handleResolveName = this.handleResolveName.bind(this);
    this.handleNotifyTo = this.handleNotifyTo.bind(this);
    this.handleDecisionParadigm = this.handleDecisionParadigm.bind(this);
    this.handleDecisionMakers = this.handleDecisionMakers.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleSaveClickNotify = this.handleSaveClickNotify.bind(this);
    this.setWipValues = this.setWipValues.bind(this);
    this.handleChangeCost1 = this.handleChangeCost1.bind(this);
    this.handleChangeCost2 = this.handleChangeCost2.bind(this);
    this.handleChangeTimeEstimate = this.handleChangeTimeEstimate.bind(this);

  }


  handleChangeTimeEstimate = (e, name) => {
    this.setState({
      [name]: e.target.value
    });
  };


  handleChangeCost1 = (event, maskedvalue, floatvalue, name) => {
    this.setState({
      costEstimate1: maskedvalue
    });
  };

  handleChangeCost2 = (event, maskedvalue, floatvalue, name) => {
    this.setState({
      costEstimate2: maskedvalue
    });
  };

  handleChange = date => {
    this.setState({
      decideBy: date
    });
  };

  setWipValues = inp => {
    this.setState({
      decisionName: "consectetur adipiscing",
      decisionParadigm: {
        value: "2002",
        label: "Peer-to-peer (Equals)"
      },
      decisionDomain: {
        value: "2001",
        label: "Exhibition Theme"
      }
    });
  };

  handleSaveClick() {
    alert(
      "This is a UX or usability experience. When you clicked 'WIP Save' it will save as work-in-progress. Until the Docket containing the specifics of decision is done (Docket button) this will not be notified."
    );
  }

  handleSaveClickNotify() {
    alert(
      "This is a UX or usability experience. When you click Freeze-Notify, system will save the docket, notify the people yu have chosen  and switch to Engage mode. After this it will be available in Engage panel for people to act on for taking a decision."
    );
  }

  handleNotifyTo = (roles, { action }) => {
    this.setState({
      roles
    });
  };

  handleDecisionMakers = (decisionMakers, { action }) => {
    this.setState({
      decisionMakers
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleResolveName = (value, { action }) => {
    this.setState({
      wipDecisionName: value
    });
    this.setWipValues("xx");
  };

  handleDecisionParadigm = (decisionParadigm, { action }) => {
    this.setState({
      decisionParadigm
    });
  };

  handleDecisionDomain = (decisionDomain, { action }) => {
    this.setState({
      decisionDomain
    });
  };

  selectOperation = value => {
    if (value === "framing") {
      this.setState({
        howtoSetup: false,
        framing: true,
        docket: false
      });
    } else if (value === "docket") {
      this.setState({
        howtoSetup: false,
        framing: false,
        docket: true
      });
    }
  };

  gotoSetupProcess = value => {
    if (value === "howtoSetup") {
      this.setState({
        howtoSetup: !this.state.howtoSetup,
        framing: false,
        docket: false
      });
    }
  };

  render() {
    //console.log("this-state:" + JSON.stringify(this.state));
    const { errors } = this.state;

    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let setupoption, roleOption, decisionOption, decisionMakerOptions;
    if (engagementType === "time-based") {
      roleOption = decisionRolesCBTL;
      decisionOption = decisionDomainCBTL;
      decisionMakerOptions = decisionMakerCbtl;
      setupoption = null;
    } else {
      roleOption = decisionRolesArtGallery;
      decisionOption = decisionDomainArtGallery;
      decisionMakerOptions = decisionMakerArtGallery;
      setupoption = frameitWIP;
    }

    let wipsetup;
    if (setupoption) {
      wipsetup = (
        <div>
          <div className="justify-content-md-left">
            <font color="blue">
              <Select
                value={this.state.wipDecisionName}
                //isMulti
                autosize={false}
                options={setupoption}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleResolveName}
                maxMenuHeight={150}
                isSearchable={true}
                placeholder="Select WIP decsion name"
              />
            </font>
          </div>
        </div>
      );
    } else {
      wipsetup = (
        <div className="justify-content-md-left">
          <font color="orange">
            <p>
              There is no decision WIP (work in progress) at this time for this
              engagement.
            </p>
          </font>
        </div>
      );
    }

    let frameitBody;
    frameitBody = (
      <div>
        <div className="textspaceTop" />
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-md-6">
            <div className="text-align-left-sm">
              Enter a decision name for reference ... OR
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-align-left-sm">
              Select a name to edit-change
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              name="decisionName"
              placeholder="Enter a decision-process name ..."
              value={this.state.decisionName}
              onChange={this.onChange}
              error={errors.decisionName}
              info="Enter a decision-process Name ..."
            />
          </div>
          <div className="col-md-6">{wipsetup}</div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-md-6">
            <div className="text-align-left-sm">
              Include Roles from drop-down below
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-align-left-sm">
              Select a Domain from drop-down below
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="justify-content-md-left">
              <font color="blue">
                <Select
                  value={this.state.roles}
                  isMulti
                  autosize={false}
                  options={roleOption}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleNotifyTo}
                  maxMenuHeight={150}
                  //isSearchable={true}
                  placeholder="Select roles to include"
                />
              </font>
            </div>
          </div>
          <div className="col-md-6">
            <div className="justify-content-md-left">
              <font color="blue">
                <Select
                  value={this.state.decisionDomain}
                  //isMulti
                  autosize={false}
                  options={decisionOption}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleDecisionDomain}
                  maxMenuHeight={150}
                  isSearchable={true}
                  placeholder="Select a decision domain or Context"
                />
              </font>
            </div>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col">
            <strong>Decision type: &nbsp;</strong>
            <font color="lightyellow">
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="decisionType"
                    id="decisionType1"
                    value="yesno"
                    //onChange={this.handleDecisiontype}
                    onChange={this.onChange}
                  />{" "}
                  Yes/No
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="decisionType"
                    id="decisionType2"
                    value="multiple"
                    //onChange={this.handleDecisiontype}
                    onChange={this.onChange}
                  />{" "}
                  Select one from few solutions
                </label>
              </div>
            </font>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-md-6">
            <div className="text-align-left-sm">
              Select decision paradigm type
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-align-left-sm">
              Select participants for decision/opinion
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="justify-content-md-left">
              <font color="blue">
                <Select
                  value={this.state.decisionParadigm}
                  //isMulti
                  autosize={false}
                  options={decisionParadigm}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleDecisionParadigm}
                  maxMenuHeight={100}
                  isSearchable={true}
                  placeholder="Select decision paradigm"
                />
              </font>
            </div>
          </div>
          <div className="col-md-6">
            <div className="justify-content-md-left">
              <font color="blue">
                <Select
                  value={this.state.decisionMakers}
                  isMulti
                  autosize={false}
                  options={decisionMakerOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleDecisionMakers}
                  maxMenuHeight={100}
                  isSearchable={true}
                  placeholder="Select desiders/participants"
                />
              </font>
            </div>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="textspaceTop" />
        <div className="row">
          <div className="col">
            <div className="float-right">
              <button
                className="btn-check-ideation"
                onClick={this.handleSaveClick}
              >
                Save (WIP) &nbsp;
                <div className="float-right">
                  <i className="fa fa-check" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    let setupSteps;
    if (this.state.howtoSetup) {
      setupSteps = (
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
            </div>
          </div>
        </div>
      );
    } else {
      setupSteps = null;
    }

    let docket, docketBody;
    let docketSol1, docketSol2;

    docketSol1 = (
      <div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col">
            <TextAreaFieldGroup
              placeholder="State a solution you want to include for decision."
              name="solution1"
              value={this.state.solution1}
              rows={4}
              onChange={this.onChange}
              error={errors.solution1}
              info="State a solution you want to include for decision"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 solutionPro">
            <TextAreaFieldGroup
              placeholder="First solution Pro."
              name="solution1Pro"
              value={this.state.solution1Pro}
              rows={4}
              onChange={this.onChange}
              error={errors.solution1Pro}
              info="State the advantages (pros) of the solution"
            />
          </div>
          <div className="col-md-6 solutionCon">
            <TextAreaFieldGroup
              placeholder="First solution Con."
              name="solution1Con"
              value={this.state.solution1Con}
              rows={4}
              onChange={this.onChange}
              error={errors.solution1Con}
              info="State the disadvantage (cons) of the solution"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            Cost Estimate:{" "}
            <CurrencyInput
              value={this.state.costEstimate1}
              onChangeEvent={this.handleChangeCost1}
            />
          </div>
          <div className="col-6">
            Estimate days:{" "}
            <InputNumber
              placeholder="Enter expected duration days"
              value={this.state.timeEstimate1}
              //onChange={e => this.handleChangeTimeEstimate1(e)}
              onChange={e => this.handleChangeTimeEstimate(e, 'timeEstimate1')}
            />
          </div>
        </div>
        <hr />
      </div>
    );

    docketSol2 = (
      <div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col">
            <TextAreaFieldGroup
              placeholder="State the second solution you want to include for decision."
              name="solution2"
              value={this.state.solution2}
              rows={4}
              onChange={this.onChange}
              error={errors.solution2}
              info="State the second solution you want to include for decision"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 solutionPro">
            <TextAreaFieldGroup
              placeholder="First solution Pro."
              name="solution2Pro"
              value={this.state.solution2Pro}
              rows={4}
              onChange={this.onChange}
              error={errors.solution2Pro}
              info="State the advantages (pros) of the solution"
            />
          </div>
          <div className="col-md-6 solutionCon">
            <TextAreaFieldGroup
              placeholder="First solution Con."
              name="solution2Con"
              value={this.state.solution2Con}
              rows={4}
              onChange={this.onChange}
              error={errors.solution2Con}
              info="State the disadvantage (cons) of the solution"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            Cost Estimate:{" "}
            <CurrencyInput
              value={this.state.costEstimate2}
              onChangeEvent={this.handleChangeCost2}
            />
          </div>
          <div className="col-6">
            Estimate days:{" "}
            <InputNumber
              placeholder="Enter expected duration days"
              value={this.state.timeEstimate2}
              //onChange={e => this.handleChangeTimeEstimate2(e)}
              onChange={e => this.handleChangeTimeEstimate(e, 'timeEstimate2')}
            />
          </div>
        </div>
      </div>
    );

    if (this.state.decisionType) {
      if (this.state.decisionType === "yesno") {
        docketBody = (
          <div>
            <div>
              <font color="lightblue" size="3">
                <b>Solution (yes/no)</b>
              </font>
            </div>
            <div>{docketSol1}</div>
            <div className="textspaceTop" />
            <div className="row">
              <div className="col">
                <div className="float-right">
                  <button
                    className="btn-check-ideation"
                    onClick={this.handleSaveClick}
                  >
                    Save (WIP) &nbsp;
                    <div className="float-right">
                      <i className="fa fa-check" />
                    </div>
                  </button>
                  <button
                    className="btn-save-notify"
                    onClick={this.handleSaveClickNotify}
                  >
                    Save & Notify &nbsp;
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
        docketBody = (
          <div>
            <div>
              <font color="lightblue" size="3">
                <b>Solution 1 (this)</b>
              </font>
            </div>
            <div>{docketSol1}</div>
            <div>
              <font color="lightblue" size="3">
                <b>Solution 2 (OR this)</b>
              </font>
            </div>
            <div>{docketSol2}</div>
            <div className="textspaceTop" />
            <div className="row">
              <div className="col">
                <div className="float-right">
                  <button
                    className="btn-check-ideation"
                    onClick={this.handleSaveClick}
                  >
                    Save (WIP) &nbsp;
                    <div className="float-right">
                      <i className="fa fa-check" />
                    </div>
                  </button>
                  <button
                    className="btn-save-notify"
                    onClick={this.handleSaveClickNotify}
                  >
                    Save & Notify &nbsp;
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
    } else {
      docketBody = (
        <div>
          <font color="orange" size="3">
            You have not yet setup and selected decision type
          </font>
        </div>
      );
    }

    docket = (
      <div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col">
            <TextAreaFieldGroup
              placeholder="Define the issue/question you are trying to resolve."
              name="problemToSolve"
              value={this.state.problemToSolve}
              rows={4}
              onChange={this.onChange}
              error={errors.problemToSolve}
              info="Define the issue/question you are trying to resolve"
            />
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile02"
                />
                <label className="custom-file-label">
                  Explanatory documents
                </label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text" id="">
                  Upload
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-align-right-sm">
              <p>
                <small>Digital asset explanation (if needed)</small>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">&nbsp;</div>
          <div className="col-2">
            <div className="float-right">
              <font color="#a8cbed">
                <b>Decide by:</b>
              </font>
            </div>
          </div>
          <div className="col-4">
            <div className="task_calendar_place">
              <div className="float-left">
                <DatePicker
                  selected={this.state.decideBy}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="textspaceTop" />
        {docketBody}
      </div>
    );

    let output;

    if (this.state.framing) {
      output = <div>{frameitBody}</div>;
    } else if (this.state.docket) {
      output = docket;
    } else {
      output = (
        <div>
          <font color="lightblue" fontSize="3">
            Please click on an operation on top to procees
          </font>
        </div>
      );
    }

    return (
      <div>
        <div className="form-panel-conflict">
          <div className="text-center">
            <h4>Setup of a Decision-Realm</h4>
            <font color="green">
              <div className="row">
                <div className="col-md-4">
                  <div className="float-left">
                    <button
                      className="btn btn-save-ideation"
                      onClick={() => {
                        this.gotoSetupProcess("howtoSetup");
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
                  <div className="float-left">
                    <button
                      className="btn btn-target-feedback"
                      onClick={() => {
                        this.selectOperation("framing");
                      }}
                    >
                      Framing
                      <div className="float-right">
                        <i className="fas fa-chalkboard-teacher" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="float-left">
                    <button
                      className="btn btn-target-feedback"
                      onClick={() => {
                        this.selectOperation("docket");
                      }}
                    >
                      Docket
                      <div className="float-right">
                        <i className="fas fa-chess-bishop" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">{setupSteps}</div>
              </div>
            </font>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Setup;
