/*
 **  Author: Jit (Sarbojit Mukherjee)
 **  Desc:   Provides the basic landing for Baanda with two opetions ... to chat with Baanda
 **          or login / signin to get to the lobby
 **  Note:   Every program and aspects of Baanda_dev, as of this day, is being coded and handled by Jit
 **  Date:   July 9, 2018
 **  Version:0.01
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

//import { Redirect } from 'react-router-dom';
import ModalContainer from "../../../modal/components/ModalContainer";
import { showModal, hideModal } from "../../../actions/modalActions";
import "../../../modal/css/template.css";
import "../../../modal/css/localModal.css";

class Lobby extends Component {
  // If someone use URL host:port/login ... it should not take to login if already so
  constructor() {
    super();
    this.state = {
      theNook: false,
      theSX: false
    };

    this.openAlertModal = this.openAlertModal.bind(this);
  }
 
  openAlertModal = param => e => {
    console.log('param : ' + param + ' user:' + this.props.auth.user.name);
    let msg = "This could be Jit ID: " + param;
    this.props.showModal(
      {
        open: true,
        title: "Alert - Start Here Header",
        message: msg,
        closeModal: this.closeModal
      },
      "alert"
    );
  };

  openSitePlanModal = param => e => {
    //console.log('param : ' + param);
    let msg = "This could be Jit ID: " + param;
    this.props.showModal(
      {
        open: true,
        title: "Alert - Start Here Header",
        message: msg,
        closeModal: this.closeModal
      },
      "siteplan"
    );
  };

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  render() {
    const ans = "abcd";

    return (
      <div className="lobby">
        <div className="lobbyheader">
          <div className="row text-center text_white">
            <div className="col-12">
              <div className="headerpic headerpicLeftPad">
                <span className="align-baseline-left">
                  <h1>The Baanda Lobby</h1>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="landing-inner text-dark">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="textspaceTop" />
              <div className="textspaceTop" />
              {/* <div className="textspaceTop" /> */}
              <div className="row">
                <div className="col text-center">
                  <div>
                    <Link
                      to="/baandaReception"
                      className="btn btn-outline-info btn-block"
                    >
                      <strong>CHAT</strong>
                      <div className="float-right">
                        <i className="fas fa-comments" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="textspaceTop" />
              <div className="row">
                <div className="col text-center">
                  {/* <div className="demobuttons"> */}
                    <button
                      className="btn btn-dark btn-block mt-4"
                      type="button"
                      onClick={this.openAlertModal(ans)}
                    >
                      Start Here
                      <div className="float-right">
                        <i className="far fa-play-circle" />
                      </div>
                    </button>
                  </div>
                {/* </div> */}
              </div>
              <div className="row">
                <div className="col text-center">
                  {/* <div className="demobuttons"> */}
                    <button
                      className="btn btn-info btn-block mt-4"
                      type="button"
                      onClick={this.openSitePlanModal(ans)}
                    >
                      Site Map
                      <div className="float-right">
                        <i className="fas fa-map" />
                      </div>
                    </button>
                  </div>
                {/* </div> */}
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-2">
              <div className="lobbyNook">
                <div className="row text-left text_white">
                  <div className="col-12">
                    <div className="headerpic">
                      <div className="headerpicLeftPad">
                        <span className="align-baseline-left">
                          <h3>Nook</h3>
                        </span>
                      </div>
                      <div className="textspaceTop" />
                      <div className="textspaceTop" />
                      <div className="headertext text-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            {" "}
                            <i className="fa fa-check" />
                            &nbsp; Persona
                          </li>

                          <li className="list-inline-item">
                            <i className="fa fa-check" />
                            &nbsp; Tasks Mgmt.
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-check" />
                            &nbsp; Social Circle
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-check" />
                            &nbsp; Budget
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-check" />
                            &nbsp; Reflections
                          </li>
                        </ul>
                      </div>
                      <div className="textspaceTop" />
                      <div className="text-center">
                        <div className="btn-group btn-trigger">
                          <Link to="/nook" className="btn btn-lg btn-info">
                            <strong>Enter & Engage</strong>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-2">
              <div className="lobbySX">
                <div className="row text-left text_white">
                  <div className="col-12">
                    <div className="headerpic">
                      <div className="headerpicLeftPad">
                        <span className="align-baseline-left">
                          <h3>Service Xchange</h3>
                        </span>
                      </div>
                      <div className="textspaceTop" />
                      <div className="textspaceTop" />
                      <div className="headertext text-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            {" "}
                            <i className="fa fa-check" />
                            &nbsp; Post
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-check" />
                            &nbsp; Get matched
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-check" />
                            &nbsp; Engage
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-check" />
                            &nbsp; Co-work
                          </li>
                          <li className="list-inline-item">
                            <i className="fa fa-check" />
                            &nbsp; Your Dashboard
                          </li>
                        </ul>
                      </div>
                      <div className="textspaceTop" />
                      <div className="text-center">
                        <div className="btn-group btn-trigger">
                          <Link
                            to="/servicexchange"
                            className="btn btn-lg btn-info"
                          >
                            <strong>Enter & Engage</strong>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="textspaceTop" />
              <div className="textspaceTop" />
              {/* <div className="textspaceTop" /> */}
              <div className="row">
                <div className="col text-center">
                  <div>
                    <Link
                      to="/marketing"
                      className="btn btn-outline-primary btn-block"
                    >
                      <strong>Marketspace</strong>
                      <div className="float-right">
                        <i className="fas fa-envelope" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="textspaceTop" />
              <div className="textspaceTop" />
              <div className="row">
                <div className="col text-center">
                  <div>
                    <Link
                      to="/cooperation"
                      className="btn btn-outline-primary btn-block"
                    >
                      <strong>Co-Living </strong>
                      <div className="float-right">
                        <i className="fas fa-home" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="textspaceTop" />
              <div className="textspaceTop" />
              <div className="row">
                <div className="col text-center">
                  <div>
                    <Link
                      to="/blockchain"
                      className="btn btn-outline-primary btn-block"
                    >
                      <strong>Agreement</strong>
                      <div className="float-right">
                        <i className="fas fa-link" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <ModalContainer />
        <div className="footerspace" />
      </div>
    );
  }
}

Lobby.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    console.log(
      "modalProps:" + JSON.stringify(modalProps) + "  |modalType:" + modalType
    );
    dispatch(showModal({ modalProps, modalType }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
