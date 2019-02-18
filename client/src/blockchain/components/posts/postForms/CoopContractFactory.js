import React, { Component } from 'react';

// import factory from '../../../../ethereum/factory';
// import web3 from '../../../../ethereum/web3';
// import ReactLoading from 'react-loading';
import '../postbc.css';

import { campaignMaster } from '../data/campaignMaster';

class CoopContractRequest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ethConnection: false,
			ethBalance: false,

			minimumAmount: 0,
			targetAmount: 0,
			percentageOverride: 0,
			loading: false,
			onePOneVote: false,
			equivalentVote: false,
			overrideVote: false,
			selectedOption: true,
			yesBlockchain: true,
			noBlockchain: false,
			yourEthAcc: '',
			yourEthBalance: 0,

			reqListSelect: true,
			showFormOnSelect: false,
			howtoSetup: false,

			campaignBaandaId: 0,
			campaignName: '',
			caption: '',
			description: '',
			startDate: '',
			endDate: '',
			targetValue: 0,
			outputMsg: '',
			factoryMsg: '',
			genCampaignAddr: ''
		};

		this.handleDeactivate = this.handleDeactivate.bind(this);
	}

	componentWillMount() {
		let campaignid = this.props.campaignid;
		this.createCampaignContract(campaignid);
	}


	handleDeactivate() {
		console.log('I am here 1');
		alert(
      'These buttons have been deactivated. In production, this pending-list will not be visible in the dashboard post completion. It would be viewable as historic-agreements in browse section. This is for UX feedback.'
    );
	}


	createCampaignContract = (campaignId) => {
		// console.log('campaignId:' + campaignId);

		campaignMaster.forEach((element) => {
			if (campaignId === element.campaignBaandaId) {
				this.setState({
					campaignBaandaId: element.campaignBaandaId,
					campaignName: element.campaignName,
					caption: element.campaignHeader,
					description: element.description,
					startDate: element.startDate,
					endDate: element.endDate,
          targetValue: element.targetValueInFiat,
          status: element.requestStatus
				});
			}
		});

		this.setState({
			// howtoSetup: false,
			// reqListSelect: false,
			// showFormOnSelect: true,
			loading: false,
			factoryMsg: ''
		});
	};

	render() {
		// console.log('this.props:' + JSON.stringify(this.props));
		// console.log('this.state.selectedOption: ' + this.state.selectedOption);
		// console.log('this.state.loading:' + this.state.loading);

		let showFormButtons;

		showFormButtons = (
			<div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-4 text-left note-placement">
						<font size="1" color="lightyellow">
							<i>Clicke How-to-Steps for Ethereum implications. </i>
						</font>
					</div>
					<div className="col-6 float-right">
						<button
							className="btn-createFactory"
							// onClick={this.handleDeactivate}
							onClick={this.handleDeactivate}
						>
							<b>Pricing </b>
							<div className="float-right">
								<i className="fas fa-money-bill" />
							</div>
						</button>{' '}
						&nbsp;
						<button
							className="btn-createFactory"
							onClick={this.handleDeactivate}
						>
							<b>Create Contract</b> &nbsp;
							<div className="float-right">
								<i className="fa fa-check" />
							</div>
						</button>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				{/* {msgPanel} */}
				<div className="for-bottom-space" />
			</div>
		);

		let showForm;
		showForm = (
			<div>
				<div className="text-center">
					<h3>Create Co-op Agreement</h3>
				</div>
				<div className="form-top-space" />
				<div className="row">
					{/* <div className="col-1">&nbsp;</div> */}
					<div className="col-6 text-left">
						<b>Campaign:</b>
						<font color="#e5dbc9"> {this.state.campaignName}</font>
					</div>
					<div className="col-6 text-left">
						<b>Campaign Id:</b> <font color="#e5dbc9"> {this.state.campaignBaandaId} </font>
					</div>
					{/* <div className="col-1">&nbsp;</div> */}
				</div>
				<div className="row">
					{/* <div className="col-1">&nbsp;</div> */}
					<div className="col text-left">
						<b>Campaign Caption:</b>
						<font color="#e5dbc9"> {this.state.caption}</font>
					</div>
					{/* <div className="col-1">&nbsp;</div> */}
				</div>
				<div className="row-spacing" />
				<div className="row">
					{/* <div className="col-1">&nbsp;</div> */}
					<div className="col text-left">
						<b>Reminder Description</b>
					</div>
					{/* <div className="col-1">&nbsp;</div> */}
				</div>
				<div className="row">
					{/* <div className="col-1">&nbsp;</div> */}
					<div className="col text-left">
						<font color="#e5dbc9"><p align="justify">{this.state.description}</p></font>
					</div>
					{/* <div className="col-1">&nbsp;</div> */}
				</div>
				<div className="row-spacing" />
				<div className="row">
					{/* <div className="col-1">&nbsp;</div> */}
					<div className="col-4 note-placement text-left">
						Start Day: <font color="#e5dbc9">{this.state.startDate}</font>
					</div>
					<div className="col-4 note-placement text-left">
						End Day: <font color="#e5dbc9">{this.state.endDate}</font>
					</div>
					<div className="col-4 text-left">
						Contract Status:{' '}
						<font color="orange" size="3">
							{this.state.status}
						</font>
					</div>
					{/* <div className="col-1">&nbsp;</div> */}
				</div>
        <div className="spacing" />
        <div className="row">
          {/* <div className="col-1">&nbsp;</div> */}
          <div className="col text-left">
            <h5>Note for UX Reviewers</h5>
            <p align="justify">This contract has already been created as status indicates. This is to show-case the Agreement center.</p>
            <p align="justify">This is also a dynamic contract with on-going softchaing for including more and more members and adjustments to the policy or constitution of a co-op. Also, this is a multi-signatory and would require multiple people to experience it.</p>
            <p align="justify">Baanda is a combo of DApp & WebApp. People may select either for governance  and accounting. Baanda advocates use of Blockcgain to promote/advocate distributed economy and self-governance liberated from centralized authority. However, Baanda is also aware that human society change slowly. Human society is used to centralized authority, deep hierarchy for thousands of years. It will take time to morph into self-governing species of the future. Also Bloackchain is in its nasacency and lacks capabilities of traditional computing or intelligence.</p>

          </div>
          {/* <div className="col-1">&nbsp;</div> */}
        </div>
				{showFormButtons}
			</div>
		);

		return (
			<div>
				<div className="text-center">
					<div className="posts-coopPanel">
						{showForm}
						{/* <div className="spaceBelow" /> */}
					</div>
				</div>
			</div>
		);
	}
}

export default CoopContractRequest;
