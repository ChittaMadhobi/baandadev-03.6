import React, { Component } from 'react';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import { RadioGroup, Radio } from 'react-radio-group';

import TextFieldGroup from './TextFieldGroup';
import TextAreaFieldGroup from './TextAreaFieldGroup';

class ApprenticeForMaster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postType: 'ApprenticeForMaster',
      postName: '',
      postCaption: '',
      address: '',
      zipCode: '',
      studentDescription: '',
      selectedProfession: 'student',
      specialTraining: false,
      highLevelOtherDomain: '',
      interestVolume: 1,
      selectedBackgroundCheck: 'yes',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleStartAddrChange = this.handleStartAddrChange.bind(this);
    this.handleSelectedProfession = this.handleSelectedProfession.bind(this);
    this.handleSpecialTrainingCheck = this.handleSpecialTrainingCheck.bind(
      this
    );
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleBackgroundCheck = this.handleBackgroundCheck.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handlePostClick() {
    alert(
      'Eventually -- When you click this, your work will be saved in database and posted at the same time and visible to others. This would be available in your dashboard for you to ask intelligence, connect etc.'
    );
  }

  handleSaveClick() {
    alert(
      'Eventually -- When you click this, your work will be saved in database. This post will appear in your dashboard as not-posted. You can post it from there. Your account will not be charged till you post.'
    );
  }

  handleBackgroundCheck(value) {
    console.log('background value:' + value);
    this.setState({
      selectedBackgroundCheck: value
    });
  }

  handleOnChange = value => {
    this.setState({
      interestVolume: value
    });
  };

  handleSpecialTrainingCheck() {
    //let xx = document.getElementById('inlineCheckbox1').value;
    //console.log('Value of textbox1 selected:' + xx);
    this.setState({
      specialTraining: !this.state.specialTraining
    });
  }

  handleSelectedProfession(value) {
    //console.log(value);
    this.setState({
      selectedProfession: value
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  handleStartAddrChange() {
    //let xx = document.getElementById('inlineCheckbox1').value;
    //console.log('Value of textbox1 selected:' + xx);
    this.setState({
      startAddrChecked: !this.state.startAddrChecked
    });
  }

  render() {
    const { errors } = this.state;

    let askAddr;
    if (this.state.startAddrChecked) {
      askAddr = (
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              name="address"
              placeholder="Focus location area address"
              value={this.state.address}
              onChange={this.onChange}
              error={errors.address}
              info="Work location different from home :: "
              must="Mandatory"
            />
          </div>
          <div className="col-md-6">
            <TextFieldGroup
              name="zipCode"
              placeholder="Enter location zipcode ..."
              value={this.state.zipCode}
              onChange={this.onChange}
              error={errors.zipCode}
              info="Address zip code :: "
              must="Mandatory"
            />
          </div>
        </div>
      );
    } else {
      askAddr = null;
    }

    let specialTrainingDesc;
    if (this.state.specialTraining) {
      specialTrainingDesc = (
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              name="specialTrainingArea1"
              placeholder="Primary special training"
              value={this.state.specialTrainingArea1}
              onChange={this.onChange}
              error={errors.specialTrainingArea1}
              info="State the main training/experience area :: "
              must="Mandatory"
            />
          </div>
          <div className="col-md-6">
            <TextFieldGroup
              name="specialTrainingArea2"
              placeholder="Secondary special training in ..."
              value={this.state.specialTrainingArea2}
              onChange={this.onChange}
              error={errors.specialTrainingArea2}
              info="Any secondary training/experience in :: "
            />
          </div>
        </div>
      );
    } else {
      specialTrainingDesc = null;
    }

    return (
      <div className="container">
        <h4>
          <p className="text-center text-primary font-weight-bold">
            Apprentice / Student Seeking Master / Teacher
          </p>
        </h4>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-5">
              <TextFieldGroup
                name="postName"
                placeholder="Enter Posting name ..."
                value={this.state.postName}
                onChange={this.onChange}
                error={errors.postName}
                info="A name for you to reference :: "
                must="Mandatory"
              />
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-outline-info btn-xsm"
                data-toggle="tooltip"
                data-placement="top"
                title="This will be the name for you to refer to in your dashboard."
              >
                ?
              </button>
            </div>
            <div className="col-md-5">
              <TextFieldGroup
                name="postCaption"
                placeholder="Enter Caption name ..."
                value={this.state.postCaption}
                onChange={this.onChange}
                error={errors.postCaption}
                info="Visible to Masters / Teachers :: "
                must="Mandatory"
              />
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-outline-info btn-xsm"
                data-toggle="tooltip"
                data-placement="top"
                title="Enter a catchy name. This will be posted/published."
              >
                ?
              </button>
            </div>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
                checked={this.state.startAddrChecked}
                onChange={this.handleStartAddrChange}
              />{' '}
              <font color="green">
                Would you travel to your training from a different
                location (e.g. your school)?
              </font>
            </label>
          </div>
          {askAddr}
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <TextAreaFieldGroup
                placeholder="Summary of your pitch."
                name="studentDescription"
                value={this.state.studentDescription}
                onChange={this.onChange}
                error={errors.studentDescription}
                info="Describe what you are looking for and what you would like to accomplish. ::"
                must="Mandatory"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <strong>High Level Interest in: </strong>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="animalCaretaker">Animal Handling</option>
                  <option value="autoMechanic">Auto Mechanics</option>
                  <option value="carpenter">Carpentry</option>
                  <option value="caregiver">Caregiving</option>
                  <option value="cheff">Chef-Cook</option>
                  <option value="computerHardware">Computer Mechanics</option>
                  <option value="construction">Construction</option>
                  <option value="electrician">Electrical</option>
                  <option value="gardening">Gardening</option>
                  <option value="painter">Painting</option>
                  <option value="plumber">Plumbing</option>
                  <option value="security">Security</option>
                  <option value="programming">Software Development</option>
                  <option value="teacher">Teaching</option>
                  <option value="webDesign">Web Design</option>
                  <option value="other">Other ...</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <TextFieldGroup
                name="highLevelOtherDomain"
                placeholder="If Other, write the high-level type."
                value={this.state.highLevelOtherDomain}
                onChange={this.onChange}
                error={errors.highLevelOtherDomain}
                info="Provide service request domain name if not in the list"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <RadioGroup
                name="yourProfession"
                selectedValue={this.state.selectedProfession}
                onChange={this.handleSelectedProfession}
              >
                {' '}
                <label>
                  <h6>You are a &nbsp;&nbsp;</h6>
                </label>
                <label>
                  <Radio value="student" />
                  &nbsp;Student&nbsp;&nbsp;
                </label>
                <label>
                  <Radio value="work" />
                  &nbsp;Work&nbsp;&nbsp;
                </label>
                <label>
                  <Radio value="homeWork" />
                  &nbsp;Home Care&nbsp;&nbsp;
                </label>
                <label>
                  <Radio value="other" />
                  &nbsp;Other
                </label>
              </RadioGroup>
            </div>
            <div className="col-md-6">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                  checked={this.state.specialTrainingCheck}
                  onChange={this.handleSpecialTrainingCheck}
                />{' '}
                <font color="green">
                  Do you have some training or experience?
                </font>
              </label>
            </div>
          </div>
          {specialTrainingDesc}
          <div className="row">
            <div className="col-md-6">
              <div className="float-left slider-text-paddig">
                <h5>
                  Slide to years in the interest-area :
                  <font color="blue">
                    <strong> {this.state.interestVolume}</strong>
                  </font>
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <Slider
                value={this.state.interestVolume}
                orientation="horizontal"
                max={15}
                handleLabel={'--Years'}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-2">
              <label>
                <strong>Level Desired</strong>
              </label>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="beginner">Beginner</option>
                  <option value="intermedite">Intermediate</option>
                  <option value="advance">Advance</option>
                  <option value="all">All Levels</option>
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <label>
                <strong>Engagement Preference</strong>
              </label>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="tuition">Tuition Only</option>
                  <option value="workTuition">Work + Tuition</option>
                  <option value="work">Work for Master</option>
                  <option value="workPromise">Work + Student Promise </option>
                  <option value="workPromise">
                    Tuition + Student Promise{' '}
                  </option>
                  <option value="other">Other... </option>
                </select>
              </div>
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-6">
              <RadioGroup
                name="yourProfession"
                selectedValue={this.state.selectedBackgroundCheck}
                onChange={this.handleBackgroundCheck}
              >
                {' '}
                <label>
                  <h6>Background check OK? &nbsp;&nbsp;</h6>
                </label>
                <label>
                  <Radio value="yes" />
                  &nbsp;OK&nbsp;&nbsp;
                </label>
                <label>
                  <Radio value="no" />
                  &nbsp;Not-OK&nbsp;&nbsp;
                </label>
              </RadioGroup>
            </div>
            <div className="col-md-6">&nbsp;</div>
          </div>
          <div className="textspaceTop" />
          <div className="float-right">
            <button
              className="btn shadow border border-white btn-primary btn-sm button-pad-top"
              onClick={this.handleSaveClick}
            >
              Save &nbsp;
              <i className="fa fa-check" />
            </button>
          </div>
          <div className="float-left">
            <button
              className="btn shadow border border-white btn-success btn-sm button-pad-top"
              onClick={this.handlePostClick}
            >
              Post &nbsp;
              <i className="fa fa-check" />
            </button>
          </div>
          <div className="form_padding_bottom_big">&nbsp;</div>
        </form>
      </div>
    );
  }
}

export default ApprenticeForMaster;
