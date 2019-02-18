import React, { Component } from "react";
import Select from "react-select";
import TextAreaFieldGroup from "../../../../../../../src/utils/TextAreaFieldGroup";

import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

import "../tasks.css";
import { cbtlMembers } from "../data/cbtlMembers";
import { scheduleAngelo } from '../data/ScheduleAngelo';

const showSecond = false;
const str = showSecond ? "HH:mm:ss" : "HH:mm";

class Scheduling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectMember: '',
      schedule: false,
      view: false,
      uxmsg: true,
      scheduleDate: moment(),
      startTime: moment(),
      endTime: moment(),
      description: "",
      errors: []
    };

    this.handleSelectMember = this.handleSelectMember.bind(this);
    this.handlePlan = this.handlePlan.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleScheduleDate = this.handleScheduleDate.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleSave() {
    alert("In production, Your schedule plan for the week will be saved and notified. For seeing scheduling of the whole team, please visit Status.");
  }

  handleNext() {
    alert("In production, your plan would be saved in redux-store or localstore and let you schedule for another day.");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onStartChange(value) {
    //console.log("start:" + value && value.format(str));
    this.setState({
      startTime: value.format(str)
    });
  }

  onEndChange(value) {
    //console.log("End:" + value && value.format(str));
    this.setState({
      endTime: value.format(str)
    });
  }

  handleScheduleDate(date) {
    this.setState({
      scheduleDate: date
    });
  }

  handlePlan() {
    this.setState({
      schedule: true,
      view: false,
      uxmsg: false
    });
  }

  handleView() {
    this.setState({
      schedule: false,
      view: true,
      uxmsg: false
    });
  }

  handleSelectMember = selectMember => {
    this.setState({
      selectMember,
      schedule: false,
      view: false,
      uxmsg: true
    });
  };

  render() {
    let engagementType = this.props.propsForward.thisProject.msg.engagementType;
    // console.log("engagementType: " + engagementType);
    // console.log('selectMember:' + JSON.stringify(this.state.selectMember));
    const { errors } = this.state;

    let scheduleActionSelect;
    scheduleActionSelect = (
      <div>
        <div className="row">
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.selectMember}
                options={cbtlMembers}
                placeholder="Select a member for your ops"
                classNamePrefix="select."
                onChange={value => this.handleSelectMember(value)}
                maxMenuHeight={150}
              />
            </font>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <button className="control-btn-taskLog" onClick={this.handlePlan}>
                Plan&nbsp;
                <div className="float-right">
                  <i className="far fa-clock" />
                </div>
              </button>
              <button className="control-btn-taskLog" onClick={this.handleView}>
                View&nbsp;
                <div className="float-right">
                  <i className="far fa-eye" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    let uxreviewmsg;
    uxreviewmsg = (
      <div>
        <div className="space-outside-buttons" />
        <div className="space-outside-buttons" />
        <div className="text-center how-to-create-team">
          <font color="white">
            You have been inducted in the team by the manager. You can access
            this schedule-planning for UX experience only. In production, you
            would be able to view schedules only unless you are managing the
            operations (in this case CBLT ops-manager).
            <br />
            <br />
            For viewing in this UX review, only your (Angelo's) data has been
            assigned. All presentation data are in local JSONs.
          </font>
        </div>
      </div>
    );

    let projMsg;
    projMsg = (
      <div>
        <div className="space-outside-buttons" />
        <div className="space-outside-buttons" />
        <div className="text-center how-to-create-team">
          <font color="white">
            For projects/co-ops, the scheduling option is disabled.
            <br />
            <br />
            Please opt for 'CBTL Barista' option to experience this interaction.
          </font>
        </div>
      </div>
    );

    let planSchedule;
    planSchedule = (
      <div>
        <div className="space-outside-buttons" />
        <div className="row">
          <div className="col-md-6">
            <DatePicker
              selected={this.state.scheduleDate}
              onChange={this.handleScheduleDate}
            />
          </div>
          <div className="col-md-6">
            <div className="float-left">
              <font color="#efdcb6">Pick / Enter a scheduling date</font>
            </div>
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col-md-6">
            <font color="#efdcb6">Start Time:&nbsp;</font>
            <TimePicker
              style={{ width: 100 }}
              showSecond={showSecond}
              defaultValue={moment()}
              className="xxx"
              onChange={this.onStartChange}
              use12Hours
            />
          </div>
          <div className="col-md-6">
            <font color="#efdcb6">End Time:&nbsp;</font>
            <TimePicker
              style={{ width: 100 }}
              showSecond={showSecond}
              defaultValue={moment()}
              className="xxx"
              onChange={this.onEndChange}
              use12Hours
            />
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col">
            <TextAreaFieldGroup
              name="description"
              placeholder="A short description of the task (if any - optional)"
              value={this.state.description}
              onChange={this.onChange}
              rows={2}
              error={errors.description}
              info="Provide a short note, describe task, or leave special direction (if needed).."
            />
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col">
          <div className="float-right">
                <button
                  className="control-btn-scheduling"
                  onClick={this.handleNext}
                >
                  Another Day&nbsp;
                  <div className="float-right">
                    <i className="far fa-plus-square" />
                  </div>
                </button>
                <button
                  className="control-btn-scheduling"
                  onClick={this.handleSave}
                >
                  Save & Notify &nbsp;
                  <div className="float-right">
                    <i className="far fa-eye" />
                  </div>
                </button>
              </div>
          </div>
        </div>
      </div>
    );

    let viewTasks;
    
   if (this.state.selectMember.label === 'Angelo') {
      viewTasks = (
        <div className="align-left">
          {scheduleAngelo.map(obj => {
            return (
              <div key={obj.seqNo}>
                <div className="row">
                  <div className="col">
                    <div className="edit-log-lines">
                      Date: <b>{obj.taskDate}
                      </b> From:{" "}<b>{obj.startTime}
                      </b> To:{" "}<b>{obj.endTime} <br />
                      </b>Description:{" "}
                      <font color="#3e5584">{obj.description}</font>
                    </div>
                  </div>
                </div>
                <div className="space-between-rows" />
                <hr />
              </div>
            );
          })} 
        </div>
      );
    } else {
      viewTasks = (
        <div>
          <br /><br /><br />
          <h3><font color="red">
          Please select Angelo to see his schedule (You are Angelo for this exemplification). <br />
          Only Angelo's manufactured schedule data is available for user-experience (UX) only.</font></h3>
        </div>
      )
    }

    let output;
    if (this.state.uxmsg) {
      output = uxreviewmsg;
    } else if (this.state.schedule) {
      output = planSchedule;
    } else if (this.state.view) {
      output = <div className="view-schdeule">
          <h5>View Your Schedule</h5>
          {viewTasks}
        </div>
    } else {
      output = null;
    }

    if (engagementType !== "time-based") {
      output = projMsg;
      scheduleActionSelect = null;
    }

    return (
      <div className="form-panel-task-log">
        <div className="text-center">
          <h3>Schedule Planning</h3>
        </div>
        <div className="space-between-buttons" />
        <div>{scheduleActionSelect}</div>
        <div>{output}</div>
      </div>
    );
  }
}

export default Scheduling;
