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

import "../css/entrance.css";

class Lobby extends Component {
  // If someone use URL host:port/login ... it should not take to login if already so
  constructor() {
    super();
    this.state = {
      theNook: false,
      theSX: false,
    };

    this.openAlertModal = this.openAlertModal.bind(this);
  }

  openAlertModal = param => e => {
    console.log("param : " + param + " user:" + this.props.auth.user.name);
    let msg = "This could be Jit ID: " + param;
    this.props.showModal(
      {
        open: true,
        title: "Alert - Start Here Header",
        message: msg,
        closeModal: this.closeModal,
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
        closeModal: this.closeModal,
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

        <div className="landing-inner">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-center">
                <Link to="/servicexchange" className="btn btn-lobby-sx">
                  <strong>Service Xchange</strong>
                  <br />
                  <font size="2"> Work & Cooperation</font>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="text-center">
                <Link to="/cooperation" className="btn btn-lobby-coliving">
                  <strong>Co-Living </strong>
                  <br />
                  <font size="2"> Shared Intimacy Economy</font>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="landing-inner">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="text-center">
                <Link to="/blockchain" className="btn btn-lobby-agreement">
                  <strong>Agreement</strong>
                  <br />
                  <font size="2">Dynamic & Immutable</font>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="landing-inner">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="text-center">
                <Link to="/nook" className="btn btn-lobby-nook">
                  <strong>Nook</strong>
                  <br />
                  <font size="2"> Personal Life</font>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="text-center">
                <Link
                  to="/marketing"
                  className="btn btn-lobby-marketspace"
                >
                  <strong>Marketspace</strong>
                  <br />
                  <font size="2">Reachout Fund Invest </font>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="lobby-spaces" />
        <div className="landing-inner">
          <div className="row">
            <div className="col-12 text-center">
              <button
                className="btn-lobby-starthere"
                type="button"
                onClick={this.openAlertModal(ans)}
              >
                <b>Start Here</b>
              </button>

              {/* <button
                className="btn-lobby-starthere"
                type="button"
                onClick={this.openSitePlanModal(ans)}
              >
                Site Map
              </button> */}
              <button className="btn-lobby-starthere">
                <Link to="/baandaReception">
                  <font color="white"><b>Chat</b></font>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="landing-inner">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="text-center">
                <font size="2" color="#631102">For a better experience, this app works best on larger screens such as laptops, tablets and emerging foldable-phones. </font>
              </div>
            </div>
          </div>
        </div>

        

        <ModalContainer />
        <div className="footerspace" />
      </div>
    );
  }
}

Lobby.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    console.log(
      "modalProps:" + JSON.stringify(modalProps) + "  |modalType:" + modalType
    );
    dispatch(showModal({ modalProps, modalType }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
