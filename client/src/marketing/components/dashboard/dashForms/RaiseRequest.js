import React, { Component } from 'react';
import TextAreaFieldGroup from '../../../../utils/TextAreaFieldGroup';
import TextFieldGroup from '../../../../utils/TextFieldGroup';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// import { RadioGroup, Radio } from 'react-radio-group';

import Select from 'react-select';

import ReactLoading from 'react-loading';

import Campaign from '../../../../ethereum/campaign';
import web3 from '../../../../ethereum/web3';
import '../mktdash.css';

// import { campaignMaster } from '../data/campaignMaster';
import { campaignMaster } from '../../../../sharedData/campaignMaster';
import { currency } from '../data/currency';

class RaiseRequest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			campaignBaandaId: '',
			campaignName: '',
			campaignHeader: '',
			startDate: '',
			endDate: '',
			minAmount: 0,
			controlDomain: '',
			campaignAddress: '',

			minEIR: 0,
			minEth: 0,

			ethConnection: false,
			ethBalance: false,
			yourEthAcc: '',
			yourEthBalance: 0,

			recipiantBaandaId: 8000000099,
			expenseDescription: '',
			startDatez: moment(),
			approveByDate: moment(),
			// approveBtDate: null,
			tagCurrencyType: '',
			requestIndex: 0,
			decision: '',
			rejectionReason: '',
			recipiantCryptoAddr: '0xCbe30EeC61cb8f0c4644Da9c79e67E8219f06CC4',
			requestName: '',

			errorProcessing: false,
			loading: false,
			expRaisedOK: false,
			outputMsg: '',

			errors: []
		};
		this.onChange = this.onChange.bind(this);
	}

	handleStartDate = (date) => {
		this.setState({
			startDatez: date
		});
	};

	handleDecision = (value) => {
		this.setState({
			decision: value
		});
	};

	handleCurrencySelect = (value, { action }) => {
		//console.log('purpose type value:' + JSON.stringify(value));
		this.setState({
			tagCurrencyType: value
		});
	};

	handleApproveByDate = (date) => {
		this.setState({
			approveByDate: date
		});
		// console.log('Input Date string: ' + format(date, "DD/MM/YYYY"));
		// let xx = moment();
		// let yy = xx.unix()
		// console.log('Input Date to unix: ' + yy);
		// var y1 = this.state.approveByDate.valueOf();
		// console.log('y1:' + y1);
		// console.log('y1 formatted:' + format(this.state.approveByDate, "DD/MM/YYYY"));
	};
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	componentWillMount() {
		// this.setShowData();
		this.getAccountBalance();
	}

	getAccountBalance = async () => {
		let campaignBaandaIdx, campaignNamex, campaignHeaderx, startDatex;
		let endDatex, minAmountx, controlDomainx, campaignAddressx;
		campaignMaster.forEach((el) => {
			if (el.campaignBaandaId === this.props.campaignid) {
				campaignBaandaIdx = el.campaignBaandaId;
				campaignNamex = el.campaignName;
				campaignHeaderx = el.campaignHeader;
				startDatex = el.startDate;
				endDatex = el.endDate;
				minAmountx = el.minAmount;
				controlDomainx = el.controlDomain;
				campaignAddressx = el.campaignAddress;
			}
		});
		let ethConnectiony, ethBalancey, yourEthAccy, yourEthBalancey, errorProcessingy, requestIndexy;
		let accounts, requestIndex;
		
		try {
			
			accounts = await web3.eth.getAccounts();
			
			const balance = await web3.eth.getBalance(accounts[0]);
			// console.log('ac:' + accounts[0] + ' balance:' + balance);

			// const campaign = Campaign(this.state.campaignAddress);
			const campaign = Campaign(campaignAddressx);
			// const requestCount = await campaign.methods.getRequestsCount().call();
			const reqArry = await campaign.methods.getReqAddrs().call();
			let requestCount = reqArry.length;
			
			requestIndex = parseInt(requestCount) + 1;
			// console.log('requeest Index:' + requestIndex);

			if (balance > 0) {
				ethConnectiony = true;
				ethBalancey = true;
				yourEthAccy = accounts[0];
				yourEthBalancey = web3.utils.fromWei(balance, 'ether');
				errorProcessingy = false;
				requestIndexy = requestIndex;
			} else {
				ethConnectiony = true;
				ethBalancey = false;
				yourEthAccy = accounts[0];
				yourEthBalancey = 0;
				errorProcessingy = false;
				requestIndexy = requestIndex;
			}
		} catch (err) {
			console.log('getbalace try-catch:' + err);
			ethConnectiony = false;
			ethBalancey = false;
			yourEthAccy = 'Check Error Message below ...';
			yourEthBalancey = 0;
			errorProcessingy = false;
			requestIndexy = 0;
		}
		// console.log('ethConnectiony: ' + ethConnectiony);
		this.setState({
			campaignBaandaId: campaignBaandaIdx,
			campaignName: campaignNamex,
			campaignHeader: campaignHeaderx,
			startDate: startDatex,
			endDate: endDatex,
			minAmount: minAmountx,
			controlDomain: controlDomainx,
			campaignAddress: campaignAddressx,
			ethConnection: ethConnectiony,
			ethBalance: ethBalancey,
			yourEthAcc: yourEthAccy,
			yourEthBalance: yourEthBalancey,
			errorProcessing: errorProcessingy,
			requestIndex: requestIndexy
		});
		// console.log('this.state.ethConnection: ' + this.state.ethConnection);
	};

	raiseRequest = async () => {
		let localMsg;
		let reqName = this.state.requestName;
		if (reqName.length > 20) {
			reqName = reqName.substring(0, 30);
		}
		let recipiantCrypto = this.state.recipiantCryptoAddr;
		let recipiantFiat = this.state.recipiantBaandaId;
		// let byDate = this.state.byDate.format("YYYY-MM-DD");
		let byDate = this.state.approveByDate.valueOf();
		// let toBePaidIn; not used any more.

		// if (this.state.tagCurrencyType.label === '$') {
		// 	toBePaidIn = 0;
		// } else {
		// 	toBePaidIn = 1;
		// }

		// let ethAmt = this.state.minEth;
		let strEthAmt = this.state.minEth.toString();
		let ethAmt = web3.utils.toWei(strEthAmt, 'ether'); // in Wei
		// let dollarAmt = this.state.minEIR.toFixed(2) * 100;  // in penny
		let dAmt = this.state.minEIR;
		let dollarAmt = (dAmt * 100).toFixed(0);
		let reqId = this.state.requestIndex;

		let errIndicator = true; //starts with true - meaning no-error at start

		if (this.state.ethConnection) {
			if (this.state.ethBalance === 0) {
				localMsg = 'You do not have balance in your Eth account for transaction.';
				errIndicator = false;
			} else {
				if (this.state.minEIR === 0 && this.state.minEth === 0) {
					localMsg = 'You have to have a expense value';
					errIndicator = false;
				} else {
					this.setState({
						loading: true,
						outputMsg:
							'EVM/Blockchain takes time to process. Please wait or check Etherscan.io with your address. May take to a minute depending on your connection and mining speed.',
						errorProcessing: false
					});
				}
			}
		} else {
			localMsg = 'You are not connected to ethereum network. Check Hot-to-Steps.';
			errIndicator = false;
		}

		// errIndicator = false; // FOR TIMEBEING ... remove this line

		if (errIndicator) {
			// If basic validation have passed keeping errIndicator true try
			// console.log(
			// 	'inputs:' +
			// 		reqName +
			// 		' | ' +
			// 		byDate +
			// 		' | ' +
			// 		recipiantCrypto +
			// 		' | ' +
			// 		recipiantFiat +
			// 		' | ' +
			// 		ethAmt +
			// 		' | ' +
			// 		dollarAmt + ' | ' + reqId
			// );
			try {
				const campaign = Campaign(this.state.campaignAddress);
				//await factory.methods
				await campaign.methods
					.createRequest(reqName, byDate, recipiantCrypto, recipiantFiat, ethAmt, dollarAmt, reqId)
					.send(
						{
							from: this.state.yourEthAcc,
							gas: '3000000'
						},
						function(error, transactionHash) {
							localMsg = 'TxHash submit:' + transactionHash;
						}
					)
					.on('error', function(error) {
						localMsg = 'Error: ' + error;
					})
					.on('receipt', function(receipt) {
						localMsg =
							'Success with Receipt TxHash:' +
							receipt.transactionHash +
							'    Status:' +
							receipt.status +
							'    Total Gas Used:' +
							receipt.gasUsed;
						errIndicator = true;
					})
					.on('transactionHash', function(transactionHash) {
						localMsg = 'Receipt TxHash:' + transactionHash;
						errIndicator = true;
					});
			} catch (err) {
				localMsg = 'Error: Not Authorized - only Campaign Manager can raise Expense Req.';
				console.log('RaiseRequest.js try-catch error : ' + err);
			}
		}

		// Check this after Mushroom hunting ... from here on.
		if (errIndicator) {
			// No error
			this.setState({
				loading: false,
				errorProcessing: false,
				outputMsg: localMsg,
				expRaisedOK: true
			});
		} else {
			this.setState({
				loading: false,
				errorProcessing: true,
				outputMsg: localMsg,
				expRaisedOK: false
			});
		}
	};

	render() {
		// console.log('minEir:' + this.state.minEIR + ' eth:' + this.state.minEth);

		const { errors } = this.state;
		let requestForm;
		let msgPanel;
		if (this.state.loading) {
			msgPanel = (
				<div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-7 text-left loadingMsgPad">{this.state.outputMsg}</div>
						<div className="col-3 float-center loadingMsgPad">
							<ReactLoading type={'spokes'} color={'yellow'} height={30} width={30} />
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			msgPanel = (
				<div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10 text-left loadingMsgPad">
							<font color="#bad1a7" size="2">
								{this.state.outputMsg}
							</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		}

		requestForm = (
			<div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<h5>
							<font color="lightyellow">Raise Expense Requests for Approvals</font>
						</h5>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="for-top-space" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-7 text-left">
						Campaign:<font color="lightyellow"> {this.state.campaignHeader}</font>
					</div>
					<div className="col-3 text-left">
						Expense Index: <font color="lightyellow">{this.state.requestIndex}</font>{' '}
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row-spacing" />
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-5 text-left">
						<TextFieldGroup
							name="requestName"
							placeholder="A Request Name Please"
							value={this.state.requestName}
							onChange={this.onChange}
							error={errors.requestName}
							info="A request name for listing & reference."
						/>
					</div>
					<div className="col-5 text-left">Provide a expense name in 30 chars or less.</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<font color="#fbfcd6" size="3">
							<TextAreaFieldGroup
								placeholder="Provide details information about your expense request. Include breakdowns and inform about the recipiant."
								name="expenseDescription"
								value={this.state.expenseDescription}
								rows={4}
								onChange={this.onChange}
								error={errors.expenseDescription}
								info="Provide details information about your expense request."
							/>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<font color="#fbfcd6" size="3">
							<TextFieldGroup
								name="recipiantCryptoAddr"
								placeholder="0xA81FA6A4fe8dC50E5C89ADAe2fe822C92b1108ba "
								value={this.state.recipiantCryptoAddr}
								onChange={this.onChange}
								error={errors.recipiantCryptoAddr}
								info="You can keep the example provided for UX. That is valid addr in Rinkby if payment currency type you selected is Eth."
							/>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>

					<div className="col-4">
						<input
							name="recipiantBaandaId"
							value={this.state.recipiantBaandaId}
							type="number"
							pattern="^\d*(\.\d{0,2})?$"
							title="Format: 4 digits"
							width="20"
							onChange={this.onChange}
							placeholder="Amt"
						/>
						<small className="form-text">Recipiant Baanda Id (Keep default for UX)</small>
					</div>

					<div className="col-4">
						{/* <div className="task_calendar_place">
							<div className="float-center">
								<DatePicker selected={this.state.startDatez} onChange={this.handleStartDate} />
								<small className="form-text">Approve By Date</small>
							</div>
						</div> */}
						<div className="task_calendar_place">
							<div className="float-left">
								<DatePicker selected={this.state.approveByDate} onChange={this.handleApproveByDate} />
							</div>
						</div>
					</div>
					<div className="col-2">
						<font color="blue">
							<Select
								value={this.state.tagCurrencyType}
								//isMulti
								autosize={false}
								options={currency}
								className="basic-multi-select"
								classNamePrefix="select"
								onChange={this.handleCurrencySelect}
								maxMenuHeight={100}
								//isSearchable={true}
								placeholder="Currency"
							/>
						</font>
						<small className="form-text">Pay in currency</small>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-4">
						<font size="2">
							Amount in:{' '}
							<input
								name="minEIR"
								value={this.state.minEIR}
								type="number"
								pattern="^\d*(\.\d{0,2})?$"
								title="Format: 4 digits"
								width="20"
								onChange={this.onChange}
								placeholder="Amt"
							/>
							&nbsp;<b> $</b>
						</font>
					</div>
					<div className="col-2 text-center">
						<b>OR</b>
					</div>

					<div className="col-4 text-left">
						<font size="2">
							In:{' '}
							<input
								name="minEth"
								value={this.state.minEth}
								type="number"
								pattern="^\d*(\.\d{0,2})?$"
								title="Format: 4 digits"
								width="20"
								onChange={this.onChange}
								placeholder="Amt"
							/>
							&nbsp;<b>Eth</b>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				{/* <div className="row-spacing" />
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-center">
						<RadioGroup
							name="bizApproach"
							selectedValue={this.state.decision}
							onChange={this.handleDecision}
						>
							{' '}
							<label>
								<h6>Your approval decision is &nbsp;&nbsp;</h6>
							</label>
							<label>
								<Radio value="yes" />
								&nbsp;<font color="green">Approve</font>&nbsp;&nbsp;
							</label>
							<label>
								<Radio value="no" />
								&nbsp;<font color="red">Reject</font>&nbsp;&nbsp;
							</label>
						</RadioGroup>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				{noReasonPanel} */}
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-8">{msgPanel}</div>
					<div className="col-2">
						<div className="float-right btnContributePlacement">
							<button
								className="btn-raiseReq"
								onClick={() => {
									this.raiseRequest();
								}}
							>
								<b>Raise & Notify</b>
								<div className="float-right">
									<i className="fas fa-industry" />
								</div>
							</button>{' '}
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="for-bottom-space" />
			</div>
		);

		let output = requestForm;
		return <div>{output}</div>;
	}
}

export default RaiseRequest;
