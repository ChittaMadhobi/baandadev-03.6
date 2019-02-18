import React from 'react';
import { connect } from 'react-redux';
//import { reset } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { EditorState, convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

//import NoteContainerReview from '../../../utils/components/editor/NoteContainerReview';
// NoteContainerReview may be used if we want to show NoteContainerReview instead of HTML

import { submitSurvey } from '../../../actions/marketActions';

const ReachoutFormReview = ({
  onReachoutCancel,
  formValues,
  submitSurvey,
  history
}) => {
  console.log('stuff:' + JSON.stringify(formValues));
  //===============================================================
  // This would always be contextReachout key in localStorage. This should be
  // deleted in submitSurvey action if axios call is a success. Ref: MarketActions.js
  const content = window.localStorage.getItem('contextReachout');
  // Create editorState
  let editorState = EditorState.createWithContent(
    convertFromRaw(JSON.parse(content))
  );
  // console.log('editorState : ' + JSON.stringify(editorState));
  const contentState = editorState.getCurrentContent();
  let html = stateToHTML(contentState);

  function createMarkup() {
    return { __html: html };
  }

  if (!formValues.reachoutType) {
    onReachoutCancel();
  }

  function onClickMail(formValues, history) {
    // console.log(
    //   'Got into onClick ...onClickMail .. ' + JSON.stringify(formValues)
    // );

    let newFormValue = {
      title: formValues.title,
      subject: formValues.subject,
      reachoutType: formValues.reachoutType,
      recipient: formValues.recipient,
      mailBody: html
    };

    // console.log('newFormValue : ' + JSON.stringify(newFormValue));
    submitSurvey(newFormValue, history);
    window.localStorage.removeItem('contextReachout');
    history.push('/lobby');
  }

  return (
    <div className="container">
      <h5 className="text-center text-info font-weight-bold">
        Please Review & Confirm
      </h5>
      <br />
      <div className="row">
        <div className="form-group col-md-6 d-inline compact-display">
          <p className="text-left demosmallfont compact-display">
            {' '}
            <font color="gray"> Campaign Title : </font>
            <font color="blue">
              <i>{formValues.title} </i>
            </font>
          </p>
        </div>
        <div className="form-group col-md-6 compact-display">
          <p className="text-left demosmallfont compact-display">
            {' '}
            <font color="gray"> Campaign Type : </font>
            <font color="blue">
              <i>{formValues.reachoutType} </i>
            </font>
          </p>
        </div>
      </div>
      <div className="form-group compact-display">
        <p className="text-left demosmallfont compact-display">
          {' '}
          <font color="gray"> To : </font>
          <font color="blue">
            <i>{formValues.recipient} </i>
          </font>
        </p>
      </div>
      <div className="form-group compact-display">
        <p className="text-left demosmallfont compact-display">
          {' '}
          <font color="gray"> Subject : </font>
          <font color="blue">
            <i>{formValues.subject} </i>
          </font>
        </p>
      </div>
      <div className="form-group ">
        <p className="text-center ">
          {' '}
          <font color="black">
            <b>
              <u> Your Letter - Body</u>
            </b>{' '}
          </font>{' '}
        </p>
        <div
          className="text-info font-size-xsm form_padding_bottom"
          dangerouslySetInnerHTML={createMarkup()}
        />
        {/* <NoteContainerReview editorContext={'contextReachout'} /> */}
      </div>
      <div />
      <div className="float-left">
        <button
          className="btn shadow border border-white btn-warning btn-sm button-pad-top"
          onClick={onReachoutCancel}
        >
          Edit (Go Back) &nbsp; <i className="fa fa-edit" aria-hidden="true" />
        </button>
      </div>
      <div className="float-right">
        <button
          className="btn shadow border border-white btn-success btn-sm button-pad-top"
          onClick={() => onClickMail(formValues, history)}
        >
          Send Mail &nbsp; <i className="fa fa-envelope" aria-hidden="true" />
        </button>
      </div>
      <div className="footerspace" />
    </div>
  );
};

//onClick={() => submitSurvey(formValues, history)}

function mapStateToProps(state) {
  //console.log('state : ' + JSON.stringify(state.form.ReachoutForm.values));
  return { formValues: state.form.reachoutForm.values };
}

//onClick={() => onClickMail(formValues, history)}
//onClick={() => submitSurvey(formValues)}

export default connect(
  mapStateToProps,
  { submitSurvey }
)(withRouter(ReachoutFormReview));
