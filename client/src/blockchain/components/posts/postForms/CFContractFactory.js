import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import factory from '../../../../ethereum/factory';
import web3 from '../../../../ethereum/web3';
import ReactLoading from 'react-loading';
import '../postbc.css';

// import { campaignMaster } from '../data/campaignMaster';
import { campaignMaster } from '../../../../../src/sharedData/campaignMaster';

class CFContractFactory extends Component {
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

		this.getAccAndBalance = this.getAccAndBalance.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentWillMount() {
		let campaignid = this.props.campaignid;
		this.createCampaignContract(campaignid);
	}

	getAccAndBalance = async () => {
		try {
			const accounts = await web3.eth.getAccounts();
			const balance = await web3.eth.getBalance(accounts[0]);
			if (balance > 0) {
				this.setState({
					ethConnection: true,
					ethBalance: true,
					yourEthAcc: accounts[0],
					yourEthBalance: web3.utils.fromWei(balance, 'ether')
				});
			} else {
				this.setState({
					ethConnection: true,
					ethBalance: false,
					yourEthAcc: accounts[0],
					yourEthBalance: web3.utils.fromWei(balance, 'ether')
				});
			}
		} catch (err) {
			this.setState({
				ethConnection: false,
				ethBalance: false,
				yourEthAcc: 'Check Error Message below ...',
				yourEthBalance: '0'
			});
		}
	};

	handlePricingPanel = (baandaId) => {
		alert(
			'In producting, based on Baanda handling costs ($.10) and ethereum gas needs (order of $.10), along with one-time campaign cost (approx $49.99 in US - first 1000 campaigns are free) will be provided for the campaign with BaandaId = ' +
				baandaId
		);
		this.setState({
			loading: false
		});
	};

	createCampaignContract = (campaignId) => {
		// console.log('campaignId:' + campaignId);
		this.getAccAndBalance();

		campaignMaster.forEach((element) => {
			if (campaignId === element.campaignBaandaId) {
				this.setState({
					campaignBaandaId: element.campaignBaandaId,
					campaignName: element.campaignName,
					caption: element.campaignHeader,
					description: element.description,
					startDate: element.startDate,
					endDate: element.endDate,
					targetValue: element.targetValueInFiat
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

	handleContractFactory = async () => {
		// console.log('inside handleContractFactory');
		this.setState({
			loading: true,
			outputMsg:
				'EVM/Blockchain takes time to process. Please wait or check Etherscan.io with your address. May take to a minute depending on your connection and mining speed.'
		});

		if (this.state.yesBlockchain) {
			alert(
				'YOU HAVE OPTED for BLOCKCHAIN based contract governance. REMEMBER TO Confirm Metamask transaction. If you do not see Metamask Popup then click on Metamask Fox Icon. For UX, you are only experiencing Eth side. In Baanda, all contracts are tied to traditional side for its association with AI. That is disconnected here. Hence. you will see your campaign in the list (MarketSpace Browse) but no details.'
			);
		} else {
			alert(
				'You have OPTED for TRADITIONAL or NON-BLOCKCHAIN governance. That will have all controls & governance opted by you but using centralized traditional databases and logic. At this point, this will not process any futher... in line with rest of the UX. Click OK to continue.'
			);
		}

		let localMsg;
		let localStatus = false;
		if (this.state.yesBlockchain) {
			let min = (this.state.minimumAmount * 100).toFixed(0); // This in the input amount in penny
			// let mBid = 1234567890; // This we will get from this.props.auth.users.id - the person logged in
			let mBid = this.props.auth.user.baandaid;    // picked it up from redux auth
			let cBid = this.state.campaignBaandaId; // This is the id passed from the request list for the particular campaign
			// let mName = 'Trial Name Jitsi'; //  This we will get from this.props.auth.users.name - the person logged in
			let mName = this.props.auth.user.name;
			let cName = this.state.campaignName;
			// console.log('min:' + min + ' | mbid:' + mBid + ' |cBid:' + cBid + ' |mName:' + mName + ' |cName:' + cName);
			// console.log('your addr:' + this.state.yourEthAcc);

			if (this.state.yourEthBalance >= 0) {
				try {
					await factory.methods
						.createCampaign(min, mBid, cBid, mName, cName)
						.send(
							{
								from: this.state.yourEthAcc,
								gas: '3000000'
							},
							function(error, transactionHash) {
								// console.log('AA TxHash submit:' + transactionHash);
							}
						)
						.on('error', function(error) {
							// console.log('error:', error);
							// this.setState({
							// 	outputMsg: 'Error creating Campaign: ' + error
							// });
							localMsg = error;
						})
						.on('receipt', function(receipt) {
							// console.log(
							// 	'Receipt TxHash:' +
							// 		receipt.transactionHash +
							// 		'    Status:' +
							// 		receipt.status +
							// 		'    Total Gas Used:' +
							// 		receipt.gasUsed
							// );
							// console.log(receipt);
							localStatus = receipt.status;
							localMsg =
								'Receipt TxHash:' +
								receipt.transactionHash +
								'    Status:' +
								receipt.status +
								'    Total Gas Used:' +
								receipt.gasUsed;
						})
						.on('transactionHash', function(transactionHash) {
							// console.log('tx Hash:' + transactionHash);
						});
				} catch (err) {
					// console.log('try catch error:', err);
					localMsg = '' + err + '';
				}
			} else {
				// console.log('No ether balance error ... should not happen with me');
				localMsg =
					'Error: Either you do not have Metamask, is not signed in, or do not have balance. Please check how-to-steps.';
			}
		}

		// const campaign = Campaign(campaignAddressx);
		// const requestCount = await campaign.methods.getRequestsCount().call();
		// getCreatedCampList()
		// CampaignFactory
		let campAddr;
		if (localStatus) {
			// console.log('local status is true');
			const campaignAddr = await factory.methods.getCreatedCampList().call();
			// console.log('==========Campaign Address ===');
			// console.log(campaignAddr);

			campaignAddr.forEach((element) => {
				campAddr = element;
			});
			// console.log('Campaign Addr :' + campAddr);
			localMsg = localMsg + ' --- AND --- >>> Your Campaign Address is: ' + campAddr;
		}

		this.setState({
			factoryMsg: localMsg,
			outputMsg: '',
			loading: false
		});
	};

	onRadioChange = (value) => {
		//console.log('value:' + value);
		if (value === 'onePOneVote') {
			this.setState({
				onePOneVote: true,
				equivalentVote: false,
				overrideVote: false
			});
		}
		if (value === 'equivalentVote') {
			this.setState({
				onePOneVote: false,
				equivalentVote: true,
				overrideVote: false
			});
		}
		if (value === 'overrideVote') {
			this.setState({
				onePOneVote: false,
				equivalentVote: false,
				overrideVote: true
			});
		}
		if (value === 'yesBlockchain') {
			this.setState({
				yesBlockchain: true,
				noBlockchain: false
			});
		}
		if (value === 'noBlockchain') {
			this.setState({
				yesBlockchain: false,
				noBlockchain: true
			});
		}
	};

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		//  console.log('this.props:' + JSON.stringify(this.props));
		// console.log('this.state.selectedOption: ' + this.state.selectedOption);
		// console.log('this.state.loading:' + this.state.loading);

		let msgPanel;
		if (this.state.loading) {
			// console.log('I am in this.state.loading');
			msgPanel = (
				<div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-7 text-left loadingMsgPad"><font color="#f2d563">{this.state.outputMsg}</font></div>
						<div className="col-3 float-center loadingMsgPad">
							<ReactLoading type={'spokes'} color={'yellow'} height={30} width={30} />
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			// console.log('I am in !this.state.loading');
			msgPanel = (
				<div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10 text-left loadingMsgPad">
							<font color="#bad1a7" size="2">
								{this.state.factoryMsg}
							</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		}


		let overrideInput;
		if (this.state.overrideVote) {
			overrideInput = (
				<div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10 float-left">
							Override vote-count percentage greater than : &nbsp;&nbsp;
							<input
								name="percentageOverride"
								value={this.state.percentageOverride}
								type="number"
								pattern="^\d*(\.\d{0,2})?$"
								title="Format: 4 digits"
								width="25"
								onChange={this.onChange}
								// placeholder="Min Amount"
							/>{' '}
							&nbsp;<b>%</b>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			overrideInput = null;
		}

		let bcPanel;
		if (this.state.yesBlockchain) {
			bcPanel = (
				<div>
					<div className="row-spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-7 text-left">
							Eth A/c: <font color="yellow">{this.state.yourEthAcc}</font>
						</div>
						<div className="col-3">
							Balance:&nbsp; <font color="yellow">{this.state.yourEthBalance} &nbsp;Eth</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			bcPanel = null;
		}

		let showFormButtons;
		if (this.state.ethConnection && this.state.ethBalance) {
			showFormButtons = (
				<div>
					{msgPanel}
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
								onClick={() => {
									this.handlePricingPanel(this.state.campaignBaandaId);
								}}
							>
								<b>Pricing </b>
								<div className="float-right">
									<i className="fas fa-money-bill" />
								</div>
							</button>{' '}
							&nbsp;
							<button
								className="btn-createFactory"
								onClick={() => {
									this.handleContractFactory(this.state.campaignBaandaId);
								}}
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
		} else if (!this.state.ethConnection) {
			showFormButtons = (
				<div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10 text-left">
							<font color="red" size="3">
								<b>Error:</b> No connection to Ethereum. Metamask. Please check How-to-steps to get
								connected.
							</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			showFormButtons = (
				<div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10 text-left">
							<font color="red" size="3">
								<b>Error:</b> You do not have any balance in your account. Please check How-to-steps to
								get some Ether for creating your contract.
							</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		}

		let showForm;
		showForm = (
			<div>
				<div className="text-center">
					<h3>Create Campaign</h3>
				</div>
				<div className="form-top-space" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-5 text-left">
						<b>Campaign:</b>
						<font color="#e5dbc9"> {this.state.campaignName}</font>
					</div>
					<div className="col-5 text-left">
						<b>Campaign Id:</b> <font color="#e5dbc9"> {this.state.campaignBaandaId} </font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						<b>Campaign Caption:</b>
						<font color="#e5dbc9"> {this.state.caption}</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						<b>Reminder Description</b>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						<font color="#e5dbc9">{this.state.description}</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-3 note-placement text-left">
						Start Day: <font color="#e5dbc9">{this.state.startDate}</font>
					</div>
					<div className="col-3 note-placement text-left">
						End Day: <font color="#e5dbc9">{this.state.endDate}</font>
					</div>
					<div className="col-3 text-right">
						Target Value:{' '}
						<font color="lightgreen" size="3">
							<b>{this.state.targetValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</b> $
						</font>
					</div>

					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-center">
						<font color="orange">Contract Governance Ecosystem: </font>&nbsp;&nbsp;
						<div className="form-check-inline">
							<label className="form-check-label">
								<input
									name="yesBlockchain"
									type="radio"
									className="form-check-input"
									// onChange={this.handleOptionChange}
									checked={this.state.selectedOption === this.state.yesBlockchain}
									onChange={(value) => this.onRadioChange('yesBlockchain')}
									value={this.state.useBlockchain}
								/>
								Blockchain (Smart Contract)
							</label>
						</div>
						<div className="form-check-inline">
							<label className="form-check-label">
								<input
									name="noBlockchain"
									type="radio"
									className="form-check-input"
									// onChange={this.handleOptionChange}
									checked={this.state.selectedOption === this.state.noBlockchain}
									onChange={(value) => this.onRadioChange('noBlockchain')}
									value={this.state.useBlockchain}
								/>
								Traditional Computing
							</label>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				{bcPanel}
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						Minimum Contribution Amount: &nbsp;&nbsp;
						<input
							name="minimumAmount"
							value={this.state.minimumAmount}
							type="number"
							pattern="^\d*(\.\d{0,2})?$"
							title="Format: 4 digits"
							width="25"
							onChange={this.onChange}
							placeholder="Amt"
						/>
						&nbsp;<b>$</b>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						<b>Approval Policy</b> &nbsp;<font size="1" color="lightyellow">
							<i>(Check How-to-steps for explanations. DCCS=1 as multiplier) </i>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						<div className="form-check">
							<label className="form-check-label">
								<input
									name="onePOneVote"
									type="radio"
									className="form-check-input"
									// onChange={this.handleOptionChange}
									checked={this.state.selectedOption === this.state.onePOneVote}
									onChange={(value) => this.onRadioChange('onePOneVote')}
									value={this.state.onePOneVote}
								/>
								One person one vote - majority approvers
							</label>
						</div>
						<div className="form-check">
							<label className="form-check-label">
								<input
									name="equivalentVote"
									type="radio"
									className="form-check-input"
									checked={this.state.selectedOption === this.state.equivalentVote}
									// onChange={this.handleOptionChange}
									onChange={(value) => this.onRadioChange('equivalentVote')}
									value={this.state.equivalentVote}
								/>
								Equivalency-Vote weight proportional to contribution (strict).
							</label>
						</div>
						<div className="form-check disabled">
							<label className="form-check-label">
								<input
									name="overrideVote"
									type="radio"
									className="form-check-input"
									// onChange={this.handleOptionChange}
									checked={this.state.selectedOption === this.state.overrideVote}
									onChange={(value) => this.onRadioChange('overrideVote')}
									value={this.state.overrideVote}
								/>
								Equivalency-Vote weight proportional to contribution to be overridden by percentage
								approvers.
							</label>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				{overrideInput}
				{/* Show buttont or show errors if not connected to Ethereum or not balance */}
				{showFormButtons}  
			</div>
		);

		return (
			<div>
				<div className="text-center">
					{/* <div className="posts-cfFactory"> */}
					<div>
						{showForm}
						{/* <div className="spaceBelow" /> */}
					</div>
				</div>
			</div>
		);
	}
}

CFContractFactory.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, {})(CFContractFactory);
