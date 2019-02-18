import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../../../../actions/modalActions';

import '../../../css/localModal.css';
import './css/nook.css';

import SCMessageBody from './SCMessageBody';

// class StartHereModal extends Component {
class SocialCircleMessage extends Component {
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
    //console.log('closeModal.func : ' + this.state.messageText);
    const modTask = {
      messageText: this.state.messageText
    };

    this.props.hideModal(modTask);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    //console.log('CarouselManual XXXXX props :' + JSON.stringify(this.props.message));
    //const { title, message, messageText } = this.props;
    // const { user } = this.props.auth;
    //console.log('user:' + JSON.stringify(user));
    //const { title, message } = this.props;
    const { message } = this.props;

    // console.log(
    //   'title :' +
    //     title +
    //     ' | message:' +
    //     JSON.stringify(message) +
    //     '  user:' +
    //     user
    // );
    return (
      <div className="container">
        <div className="modal-content-z">
          <div className="row text-center justify-content-center">
            <div className="modal-header">
              <h4>
                <font color="#0e5b2e">
                  <b>Details of Message and Invites </b>
                </font>
              </h4>
            </div>
          </div>

          <div className="modal-body-zz">
            <div className="row">
              <div className="col-12">
                <SCMessageBody inputd={message} />
              </div>
            </div>
          </div>

          {/* <div className="modal-footer"> */}
          <div className="footer">
            <div className="row">
              <div className="col-6 float-left font-size-modal-note">
                &nbsp;&nbsp;&nbsp;&nbsp; <b>Note:</b> Respond wisely. Close to
                respond later.{' '}
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

SocialCircleMessage.propTypes = {
  hideModal: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { hideModal }
)(SocialCircleMessage);
