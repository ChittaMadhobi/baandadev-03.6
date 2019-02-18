import React, { Component } from "react";
import Select from "react-select";
import { RadioGroup, Radio } from "react-radio-group";

import TextFieldGroup from "../../../../../../../src/utils/TextFieldGroup";
import "../teams.css";
import { endeavorDomainRoles } from "../data/endeavorDomainRoles";

class RoleMgmt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endeavorDomainRoles: "",
      roleOther: false,
      newOtherRole: "",
      ratePerDuration: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.SelectRateDuration = this.SelectRateDuration.bind(this);
  }

  SelectRateDuration = value => {
    this.setState({
      projectLevel: value
    });
  };

  handleSaveClick() {
    alert(
      'Eventually -- When you click this, your work will be saved in database. This will instantly be notified as message to the recipient. Once he/she accepts, the contract will appear in your "Agreement" office/button at the Lobby. You will also be notified of recipients actions.'
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  handleRoles = (endeavorDomainRoles, { action }) => {
    // console.log('here ....' + action + ' endeavorDomainRoles:' + JSON.stringify(endeavorDomainRoles ));

    this.setState({
      endeavorDomainRoles
    });

    if (endeavorDomainRoles.label === "Other") {
      //console.log("other");
      this.setState({
        roleOther: true
      });
    } else {
      //console.log("something else");
      this.setState({
        roleOther: false
      });
    }
  };

  render() {
    let otherRole;
    if (this.state.roleOther) {
      otherRole = (
        <div>
          <div className="space-between-rows" />
          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="newOtherRole"
                placeholder="Enter a new Role"
                value={this.state.newOtherRole}
                onChange={this.onChange}
                //error={errors.newName}
                info="Enter a new role not in dropdown..."
              />
            </div>
            <div className="col-md-6">
              <font color="#bfbd42">
                Define distinct new role for reduced complexity.{" "}
              </font>
            </div>
          </div>
          <div className="space-between-rows" />
          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="ratePerDuration"
                placeholder="Enter rate of the new role"
                value={this.state.ratePerDuration}
                onChange={this.onChange}
                //error={errors.newName}
                info="Whole number approximation ..."
              />
            </div>

            <div className="col-md-6">
              <RadioGroup
                name="rateDuration"
                selectedValue={this.state.rateDuration}
                onChange={this.SelectRateDuration}
              >
                {" "}
                <label>
                  <h6>per&nbsp;&nbsp;</h6>
                </label>
                <label>
                  <Radio value="rootProject" />
                  &nbsp;hour (contract)&nbsp;&nbsp;
                </label>
                <label>
                  <Radio value="subProject" />
                  &nbsp;year (salary)&nbsp;&nbsp;
                </label>
              </RadioGroup>
            </div>
          </div>
        </div>
      );
    } else {
      otherRole = null;
    }
    return (
      <div>
        <div className="form-panel-role-mgmt">
          <div className="text-center">
            <h3>Role Management</h3>
            <font color="green">
              <p>(Define roles to be associated with the endeavor)</p>
            </font>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <font color="#43608e">
                  <Select
                    value={this.state.endeavorDomainRoles}
                    options={endeavorDomainRoles}
                    classNamePrefix="select"
                    onChange={this.handleRoles}
                    placeholder="Select a role/objective"
                    maxMenuHeight={170}
                  />
                </font>
              </div>
              <div className="col-md-6">
                <div className="float-left">
                  <font color="#bfbd42">
                    Default roles/objective for the endeavor as per Init.
                    Include or define new for the project.
                  </font>
                </div>
              </div>
            </div>
            {otherRole}
            <div className="row">
              <div className="col">
                <div className="float-right">
                  <button
                    className="btn control-btn-team-save"
                    onClick={this.handleSaveClick}
                  >
                    Save & Define-Another &nbsp;
                    {/* <i className="far fa-calendar-plus float-right" /> */}
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="space-between-rows" />
          <div className="row">
            <div className="col-md-6">
              <font color="#bfbd42">
                  Roles already defined in this project are:
              </font>
              <div className="show-included-roles">
                <ul>
                  <li>Dreamer & Visionary</li>
                  <li>Artist - painter</li>
                  <li>Artist - sculptor</li>
                  <li>Logistics Manager</li>
                  <li>Gallery Designer</li>
                  <li>Markeeteer Guru</li>
                  <li>Web Site Designer </li>
                  <li>Fund raiser master</li>
                  <li>Create Art-gallery</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <font color="#bfbd42">
                Rates to be used for budgeting. However, individual contracts
                will override these rates for actual billing including
                rates/delivery model.{" "}
              </font>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoleMgmt;
