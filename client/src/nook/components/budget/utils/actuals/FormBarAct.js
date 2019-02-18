import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
//import TextFieldGroup from '../../../../../utils/TextFieldGroup';

class FormBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budgetName: '',
      budgetType: 'domestic',
      entryDay: moment(),
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  defaultValue = new Date();
  defaultShow = true;

  handleSaveClick() {
    alert(
      'This is a UX or usability experience. Currently, your entries are not being saved or validated. When released, the click of this button will save the data entered.'
    );
  }
  handleEditClick() {
    alert(
      'This is a UX or usability experience. In production, this will load your budget-plan from database for you to edit.'
    );
  }

  handleChange(event) {
    this.setState({ budgetType: event.target.value });
  }

  handleDateChange(date) {
    this.setState({
      entryDay: date
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    //const { errors } = this.state;
    //console.log('today:' + this.state.entryDay.format('YYYY-M-DD'));

    return (
      <div>
        {/* <form onSubmit={this.onSubmit}> */}
        <div className="row">
          <div className="col-md-2">
            <label>
              <strong>Entry Date</strong>
            </label>
          </div>
          <div className="col-md-4">
            <div className="task_calendar_place">
              <div className="float-left">
                <DatePicker
                  selected={this.state.entryDay}
                  onChange={this.handleDateChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <label>
              <strong>Budget Type</strong>
            </label>
          </div>
          <div className="col-md-4">
            <div className="selectWrapper form-control form-control-sm ">
              <select
                name={this.state.budgetType}
                size="2"
                value={this.state.budgetType}
                onChange={this.handleChange}
                className="selectWidth"
              >
                <option value="domestic">Monthly Domestic</option>
                <option value="vacation">Vacation Budget Plan</option>
                <option value="special">Special Budget Plan</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <p>
              <font color="#445570">
                <strong>Note: Edit with date & budget-type combo.</strong>
              </font>
            </p>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="float-left">
              <button
                className="btn shadow btn-sm budget-load-edit"
                onClick={this.handleEditClick}
              >
                Load to Edit&nbsp;
                <div className="float-right">
                  <i className="far fa-edit" />
                </div>
              </button>
            </div>
            <div className="float-right">
              <button
                className="btn shadow btn-sm budget-plan-save"
                onClick={this.handleSaveClick}
              >
                Save and Done&nbsp;
                <i className="far fa-save" />
              </button>
            </div>
          </div>
        </div>
        <hr />
        {/* </form> */}
      </div>
    );
  }
}

export default FormBar;
