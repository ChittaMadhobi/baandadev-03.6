// SPForm or Serviec Provide Form
import React, { Component } from 'react';
import TextFieldGroup from './TextFieldGroup';
import TextAreaFieldGroup from './TextAreaFieldGroup';
import '../post.css';

class SPForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postType: 'serviceProvider',
      postName: '',
      postCaption: '',
      address: '',
      zipCode: '',
      serviceDescription: '',
      highLevelOtherDomain: '',
      skillList: '',
      minBudget: '',

      startAddrChecked: false, // Used for toggling show-hide of address fields

      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleStartAddrChange = this.handleStartAddrChange.bind(this);
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

  handleStartAddrChange() {
    //let xx = document.getElementById('inlineCheckbox1').value;
    //console.log('Value of textbox1 selected:' + xx);
    this.setState({
      startAddrChecked: !this.state.startAddrChecked
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

    return (
      <div className="container">
        <h4>
          <p className="text-center text-primary font-weight-bold">
            Service Provider / Seeking Work
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
                info="This will be visible to employer :: "
                must="Mandatory"
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
                checked={this.state.startAddrChecked}
                onChange={this.handleStartAddrChange}
              />{' '}
              <font color="green">
                Check if you will often travel to work from a different location (e.g. your school).
              </font>
            </label>
          </div>
          {askAddr}
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <TextAreaFieldGroup
                placeholder="Summary of what you are looking for."
                name="serviceDescription"
                value={this.state.serviceDescription}
                onChange={this.onChange}
                error={errors.serviceDescription}
                info="Describe what you are looking for ::"
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
                    Upload resume or portfolio
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
                <small>Please upload a resume or experience-portfolio.</small>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <label>
                <strong>Skill Focus</strong>
              </label>
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
          <div className="row">
            <div className="col-md-2">
              <label>
                <strong>Occupation</strong>
              </label>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="enteringWorkLife">Entry Level</option>
                  <option value="freelance">Freelance</option>
                  <option value="student">Student</option>
                  <option value="employed">Full-Time</option>
                  <option value="partimer">Part-time</option>
                  <option value="homekeeper">Work From Home</option>
                  <option value="inBetween">In Between</option>
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <label>
                <strong>Availability</strong>
              </label>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="anytime">Anytime</option>
                  <option value="dayjob">Day (9 to 5)</option>
                  <option value="morning">Morning </option>
                  <option value="morning">Afternoon</option>
                  <option value="morning">Evening </option>
                  <option value="morning">Nights </option>
                  <option value="morning">Remote myTime </option>
                  <option value="morning">Project myTime </option>
                  <option value="morning">Project Sync Co-op </option>
                  <option value="morning">Project anyTime </option>
                </select>
              </div>
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
                placeholder="Enter skills expected - comma (,) dellimited"
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
                name="minBudget"
                placeholder="Min earning in $"
                value={this.state.minBudget}
                onChange={this.onChange}
                error={errors.minBudget}
                info="Indicate your minimum (not visible to others)"
              />
            </div>
            <div className="col-md-6">
              <strong>Prefer: &nbsp;</strong>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="budgetType"
                    id="budgetType1"
                    value="Hourley"
                  />{' '}
                  Hourly
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

export default SPForm;
