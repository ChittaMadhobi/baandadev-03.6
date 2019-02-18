import React, { Component } from "react";
import Select from "react-select";
import TextFieldGroup from "../../../../../../../src/utils/TextFieldGroup";
import TextAreaFieldGroup from "../../../../../../../src/utils/TextAreaFieldGroup";

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import { tasks } from "../data/tasks";
import { teams } from "../data/teams";
import { members } from "../data/members";
import { taskCategories } from '../data/taskCategory'

class EnableTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToCreateTask: false,

      taskName: "",
      parentTask: "",
      description: "",
      assignedToTeam: "",
      assignedToMembers: "",
      startDate: moment(),
      endDate: moment(),
      deliberable: "",
      acceptanceInspector: "",
      taskCategory: "",
      otherTaskCategory: '',

      errors: []
    };

    this.gotoTaskCreatePanel = this.gotoTaskCreatePanel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleParentTask = this.handleParentTask.bind(this);
    this.handleTaskCategory = this.handleTaskCategory.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "Eventually -- When you click this, your work will be saved in database and right people notified. Once saved, authorized PM would be able to modify the tasks"
    );
  }

  handleTaskCategory = (taskCategory, { action }) => {
    this.setState({
      taskCategory
    });
  };

  handleStartDate(date) {
    this.setState({
      startDate: date
    });
  }
  handleEndDate(date) {
    this.setState({
      endDate: date
    });
  }

  handleParentTask = (parentTask, { action }) => {
    this.setState({
      parentTask
    });
  };

  handlehandleAssignTeam = (assignedTeam, { action }) => {
    this.setState({
      assignedToTeam: assignedTeam
    });
  };

  handleAssignMembers = (assignedMembers, { action }) => {
    this.setState({
      assignedToMembers: assignedMembers
    });
  };

  handleInspector = (assignedInspector, { action }) => {
    this.setState({
      acceptanceInspector: assignedInspector
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  gotoTaskCreatePanel = value => {
    if (value === "createSteps") {
      this.setState({
        howToCreateTask: !this.state.howToCreateTask
      });
    }
  };

  render() {
    //console.log("Enable Tasks props: " + JSON.stringify(this.props.propsForward.thisProject.msg));

    let engagementType = this.props.propsForward.thisProject.msg.engagementType;
    //console.log ('engagementType: ' + engagementType);

    const { errors } = this.state;

    let taskCategoryOtherPanel;
    if (this.state.taskCategory.label === "Other") {
      taskCategoryOtherPanel = (
        <div>
          <TextFieldGroup
            name="otherTaskCategory"
            placeholder="Enter a task name"
            value={this.state.otherTaskCategory}
            onChange={this.onChange}
            error={errors.otherTaskCategory}
            info="Enter a unique task Category for classification"
          />
        </div>
      );
    } else {
      taskCategoryOtherPanel = null;
    }

    let createTaskBody;
    createTaskBody = (
      <div>
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              name="taskName"
              placeholder="Enter a task name"
              value={this.state.taskName}
              onChange={this.onChange}
              //error={errors.newName}
              info="Enter a unique task name you are creating..."
            />
          </div>
          <div className="space-between-rows" />
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.parentTask}
                //isMulti
                options={tasks}
                //className="basic-multi-select"
                classNamePrefix="select parent tasks ..."
                onChange={this.handleParentTask}
                maxMenuHeight={150}
                placeholder="Select parent task (if any)..."
              />
            </font>
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-6">
            <font color="#293087">
              <Select
                value={this.state.taskCategory}
                //isMulti
                options={taskCategories}
                //className="basic-multi-select"
                classNamePrefix="select task categories ..."
                onChange={this.handleTaskCategory}
                maxMenuHeight={150}
                placeholder="Select a HL task category"
              />
            </font>
          </div>
          <div className="col-6">{taskCategoryOtherPanel}</div>
        </div>
        <div className="space-between-rows" />
        <div className="space-between-rows" />
        <div className="space-between-rows" />
        <div className="row">
          <div className="col">
            <TextAreaFieldGroup
              placeholder="A short description of the task."
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              rows={2}
              error={errors.description}
              info="Provide a short description for a quick references .."
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.assignToTeam}
                //isMulti
                options={teams}
                //className="basic-multi-select"
                classNamePrefix="Assign a team for the task ..."
                onChange={this.handleAssignTeam}
                maxMenuHeight={150}
                placeholder="Assign a team for the task (iff)"
              />
            </font>
          </div>
          <div className="space-between-rows" />
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.assignedToMembers}
                isMulti
                options={members}
                //className="basic-multi-select"
                classNamePrefix="Assign members to the task ..."
                onChange={this.handleAssignMembers}
                maxMenuHeight={150}
                placeholder="Assign members ..."
              />
            </font>
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="space-between-rows" />
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-2">
            <div className="float-right">
              <font color="white">
                <b>Start By:</b>
              </font>
            </div>
          </div>
          <div className="col-4">
            <div className="task_calendar_place">
              <div className="float-left">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleStartDate}
                  // onClick={() => {
                  //   this.handleSetDate("startDate");
                  // }}
                />
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="float-right">
              <font color="white">
                <b>End By:</b>
              </font>
            </div>
          </div>
          <div className="col-4">
            <div className="task_calendar_place">
              <div className="float-left">
                <DatePicker
                  selected={this.state.endDate}
                  onChange={this.handleEndDate}
                  // onClick={() => {
                  //   this.handleSetDate("endDate");
                  // }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="space-between-rows" />
        <div className="row">
          <div className="col">
            <TextAreaFieldGroup
              placeholder="A short description of deliberable "
              name="deliberable"
              value={this.state.deliberable}
              onChange={this.onChange}
              rows={2}
              error={errors.deliberable}
              info="Describe the outcome, or success condition, for the task ..."
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.acceptanceInspector}
                //isMulti
                options={members}
                //className="basic-multi-select"
                classNamePrefix="Inspector may be a peer "
                onChange={this.handleInspector}
                maxMenuHeight={150}
                placeholder="Inspector to accept completion "
              />
            </font>
            <div className="float-left">
              <font color="white">Assign an inspector for the task</font>
            </div>
          </div>
          <div className="space-between-rows" />
          <div className="col-md-6">
            <button
              className="btn-save-new-task"
              onClick={this.handleSaveClick}
            >
              Save & Notify&nbsp;
              <div className="float-right">
                <i className="fa fa-check" />
              </div>
            </button>
          </div>
        </div>
        <div className="space-outside-buttons" />
      </div>
    );

    let createTaskSteps;

    if (this.state.howToCreateTask) {
      createTaskSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              Take the following steps to create tasks. You can create tasks if
              you are managing it:
              <ul>
                <li>Give a unique task name. </li>
                <li>Provide a short description</li>
                <li>
                  Connect it to a parent task (If root - select none. There can
                  be only one root per project)
                </li>
                <li>
                  Assign team(s). You can assign teams only if it belongs to
                  parent-task.
                </li>
                <li>
                  Assign Member(s) from the drop down list (members assigned to
                  parent task)
                </li>
                <li>Specify Start-date (optional)</li>
                <li>Specify to-be-completed-by date</li>
                <li>Describe the deliverables including success condition.</li>
                <li>
                  Select an inspector for the acceptance-of-completion of the
                  task.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      createTaskSteps = null;
    }

    let timebasedmsg = (
      <div>
        <div className="space-outside-buttons" />
        <div className="space-outside-buttons" />
        <div className="text-center how-to-create-team">
          <font color="white">
            You have been inducted in the team by the manager. Since you are
            joining as barrista (time-based) and not the manager of project or
            co-op, you do not get to assign tasks.
          </font>
        </div>
      </div>
    );

    let workarea;
    if (engagementType === "time-based") {
      workarea = timebasedmsg;
    } else {
      workarea = createTaskBody;
    }

    return (
      <div>
        <div className="form-panel-create-task">
          <div className="text-center">
            <h3>Task Creation</h3>
            <font color="green">
              <div className="row">
                <div className="float-left">
                  <button
                    className="btn control-btn-review"
                    onClick={() => {
                      this.gotoTaskCreatePanel("createSteps");
                    }}
                  >
                    Create Steps On/Off
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                  &nbsp;{" "}
                  <font color="white">
                    Click to toggle into the task-creation steps.
                  </font>
                </div>
              </div>
              <div className="row">
                <div className="col">{createTaskSteps}</div>
              </div>
            </font>
            {workarea}
          </div>
        </div>
      </div>
    );
  }
}

export default EnableTasks;
