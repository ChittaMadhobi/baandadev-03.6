import React, { Component } from 'react';
import classnames from 'classnames';

//import NoteContainer from '../../../utils/components/editor/NoteContainer';

class TestForm extends Component {
  constructor() {
    super();

    this.state = {
      campaignName: '',
      campaignType: '',
      subject: '',
      recipients: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault(); // In form, we do not want to have default functions
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    console.log('email' + userData.email);
    //this.props.loginUser(userData);
  }
  render() {
    const { errors } = this.state;

    return (
      <div>
        <form>
          <p className="text-center">Reachout Campaign</p>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                className={classnames('form-control text-info font-size-xsm', {
                  'is-invalid': errors.campaignName
                })}
                placeholder="Campaign Name please *"
                name="campaignName"
                value={this.campaignName}
                onChange={this.onChange}
              />
              {errors.campaignName && (
                <div className="invalid-feedback">{errors.campaignName}</div>
              )}
              <div className="text-info font-size-xsm form_padding_bottom">
                A name for dashboard reference{' '}
              </div>
            </div>
            <div className="form-group col-md-6">
              <select
                name="reachoutType"
                className="form-control form-control-sm font-size-xsm"
              >
                <option defaultValue value="reachout">
                  Reachout - Communicate
                </option>
                <option value="survey">Survey - Learn e</option>
              </select>
              <div className="text-info font-size-xsm form_padding_bottom">
                Select the type of campaign{' '}
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className={classnames(
                'form-control form-control text-info font-size-xsm',
                {
                  'is-invalid': errors.subject
                }
              )}
              placeholder="Campaign Name please *"
              name="subject"
              value={this.subject}
              onChange={this.onChange}
            />
            {errors.campaignName && (
              <div className="invalid-feedback">{errors.subject}</div>
            )}
            <div className="text-info font-size-xsm form_padding_bottom">
              A catchy subject for your recipents{' '}
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className={classnames(
                'form-control form-control-sm text-info font-size-xsm',
                {
                  'is-invalid': errors.recipient
                }
              )}
              placeholder="Enter a nice subject *"
              name="recipient"
              value={this.recipient}
              onChange={this.onChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.recipient}</div>
            )}
            <div className="text-info font-size-xsm form_padding_bottom">
              Recipients list as - name,email; OR email; email{' '}
            </div>
          </div>
          <div className="form-group" />
        </form>
      </div>
    );
  }
}

export default TestForm;
