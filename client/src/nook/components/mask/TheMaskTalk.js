import React, { Component } from 'react';
//import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

//import CarouselManualRead from '../modals/CarouselManualRead';

// Will have to align soon
import ModalContainer from '../../../modal/components/ModalContainer';
import { showModal, hideModal } from '../../../actions/modalActions';
import '../../../modal/css/template.css';
import '../../../modal/css/localModal.css';

class TheMaskTalk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      holoEmulation: false
    };
  }

  openAlertModal = param => e => {
    //console.log('param : ' + param);
    let msg = 'This could be Jit ID: ' + param;
    this.props.showModal(
      {
        open: true,
        title: 'Alert - Start Here Header',
        message: msg,
        closeModal: this.closeModal
      },
      'carouselMan'
    );
  };

  openHoloModal = param => e => {
    console.log('param : ' + param);
    //let msg = 'This could be Jit ID: ' + param;
    // this.props.showModal(
    //   {
    //     open: true,
    //     title: 'Alert - Start Here Header',
    //     message: msg,
    //     closeModal: this.closeModal
    //   },
    //   'holoEmulation'
    // );
  };

  render() {
    const ans = 'wxyz';

    return (
      // <div className="thamasktalk">
      <div>
        <div className="container">
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="textspaceTop" />
              <div className="textspaceTop" />
              <div className="textspaceTop" />
              <div className="demobuttons">
                <button
                  className="btn btn-dark btn-block btn-lg mt-4"
                  type="button"
                  onClick={this.openAlertModal(ans)}
                >
                  Overview Slider
                  <div className="float-right">
                    <i className="fas fa-book-open" />
                  </div>
                </button>
              </div>
              {/* <div className="demobuttons">
                <button
                  className="btn btn-dark btn-block btn-lg mt-4"
                  type="button"
                  onClick={this.openAutoModal(ans)}
                >
                  Carousel Auto Voice
                  <div className="float-right">
                    <i className="fas fa-book-open" />
                  </div>
                </button>
              </div> */}
              <div className="demobuttons">
                <button
                  className="btn btn-dark btn-block btn-lg mt-4"
                  type="button"
                  onClick={this.openHoloModal(ans)}
                >
                  Hologram Emulation
                  <div className="float-right">
                    <i className="fas fa-user-circle" />
                  </div>
                </button>
              </div>
            </div>

            <div className="col-md-8 col-sm-6">
              <div className="text-center">
                <h4>
                  <b>Humanoid Conversation UX</b>
                </h4>

                <br />
                <h6 className="masktalk-text">
                  <font color="blue">
                    Humanoid conversation UX (User Experience) cannot be
                    described in traditional HTML and/or wireframe. This is one
                    of the pillars of Baanda platform. It will effect every
                    story of Baanda and hence needs to be experienced.
                  </font>
                </h6>
                <br />
              </div>
            </div>
            <div className="col-12">
              <ul className="float-left masktalk-text">
                <li>
                  <b>Carousel Manual Read</b> (button) talks about what-and-why
                  with a hint of how. It includes implementation evolution with
                  a video at the end.
                </li>
                <li>
                  <b>Emulates Hologram </b> (button) centric experience that
                  devices will enable in future.
                </li>
              </ul>
              <div className="text-center masktalk-text-note">
                <b>
                  Note: Baanda is not about holographic hardwire and/or devices.
                  It will depend on devices to come commercially. Baanda is
                  about the 'mind' as explained in here.
                </b>
                <p>
                  <font color="blue">
                    Slider may not work in sx (mobile phone).
                  </font>
                </p>
              </div>
              <div className="textspaceTop" />
              <div className="textspaceTop" />
            </div>
          </div>
        </div>
        <ModalContainer />
        <div className="footerspace" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    console.log(
      'modalProps:' + JSON.stringify(modalProps) + '  |modalType:' + modalType
    );
    dispatch(showModal({ modalProps, modalType }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(TheMaskTalk);
