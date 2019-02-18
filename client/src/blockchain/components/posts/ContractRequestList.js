import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import factory from '../../../ethereum/factory';
// import web3 from '../../../ethereum/web3';
import CFContractFactory from './postForms/CFContractFactory';
import CoopContractFactory from './postForms/CoopContractFactory';

import './postbc.css';

// import { campaignMaster } from './data/campaignMaster';
import { campaignMaster } from '../../../../src/sharedData/campaignMaster';

class ContractRequestList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contractType: '',
			reqListSelect: true,
			reqFactory: false,
			campaignid: '',
			howtoSetup: false
		};
	}

	selectOperation = (value) => {
		console.log('value:' + value);
		if (value === 'requestList') {
			this.setState({
				howtoSetup: false,
				reqListSelect: true,
				reqFactory: false
			});
		} else if (value === 'howtoSetup') {
			this.setState({
				howtoSetup: true,
				reqListSelect: false,
				reqFactory: false
			});
		}
	};

	createCampaignContract = (campaignId, contractType) => {
		// console.log('campaignId:' + campaignId + '  contractType:' + contractType);
		this.setState({
			contractType: contractType,
			reqListSelect: false,
			reqFactory: true,
			howtoSetup: false,
			campaignid: campaignId
		});
	};

	render() {
		let setupSteps;
		if (this.state.howtoSetup) {
			setupSteps = (
				<div>
					<div className="row">
						<div className="how-toy">

							<div className="text-left">
							<br />
								<p>
									Following How-to is divided into following sections, focused mainly on the
									operational aspects. They are: 
								</p>
								<ul>
									<li>
										Setting up of Metamask (if you want to actually generate your Fundraising
										Smart Contract)
									</li>
									<li>
										Discuss the pending list (what you are experiencing and what it will be in
										the production)
									</li>
									<li>Discuss Fundraising Smart Contract Factory</li>
									<li>DCCS - (Dynamic Co-operation Chemistry Score)</li>
								</ul>
								<font color="orange">
								<h5>Metamask:</h5>
								<p align="justify">This is an Eth Wallet for using Ethereum based transaction facilitation.  Baanda uses Metamask for this UX. In future, post funding, Baanda intends to deploy its own Parity node in the cloud to enable independent use of Ethereum network. </p>
								<p align="justify">Use the URL https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047 and follow step-by-step to put the extension in your Chrome. </p>
								<p align="justify">To be mindful, Baanda in this UX uses Rinkby test-net only. Post installation of Metamask, on top right drop down, select Rinkby. </p>
								</font>
								<br />
								<font color="lightyellow">
								<h5>Pending List of Contract Requests:</h5>
								<p align="justify">This shows a list of pending requests for you to participate in generating smart contracts or contracts generated and governed in regular Web-App. There is no difference in end-services with more or less similar cost. The ways of Blockchain is different from Web-app (traditional). </p>
								<p align="justify">Contract is NEVER self-generating. A contract originates from work (Service Xchange), living (Co-living), or some Campaign needs (MarketSpace). This concept mimics real life like rest of Baanda. When such situation occurs in some place, and people involved agree to come to an agreement via Baanda, a request pops up in your list. When you go to the factory, it asks for minimal information in natural language, with reference to the policies of the origin, and the generates and deploy the contract in the network.</p>
								<p align="justify">The Blockchain based smart contract will be in Ethereum now (may include other networks like EOS etc. in future as they become easily available and mature). The Web-app based contracts will us e-signature. </p>
								<p align="justify">The be mindful, whether one uses Ethereum or traditional WebApp, Baanda will use other technologies (AI, IoT, various computing and human experience) to enable self-governance. </p>
								</font>
								<br />
								<font color="lightblue">
								<h5>Fund Raising Smart Contract Factory</h5>
								<p align="justify">The Fund Raising contract enables contributors to have more involvement, assurances, and continuous oversight to mitigate the risk of scams. There were various other kickstart fund raising sites exist but contributors donates on a good faith that has often been misused (conned). </p>
								<p align="justify">The fund donated is held in an escrow. The co-op (people asking for funds for a cause) will not be able to take that without contributors approval. In general, there would be other vendors and service providers who may need to get paid. The manager will raise an expense request. All contributors will vote and based on initial campaign setup policy, release of fund will be done. All aspects of the fund will be transparent to all participants.  </p>
								<p align="justify">Note: Though this Co-op Art Gallery Fund raising is asking  for contribution, the same factory can  also accommodate investment with equal transparency and participation. </p>
								<br />
								<font color="white">
								<h5>DCCS - (dynamic co-op chemistry score)</h5>
								<p align="justify">DCCS: In the beginning, DCCS factor is 1 (no-effect multiplier). However,  as Baanda acquire information and intelligence on individuals or entities, the DCCS (dynamic co-op chemistry score) will have one’s effect in the community. Please refer to DCCS white papers on Baanda site to learn more about AI based DCCS impacts (equivalent to credit score but has multiple life dimensions to it).</p>
								<p align="justify">Please check “What is Baanda’s AI & Blockchain companionship?” in the ‘About’ section for more on how DCCS will cater to humanity.</p>
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

		let factoryPanel;
		if (this.state.reqFactory) {
			// console.log('contractType:' + this.state.contractType);
			// Next if is for selecting the right factory depending on contractType.
			if (this.state.contractType === 'CrowdFunding') {
				factoryPanel = (
					<div>
						<CFContractFactory campaignid={this.state.campaignid} />
					</div>
				);
			}
			if (this.state.contractType === 'Co-op-Formation') {
				factoryPanel = (
					<div>
						<CoopContractFactory campaignid={this.state.campaignid} />
					</div>
				);
			}
		} else {
			factoryPanel = null;
		}

		let reqListPanel;
		if (this.state.reqListSelect) {
			reqListPanel = (
				<div>
					<div className="row">
						<div className="col text-center">
							<h5>
								<font color="lightyellow">List of Contract-Creation Requests</font>
							</h5>
						</div>
					</div>
					<div className="spacing" />
					<div className="spacing" />
					<hr className="campaign-dividerx" />
					{campaignMaster.map((obj) => {
						return (
							<div key={obj.id}>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-5 text-left">
										Campaign:&nbsp;<font color="#dbd697">{obj.campaignName}</font>
									</div>
									<div className="col-5 text-left">
										Purpose:&nbsp;<font color="#dbd697">{obj.purpose}</font>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-7 text-left">
										Caption:&nbsp;<font color="#dbd697">{obj.campaignHeader}</font>
									</div>
									<div className="col-3 text-left">
										Origin:&nbsp;<font color="#dbd697">{obj.requestOrigin}</font>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-3 text-left">
										Campaign Id: &nbsp;<font color="#dbd697">{obj.campaignBaandaId}</font>
									</div>
									<div className="col-4 text-center">
										Start on: <font color="#dbd697">{obj.startDate}</font> &nbsp;&nbsp; Ends:{' '}
										<font color="#dbd697">{obj.endDate}</font>
									</div>
									<div className="col-3 text-right">
										Status: <font color="yellow">{obj.requestStatus}</font>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
								<div className="row-spacing" />
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-8">
										<div className="text-left msg-placement">
											<font color="#74cc4b" size="2">
												Note: Please study the impact of Blockchain & AI merger in How-to-steps
												section.
											</font>
										</div>
									</div>
									<div className="col-2">
										<div className="text-right">
											<button
												className="btn-goToFactory"
												onClick={() => {
													this.createCampaignContract(obj.campaignBaandaId, obj.contractType);
												}}
											>
												<b>To Factory </b>
												<div className="float-right">
													<i className="fas fa-industry" />
												</div>
											</button>{' '}
										</div>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
								<hr className="campaign-dividerx" />
							</div>
						);
					})}
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-11 text-left contract-list-msg ">
							<font color="lightyellow">
								** Hello {this.props.auth.user.name}, please be mindful that you are experiencing this
								through the eyes of Angelo Michael; check How-to-steps for more.
							</font>
						</div>
						{/* <div className="col-1">&nbsp;</div> */}
					</div>
				</div>
			);
		} else {
			reqListPanel = null;
		}

		let output;
		if (this.state.reqListSelect) {
			output = reqListPanel;
		} else if (this.state.howtoSetup) {
			output = setupSteps;
		} else if (this.state.reqFactory) {
			output = factoryPanel;
		}

		// console.log('this.props:' + JSON.stringify(this.props));
		return (
			<div>
				<div className="text-center">
					<div className="header-margin">
						<div className="row">
							<div className="col-md-6">
								<div className="float-center">
									<font color="#b2cc9f">
										<h4>Generate & Deploy Contracts </h4>
									</font>
								</div>
							</div>
							<div className="col-md-6">
								<div className="float-center">
									<button
										className="btn-howToStepsBC"
										onClick={() => {
											this.selectOperation('howtoSetup');
										}}
									>
										<b>How-to-steps</b>
										<div className="float-right">
											<i className="fas fa-toggle-off" />
										</div>
									</button>{' '}
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<button
										className="btn-headerButtons"
										onClick={() => {
											this.selectOperation('requestList');
										}}
									>
										<b>Requests</b>
										<div className="float-right">
											<i className="fas fa-chalkboard-teacher" />
										</div>
									</button>{' '}
								</div>
							</div>
						</div>
					</div>
					{/* </font> */}
					<div className="posts-panelListx">

						{output}
						<div className="spaceBelow" />
					</div>
				</div>
			</div>
		);
	}
}

ContractRequestList.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(ContractRequestList);
