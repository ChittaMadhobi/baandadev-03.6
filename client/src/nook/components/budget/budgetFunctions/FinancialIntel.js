import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//import FiveFactorDirect from '../../utils/FiveFactorDirect';
import '../../utils/nook.css';

import { showModal } from '../../../../actions/socialActionTest';

import '../../../css/profile.css';
import ModalContainer from '../../../../modal/components/ModalContainer';
import '../../../../modal/css/template.css';
import '../../../../modal/css/localModal.css';

class FinancialIntel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mirror: false,
      message: true,
      result: ''
    };
  }

  modalReadyFunction = reflectionType => {
    //console.log('reflectionType: ' + reflectionType);

    this.setState({
      mirror: false,
      message: true
    });

    this.openMirrorModal(reflectionType);
  };

  openMirrorModal = param => {
    const modalProps = {
      open: true,
      title: param.Title,
      message: param,
      closeModal: this.closeModal
    };

    const modalType = 'financialMirror';

    this.props.showModal(modalProps, modalType);
  };

  handleSelectChange = event => {
    this.setState({
      result: event.target.value
    });
  };

  render() {
    let direction;

    if (this.state.message) {
      direction = (
        <div className="text-center">
          <h4>
            <font color="#2b5aa5">Pie Chart Income and Expense Distribution:</font>{' '}
            Shows your present cumulative breakdown from the beginning of your annual
            period.{' '}
          </h4>
          <br />
          <h4>
            <font color="#a52b58">Bar Chart Budgeted to Real Income Comparison:</font>{' '}
            Month-by-month comparison snapshots.{' '}
          </h4>
          <br />
          <h4>
            <font color="#a5552b">
              Bar Chart Budgeted to Real Expense Comparison:
            </font>{' '}
            Month-by-month comparison snapshots.{' '}
          </h4>

          <br />
          <h4>
            <font color="#a56c2b">Graph Income and Expense Distribution:</font>{' '}
            Shows your income, expense and savings trends with analytics.{' '}
          </h4>
          <br />
        </div>
      );
    } else {
      direction = null;
    }

    return (
      <div className="container">
        <div className="text-center">
          {/* <div className="self-eval-head-padding">
            <h4>
              <font color="#5b749b">
                <u>Your Financial Reality & Reflection</u>
              </font>
            </h4>
          </div> */}
        </div>
        <div className="textspaceTop" />
        <div>{direction}</div>
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <button
                className="btn btn-info btn-md btn-size-finance-mirror"
                onClick={() => this.modalReadyFunction('selfOnly')}
              >
                Click for Intelligence Modal &nbsp;&nbsp;&nbsp;
                <i class="fas fa-american-sign-language-interpreting" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <ModalContainer />
          <div className="footerspace" />
        </div>
      </div>
    );
  }
}

FinancialIntel.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { showModal }
)(FinancialIntel);
