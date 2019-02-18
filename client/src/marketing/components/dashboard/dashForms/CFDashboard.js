import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CFDashCampaignDetails from './CFDashCampaignDetails';
import CFContribute from './CFContribute';
import RaiseRequest from './RaiseRequest';
import CFCampaignIntel from './CFCampaignIntel';
import CFRequestList from './CFRequestList';

// import { campaignMaster } from '../data/campaignMaster';

import { campaignMaster } from '../../../../sharedData/campaignMaster';

import '../mktdash.css';

class CFDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			howtoSetup: false,
			campaignList: true,
			campaignBaandaId: 0,
			campaignDetails: false,
			contribute: false,
			raiseRequest: false,
			showIntel: false,
			requestList: false
		};
	}

	selectOperation = (value) => {
		// console.log('value: ' + value);
		if (value === 'howtoSetup') {
			this.setState({
				howtoSetup: true,
				campaignList: false
			});
		}
		if (value === 'reqListCampaigns') {
			this.setState({
				howtoSetup: false,
				campaignList: true
			});
		}
	};

	handleCampaignDetail = (value) => {
		// console.log('handleCampaignDetail:' + value);
		this.setState({
			howtoSetup: false,
			campaignList: false,
			campaignBaandaId: value,
			campaignDetails: true,
			contribute: false,
			raiseRequest: false,
			showIntel: false,
			requestList: false
		});
	};

	handleRequestList = (value) => {
		// console.log('in handleRequestList: ' + value);
		this.setState({
			howtoSetup: false,
			campaignList: false,
			campaignBaandaId: value,
			campaignDetails: false,
			contribute: false,
			raiseRequest: false,
			showIntel: false,
			requestList: true
		});
	};

	// handleCampaignStatus = (value) => {
	// 	console.log('handleCampaignStatus:' + value);
	// };

	handleCampaignRequest = (value) => {
		// console.log('handleCampaignRequest:' + value);
		this.setState({
			howtoSetup: false,
			campaignList: false,
			campaignBaandaId: value,
			campaignDetails: false,
			contribute: false,
			raiseRequest: true,
			showIntel: false,
			requestList: false
		});
	};

	handleCampaignContribute = (value) => {
		// console.log('handleCampaignContribute:' + value);
		this.setState({
			howtoSetup: false,
			campaignList: false,
			campaignBaandaId: value,
			campaignDetails: false,
			contribute: true,
			raiseRequest: false,
			showIntel: false,
			requestList: false
		});
	};

	handleCampaignIntel = (value) => {
		// console.log('handleCampaignIntel:' + value);
		this.setState({
			howtoSetup: false,
			campaignList: false,
			campaignBaandaId: value,
			campaignDetails: false,
			contribute: false,
			raiseRequest: false,
			showIntel: true,
			requestList: false
		});
	};

	render() {
		// console.log('CFDashBoard this.props:' + JSON.stringify(this.props));

		let setupSteps;
		if (this.state.howtoSetup) {
			setupSteps = (
				<div>
					<div className="row">
						<div className="how-tox">
							<div className="text-left">
								<br />
								<p>
									Following How-to is divided into following sections, focused mainly on the
									operational aspects. They are:
								</p>
								<ul>
									<li>
										Setting up of Metamask (if you want to actually generate your Fundraising Smart
										Contract)
									</li>
									<li>Propagating ‘Crowd Funding’ message (marketing) -- The Next-step</li>
									<li>Traits of Contribution</li>
									<li>Trits of Request List</li>
									<li>Raising Expense Requests</li>
									<li>Status and Intel of the Crowd Funding </li>
									<li>Crowd-Funding Campaign Details (from your Posting). </li>
								</ul>
								<font color="orange">
									<h5>Metamask:</h5>
									<p align="justify">
										This is an Eth Wallet for using Ethereum based transaction facilitation. Baanda
										uses Metamask for this UX. In future, post funding, Baanda intends to deploy its
										own Parity node in the cloud to enable independent use of Ethereum network.{' '}
									</p>
									<p align="justify">
										Use the URL https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047
										and follow step-by-step to put the extension in your Chrome.{' '}
									</p>
									<p align="justify">
										To be mindful, Baanda in this UX uses Rinkby test-net only. Post installation of
										Metamask, on top right drop down, select Rinkby.{' '}
									</p>
								</font>
								<br />
								<font color="lightyellow">
									<h5>Propagating ‘Crowd Funding’ message (Marketing – Next Step)</h5>
									<p align="justify">
										You have posted the Crowdfunding campaign, developed the agreement, and prepared
										the campaign to accept contribution, and do the project with transparency. Now
										is the time to propagate the message to others to participate.{' '}
									</p>
									<p align="justify">
										Once you are ready and prepared for the propagation, the propagation ready
										package will appear in the MarketSpace Dashboard in the dropdown ‘Ideas,
										Messages, Fundraising, Investment Campaign Propagation.’ The how-to-step in that
										panel will explain the steps necessary for Ripple Propagation to start.
									</p>
								</font>
								<br />
								<font color="lightyellow">
									<h5>Traits of Contribution</h5>
									<p align="justify">
										In here, you can contribute. This dashboard is for the project manager. He/she
										can also contribute in his/her own endeavor. The project manager would also be
										held to the same policy and set of rules as others. Upon marketing of the
										campaign, this feature would be available to other participants too.{' '}
									</p>
									<p align="justify">
										For now, the contributor can contribute in dollar (fiat) or Ether (crypto).
										Soon, people would be allowed to contribute in other currencies such as Euro,
										Yun, Peso or other cryptos like Bitcoin etc. Presently, Baanda is not
										contemplating the idea of being an exchange hub for its legal, tax, and other
										logistical reasons. Post funding, Baanda will seriously contemplate to
										accommodate users across the globe.{' '}
									</p>

									<br />
									<font color="lightyellow">
										<h5>Raising Expense Requests</h5>
										<p align="justify">
											Project manager would be able to raise a request for a particular expense.
											This is when a particular expenditure towards to campaigned goal is
											identified and, as manager, one raise the expense for contributors to
											approve. The amount of expense, if available in the project coffer is held
											in an escrow account and no longer available in general coffer until a
											decision is being made. This way, the accounting is transparent and the
											contribution goes towards the cause and not to an individual with the
											possibility of misuse.{' '}
										</p>
									</font>
									<br />
									<font color="lightyellow">
										<h5>Request List</h5>
										<p align="justify">
											Request List shows the list of requests raised. The approvers can
											participate in approving or rejecting the expenses.{' '}
										</p>

										<p align="justify">
											Status and Intel shows the state of the crowd funding at a point of time for
											all.{' '}
										</p>

										<p align="justify">
											The details expose the campaign that was posted at the on-set for reference
											if needed.{' '}
										</p>
									</font>
									<font color="lightyellow">
										<h5>Note:</h5>
										<p align="justify">
											Excepting ‘raising of expense requests’ all other operations will be
											available to all contributors.{' '}
										</p>
									</font>
									<br />
									<font color="white">
										<h5>DCCS - (dynamic co-op chemistry score)</h5>
										<p align="justify">
											DCCS: In the beginning, DCCS factor is 1 (no-effect multiplier). However, as
											Baanda acquire information and intelligence on individuals or entities, the
											DCCS (dynamic co-op chemistry score) will have one’s effect in the
											community. Please refer to DCCS white papers on Baanda site to learn more
											about AI based DCCS impacts (equivalent to credit score but has multiple
											life dimensions to it).
										</p>
										<p align="justify">
											Please check “What is Baanda’s AI & Blockchain companionship?” in the
											‘About’ section for more on how DCCS will cater to humanity.
										</p>
									</font>
								</font>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			setupSteps = null;
		}

		let campaignListPanel;
		campaignListPanel = (
			<div>
				<div className="row">
					<div className="col text-center">
						<h6>
							<font color="lightyellow">List of Campaings</font>
						</h6>
					</div>
				</div>
				<div className="form-top-space" />
				{/* <hr className="campaign-divider" /> */}
				<hr />
				{campaignMaster.map((obj) => {
					return (
						<div key={obj.id}>
							<div className="row">
								<div className="col-1">&nbsp;</div>
								<div className="col-6 text-left">
									Campaign:&nbsp;<font color="#dbd697">{obj.campaignName}</font>
								</div>
								<div className="col-5 text-left">
									Purpose:&nbsp;<font color="#dbd697">{obj.purpose}</font>
								</div>
								{/* <div className="col-1">&nbsp;</div> */}
							</div>
							<div className="row">
								<div className="col-1">&nbsp;</div>
								<div className="col-7 text-left">
									Caption:&nbsp;<font color="#dbd697">{obj.campaignHeader}</font>
								</div>
								<div className="col-4 text-left">
									Origin:&nbsp;<font color="#dbd697">{obj.requestOrigin}</font>
								</div>
								{/* <div className="col-1">&nbsp;</div> */}
							</div>
							<div className="row">
								<div className="col-1">&nbsp;</div>
								<div className="col-4 text-left">
									Campaign BaandaId: &nbsp;<font color="#dbd697">{obj.campaignBaandaId}</font>
								</div>
								<div className="col-5">
									Start on: <font color="#dbd697">{obj.startDate}</font> &nbsp;&nbsp; Ends:{' '}
									<font color="#dbd697">{obj.endDate}</font>
								</div>
								{/* <div className="col-1">&nbsp;</div> */}
							</div>
							<div className="row">
								<div className="col-1">&nbsp;</div>
								<div className="col-8 text-left">
									Campaign Ethereum Add: &nbsp;<font color="#dbd697">{obj.campaignAddress}</font>
								</div>
								<div className="col-3 text-left">
									Status:{' '}
									{obj.requestStatus === 'Completed' ? (
										<font color="red">Completed</font>
									) : (
										<font color="#71dd33">Active</font>
									)}
								</div>
								{/* <div className="col-1">&nbsp;</div> */}
							</div>
							<div className="row-spacing" />
							{obj.requestStatus === 'Completed' ? (
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-3 text-right"><button
												className="btn-respondReqx"
												onClick={() => {
													this.handleCampaignDetail(obj.campaignBaandaId);
												}}
											>
												<b>Details</b>
												<div className="float-right">
													<i className="fas fa-asterisk" />
												</div>
											</button>{' '}</div>
									<div className="col-7 operationMsg-padding"><font color="orange">Not a CrowdFund Campaing - Not applicable . [Informative]</font></div>
									<div className="col-1">&nbsp;</div>
								</div>
								
							) : (
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-10">
										<div className="text-right">
											<button
												className="btn-respondReqx"
												onClick={() => {
													this.handleCampaignDetail(obj.campaignBaandaId);
												}}
											>
												<b>Details</b>
												<div className="float-right">
													<i className="fas fa-asterisk" />
												</div>
											</button>{' '}
											<button
												className="btn-respondReqx"
												onClick={() => {
													this.handleCampaignIntel(obj.campaignBaandaId);
												}}
											>
												<b>State-Intel</b>
												<div className="float-right">
													<i className="fas fa-thermometer-three-quarters" />
												</div>
											</button>{' '}
											<button
												className="btn-respondReqx"
												onClick={() => {
													this.handleCampaignRequest(obj.campaignBaandaId);
												}}
											>
												<b>Request</b>
												<div className="float-right">
													<i className="fas fa-industry" />
												</div>
											</button>{' '}
											<button
												className="btn-respondReqx"
												onClick={() => {
													this.handleRequestList(obj.campaignBaandaId);
												}}
											>
												<b>Req-List</b>
												<div className="float-right">
													<i className="fas fa-industry" />
												</div>
											</button>{' '}
											<button
												className="btn-respondReqx"
												onClick={() => {
													this.handleCampaignContribute(obj.campaignBaandaId);
												}}
											>
												<b>Contribute</b>
												<div className="float-right">
													<i className="fas fa-shopping-cart" />
												</div>
											</button>{' '}
										</div>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
							)}
							{/* <hr className="campaign-divider" /> */}
							<hr />
						</div>
					);
				})};
			</div>
		);

		let output;
		if (this.state.howtoSetup) {
			output = setupSteps;
		} else if (this.state.campaignList) {
			output = <div className="view-dashboard-list">{campaignListPanel}</div>;
		} else if (this.state.campaignDetails) {
			output = (
				<div className="view-dashboard-list">
					<CFDashCampaignDetails campaignid={this.state.campaignBaandaId} />
				</div>
			);
		} else if (this.state.contribute) {
			output = (
				<div className="view-dashboard-list">
					<CFContribute campaignid={this.state.campaignBaandaId} />
				</div>
			);
		} else if (this.state.raiseRequest) {
			output = (
				<div className="view-dashboard-list">
					<RaiseRequest campaignid={this.state.campaignBaandaId} />
				</div>
			);
		} else if (this.state.showIntel) {
			output = (
				<div className="view-dashboard-list">
					<CFCampaignIntel campaignid={this.state.campaignBaandaId} />
				</div>
			);
		} else if (this.state.requestList) {
			output = (
				<div className="view-dashboard-list">
					<CFRequestList campaignid={this.state.campaignBaandaId} />
				</div>
			);
		}

		return (
			<div>
				<div className="text-center">
					<div className="header-margin">
						<div className="row">
							<div className="col-md-5">
								<div className="float-center note-placement">
									<font color="#e0d7bc">
										<h5>CrowdFund-Invest Dashboard </h5>
									</font>
								</div>
							</div>
							<div className="col-md-7">
								<div className="float-center">
									<button
										className="btn-howto"
										onClick={() => {
											this.selectOperation('howtoSetup');
										}}
									>
										<b>How-to-steps</b>
										<div className="float-right">
											<i className="fas fa-toggle-off" />
										</div>
									</button>{' '}
									<button
										className="btn-listContractReq"
										onClick={() => {
											this.selectOperation('reqListCampaigns');
										}}
									>
										<b>Campaign List</b>
										<div className="float-right">
											<i className="fas fa-chalkboard-teacher" />
										</div>
									</button>{' '}
								</div>
							</div>
						</div>
					</div>
					<div className="dashboard-panelx">
						{output}
						<div className="spaceBelow" />
					</div>
				</div>
			</div>
		);
	}
}

CFDashboard.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, {})(CFDashboard);
