import React, { Component } from 'react';

import ReactPhoneInput from 'react-phone-input-2';

import TextFieldGroup from '../../../../utils/TextFieldGroup';
import TextAreaFieldGroup from '../../../../utils/TextAreaFieldGroup';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import '../../utils/nook.css';

const defaultInviteNote =
  'I am sending you an invitation to join my social circle in Baanda.' +
  ' It is a great way for us to connect,' +
  ' understand each-other, and stay connected. ' +
  ' This will give me a better understanding of what people think about me in general.' +
  ' That will enable me to improve myself' +
  ' If you are not a Baanda yet, check them out by clicking on the link. ' +
  ' If you are already a Baanda, then you will find this inviation in your Lobby -> Nook -> Social Circle -> Connect with social circle';

const defaultTextNote =
  'I am inviting you to my social circle. Once you register as a Baanda, the invitation will be in your nook->Social Circle->Connect with your social circle box.';

class CreateSocialCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connectionName: '',
      youCallBy: '',
      relationStrength: 5,
      inviteNote: defaultInviteNote,
      hailNote: '',
      signature: '',
      emailAddr: '',
      textInvite: false,
      mobileNumber: '',
      textNote: defaultTextNote,

      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.handleTextInvite = this.handleTextInvite.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      'This is a UX or usability experience. Currently, your entries are not being saved or validated. When released, the click of this button will save the data entered.'
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRelationOnChange = value => {
    this.setState({
      relationStrength: value
    });
  };

  onChangePhone = value => {
    // console.log('phone:' + value);
    // this.setState({
    //   mobileNumber: value
    // });
  };

  handleTextInvite() {
    //let xx = document.getElementById('inlineCheckbox1').value;
    //console.log('Value of textbox1 selected:' + xx);
    this.setState({
      textInvite: !this.state.textInvite
    });
  }

  render() {
    const { errors } = this.state;

    let textInviteInput;
    if (this.state.textInvite) {
      textInviteInput = (
        <div className="row">
          <div className="col-md-6">
            <TextAreaFieldGroup
              placeholder="Text note ..."
              name="textNote"
              value={this.state.textNote}
              rows={2}
              onChange={this.onChange}
              error={errors.textNote}
              info="If you want, change default note to text :: "
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
      );
    } else {
      textInviteInput = null;
    }

    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h3>Request Connection</h3>
          </div>
          <br />
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <TextFieldGroup
                  name="connectionName"
                  placeholder="Enter your connection's name ..."
                  value={this.state.connectionName}
                  onChange={this.onChange}
                  error={errors.connectionName}
                  info="Name of the person who you want in your circle :: "
                  must="Mandatory"
                />
              </div>
              <div className="col-md-6">
                <TextFieldGroup
                  name="youCallBy"
                  placeholder="What you call him/her "
                  value={this.state.youCallBy}
                  onChange={this.onChange}
                  error={errors.youCallBy}
                  info="The name you use (e.g. dad, mom, nickname ...) :: "
                  must="Mandatory"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label>
                  <strong>Relation Type</strong>
                </label>
              </div>
              <div className="col-md-4">
                <div className="selectWrapper form-control form-control-sm">
                  <select size="5" className="selectWidth">
                    <option value="friend">My Friend</option>
                    <option value="coworker">My Co-worker</option>
                    <option value="father">My Father</option>
                    <option value="mother">My Mother</option>
                    <option value="brother">My Brother</option>
                    <option value="sister">My Sister</option>
                    <option value="cousine">My Cousin</option>
                    <option value="mentor">My Teacher/mentor</option>
                    <option value="uncle">My Uncle</option>
                    <option value="aunt">My Aunt</option>
                    <option value="companion">My Companion</option>
                    <option value="husband">My husband</option>
                    <option value="wife">My wife</option>
                    <option value="partner">My Partner</option>
                    <option value="boyfriend">My Boyfriend</option>
                    <option value="girlfriend">My Girlfriend</option>
                    <option value="lover">My lover</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <TextFieldGroup
                  name="youCallBy"
                  placeholder="What is the relation type?"
                  value={this.state.youCallBy}
                  onChange={this.onChange}
                  error={errors.youCallBy}
                  info="If other ... describe the relation :: "
                  must="Mandatory (if other)"
                />
              </div>
            </div>
            <div className="textspaceTop" />
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body shadow card-top5-slider-header">
                    <div className="text-center">
                      <strong>
                        Relationship-strength &nbsp; || &nbsp; Use slider to
                        indicate your score: &nbsp;
                        <font color="blue">{this.state.relationStrength}</font>
                      </strong>
                      <br />
                      Describe the strength of the relation with the person you are
                      inviting as you feel{' '} <b>today</b> . For strong
                      positive feelings, score closer to 10. For very negative feelings,
                      score closer to 0 (zero). 5 should be avoided because that
                      indicates indifference. That relation should not be in your
                      close circle.
                    </div>
                  </div>
                  <div className="card-body shadow card-top5-slider-body">
                    <Slider
                      value={this.state.relationStrength}
                      orientation="horizontal"
                      max={10}
                      handleLabel={'--Pts'}
                      onChange={this.handleRelationOnChange}
                    />
                  </div>
                </div>
                <div className="textspaceTop" />
              </div>
            </div>
            <div className="textspaceTop" />
            <div className="row">
              <div className="col-md-6">
                <TextFieldGroup
                  name="youCallBy"
                  placeholder="Dear ..."
                  value={this.state.hailNote}
                  onChange={this.onChange}
                  error={errors.hailNote}
                  info="Greet the person you are inviting ... "
                  must="Mandatory"
                />
              </div>
              <div className="col-md-6">
                <TextFieldGroup
                  name="youCallBy"
                  placeholder="Email"
                  value={this.state.emailAddr}
                  onChange={this.onChange}
                  error={errors.emailAddr}
                  info="Enter the email of the invitee ... "
                  must="Mandatory"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <TextAreaFieldGroup
                  placeholder="Your invitation"
                  name="inviteNote"
                  value={this.state.inviteNote}
                  rows={5}
                  onChange={this.onChange}
                  error={errors.inviteNote}
                  info="Edit or write a note. This will be sent as an email."
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
                  checked={this.state.textInvite}
                  onChange={this.handleTextInvite}
                />{' '}
                <font color="green">
                  Check if you want send an additional text notification to highlight your invitation.
                </font>
              </label>
            </div>
            {textInviteInput}
            <div className="textspaceTop" />
            <div className="row">
              <div className="col-12">
                <h6>
                  <font color="blue">
                    <strong>Note:</strong> Until the invitation has been accepted, he/she
                    will not appear in your social circle. In the 'Assess and
                    Get Reflection' section, you can change the
                    strength of, or drop off, a relation at any time. There
                    will be at max <b>15</b> people in your circle.
                  </font>
                </h6>
              </div>
            </div>
            <div className="textspaceTop" />
            <div className="float-right">
              <button
                className="btn btn-primary btn-sm btn-size-same"
                onClick={this.handleSaveClick}
              >
                Save &nbsp;
                <i className="fa fa-check" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateSocialCircle;
