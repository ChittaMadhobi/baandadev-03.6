// SRForm or Service Requestor Form
import React, { Component } from 'react';
import TextFieldGroup from './TextFieldGroup';
import TextAreaFieldGroup from './TextAreaFieldGroup';
import '../post.css';

class SRForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postType: 'serviceRequestor',
      postName: '',
      postCaption: '',
      address: '',
      zipCode: '',
      serviceDescription: '',
      highLevelOtherDomain: '',
      skillList: '',
      training: '',
      personality: '',
      maxBudget: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
          <p className="text-center text-primary font-weight-bold">
            Service Request / Help Wanted / Find Workforce
          </p>
        </h4>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <TextFieldGroup
                name="postCaption"
                placeholder="Enter Caption name ..."
                value={this.state.postCaption}
                onChange={this.onChange}
                error={errors.postCaption}
                info="This will be visible to viewer :: "
                must="Mandatory"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="address"
                placeholder="Enter street address of work-location"
                value={this.state.address}
                onChange={this.onChange}
                error={errors.address}
                info="Enter your project-service location :: "
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
                info="Please provide service location zip code :: "
                must="Mandatory"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <TextAreaFieldGroup
                placeholder="Describe the project or type of work"
                name="serviceDescription"
                value={this.state.serviceDescription}
                onChange={this.onChange}
                error={errors.serviceDescription}
                rows={5}
                info="Describe your work for viewing ::"
                must="Mandatory"
              />
            </div>
          </div>
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
                    Upload a photo
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
                <small>Please upload a project photo for the posting.</small>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <strong>Work Focus </strong>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="animalCaretaker">Animal Caretaker</option>
                  <option value="babyCaretaker">Childcare</option>
                  <option value="caregiver">Caregiver</option>
                  <option value="construction">Construction</option>
                  <option value="gardening">Gardening</option>
                  <option value="handyman">Handyman</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="security">Security</option>
                  <option value="teacher">Teacher</option>
                  <option value="carpentry">Carpentry</option>
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
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-6">
              <strong>Location: &nbsp;</strong>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="location"
                    id="location1"
                    value="atLocation"
                  />{' '}
                  At-Location
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="location"
                    id="location2"
                    value="remote"
                  />{' '}
                  Remote
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <strong>Work Type:&nbsp;</strong>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="workType"
                    id="workType1"
                    value="project"
                  />{' '}
                  Project
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="workType"
                    id="workType2"
                    value="time-based"
                  />{' '}
                  Time Based
                </label>
              </div>
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <TextFieldGroup
                name="skillList"
                placeholder="Enter skills expected. Separate with a comma."
                value={this.state.skillList}
                onChange={this.onChange}
                error={errors.skillList}
                info="Please indicate minimal skill type required - default is No-skill-needed."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="training"
                placeholder="Special training/experience needed"
                value={this.state.training}
                onChange={this.onChange}
                error={errors.training}
                info="Indicate if experience needed "
              />
            </div>
            <div className="col-md-6">
              <TextFieldGroup
                name="personality"
                placeholder="Preferred personality"
                value={this.state.personality}
                onChange={this.onChange}
                error={errors.personality}
                info="Indicate personality preferred (if desired)"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="maxBudget"
                placeholder="Max budget in $"
                value={this.state.maxBudget}
                onChange={this.onChange}
                error={errors.maxBudget}
                info="Your max budget (not visible to others)"
              />
            </div>
            <div className="col-md-6">
              <strong>Budget for: &nbsp;</strong>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="budgetType"
                    id="budgetType1"
                    value="Hourley"
                  />{' '}
                  hourly
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="budgetType"
                    id="budgetType2"
                    value="project"
                  />{' '}
                  Project
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <strong>Prefer: &nbsp;</strong>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender1"
                    value="male"
                  />{' '}
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender2"
                    value="female"
                  />{' '}
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender3"
                    value="any"
                  />{' '}
                  Any
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <strong>Requires license/permit:&nbsp;</strong>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="needPermit"
                    id="needPaermit1"
                    value="yes"
                  />{' '}
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="needPermit"
                    id="needPermit2"
                    value="no"
                  />{' '}
                  No
                </label>
              </div>
            </div>
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

export default SRForm;
