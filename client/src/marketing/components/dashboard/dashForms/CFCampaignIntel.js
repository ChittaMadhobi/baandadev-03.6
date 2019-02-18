import React, { Component } from 'react';

import Campaign from '../../../../ethereum/campaign';
import web3 from '../../../../ethereum/web3';
import '../mktdash.css';

// import { campaignMaster } from '../data/campaignMaster';
import { campaignMaster } from '../../../../sharedData/campaignMaster';

class CFCampaignIntel extends Component {
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
			targetValue: 0,

			ethConnection: false,
			ethBalance: 0,
			yourEthAcc: '',
			yourEthBalance: 0,
			errorProcessing: false,
			requestIndex: 0,

			campMgrEthAddr: '',
			campMgrBaandaId: 0,
			campBaandaId: 0,
			noOfContributors: 0,
			minimumAmt: 0,
			fiatCoffer: 0,
			cryptoCoffer: 0,
			availableCC: 0, // CC = crypto coffer
			availableFC: 0, // FC = fiat coffer
			coffer: 0, // total value in pennies
			fiatOnHold: 0,
			cryptoOnHold: 0,
			ethConn: false
		};
	}

	componentWillMount() {
		// this.setShowData();
		this.getAccountBalance();
	}

	getAccountBalance = async () => {
		let campaignBaandaIdx, campaignNamex, campaignHeaderx, startDatex, targetValuex;
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
				targetValuex = el.targetValueInFiat;
			}
		});
		let ethConnectiony, ethBalancey, yourEthAccy, yourEthBalancey, errorProcessingy, requestIndexy;
		let accounts, requestIndex, minimumAmount;
		let summary;

		// Default to JSON file data
		minimumAmount = minAmountx;  // Remove this in production ... or get it from regular DB
		let ethereumConn = true;
		try {
			// console.log('got into try');
			accounts = await web3.eth.getAccounts();
			// console.log('got past accounts ...');
			const balance = await web3.eth.getBalance(accounts[0]);
			// console.log('ac:' + accounts[0] + ' balance:' + balance);

			// const campaign = Campaign(this.state.campaignAddress);
			const campaign = Campaign(campaignAddressx);
			// const requestCount = await campaign.methods.getRequestsCount().call();
			const reqArry = await campaign.methods.getReqAddrs().call();
			let requestCount = reqArry.length;

			requestIndex = parseInt(requestCount) + 1;
			// console.log('requeest Index:' + requestIndex);

			summary = await campaign.methods.getCampaignSummary().call();
			// console.log('summary -------------------------');
			// console.log(summary);
			// console.log('Manager Crypto:' + summary[0]);
			// console.log('Manager Baanda Id:' + summary[1]);
			// console.log('summary -------------------------');

			minimumAmount = await campaign.methods.minAmt().call();
			

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
			// console.log('getbalace try-catch:' + err);
			ethConnectiony = false;
			ethBalancey = false;
			yourEthAccy = 'Check Error Message below ...';
			yourEthBalancey = 0;
			errorProcessingy = false;
			requestIndexy = 0;
			ethereumConn = false;
		}
		// console.log('ethConnectiony: ' + ethConnectiony);

		if (ethereumConn) {
		this.setState({
			campaignBaandaId: campaignBaandaIdx,
			campaignName: campaignNamex,
			campaignHeader: campaignHeaderx,
			startDate: startDatex,
			endDate: endDatex,
			minAmount: minimumAmount,
			controlDomain: controlDomainx,
			campaignAddress: campaignAddressx,
			targetValue: targetValuex,
			ethConnection: ethConnectiony,
			ethBalance: ethBalancey,
			yourEthAcc: yourEthAccy,
			yourEthBalance: yourEthBalancey,
			errorProcessing: errorProcessingy,
			requestIndex: requestIndexy,
			campMgrEthAddr: summary[0],
			campMgrBaandaId: summary[1],
			campBaandaId: summary[2],
			noOfContributors: summary[3],
			minimumAmt: summary[4],
			fiatCoffer: summary[5],
			cryptoCoffer: summary[6],
			availableFC: summary[7], // CC = crypto coffer
			availableCC: summary[8], // FC = fiat coffer
			coffer: summary[9], // total value in pennies
			fiatOnHold: summary[10],
			cryptoOnHold: summary[11],
			ethConn: true
		});
	} else {
		this.setState({
			campaignBaandaId: campaignBaandaIdx,
			campaignName: campaignNamex,
			campaignHeader: campaignHeaderx,
			startDate: startDatex,
			endDate: endDatex,
			minAmount: minimumAmount,
			controlDomain: controlDomainx,
			campaignAddress: campaignAddressx,
			targetValue: targetValuex,
			ethConnection: ethConnectiony,
			ethBalance: ethBalancey,
			yourEthAcc: yourEthAccy,
			yourEthBalance: yourEthBalancey,
			errorProcessing: errorProcessingy,
			requestIndex: requestIndexy,
		});
	}
		// console.log('this.state.ethConnection: ' + this.state.ethConnection);
	};
	render() {
		console.log('this.props --: ' + JSON.stringify(this.props));

		let cryptoHoldStr = this.state.cryptoOnHold.toString();
		let onHoldCC = web3.utils.fromWei(cryptoHoldStr, 'ether');

		let avaiCCStr = this.state.availableCC.toString();
		let availableCC = web3.utils.fromWei(avaiCCStr, 'ether');

		let cryptoCofStr = this.state.cryptoCoffer.toString();
		let cryptoCoffer = web3.utils.fromWei(cryptoCofStr, 'ether');

		let x1 = Number(this.state.coffer / 100);
		let x2 = Number(this.state.targetValue);
		let x3 = x2.toLocaleString(undefined, { minimumFractionDigits: 2 });
		// console.log('x1/x2:' + x1 / x2 * 100);
		// let percentToTarget = Math.floor(((Number(this.state.coffer)/100) / Number(this.state.targetValue)) * 100) + 10;
		let percentToTarget = (x1 / x2 * 100).toFixed(2);
		let barbg;
		if (percentToTarget <= 25) {
			barbg = 'progress-bar bg-danger';
		} else if (percentToTarget > 25 && percentToTarget <= 50) {
			barbg = 'progress-bar bg-warning';
		} else if (percentToTarget > 50 && percentToTarget <= 75) {
			barbg = 'progress-bar bg-primary';
		} else {
			barbg = 'progress-bar bg-success';
		}
		let pertargetStr = percentToTarget.toString();
		// console.log(
		// 	'this.state.coffer:' +
		// 		this.state.coffer +
		// 		'  this.state.targetValue:' +
		// 		this.state.targetValue +
		// 		' ||' +
		// 		percentToTarget
		// );
		// let sentimentBarScore = .5;
		// let sentimentper = Math.floor(((sentimentBarScore + 1) / 2) * 100);
		// var sentStr = sentimentper.toString() + "%";
		var sentStr = percentToTarget.toString() + '%';
		//console.log('sentStr:' + sentStr);
		let genStyle = { width: sentStr };
		// let barbg = "progress-bar bg-danger";
		let sentimentBar = (
			<div>
				<div className="row">
					<div className="col-md-3">
						<div className="float-right">Raised % Target :</div>
					</div>
					<div className="col-md-6">
						<div className="progress progbar-pad">
							<div
								className={barbg}
								//style={{ width: '70%' }}
								style={genStyle}
								role="progressbar"
								aria-valuenow="50"
								aria-valuemin="0"
								aria-valuemax="100"
							>
								<font color="black">
									{x1} of {x3} $
								</font>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="float-left">
							<font color="white"> {pertargetStr} %</font>
						</div>
					</div>
				</div>
			</div>
		);

		let ethConnErrMsg;
		if (!this.state.ethConn) {
			ethConnErrMsg = (
				<div>
					<div className="row-spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
						<font color="orange" size="2">
						<p align="justify"><b>Error: </b> Cannot get to Rinkby Ethereum network. Please see if your Metamask has been attached properly to Chrome. If 'yes', login to Metamask and select the Rinkby network. For Metamask help, please check the 'How-to-setps' bubtton above.
						</p>
						</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			)
		} else {
			ethConnErrMsg = null;
		}

		return (
			<div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-center">
						<h4>
							<font color="#f9ceb3">Campaign Intel & Summary</font>
						</h4>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="form-top-space" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						Campaign: <font color="#e8e2c7">{this.state.campaignName}</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-3 text-left">
						Baanda ID: <font color="#e8e2c7">{this.state.campaignBaandaId}</font>
					</div>
					<div className="col-7 text-left">
						Ethereum: <font color="#e8e2c7">{this.state.campaignAddress}</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-3 text-left">
						Min-Contribution: <font color="#e8e2c7">{(this.state.minAmount / 100).toFixed(2)} &nbsp;$</font>
					</div>
					<div className="col-7 text-left">
						Campaign{' '}
						<font color="#e8e2c7">
							Starts:&nbsp;{this.state.startDate} &nbsp;&nbsp; Ends: {this.state.endDate}
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="form-top-space" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						<font color="#e8e2c7">
							<b>Campaign Manager & Targets</b>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-3 text-left">
						Baanda ID: <font color="#e8e2c7">{this.state.campMgrBaandaId}</font>
					</div>
					<div className="col-7 text-left">
						Ethereum: <font color="#e8e2c7">{this.state.campMgrEthAddr}</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-2 text-left">
						Target:{' '}
						<font color="#e8e2c7">
							{this.state.targetValue.toLocaleString(undefined, { minimumFractionDigits: 2 })} $
						</font>
					</div>
					<div className="col-2 text-left">
						Exp-Requests: <font color="#e8e2c7">{this.state.requestIndex - 1}</font>
					</div>
					<div className="col-2 text-left">
						Contributors: <font color="#e8e2c7">{this.state.noOfContributors}</font>
					</div>
					<div className="col-3 text-left">
						Coffer:{' '}
						<font color="#e8e2c7">
							{(this.state.coffer / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}&nbsp;$
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="form-top-space" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						<font color="#d7f9c2">
							<b>Campaign's Fiat Coffer</b>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-3 text-left">
						Coffer:{' '}
						<font color="#e8e2c7">
							{(this.state.fiatCoffer / 100).toLocaleString(undefined, {
								minimumFractionDigits: 2
							})}&nbsp;$
						</font>
					</div>
					<div className="col-3 text-left">
						Available:{' '}
						<font color="#e8e2c7">
							{(this.state.availableFC / 100).toLocaleString(undefined, {
								minimumFractionDigits: 2
							})}&nbsp;$
						</font>
					</div>
					<div className="col-4 text-left">
						On-hold (exp-raised):{' '}
						<font color="#e8e2c7">
							{(this.state.fiatOnHold / 100).toLocaleString(undefined, {
								minimumFractionDigits: 2
							})}&nbsp;$
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="form-top-space" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						<font color="#b3ebf9">
							<b>Campaign's Crypto Coffer</b>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-3 text-left">
						Coffer:{' '}
						<font color="#e8e2c7">
							{cryptoCoffer}
							&nbsp;Eth
						</font>
					</div>
					<div className="col-3 text-left">
						Available:{' '}
						<font color="#e8e2c7">
							{availableCC}
							&nbsp;Eth
						</font>
					</div>
					<div className="col-4 text-left">
						On-hold (exp-raised):{' '}
						<font color="#e8e2c7">
							{onHoldCC}
							&nbsp;Eth
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-center">{sentimentBar}</div>
					<div className="col-1">&nbsp;</div>
				</div>
				{ethConnErrMsg}
				<div className="for-bottom-space" />
				<div className="for-bottom-space" />

			</div>
		);
	}
}

export default CFCampaignIntel;
