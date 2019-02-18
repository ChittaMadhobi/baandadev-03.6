import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ReachoutField from './ReachoutField';
import { Link } from 'react-router-dom';
import validateEmails from '../../../utils/validateEmails';

import NoteContainer from '../../../utils/components/editor/NoteContainer';

class ReachoutForm extends Component {
  constructor(props) {
    super(props);

    window.localStorage.removeItem('contextReachout');
    //console.log('ReachoutForm - editorContext : ' + this.props.editorContext);
  }

  // clearForm = () => {
  //   console.log('inside clearForm');
  //   this.reachoutForm.reset();
  // };

  onClickGoogle(e) {
    e.preventDefault();

    // this.props.onReachoutSubmit();
  }
  //<form onSubmit={this.props.handleSubmit(this.props.onReachoutSubmit)}>
  render() {
    //console.log('props:' + JSON.stringify(values));

    // const xx = JSON.stringify(this.props);
    // console.log('this.xx:' + xx);

    // Original <form statement is
    // <form onSubmit={this.props.handleSubmit(values => console.log(values)}>  Then ...
    // <form onSubmit={this.props.handleSubmit(values => function(values)}>
    // Redux-form takes care of values and hence
    // <form onSubmit={this.props.handleSubmit(() => function()}>
    // That would transform into <form onSubmit={this.props.handleSubmit(function}>
    // In our case, this.props.onReachoutSubmit is in ReachoutNew.js (parent)
    return (
      <div className="text-left">
        <form
          onSubmit={this.props.handleSubmit(this.props.onReachoutSubmit)}
          ref={el => (this.myFormRef = el)}
        >
          <p className="text-center text-info font-weight-bold">
            A Campaign Setup Wizard
          </p>
          <div className="form-row">
            <div className="form-group col-md-6">
              <Field
                key="1"
                name="title"
                className="text-info font-size-xsm form_padding_bottom"
                component={ReachoutField}
              />
              <div className="text-muted font-size-xsm ">
                Reference name for dashboard <font color="red">**</font>
              </div>
            </div>
            <div className="form-group col-md-6">
              <Field
                name="reachoutType"
                placeholder="Selection is mandatory"
                component="select"
                className="form-control form-control-sm font-size-xsm"
              >
                <option value="none">Must select a reachout type</option>
                <option value="reachout">Reachout - send email</option>
                <option value="survey">Send Survey - Learn</option>
              </Field>
              <div className="text-muted font-size-xsm ">
                Please select a type of communication{' '}
                <font color="red">**</font>
              </div>
            </div>
          </div>

          <Field key="3" name="subject" component={ReachoutField} />
          <div className="text-info font-size-xsm form_padding_bottom">
            This is a subject of your content your recipent will see{' '}
            <font color="red">**</font>
          </div>
          <Field key="4" name="recipient" component={ReachoutField} />
          <div className="text-info font-size-xsm form_padding_bottom">
            Recipient list. Check information for personalization.{' '}
            <font color="red">**</font>
          </div>

          {/* Should  remove this with a button function call to clear all fields. */}
          <div className="float-right">
            <button
              className="btn shadow border border-white btn-primary btn-sm button-pad-top"
              type="submit"
            >
              Review &nbsp;
              <i className="fa fa-check" />
            </button>
          </div>
        </form>
        <Link
          to="/lobby"
          className="btn shadow border border-white btn-danger btn-sm button-pad-top"
        >
          Cancel &nbsp;
          <i className="fa fa-ban" />
        </Link>
        <div className="footerspace" />
        <div>
          <NoteContainer editorContext={'contextReachout'} />
        </div>
        <div className="footerspace" />
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');
  if (!values.title) {
    errors.title = 'Title is mandatory';
  }

  if (!values.subject) {
    errors.subject = 'Subject is mandatory field';
  }
  if (!values.reachoutType) {
    errors.reachout = 'Please select a type';
  }
  if (!values.recipient) {
    errors.recipient = 'Must provide at least one recipent address.';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'reachoutForm',
  destroyOnUnmount: false
})(ReachoutForm);
