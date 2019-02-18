import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FiveFactorDirect from '../../utils/FiveFactorDirect';
import '../../utils/nook.css';

import { showModal } from '../../../../actions/socialActionTest';

import '../../../css/profile.css';
import ModalContainer from '../../../../modal/components/ModalContainer';
import '../../../../modal/css/template.css';
import '../../../../modal/css/localModal.css';

class AssessAndReflection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',

      assess: false,
      mirror: false,
      message: true,
      result: ''
    };
  }

  modalReadyFunction = reflectionType => {
    //console.log('reflectionType: ' + reflectionType);

    this.setState({
      assess: false,
      mirror: false,
      message: true
    });

    // const msgObj = {
    //   id: this.props.messages[id].id,
    //   from: this.props.messages[id].from,
    //   title: this.props.messages[id].Title,
    //   message: this.props.messages[id].message,
    //   messageType: msgType,
    //   messageDate: this.props.messages[id].startDate
    // };
    // alert(JSON.stringify(msgObj));
    this.openMirrorModal(reflectionType);
  };

  openMirrorModal = param => {
    const modalProps = {
      open: true,
      title: param.Title,
      message: param,
      closeModal: this.closeModal
    };

    const modalType = 'socialMirror';

    this.props.showModal(modalProps, modalType);
  };

  handleSelectChange = event => {
    this.setState({
      result: event.target.value
    });
  };

  render() {
    let workAreaAssess;
    let direction;

    if (this.state.message) {
      direction = (
        <div className="text-center">
          <br />
          <br />
          <h4>
            Click 'Assess someone from your circle' to assess
            someone who has invited you. The person who invited you will be in
            the dropdown. Select a name from the dropdown to assess. To see your
            reflection from the Social Circle you have created, select 
            'Mirror Mirror'.
          </h4>
        </div>
      );
    } else {
      direction = null;
    }

    if (this.state.assess) {
      workAreaAssess = (
        <div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-6">
              <div className="selectWrapper form-control form-control-sm">
                <select
                  size="5"
                  className="selectWidthAssess"
                  onClick={this.handleSelectChange}
                >
                  <option value="babs the friend">My Friend - Babs</option>
                  <option value="Leonardo de Vinci">Leonardo da Vinci</option>
                  <option value="Sappho De Lesbos">Sappho de Lesbos</option>
                  <option value="San Tsu">General San Tsu</option>
                  <option value="brother-Liki">My brother Liki</option>
                  <option value="sister-Perki">My sister Perki</option>
                  <option value="Jane Austen">Jane Austen</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              Select the person you would like to assess. If this is the first
              assessment, please try to complete it for a better result.
              <div>
                <strong>
                  Selected: <font color="blue">{this.state.result}</font>
                </strong>
              </div>
            </div>
          </div>
          <div>
            <div className="textspaceTop" />
            <FiveFactorDirect />
          </div>
        </div>
      );
    } else {
      workAreaAssess = null;
    }

    return (
      <div className="container">
        <div className="text-center">
          <div className="self-eval-head-padding">
            <h4>
              <font color="#5b749b">Select - Reflect or Reflection</font>
            </h4>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-12">
            <div>
              <div className="float-left">
                <button
                  className="btn btn-primary btn-md btn-size-same-mirror"
                  onClick={() => {
                    this.setState(preState => ({
                      assess: true,
                      mirror: false,
                      message: false
                    }));
                  }}
                >
                  Assess someone from your circle &nbsp;&nbsp;
                </button>
              </div>
              <div className="float-right">
                <button
                  className="btn btn-info btn-md btn-size-same-mirror"
                  onClick={() => this.modalReadyFunction('selfOnly')}
                >
                  Mirror Mirror  &nbsp;&nbsp;
                  </button>
              </div>
            </div>
          </div>
        </div>
        <div>{workAreaAssess}</div>
        <div>{direction}</div>
        <div>
          <ModalContainer />
          <div className="footerspace" />
        </div>
      </div>
    );
  }
}

AssessAndReflection.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { showModal }
)(AssessAndReflection);
