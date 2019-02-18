import React, { Component } from "react";
import Select from "react-select";
import ReactDataGrid from "react-data-grid";
import TextFieldGroup from "../../../../../../../src/utils/TextFieldGroup";
import TextAreaFieldGroup from "../../../../../../../src/utils/TextAreaFieldGroup";

import { baselineDeliverables } from "../data/baselineDeliverables";
import { deliverableList } from "../data/deliverableList";

import "../project.css";

const nameFormatter = ({ value }) => {
  let rowno = getRowNo(value);
  // console.log('value:' + value + ' rowNo:' + rowno + ' level:' + rows[rowno].level);
  let lvl = deliverableList[rowno].level;
  let out;
  if (lvl === 0) {
    out = (
      <div className="float-left">
        <b>{value}</b>
      </div>
    );
  } else if (lvl === 1) {
    out = (
      <div className="float-left">
        &nbsp;&nbsp;
        <font color="#1b4fa3">
          <b>{value}</b>
        </font>
      </div>
    );
  } else if (lvl === 2) {
    out = (
      <div className="float-left">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <font color="#96420f">
          <b>{value}</b>
        </font>
      </div>
    );
  } else if (lvl === 3) {
    out = (
      <div className="float-left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <font color="#4f6327">
          <b>{value}</b>
        </font>
      </div>
    );
  } else {
    out = null;
  }
  return <div>{out}</div>;
};

function getRowNo(parm) {
  let j = 0;
  for (var i in deliverableList) {
    if (deliverableList[i].deliName === parm) {
      j = i;
      break;
    }
  }
  return j;
}

const columns = [
  {
    key: "deliName",
    name: "Deliverable-Tree",
    width: 150,
    formatter: nameFormatter
  },
  { key: "level", name: "Lvl", width: 40 },
  {
    key: "description",
    name: "Description",
    width: 450
  },
  { key: "talent", name: "Talent", width: 125 },
  { key: "resource", name: "Resource", width: 125 },
  { key: "risks", name: "Risks", width: 125 }
];

class Baseline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToBaseline: false,
      showDeliverableList: false,
      deliverableName: "",
      level: 0,
      selectedDeliverable: "",
      description: "",
      talentsNeeded: "",
      resourcesNeeded: "",
      risksForDeliverable: "",
      selectedParent: "",

      deliList: [],
      errors: []
    };

    this.gotoBaselineProcess = this.gotoBaselineProcess.bind(this);
    //this.onSelectChange = this.onSelectChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSelectedDeliverable = this.handleSelectedDeliverable.bind(this);
    this.handleSelectedParent = this.handleSelectedParent.bind(this);
    this.handleViewLogs = this.handleViewLogs.bind(this);
    this.handleCloseViewLogs = this.handleCloseViewLogs.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleDeleteThis = this.handleDeleteThis.bind(this);
    this.handleAddAnother = this.handleAddAnother.bind(this);
  }

  componentWillMount() {
    this.setState({
      deliList: deliverableList
    });
  }

  handleAddAnother() {
    alert(
      "This will add this line-item of deliverable to the collection in local redux-store and clear fields for the next entry."
    );
    this.clearFields();
  }

  handleDeleteThis() {
    alert(
      "This will delete this line-item of deliverable from the collection. To be mindful, at this point of time, you can only delete leaf-deliverable (a deliverable that does not have a child)."
    );
    this.clearFields();
  }

  clearFields = () => {
    this.setState({
      deliverableName: "",
      level: 0,
      selectedDeliverable: "",
      description: "",
      talentsNeeded: "",
      resourcesNeeded: "",
      risksForDeliverable: "",
      selectedParent: ""
    });
  };
  handleSaveClick() {
    alert(
      "Eventually -- When you click this, your work will be saved in database and right people notified. In future ideation session, this could be referenced for discussions and evolution."
    );
    this.clearFields();
  }

  handleCloseViewLogs = () => {
    this.setState({
      showDeliverableList: false
    });
  };

  handleViewLogs = () => {
    this.setState({
      showDeliverableList: true
    });
  };

  handleSelectedDeliverable = (deliverable, { action }) => {
    this.setState({
      selectedDeliverable: deliverable
    });
  };

  handleSelectedParent = (deliverable, { action }) => {
    this.setState({
      selectedParent: deliverable
    });
  };

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    console.log("select val:" + e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  }
  gotoBaselineProcess = value => {
    if (value === "baselineSteps") {
      this.setState({
        howToBaseline: !this.state.howToBaseline
      });
    }
  };

  render() {
    const { errors } = this.state;
    let BaselineProcess, baselineBody, baselineHeader, viewDeliverables;

    let len = this.state.deliList.length;

    viewDeliverables = (
      <div>
        <div className="deliverable-list">
          <ReactDataGrid
            columns={columns}
            rowGetter={i => this.state.deliList[i]}
            rowsCount={len}
            minHeight={300}
            //minWidth={1455}
            enableCellSelect={true}
          />
        </div>
        <div className="row">
          <div className="col">
            <div className="float-right" />
            <button
              className="btn-close-check-ideation"
              onClick={this.handleCloseViewLogs}
            >
              Close View &nbsp;
              <div className="float-right">
                <i className="far fa-window-close" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );

    baselineBody = (
      <div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Describe the deliverable "
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              error={errors.description}
              info="Describe the deliverable to enable estimations."
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Describe types of talents needed for the deliverables "
              name="talentsNeeded"
              value={this.state.talentsNeeded}
              onChange={this.onChange}
              error={errors.talentsNeeded}
              info="Describe types of talents needed for the deliverables ."
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Describe resources needed for the deliverables "
              name="resourcesNeeded"
              value={this.state.resourcesNeeded}
              onChange={this.onChange}
              error={errors.resourcesNeeded}
              info="Describe resources needed for the deliverables ."
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Describe resources needed for the deliverables "
              name="risksForDeliverable"
              value={this.state.risksForDeliverable}
              onChange={this.onChange}
              error={errors.risksForDeliverable}
              info="Describe resources needed for the deliverables ."
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile02"
                />
                <label className="custom-file-label">
                  Picture, ref-docs please ...
                </label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text" id="">
                  Upload
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.selectedParent}
                options={baselineDeliverables}
                classNamePrefix="select"
                onChange={this.handleSelectedParent}
                maxMenuHeight={150}
                placeholder="Select parent"
              />
              &nbsp;
            </font>
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <div className="float-right">
              <button
                className="btn-delete-deliverable"
                onClick={this.handleDeleteThis}
              >
                Delete This &nbsp;
                <div className="float-right">
                  <i className="fa fa-check" />
                </div>
              </button>
              <button
                className="btn-check-deliverable"
                onClick={this.handleViewLogs}
              >
                View List&nbsp;
                <div className="float-right">
                  <i className="fa fa-check" />
                </div>
              </button>
              <button
                className="btn-another-deliverable"
                onClick={this.handleAddAnother}
              >
                Add Another&nbsp;
                <div className="float-right">
                  <i className="far fa-save" />
                </div>
              </button>
              <button
                className="btn-save-deliverable"
                onClick={this.handleSaveClick}
              >
                Save & Done&nbsp;
                <div className="float-right">
                  <i className="far fa-save" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="space-outside-buttons" />
        <div className="space-between-rows" />
        <div className="space-between-rows" />
      </div>
    );

    baselineHeader = (
      <div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-5">
            <TextFieldGroup
              name="deliverableName"
              placeholder="Enter a delievrable name"
              value={this.state.deliverableName}
              onChange={this.onChange}
              //error={errors.newName}
              info="Enter a deliverable Name ..."
            />
          </div>
          <div className="col-md-2">
            <select
              name="level"
              value={this.state.level}
              onChange={this.onChange}
              id="selectWidth"
              size="2"
            >
              <option value="0">level-0</option>
              <option value="1">level-1</option>
              <option value="2">level-2</option>
              <option value="3">level-3</option>
              <option value="4">level-4</option>
            </select>
          </div>
          <div className="col-md-5">
            <font color="#293087">
              <Select
                value={this.state.selectedDeliverable}
                //isMulti
                options={baselineDeliverables}
                //className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleSelectedDeliverable}
                maxMenuHeight={150}
                placeholder="Select to edit"
              />
            </font>
          </div>
        </div>
      </div>
    );

    if (this.state.howToBaseline) {
      BaselineProcess = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              Baseline of a project is to{" "}
              <b>define deliverables & timelines (DTT)</b> to construct a
              project around it. That is, through Ideation and Discovery, you
              have come to a stage where you are ready to start working on
              estimating effort (project cost, time, risk, efforts) for the
              implementation.
              <br /> <br />
              To form the baseline, create groups or hierarchy of deliverables,
              and/or composition deliverable with sub-deliverables that would
              lead to projecting a project.
              <ul>
                <li>An index or a name of deliverable.</li>
                <li>A deliverable may be accompanied with an attachment</li>
                <li>
                  Provide a description of the deliverable that may include URL
                  etc.
                </li>
                <li>
                  State the level of the deliverable.{" "}
                  <font color="lightgreen">0 (zero)</font> is the project itself
                  and there would be only one zero level. All level 1 is child
                  to zero-level. If the level is greater than 1 (2,3, ...0 then
                  select a parent from the drop down (a parent deliverable you
                  have defined before that is composed of the sub-level
                  delverable).
                </li>
              </ul>
              If the deliverable is a leaf (that is, the deliverable do not have
              a child deliverable then log the following:)
              <ul>
                <li>
                  Define any restrictions that needs to be considered for the
                  delivery.
                </li>
                <li>
                  State a comma dellimited set of talents needed for the
                  delivery{" "}
                </li>
                <li>
                  Define any risk that may be associated with this deliverable.
                </li>
                <li>Specify risks, if any, associated with the delivery</li>
                <li>
                  For delivery, who takes the risk (from drop down) - Requestor,
                  Responder, Undecided, self-delivery
                </li>
                <li>
                  Delivery Risk Mitigation (from dropdown like Escrow, Retainer,
                  Promise etc.)
                </li>
              </ul>
              <br />
              To be noted, delivery risks are optional and can be decided at
              project definition time (Budgeting Stage).
              <br />
              <br />
            </div>
          </div>
        </div>
      );
    }

    let output;

    if (this.state.showDeliverableList) {
      output = viewDeliverables;
    } else {
      output = baselineBody;
    }

    const engagementType = this.props.propsForward.thisProject.msg
      .engagementType;

    let createBaselineBody;
    if (engagementType === "time-based") {
      createBaselineBody = (
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
    } else
      createBaselineBody = (
        <div className="form-panel-deliverables">
          <div className="text-center">
            <h3>Baseline for a Project</h3>
            <font color="green">
              <div className="row">
                <div className="float-left">
                  <button
                    className="btn control-btn-review"
                    onClick={() => {
                      this.gotoBaselineProcess("baselineSteps");
                    }}
                  >
                    Baseline Steps
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                  &nbsp;{" "}
                  <font color="white">
                    Click to review Baselining-for-a-Project steps.
                  </font>
                </div>
              </div>
              <div className="row">
                <div className="col">{BaselineProcess}</div>
              </div>
            </font>
            <form onSubmit={this.onSubmit}>
              {baselineHeader}
              {output}
            </form>
          </div>
        </div>
      );

    return (
      <div>
        {createBaselineBody}
      </div>
    );
  }
}

export default Baseline;
