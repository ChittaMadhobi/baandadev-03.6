import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { showModal } from '../../../../actions/socialActionTest';
import ModalContainer from '../../../../modal/components/ModalContainer';
import '../../../../modal/css/template.css';
import '../../../../modal/css/localModal.css';


class CFIntelViaModal extends Component {
  

  componentWillMount() {
    console.log('modalType:' + this.props.modalType + '  id:' + this.props.campaignId);  
    this.openCFIntelModal(this.props.modalType, this.props.campaignId)
  }

  openCFIntelModal = (param) => {
    // const modalProps = {
    //   open: true,
    //   // title: param.Title,
    //   title: campaignId.title,
    //   message: campaignId,
    //   closeModal: this.closeModal       // modal type if cfIntel
    // };
    const modalProps = {
      open: true,
      title: param.Title,
      message: param,
      closeModal: this.closeModal
    };

    // const modalType = 'socialMirror';
    const modalType = 'socialMirror';

    this.props.showModal(modalProps, modalType);
  };


  render() {
    console.log('CFItelViaModal props:' + JSON.stringify(this.props));
    return (
      <div>
        {/* <h5>CF Intel via modal</h5> */}
        <ModalContainer />
      </div>
    );
  }
}

CFIntelViaModal.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { showModal }
)(CFIntelViaModal);

