import React, { Component } from 'react';

import MktAbout from './about/AboutContainer';
import MktPosts from './post/PostContainer';
import MktDashContainer from './dashboard/MktDashContainer';
import MktBrowseContainer from './browse/MktBrowseContainer';

import './mkt.css';

class Marketing extends Component {
	constructor() {
		super();
		this.state = {
			mktInfo: true,
			mktPosts: false,
			mktDashboard: false,
			mktBrowse: false
		};
	}

	render() {
		let finContext;

		if (this.state.mktInfo) {
			finContext = (
				<div className="fixedsize-mktpost">
					<div className="workarea-padding-mkt">
						<MktAbout />
					</div>
				</div>
			);
		}



		if (this.state.mktPosts) {
			finContext = (
				<div className="fixedsize-mktpost">
					<div className="workarea-padding-mkt">
          <MktPosts />
					</div>
				</div>
			);
		}

		if (this.state.mktDashboard) {
			finContext = (
				<div className="fixedsize-mktpost">
					<div className="workarea-padding-mkt">
						<MktDashContainer />
					</div>
				</div>
			);
		}

		if (this.state.mktBrowse) {
			finContext = (
				<div className="fixedsize-mktpost">
					<div className="workarea-padding-mkt">
					   <MktBrowseContainer  />
					</div>
				</div>
			);
		}

		return (
			<div className="finance">
				<div className="top-padding-mkt" />
				<div className="container">
					<div className="top-padding-workarea-mkt" />
					<h5 className="display-5 text-primary font-weight-bold text-center">Baanda Market Space</h5>
					<div className="row">
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="demobuttons">
								<button
									className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
									type="button"
									onClick={() => {
										this.setState((preState) => ({
											mktInfo: true,
											mktPosts: false,
											mktDashboard: false,
											mktBrowse: false
										}));
									}}
									data-toggle="tooltip"
									data-placement="right"
									title="Informs you about Baanda Financial Systems"
								>
									About
                  <div className="float-right">
                    <i className="fas fa-book-open" />
                  </div>
								</button>
							</div>

							<div className="demobuttons">
								<button
									className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
									type="button"
									onClick={() => {
										this.setState((preState) => ({
											mktInfo: false,
											mktPosts: true,
											mktDashboard: false,
											mktBrowse: false
										}));
									}}
								>
									Posts
                  <div className="float-right">
                    <i className="fas fa-user-circle" />
                  </div>
								</button>
							</div>
							<div className="demobuttons">
								<button
									className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
									type="button"
									onClick={() => {
										this.setState((preState) => ({
											mktInfo: false,
											mktPosts: false,
											mktDashboard: true,
											mktBrowse: false
										}));
									}}
								>
									Dashboard
                  <div className="float-right">
                    <i className="fas fa-pen-square" />
                  </div>
								</button>
							</div>

							<div className="demobuttons">
								<button
									className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
									type="button"
									onClick={() => {
										this.setState((preState) => ({
											mktInfo: false,
											mktBrowse: true,
											mktPosts: false,
											mktDashboard: false
										}));
									}}
								>
									Browse
                  <div className="float-right">
                    <i className="fas fa-users" />
                  </div>
								</button>
							</div>
						</div>
						<div className="col-lg-10 col-md-8 col-sm-6">
							<div className="fixedsize">{finContext}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Marketing;
