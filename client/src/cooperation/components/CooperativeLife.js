import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './colive.css';

class CoperativeLife extends Component {
	constructor() {
		super();
		this.state = {
			start: false,
			name: '',
			counter: 0,
			CoopInfo: true,
			coopPost: false,
			coopDashboard: false,
			coopBrowse: false
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
		let coopWorkPanel;

		if (this.state.CoopInfo) {
			coopWorkPanel = (
        <div className="fixedsize-clpost">
        <div className="workarea-padding-cl">
          <div className="spacing" />
          <div className="text-center">
            <h5>Overview and Guide for Co-living</h5>
          </div>
          <div className="spacing" />
          <div className="row">
            <div className="col-1">&nbsp;</div>
            <div className="col-10">
              <font color="lightyellow" size="3">
                <p align="justify">
                  <b>Co-living</b> philosophy is woven around the concept of living in togetherness and shared life and its nuances. Living together requires certain harmony among participants. People induce feelings when they live together. A harmony will bring about more wellbeing than otherwise. 
                </p>
                <p align="justify">
                  However, in today's dynamic socio-economy, people are often forced to live with strangers. In general, it takes time to see each other and often it is a lifetime journey.
                </p>
                <p align="justify">
                  Baanda want to use its tools and technology to facilitate shared-life concept via bringing in harmonious characters together and enable to define their co-living framework. This about section will discuss the overview philosophies (what-why-how) in greater details. There would be two main models to start with. They are:
                </p>
                <ul>
                  <li>Shared economy in harmonious way. For example, it may be around the roommate concept but people involved agree to live with some common goal and way of life. Baanda will let people post; let people and come to a consensus to co-live and create ammendable contracts as constitution to live by.</li>
                  <li>Increasingly around the world, the prevailing nuclear concept of family is changing. Baanda will enable people to define their family, relaitons, economy and come to agreements.</li>
                </ul>
                <p align="justify">Co-living processes will be similar to Service Xchange but with the intent of living instead of working together harmoniously.</p>
              </font>
            </div>
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      </div>
			);
		}

		if (this.state.coopPost) {
			coopWorkPanel = (
				<div className="fixedsize-clpost">
        <div className="workarea-padding-cl">
          <div className="spacing" />
          <div className="text-center">
            <h5>Overview and Guide for Co-living</h5>
          </div>
          <div className="spacing" />
          <div className="row">
            <div className="col-1">&nbsp;</div>
            <div className="col-10">
              <font color="lightyellow" size="3">
                <p align="justify">
                  <b>Co-living Posting</b> will enable individuals to post their offering (if they have some facilities to share) and individuals who are looing for.  
                </p>
                <ul>
                  <li><b>Rommate or similar</b> shared economy posting will include other ideology, interests, philosophies for similarities beyond just economic reasons.</li>
                  <li><b>Alternative Lifestyle</b> will enable people to post their selves for others willing to share all faculties of life together. It is expected, people will forge various models per their life contexts.</li>
                </ul>
                <p align="justify">Baanda will not only facilitate but also learn from various models and their context that people will form to co-live.</p>
              </font>
            </div>
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      </div>
			);
		}

		if (this.state.coopDashboard) {
			coopWorkPanel = (
				<div className="fixedsize-clpost">
        <div className="workarea-padding-cl">
          <div className="spacing" />
          <div className="text-center">
            <h5>Co-living Dashboard</h5>
          </div>
          <div className="spacing" />
          <div className="row">
            <div className="col-1">&nbsp;</div>
            <div className="col-10">
              <font color="lightyellow" size="3">
                <p align="justify">
                  <b>Co-living Dashboard</b> will have the features of  SX (service xchange) and Nok that includes messaging center, living-together like a project, budgeting, feedback mechanism, conflict resolutions and so on. The intent would be focused towards celebratory living insetad of working. 
                </p>
                <p>Dashboard will let people:</p>
                <ul>
                  <li>
                    Look for their persuits intelligently
                  </li>
                  <li>Message Center</li>
                  <li>Managing life together like project but heightened effect of emotions and feelings.</li>
                  <li>Browse their history; intelligences around living together etc.</li>
                </ul>
                <p align="justify">Baanda will not only facilitate but also learn from various models and their context that people will form to co-live.</p>
              </font>
            </div>
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      </div>
			);
		}

		if (this.state.coopBrowse) {
			coopWorkPanel = (
				<div className="fixedsize-clpost">
					<div className="workarea-padding-cl">
						<div className="spacing" />
						<div className="spacing" />
						<div className="text-center">
							<h5>Overview and Guide for Co-living</h5>
						</div>
						<div className="spacing" />
						<div className="row">
							<div className="col-2">&nbsp;</div>
							<div className="col-8">
								<font color="lightyellow" size="3">
									<p align="justify">
										<b>Co-living</b> browse will enable people to filter, search, and browse postings like Service Xchange or Markespace. 
									</p>
									<p align="justify">
										We are releasing this state of UX before completion so that Baanda engineers can adjust its UX based on common feedback patterns to elevate the usage and better experience. Sooner we get feedbacks, faster we would be able to incorporate those ideas.
									</p>
								</font>
							</div>
							<div className="col-2">&nbsp;</div>
						</div>
					</div>
				</div>
			);
		}

		return (
			<div className="nook">
				<p className="top-padding" />
				<div className="container">
					<p className="top-padding-workarea" />
					<h4 className="display-5 text-center">Co-living</h4>
					<div className="row">
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="demobuttons">
								<button
									className="btn btn-outline-primary btn-block btn-sm mt-4"
									type="button"
									onClick={() => {
										this.setState((preState) => ({
											CoopInfo: true,
											coopPost: false,
											coopDashboard: false,
											coopBrowse: false
										}));
									}}
								>
									About
								</button>
							</div>

							<div className="demobuttons">
								<button
									className="btn btn-outline-primary btn-block btn-sm mt-4"
									type="button"
									onClick={() => {
										this.setState((preState) => ({
											CoopInfo: false,
											coopPost: true,
											coopDashboard: false,
											coopBrowse: false
										}));
									}}
								>
									Post
								</button>
							</div>
							<div className="demobuttons">
								<button
									className="btn btn-outline-primary btn-block btn-sm mt-4"
									type="button"
									onClick={() => {
										this.setState((preState) => ({
											CoopInfo: false,
											coopPost: false,
											coopDashboard: true,
											coopBrowse: false
										}));
									}}
								>
									Dashboard
								</button>
							</div>
							<div className="demobuttons">
								<button
									className="btn btn-outline-primary btn-block btn-sm mt-4"
									type="button"
									onClick={() => {
										this.setState((preState) => ({
											CoopInfo: false,
											coopPost: false,
											coopDashboard: false,
											coopBrowse: true
										}));
									}}
								>
									Browse
								</button>
							</div>
						</div>
						<div className="col-lg-10 col-md-8 col-sm-6">{coopWorkPanel}</div>
					</div>
				</div>
			</div>
		);
	}
}

CoperativeLife.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, {})(CoperativeLife);
