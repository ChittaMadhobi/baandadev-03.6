import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../../../../actions/modalActions';

import '../../../css/localModal.css';
import './css/sx.css';

import SXPursuitBody from './SXPursuitBody';

// class StartHereModal extends Component {
class SXPursuitModal extends Component {
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
    // console.log(
    //   'In render SXPursuitModal props: ' + JSON.stringify(this.props)
    // );
    return (
      <div className="container">
        <div className="modal-content-z">
          <div className="row text-center justify-content-center">
            <div className="modal-header">
              <h4>
                <font color="#0e5b2e">
                  <b>Service Xchange Pursuit Modal</b>
                </font>
              </h4>
            </div>
          </div>

          <div className="modal-body-zz">
            <div className="row">
              <div className="col-12">
                <SXPursuitBody
                  id={this.props.message.id}
                  from={this.props.message.from}
                  title={this.props.message.title}
                  message={this.props.message.message}
                  messageType={this.props.message.messageType}
                  messageDate={this.props.message.messageDate}
                  type={this.props.message.type}
                  postName={this.props.message.postName}
                  inputd={'SXPursuitModal'}
                />
              </div>
            </div>
          </div>

          {/* <div className="modal-footer"> */}
          <div className="footer">
            <div className="row">
              <div className="col-md-8 col-sm-6 float-left font-size-modal-note">
                &nbsp;&nbsp;{' '}
                <b>
                  {' '}
                  Xchanging service is the core of society. Respect your peers.
                </b>
              </div>
              <div className="col-md-4 col-sm-6">
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

SXPursuitModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { hideModal }
)(SXPursuitModal);
