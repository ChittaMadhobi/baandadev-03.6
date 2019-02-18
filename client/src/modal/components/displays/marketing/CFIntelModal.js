import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../../../../actions/modalActions';

import '../../../css/localModal.css';
// import './modalmkt.css';
import '../servicexchange/css/sx.css';

import CFIntelBody from './CFIntelBody';

class CFIntelModal extends Component {

  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    //console.log('closeModal.func : ' + this.state.messageText);
    const modTask = {
      messageText: 'CF Intel Modal Closed'
    };

    this.props.hideModal(modTask);
  }

  render() {
    console.log('CFIntelModal props:' + JSON.stringify(this.props));

    return (
      <div className="container">
      <div className="modal-content-z">
        <div className="row text-center justify-content-center">
          <div className="modal-header">
            <h4>
              <font color="#0e5b2e">
                <b>Crowd Funding & Investment Intel Modal </b>
              </font>
            </h4>
          </div>
        </div>

        <div className="modal-body-zz">
          <div className="row">
            <div className="col-12">
              <CFIntelBody input={'IfWhenDataNeedsToBeSentViaProps'} />
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
                Everything in life is contextual with no absolute good or bad.
              </b>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="float-right">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.closeModal}
                  // onChange={this.onChange}
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

CFIntelModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { hideModal }
)(CFIntelModal);
