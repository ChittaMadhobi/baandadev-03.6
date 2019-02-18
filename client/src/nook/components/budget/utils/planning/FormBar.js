import React, { Component } from 'react';
import TextFieldGroup from '../../../../../utils/TextFieldGroup';

class FormBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budgetName: '',
      budgetType: 'domestic',
      hlCategory: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleSaveClick() {
    alert(
      'This is an UX or usability experience. Currently, your entries are not being saved or validated. When released, the click of this button will save the data entered.'
    );
  }
  handleEditClick() {
    alert(
      'This is an UX or usability experience. In production, this will load your budget-plan from database for you to edit.'
    );
  }

  handleChange(event) {
    this.setState({ budgetType: event.target.value });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        {/* <form onSubmit={this.onSubmit}> */}
        <div className="row">
          <div className="col-md-2">
            <label>
              <strong>Budget Name</strong>
            </label>
          </div>
          <div className="col-md-4">
            <TextFieldGroup
              name="budgetName"
              placeholder="A unique name for reference"
              value={this.state.budgetName}
              onChange={this.onChange}
              error={errors.budgetName}
              info="Give your budget a name. "
              must=" -- Mandatory"
            />
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
                <option value="domestic">Monthly-Domestic</option>
                <option value="vacation">Vacation Budget Plan</option>\
                <option value="special">Special Budget Plan</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="float-right">
              <font color="blue">
                Request a High-level category if not in drop-down list:
              </font>
            </div>
          </div>
          <div className="col-md-6">
            <div className="float-left">
              <TextFieldGroup
                name="hlCategory"
                placeholder="A HL category not in the drop-down list"
                value={this.state.hlCategory}
                onChange={this.onChange}
                error={errors.hlCategory}
                info="One word HL category (Reference 'About' for details)"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <p>
              <font color="#445570">
                <strong>Note: You can edit later with your budget-name</strong>
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
