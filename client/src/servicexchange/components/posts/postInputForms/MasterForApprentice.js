import React, { Component } from 'react';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import { RadioGroup, Radio } from 'react-radio-group';

import TextFieldGroup from './TextFieldGroup';
import TextAreaFieldGroup from './TextAreaFieldGroup';

class MasterForApprentice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postType: 'masterForApprentice',
      postName: '',
      postCaption: '',
      workshopAddress: '',
      workshopZipCode: '',
      masterDescription: '',
      specialTrainingArea1: '',
      specialTrainingArea2: '',
      highLevelOtherDomain: '',
      workshopName: '',
      specilToolRequeredList: '',
      specialToolRequired: true,
      volume: 5,
      specialTraining: false,
      selectedValue: 'no',
      selectedBackgroundCheck: 'yes',
      diffWorkshopAddr: false,

      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSpecialTrainingCheck = this.handleSpecialTrainingCheck.bind(
      this
    );
    this.handleSpecialToolReq = this.handleSpecialToolReq.bind(this);
    this.handleDiffShopaddr = this.handleDiffShopaddr.bind(this);
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

  handleDiffShopaddr() {
    this.setState({
      diffWorkshopAddr: !this.state.diffWorkshopAddr
    });
  }

  handleSpecialToolReq(value) {
    //console.log(value);
    this.setState({
      selectedValue: value
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  handleOnChange = value => {
    this.setState({
      volume: value
    });
  };

  handleSpecialTrainingCheck() {
    //let xx = document.getElementById('inlineCheckbox1').value;
    //console.log('Value of textbox1 selected:' + xx);
    this.setState({
      specialTraining: !this.state.specialTraining
    });
  }

  render() {
    const { errors } = this.state;

    let specialTool;
    if (this.state.selectedValue === 'yes') {
      specialTool = (
        <div>
          <TextFieldGroup
            name="specilToolRequeredList"
            placeholder="List tools, comma separated"
            value={this.state.specilToolRequeredList}
            onChange={this.onChange}
            error={errors.specilToolRequeredList}
            info="List tools comma(,) separated: "
            must="Mandatory"
          />
        </div>
      );
    } else {
      specialTool = (
        <div>
          <font color="green">
            <b>Students are not required to have personal tools </b>
          </font>
        </div>
      );
    }

    let askAddr;
    if (this.state.diffWorkshopAddr) {
      askAddr = (
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              name="workshopAddress"
              placeholder="Enter Workshop Address"
              value={this.state.workshopAddress}
              onChange={this.onChange}
              error={errors.workshopAddress}
              info="Enter your workshop address :: "
              must="Mandatory"
            />
          </div>
          <div className="col-md-6">
            <TextFieldGroup
              name="workshopZipCode"
              placeholder="Enter location zipcode ..."
              value={this.state.workshopZipCode}
              onChange={this.onChange}
              error={errors.workshopZipCode}
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
              info="State your primary training area :: "
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
              info="Enter secondary special training in :: "
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
            Master Seeking Apprentice / Students
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
                info="A name for your reference :: "
                must="Mandatory"
              />
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-outline-info btn-xsm"
                data-toggle="tooltip"
                data-placement="top"
                title="This is what it will be called in your dashboard."
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
                info="Visible to Apprentice/Student :: "
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
          <div className="row">
            <div className="col-md-2">
              <strong>Master In </strong>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="animalCaretaker">Animal Handling</option>
                  <option value="autoMechanic">Auto Repair</option>
                  <option value="carpenter">Carpentry</option>
                  <option value="caregiver">Caregiving</option>
                  <option value="computerHardware">Computer Repair</option>
                  <option value="construction">Construction</option>
                  <option value="electrician">Electrical</option>
                  <option value="gardening">Gardening</option>
                  <option value="painter">Painting</option>
                  <option value="plumber">Plumbing</option>
                  <option value="restaurant">Cooking</option>
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

          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
                checked={this.state.diffWorkshopAddr}
                onChange={this.handleDiffShopaddr}
              />{' '}
              <font color="green">
                Check if your workshop location is different from home.
              </font>
            </label>
          </div>
          {askAddr}

          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <TextAreaFieldGroup
                placeholder="Summary of your pitch."
                name="masterDescription"
                value={this.state.masterDescription}
                onChange={this.onChange}
                error={errors.masterDescription}
                info="Describe your trade, specialty, and your mentoring style ::"
                must="Mandatory"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="workshopName"
                placeholder="Enter your workshop name ..."
                value={this.state.workshopName}
                onChange={this.onChange}
                error={errors.workshopName}
                info="Enter your workshop or school name :: "
                must="Mandatory"
              />
            </div>
            <div className="col-md-6">
              <div className="form-check form-check-inline">
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
                    Check if you have special training.
                  </font>
                </label>
              </div>
            </div>
          </div>
          {specialTrainingDesc}
          <div className="row">
            <div className="col-md-6">
              <div className="float-left slider-text-paddig">
                <h5>
                  Slide to years of experience :
                  <font color="blue">
                    <strong> {this.state.volume}</strong>
                  </font>
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <Slider
                value={this.state.volume}
                orientation="horizontal"
                max={30}
                handleLabel={'--Years'}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-2">
              <label>
                <strong>Level Offered</strong>
              </label>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="beginner">Beginner</option>
                  <option value="intermedite">Intermediate</option>
                  <option value="advance">Advanced</option>
                  <option value="all">All Levels</option>
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <label>
                <strong>Engagement Type</strong>
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
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile02"
                  />
                  <label className="custom-file-label">
                    Training Curriculum ...
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
              <p>
                <small>Upload a list of things you will teach or mentor.</small>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <RadioGroup
                name="specialToolRequired"
                selectedValue={this.state.selectedValue}
                onChange={this.handleSpecialToolReq}
              >
                {' '}
                <label>
                  <h6>Require personal tools? &nbsp;&nbsp;</h6>
                </label>
                <label>
                  <Radio value="yes" />
                  &nbsp;Yes &nbsp;&nbsp;
                </label>
                <label>
                  <Radio value="no" />
                  &nbsp;No
                </label>
              </RadioGroup>
            </div>
            <div className="col-md-6">{specialTool}</div>
          </div>
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

export default MasterForApprentice;
