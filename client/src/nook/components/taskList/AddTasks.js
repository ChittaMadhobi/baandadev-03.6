import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../../actions/tasklistActionCreator";
import { bindActionCreators } from "redux";
import TextFieldGroup from "../../../utils/TextFieldGroup";
import TextAreaFieldGroup from "../../../utils/TextAreaFieldGroup";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import '../../css/profile.css';

class AddTasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: "nooktasks",
      todotext: "",
      tasknotes: "",
      priority: "medium",
      selectedDate: "2018-08-13",
      startDate: moment(),
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveInDB = this.handleSaveInDB.bind(this);
    //this.onChangeTodoText = this.onChangeTodoText.bind(this);
  }

  // onChangeTodoText(e) {
  //   this.setState({
  //     todotext: e.target.value
  //   });
  // }

  handleSaveInDB = () => {
    alert('On click, all your task-work or updates you have done today would be saved in database.');
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handlePriorityChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <h4>
          <p className="text-center font-weight-bold">
            <font color="#3f55c1">To-Do List</font>
          </p>
        </h4>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="todotext"
                placeholder="Give your task a name"
                value={this.state.todotext}
                onChange={this.onChange}
                error={errors.todotext}
                info="Add a new task to your list "
                must=" - Mandatory"
              />
            </div>
            <div className="col-md-2">
              <div className="text-center">
                <label>
                  <strong>Priority:</strong>
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm text-center">
                <select
                  size="2"
                  name="priority"
                  className="selectWidth"
                  onChange={this.handlePriorityChange}
                  placeholder="Select priority"
                  value={this.state.priority}
                  ref={ref => {
                    this._select = ref;
                  }}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                  <option value="whatever">Later</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="float-right">
                <font color="#3f55c1">
                  <b>Do by:</b>
                </font>
              </div>
            </div>
            <div className="col-4">
              <div className="task_calendar_place">
                <div className="float-left">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">&nbsp;</div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <TextAreaFieldGroup
                placeholder="Comments"
                name="tasknotes"
                value={this.state.tasknotes}
                onChange={this.onChange}
                error={errors.tasknotes}
                info="Add details, reminders, notes, etc."
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="float-left ">
                <button
                  type="button"
                  onClick={() =>
                    this.handleSaveInDB()
                  }
                  style={{ marginTop: "25px", marginRight: "15px" }}
                  className="btn-saveInDb"
                >
                  Save Changes
                </button>
              </div>
              <div className="float-right ">
                <button
                  type="button"
                  onClick={() => {
                    this.props.addTodo(this.state);
                    this.setState({
                      todotext: "",
                      tasknotes: "",
                      priority: "medium"
                    });
                  }}
                  style={{ marginTop: "25px" }}
                  className="btn btn-success btn-sm btn-size-same"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(AddTasks);
