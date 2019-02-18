// SurveyForm enables someone to setup a first reachout steps.
// The actual survey would be constructed via (survey / karketing) Create button
import _ from 'lodash'; // In case you want to use map function for iterating an array
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../../utils/validateEmails';
import formFields from './formFields';

// This formFields is equal to FIELDS - centralized to be used in other components
// const FIELDS = [
//   { label: 'Survey Title', name: 'title' },
//   { label: 'Subject Line', name: 'subject' },
//   { label: 'Email Body', name: 'body' },
//   { label: 'Recipient List', name: 'emails' }
// ];

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field key={name} name={name} label={label} component={SurveyField} />
      );
    });
  }

  render() {
    return (
      <div>
        <p className="text-center text-info font-weight-bold">
          A Campaign Setup Wizard
        </p>
        <div className="text-left">
          {/*<form
            onSubmit={this.props.handleSubmit(values => console.log(values))}
          > */}
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
            <div className="float-right">
              <button
                className="btn shadow border border-white btn-primary btn-sm button-pad-top"
                type="submit"
              >
                Review &nbsp;
                <i className="fa fa-check" />
              </button>
            </div>
            <div className="float-left">
              <Link
                to="/lobby"
                className="btn shadow border border-white btn-danger btn-sm button-pad-top"
              >
                Clear &nbsp;
                <i className="fa fa-times" aria-hidden="true" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  //console.log('values' + JSON.stringify(values));
  const errors = {};
  // We do destructuring to get name of fields object. 'fields' would available because of
  // lodash in FIELDS
  errors.emails = validateEmails(values.emails || ''); // It will throw error because it wants to validate onload ... and emails is null. If email is null, we are making it an empty string.

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'The field cannot be empty';
    }
  });

  return errors;
}

// reduxForm is wired up like connect
export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
