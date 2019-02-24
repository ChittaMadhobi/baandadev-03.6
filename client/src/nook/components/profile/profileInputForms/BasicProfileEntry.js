import React, { Component } from 'react';
import ReactPhoneInput from 'react-phone-input-2';
//import PropTypes from 'prop-types';

import checkboxes from './checkboxesIOT';
import Checkbox from '../../../../utils/Checkbox';

import TextFieldGroup from '../../../../utils/TextFieldGroup';
import TextAreaFieldGroup from '../../../../utils/TextAreaFieldGroup';
import '../../utils/nook.css';

class BasicProfileEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postType: 'basicProfile',
      populerName: '',
      mobileNumber: '',
      lifeSnippet: '',
      otherSuccess: '',
      trackIOTChecked: false,
      checkedItems: new Map(),

      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.handleTrackIOTChange = this.handleTrackIOTChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.handleStartAddrChange = this.handleStartAddrChange.bind(this);
    // this.handleSaveClick = this.handleSaveClick.bind(this);
    // this.handlePostClick = this.handlePostClick.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  }

  handleTrackIOTChange() {
    //let xx = document.getElementById('inlineCheckbox1').value;
    //console.log('Value of textbox1 selected:' + xx);
    this.setState({
      trackIOTChecked: !this.state.trackIOTChecked
    });
  }

  onChangePhone = value => {
    console.log('phone:' + value);
  };

  handleSaveClick() {
    alert(
      'This is a UX or usability experience. Your entries are not currently being saved or validated. When released, the click of this button will save the data entered.'
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
    let iotList;

    if (this.state.trackIOTChecked) {
      iotList = (
        <div className="row">
          <div className="col-12">
            <div className="textspaceTop" />
            <p className="checkbox-font-iot">
              <strong>
                <u>Select IOT devices to track</u> (Note: Some examples are
                still in research state)
              </strong>
            </p>
            <React.Fragment>
              {checkboxes.map(item => (
                <div className="checkbox-font-iot">
                  <label key={item.key}>
                    <Checkbox
                      name={item.name}
                      checked={this.state.checkedItems.get(item.name)}
                      onChange={this.handleChange}
                    />
                    &nbsp;&nbsp;
                    <strong>{item.name}</strong>
                  </label>
                </div>
              ))}
            </React.Fragment>
            <strong>
              Note: Most of the emerging IoT device connectivities and standards
              are in R&D states. Baanda intends to detect demand patterns and
              work/partner with respective IoT devices to enable real-time 
              monitoring as IA (Intelligence Augmentation).
            </strong>
          </div>
        </div>
      );
    } else {
      iotList = null;
    }

    return (
      <div className="container">
        <div className="text-center">
          <h3>Basic Profile Entry</h3>
        </div>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="populerName"
                placeholder="Enter your preferred name"
                value={this.state.populerName}
                onChange={this.onChange}
                error={errors.populerName}
                info="The name you go by "
                must=" - mandatory"
              />
            </div>
            <div className="col-md-6">
              <ReactPhoneInput
                name="mobileNumber"
                className="form-control form-control-sm"
                value={this.state.mobileNumber}
                defaultCountry={'us'}
                onChange={this.onChangePhone(this.state.mobileNumber)}
              />
              <p className="text-muted">
                <small>Mobile number (default USA) - mandatory.</small>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <strong>Gender: &nbsp;</strong>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="location1"
                    value="atLocation"
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
                    id="location2"
                    value="remote"
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
                    id="location2"
                    value="other"
                  />{' '}
                  Other
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <strong>Pronoun Preferred:&nbsp;&nbsp;</strong>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="pronoun"
                    id="workType1"
                    value="he"
                  />{' '}
                  He
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="pronoun"
                    id="workType2"
                    value="time-based"
                  />{' '}
                  She
                </label>
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
                    Upload a photo of yourself
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
                <small>Please upload a facial photograph.</small>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <label>
                <strong>Age you FEEL</strong> Not necessarily your actual age.
              </label>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="kid">Below Ten - Kiddo</option>
                  <option value="earlyTeen">Early Teen (10-14)</option>
                  <option value="lateTeen">Late Teen (15-20)</option>
                  <option value="youngAdult">
                    Young Adult (21-30)
                  </option>
                  <option value="gardening">
                    Vibrant adult (31-40)
                  </option>
                  <option value="handyman">Adult (41-55)</option>
                  <option value="restaurant">Mature Adult (55-70)</option>
                  <option value="security">
                    More Mature Adult (71-85)
                  </option>
                  <option value="teacher">Ageless > 85</option>
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <label>
                <strong>Formal Education</strong>
              </label>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="lowerSchool">Middle-School</option>
                  <option value="highSchool">High-School</option>
                  <option value="college">College</option>
                  <option value="university">University</option>
                  <option value="universityPlus">Masters and Above</option>
                  <option value="vocational">Vocational</option>
                  <option value="outOfBoxSchool">
                    Not into boxed education
                  </option>
                  <option value="notAnswering">
                    Really? Not answering this
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-2">
              <label>
                <strong>Physically, I am a ...</strong>
              </label>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="babeNhunk">Babe - Hunk</option>
                  <option value="babeNhunk">God - Goddess</option>
                  <option value="average">Average looking</option>
                  <option value="lateTeen">Average sexy</option>
                  <option value="youngAdult">Below average </option>
                  <option value="gardening">I don't like my looks</option>
                  <option value="handyman">Not responding </option>
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <label>
                <strong>Mentally, I am a ...</strong>
              </label>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="genius">Genius</option>
                  <option value="aboveAverage">Above Average</option>
                  <option value="creative">Creative - Imaginative</option>
                  <option value="reader">Reader - Curious</option>
                  <option value="dreamer">Day Dreamer - Fantasize</option>
                  <option value="downToEarth">Down to Earth</option>
                  <option value="notIntoMind">Not into Mind Stuff</option>
                  <option value="notAnswering">
                    Really? Not answering this
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <TextAreaFieldGroup
                placeholder="Share a snippet of your life or an interesting story you might tell a friend (in 100 words or less)."
                name="lifeSnippet"
                value={this.state.lifeSnippet}
                rows={4}
                onChange={this.onChange}
                error={errors.lifeSnippet}
                info="Tell me something interesting about you. You can always return and tell me more later."
              />
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-2">
              <label>
                <strong>My definition of success is</strong>
              </label>
            </div>
            <div className="col-md-4">
              <div className="selectWrapper form-control form-control-sm">
                <select size="3" className="selectWidth">
                  <option value="lazyHappy">Hang-loose, be happy</option>
                  <option value="fame">Fame</option>
                  <option value="braniac">Intelligence</option>
                  <option value="money">Rich</option>
                  <option value="fameAndMoney">Rich and famous</option>
                  <option value="compeitition">Winner</option>
                  <option value="togetherness">Togetherness </option>
                  <option value="love">Romance and love </option>
                  <option value="wildSex">Wild Sex</option>
                  <option value="helpOther">Helping Others </option>
                  <option value="scholar">Learn and teach </option>
                  <option value="artist">Create Art</option>
                  <option value="scientist">Scientific achievement</option>
                  <option value="politician">Successful Politician</option>
                  <option value="management">Success in Business</option>
                  <option value="leader">Leader </option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <TextFieldGroup
                name="otherSuccess"
                placeholder="If Other, state your definition in a word or two."
                value={this.state.otherSuccess}
                onChange={this.onChange}
                error={errors.otherSuccess}
                info="Your definition if not on the list"
              />
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="IOTCheck"
                checked={this.state.tractIOTChecked}
                onChange={this.handleTrackIOTChange}
              />{' '}
              <font color="green">
                Do you want Baanda to monitor your bio-metric health via IoT{' '}
                <strong>(Biometric Internet of Things)</strong>
                &nbsp;devices?
              </font>
            </label>
          </div>
          {iotList}
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
        </form>
        <div className="textspaceTop" />
        <div className="textspaceTop" />
        <div className="textspaceTop" />
      </div>
    );
  }
}

export default BasicProfileEntry;
