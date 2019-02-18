import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../../../../actions/modalActions';

import '../../../css/localModal.css';
import './css/nook.css';

import CarouselManualBody from './CarouselManualBody';

// class StartHereModal extends Component {
class CarouselManual extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageText: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    console.log('closeModal.func : ' + this.state.messageText);
    const modTask = {
      messageText: this.state.messageText
    };

    this.props.hideModal(modTask);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log('CarouselManual props :' + JSON.stringify(this.props));
    //const { title, message, messageText } = this.props;
    const { user } = this.props.auth;
    console.log('user:' + JSON.stringify(user));
    const { title, message } = this.props;

    console.log('title :' + title + ' | message:' + message);
    return (
      <div className="container">
        <div className="modal-content-z">
          <div className="row text-center justify-content-center">
            <div className="modal-header">
              <h4>
                <font color="#0e5b2e">
                  <b>HUMANOID TALK - CAROUSEL OVERVIEW</b>
                </font>
              </h4>
            </div>
          </div>

          <div className="modal-body-zz">
            <div className="row">
              <div className="col-12">
                <CarouselManualBody />
              </div>
            </div>
          </div>

          {/* <div className="modal-footer"> */}
          <div className="footer">
            <div className="row">
              <div className="col-6 float-left font-size-modal-note">
                &nbsp;&nbsp;&nbsp;&nbsp; <b>Note:</b> Use angle-brackets to
                slide to next or previous panels.{' '}
              </div>
              <div className="col-6">
                <div className="float-right">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.closeModal}
                    onChange={this.onChange}
                  >
                    <strong>Close</strong> &nbsp;
                    <div className="float-right">
                      <i className="fas fa-ban" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CarouselManual.propTypes = {
  hideModal: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { hideModal }
)(CarouselManual);
