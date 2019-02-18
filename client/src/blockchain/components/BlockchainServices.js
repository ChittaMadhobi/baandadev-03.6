import React, { Component } from 'react';

// import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './bc.css';

import BCAbout from './about/AboutContainer';
// import BCPostContainer from './posts/PostContainer';
import BCPostContainer from './posts/ContractRequestList';


class BlockchainServices extends Component {
  constructor() {
    super();
    this.state = {
      bcInfo: true,
      bcPost: false,
      bcDashboard: false,
      bcBrowse: false
    };

    this.onChange = this.onChange.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // console.log('componentDidMount()');
    if (this.props.auth.isAuthenticated) {
      this.setState({ name: this.props.auth.user.name });
      // console.log(
      //   'onMount .. isAuthenticated is true name:' + this.props.auth.user.name
      // );
      // console.log('this state name : ' + this.state.name);
    } else {
      if (this.state.start) {
        return <Redirect to="/" />;
      }
      // console.log('onmount .. isAuthenticated is FALSE');
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log('props:' + JSON.stringify(this.props.auth));
    let blockchainPanel;

    if (this.state.bcInfo) {
      blockchainPanel = (
        <div className="fixedsize-bcpost">
          <div className="workarea-padding-bc">
            <BCAbout />
          </div>
        </div>
      );
    }
    if (this.state.bcPost) {
      blockchainPanel = (
        <div className="fixedsize-bcpost">
          <div className="workarea-padding-bc">

            <BCPostContainer auth={this.props.auth}/>
          </div>
        </div>
      );
    }

    if (this.state.bcDashboard) {
      blockchainPanel = (
        <div className="fixedsize-bcpost">
          <div className="workarea-padding-bc">
            Dashboard
          </div>
        </div>
      );
    }

    if (this.state.bcBrowse) {
      blockchainPanel = (
        <div className="fixedsize-bcpost">
          <div className="workarea-padding-history">
          <div className="top-space" />
            <div className="row">
                <div className="col text-center">
                <h6> You do not have history ready for your contracts</h6>
                </div>
            </div>
            <div className="top-space" />
            <p align="justify">
            At present there is only one active contract of Angelo for crowd fundraising deployed in Blockchain (Ethereum Rinkby Test Net). It is an AI driven, ploicy oriented approval based contribution system, emulating a merger of AI with Blockchain technologies. Art gallery co-op formation used non-blockchain e-signature based agreement. This UX being disconnected from DB cannot show that now. Baanda has provision of both traditional agreement creation as well as blockchain combo. In few weeks, Angelo is likely to initiate a co-living agreement for a elevated life-experience if living with like minded people.   
            </p>
            <p align="justify">
            In the next release, as Baanda gets reattached to database, the history along with various intelligence charts, graphs, summary, and logs will be available.
            </p>
            <font color="orange">
            <p align="justify">
            This section will allow an individual to review all historical agreements, depndency agreements forged via softchaining; agreement's impact-intelligence generated via entropy in one's life. 
            </p>
            </font>
          </div>
        </div>
      );
    }
    return (
      // <div className="blockchain">
      <div>
        <p className="top-padding" />
        <div className="container">
          <p className="top-padding-workarea" />
          <h4 className="display-5 text-center">
            <b>Agreement (Smart Contract) Services</b>
          </h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      bcInfo: true,
                      bcPost: false,
                      bcDashboard: false,
                      bcBrowse: false
                    }));
                  }}
                >
                  About
                  <div className="float-right">
                  <i className="fas fa-info-circle"></i>
                  </div>
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      bcInfo: false,
                      bcPost: true,
                      bcDashboard: false,
                      bcBrowse: false
                    }));
                  }}
                >
                  Factory (Author)
                  <div className="float-right">
                  <i className="far fa-clipboard"></i>
                  </div>
                </button>
              </div>
              {/* <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      bcInfo: false,
                      bcPost: false,
                      bcDashboard: true,
                      bcBrowse: false
                    }));
                  }}
                >
                  Dashboard
                  <div className="float-right">
                  <i className="fas fa-globe"></i>
                  </div>
                </button>
              </div> */}
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      bcInfo: false,
                      bcPost: false,
                      bcDashboard: false,
                      bcBrowse: true
                    }));
                  }}
                >
                  History-Intel
                  <div className="float-right">
                  <i className="fas fa-glasses"></i>
                  </div>
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">{blockchainPanel}</div>
          </div>
        </div>
      </div>
    );
  }
}

BlockchainServices.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(BlockchainServices);
