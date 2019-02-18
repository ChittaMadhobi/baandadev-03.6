import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../../actions/marketActions';

// We destructure and take the onCancel from the props instead of the whole props
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviweFields = _.map(formFields, field => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    );
  });

  // submitSurvey(formValues) will be executed as soon as the component is loaded
  // to execute it onClick, we wrap it as {() => submitSurvey(formValues)}
  return (
    <div>
      <h5 className="text-center text-info font-weight-bold">
        Please Review & Confirm
      </h5>
      {reviweFields}
      <div className="float-left">
        <button
          className="btn shadow border border-white btn-warning btn-sm button-pad-top"
          onClick={onCancel}
        >
          Edit (Go Back) &nbsp; <i className="fa fa-edit" aria-hidden="true" />
        </button>
      </div>
      <div className="float-right">
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="btn shadow border border-white btn-success btn-sm button-pad-top"
        >
          Reachout (Send) &nbsp;{' '}
          <i className="fa fa-envelope" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
