import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ReachoutForm from './ReachoutForm';
import ReachoutFormReview from './ReachoutFormReview';

class ReachoutNew extends Component {
  constructor(props) {
    super(props);
    this.state = { showReachoutReview: false };
  }

  renderContent() {
    if (this.state.showReachoutReview) {
      return (
        <ReachoutFormReview
          editorContext={'contextReachout'}
          onReachoutCancel={() => this.setState({ showReachoutReview: false })}
        />
      );
    }
    // Create callback so showFormReview can be toggled
    return (
      <ReachoutForm
        editorContext={'contextReachout'}
        onReachoutSubmit={() => this.setState({ showReachoutReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'reachoutForm'
})(ReachoutNew);
