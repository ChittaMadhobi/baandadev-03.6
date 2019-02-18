import React, { Component } from "react";
import Select from "react-select";
//import TextFieldGroup from "../../../../../../../src/utils/TextFieldGroup";
import TextAreaFieldGroup from "../../../../../../../src/utils/TextAreaFieldGroup";

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import { tasks } from "../data/tasks";
import { teams } from "../data/teams";
import { members } from "../data/members";
import { taskArtGallery } from "../data/taskArtGallery";
import { taskToEdit } from "../data/tasksToEdit";

import "../tasks.css";

class EditTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToCreateTask: false,

      editTask: "",
      parentTask: "",
      description: "",
      assignedToTeam: "",
      assignedToMembers: null,
      startDate: moment(),
      endDate: moment(),
      deliberable: "",
      acceptanceInspector: "",

      errors: []
    };

    //this.gotoTaskCreatePanel = this.gotoTaskCreatePanel.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleParentTask = this.handleParentTask.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }


  handleSaveClick() {
    alert('At this point, your data would be updated (a new current record created) ... and  related people notified of the changes  made. For this UX, it is stating what it will do eventually.');
  }

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

  handleEditTask = editTask => {
    // this.setState({
    //   parentTask
    // });
    let enddate = moment(taskArtGallery.endDate, "YYYY-MM-DD");
    let startdate = moment(taskArtGallery.startDate, "YYYY-MM-DD");

    this.setState({
      editTask: editTask,
      parentTask: taskArtGallery.parentTask,
      description: taskArtGallery.description,
      assignedToTeam: taskArtGallery.assignedToTeam,
      assignedToMembers: taskArtGallery.assignedToMembers,
      startDate: startdate,
      endDate: enddate,
      deliberable: taskArtGallery.deliberable,
      acceptanceInspector: taskArtGallery.acceptanceInspector
    });
  };

  handleParentTask = parentTask => {
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

  render() {
    // console.log(
    //   "this.props : " + JSON.stringify(this.props.propsForward.thisProject.msg)
    // );
    let engagementType = this.props.propsForward.thisProject.msg.engagementType;
    // console.log('engagementType: ' + engagementType);
    // console.log('this.state.editTask :' + this.state.editTask.label );

    const { errors } = this.state;

    let createTaskBody;

    let editMsg;
    if (engagementType !== "co-op") {
      editMsg = (
        <div>
          <div className="space-outside-buttons" />
          <div className="space-outside-buttons" />
          <div className="text-center how-to-create-team">
            <font color="white">
              You have been inducted in the team by the manager. Since you are
              joining as barrista (time-based) and not the manager of project or
              co-op, you do not get to assign and/or edit tasks.
            </font>
          </div>
        </div>
      );
    } else {
      editMsg = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <font color="#293087">
                <Select
                  value={this.state.editTask}
                  options={taskToEdit}
                  classNamePrefix="select a task to edit ..."
                  onChange={value => this.handleEditTask(value)}
                  maxMenuHeight={150}
                />
              </font>
            </div>
            <div className="col-md-6">
              <div className="float-left">Select a task to edit</div>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.editTask) {
      createTaskBody = (
        <div>
          <div className="space-between-rows" />
          <div className="row">
            <div className="col-md-6">&nbsp;</div>
            <div className="col-md-6">
              <font color="#293087">
                <Select
                  value={this.state.parentTask}
                  options={tasks}
                  //className="basic-multi-select"
                  classNamePrefix="select parent tasks ..."
                  //onChange={this.handleParentTask}
                  onChange={value => this.handleParentTask(value)}
                  maxMenuHeight={150}
                />
              </font>
              <div className="float-left">The selected parent task ...</div>
            </div>
          </div>
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
                  value={this.state.assignedToTeam}
                  //isMulti
                  options={teams}
                  //className="basic-multi-select"
                  classNamePrefix="select a team for the task ..."
                  onChange={this.handleAssignTeam}
                  maxMenuHeight={150}
                  placeholder="Select parent task (if any)..."
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
                Update & Notify&nbsp;
                <div className="float-right">
                  <i className="fa fa-check" />
                </div>
              </button>
            </div>
          </div>
          <div className="space-outside-buttons" />
        </div>
      );
    } else {
      createTaskBody = null;
    }

    return (
      <div className="form-panel-edit-task">
        <div className="text-center">
          <h3>Edit Task</h3>
        </div>
        <div className="space-between-buttons" />
        <div>{editMsg}</div>
        <div>{createTaskBody}</div>
      </div>
    );
  }
}

export default EditTask;
