import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NookAbout from './about/AboutContainer';
import NookTasks from './taskList/TaskDiaryContainer';
import TheMask from './mask/TheMaskTalk';

import ProfileContainer from './profile/ProfileContainer';
import SocialCircle from './socialCircle/SocialCircleContainer';

import Budgeting from './budget/BudgetContainer';

import './utils/nook.css';

class Nook extends Component {
  constructor() {
    super();
    this.state = {
      start: false,
      name: '',
      counter: 0,
      defaultNookInformation: true,
      ExploreyourSelfwithBaanda: false,
      ChoresJournalsLifestuff: false,
      YourDynamicSocialCircles: false,
      budgetInYourLife: false,
      theMask: false
    };

    this.input = React.createRef();
  }

  componentDidMount() {
    console.log('componentDidMount()');
    if (this.props.auth.isAuthenticated) {
      this.setState({ name: this.props.auth.user.name });
    } else {
      if (this.state.start) {
        return <Redirect to="/" />;
      }
    }
  }

  render() {
    //const { errors } = this.state;
    let nookMainFunctionalPanel;

    if (this.state.defaultNookInformation) {
      nookMainFunctionalPanel = (
        <div className="fixedsize">
          <NookAbout />
        </div>
      );
    }

    if (this.state.ExploreyourSelfwithBaanda) {
      nookMainFunctionalPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <ProfileContainer />
          </div>
        </div>
      );
    }

    if (this.state.ChoresJournalsLifestuff) {
      nookMainFunctionalPanel = (
        <div className="tasksNjournals">
          <NookTasks />
        </div>
      );
    }

    if (this.state.YourDynamicSocialCircles) {
      nookMainFunctionalPanel = (
        <div className="fixedsize">
          <SocialCircle />
        </div>
      );
    }

    if (this.state.budgetInYourLife) {
      nookMainFunctionalPanel = (
        <div className="fixedsize">
          <Budgeting />
        </div>
      );
    }

    if (this.state.theMask) {
      nookMainFunctionalPanel = (
        <div className="tasksNjournals">
          <TheMask />
        </div>
      );
    }

    return (
      <div className="nook">
        <p className="top-padding" />
        <div className="container">
          <p className="top-padding-workarea" />
          <h4 className="display-5 text-center">Your Nook</h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultNookInformation: true,
                      ExploreyourSelfwithBaanda: false,
                      ChoresJournalsLifestuff: false,
                      YourDynamicSocialCircles: false,
                      budgetInYourLife: false,
                      theMask: false
                    }));
                  }}
                >
                  About
                  <div className="float-right">
                    <i className="fas fa-book-open" />
                  </div>
                </button>
              </div>

              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultNookInformation: false,
                      ExploreyourSelfwithBaanda: true,
                      ChoresJournalsLifestuff: false,
                      YourDynamicSocialCircles: false,
                      budgetInYourLife: false,
                      theMask: false
                    }));
                  }}
                >
                  Profile
                  <div className="float-right">
                    <i className="fas fa-user-circle" />
                  </div>
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultNookInformation: false,
                      ExploreyourSelfwithBaanda: false,
                      ChoresJournalsLifestuff: true,
                      YourDynamicSocialCircles: false,
                      budgetInYourLife: false,
                      theMask: false
                    }));
                  }}
                >
                  Task & Diary'
                  <div className="float-right">
                    <i className="fas fa-pen-square" />
                  </div>
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultNookInformation: false,
                      ExploreyourSelfwithBaanda: false,
                      ChoresJournalsLifestuff: false,
                      YourDynamicSocialCircles: true,
                      budgetInYourLife: false,
                      theMask: false
                    }));
                  }}
                >
                  Social Circle
                  <div className="float-right">
                    <i className="fas fa-users" />
                  </div>
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultNookInformation: false,
                      ExploreyourSelfwithBaanda: false,
                      ChoresJournalsLifestuff: false,
                      YourDynamicSocialCircles: false,
                      budgetInYourLife: true,
                      theMask: false
                    }));
                  }}
                >
                  Budgeting
                  <div className="float-right">
                    <i className="fas fa-money-check-alt" />
                  </div>
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultNookInformation: false,
                      ExploreyourSelfwithBaanda: false,
                      ChoresJournalsLifestuff: false,
                      YourDynamicSocialCircles: false,
                      budgetInYourLife: false,
                      theMask: true
                    }));
                  }}
                >
                  Humanoid Talk
                  <div className="float-right">
                    <i className="fas fa-address-book" />
                  </div>
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">
              {nookMainFunctionalPanel}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Nook.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Nook);
