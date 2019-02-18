import React, { Component } from 'react';

import axios from 'axios';
import ReactLoading from 'react-loading';

import Campaign from '../../../../ethereum/campaign';
import web3 from '../../../../ethereum/web3';

// import { campaignMaster } from '../data/campaignMaster';
import { campaignMaster } from '../../../../sharedData/campaignMaster';

class CFContribute extends Component {
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
			minEth: 0,
			minEIR: 0,

			ethConnection: false,
			ethBalance: false,
			yourEthAcc: '',
			yourEthBalance: 0,

			rates: '',
			loading: false,
			outputMsg: '',
			errorProcessing: false,
			contributedOk: false
		};
		this.onChange = this.onChange.bind(this);
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
					yourEthBalance: web3.utils.fromWei(balance, 'ether'),
					errorProcessing: false
				});
			} else {
				this.setState({
					ethConnection: true,
					ethBalance: false,
					yourEthAcc: accounts[0],
					yourEthBalance: web3.utils.fromWei(balance, 'ether'),
					errorProcessing: false
				});
			}
		} catch (err) {
			this.setState({
				ethConnection: false,
				ethBalance: false,
				yourEthAcc: 'Check Error Message below ...',
				yourEthBalance: '0',
				errorProcessing: false
			});
		}

	};

	createCampaignContribute = () => {
		let cryptoIndicator = false;

		if (this.state.minEth > 0 && this.state.minEIR > 0) {
			this.setState({
				outputMsg: 'Error: Please select one of the method of payment ... not both at a time.',
				errorProcessing: true
			});
		} else if (this.state.minEth === 0 && this.state.minEIR === 0) {
			this.setState({
				outputMsg: 'Error: Please select at least one of the contribution process..',
				errorProcessing: true
			});
		} else {
			if (this.state.minEth > 0) {  // If crypto is true, check crypto amount or else checl dollar 
				cryptoIndicator = true;
			} 
			if (cryptoIndicator) {
				
				if ((this.state.minAmount/100) * 1 / this.state.rates.USD > this.state.minEth) {
					this.setState({
						outputMsg: 'Error: You need to pay minimum Eth - check the white box above please.',
						errorProcessing: true
					});
				} else {
					this.setState({
						loading: true,
						outputMsg:
							'EVM/Blockchain takes time to process. IMPORTANT: CONFIRM Metamask ask / click on Fox-Metamask icon on browser. Then, please wait for your transaction to be mined (Ref: Etherscan.io).',
						errorProcessing: false
					});
					alert(
						'You can always cancel payment by rejecting the confirmation needed by Metamask. If you see the spinner spinning in wait state, check for Metamask message first.'
					);
					this.contributeEth();
				}
			} else {
				console.log('this.state.minEIR:' + this.state.minEIR + ' this.state.minAmount:'+this.state.minAmount);
				if (this.state.minEIR < (this.state.minAmount/100)) {
					this.setState({
						outputMsg: 'Error: You need to pay minimum EIR/$ - check the white box above please.',
						errorProcessing: true
					});
				} else {
					this.setState({
						loading: true,
						outputMsg:
							'EVM/Blockchain takes time to process. IMPORTANT: CONFIRM Metamask ask / click on Fox-Metamask icon on browser. Then, please wait for your transaction to be mined (Ref: Etherscan.io).',
						errorProcessing: false
					});
					alert(
						'You can always cancel payment by rejecting the confirmation needed by Metamask. If you see the spinner spinning in wait state, check for Metamask message first.'
					);
					console.log('I am here 2 = ' + this.state.loading);
					this.contributeFiat();
				}
			}
		}
	};

	// Call contributeCrypto(uint _baandaid, uint dollarValue) smart contract
	contributeEth = async () => {
		
		let localMsg;
		let errIndicator = false;
		let intBaandaId = parseInt(this.state.campaignBaandaId, 10);
		let strEther = this.state.minEth.toString();

		let ethToDollar = (this.state.minEth * this.state.rates.USD).toFixed(2) * 100;  // In penny - Ethereum cannot handle decimal
		// let ethToDollar = 48;
		console.log('baandaId Int:' + intBaandaId + ' |  Eth amount in dollar: ' + ethToDollar + ' |strEther:' + strEther + ' |value:' +  web3.utils.toWei(strEther, 'ether'));

		try {
			const campaign = Campaign(this.state.campaignAddress);
			//await factory.methods
			await campaign.methods
				.contributeCrypto(intBaandaId, ethToDollar)
				.send(
					{	
						value: web3.utils.toWei(strEther, 'ether'),
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
			localMsg = 'Error try-catch for contributeCrypto: ' + err;
		}
		if (errIndicator) {
			// No error
			this.setState({
				loading: false,
				errorProcessing: false,
				outputMsg: localMsg,
				contributedOk: true
			});
		} else {
			this.setState({
				loading: false,
				errorProcessing: true,
				outputMsg: localMsg,
				contributedOk: false
			});
		}
	};

	contributeFiat = async () => {
		let localMsg;
		let errIndicator = false;
		let intBaandaId = parseInt(this.state.campaignBaandaId, 10);
		// let contAmt = parseInt(this.state.minEIR, 10) * 100;   // Dollar kept in penny
		let contAmt = (this.state.minEIR * 100).toFixed(0);
		console.log('intBaandaId:' + intBaandaId + '|   contAmt:' + contAmt + ' campaignAddress:' + this.state.campaignAddress);
		try {
			const campaign = Campaign(this.state.campaignAddress);
			//await factory.methods
			await campaign.methods
				.contributeFiat(intBaandaId, contAmt)
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
						'Success TxHash:' +
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
			localMsg = 'Error try-catch for contributeFiat: ' + err;
		}
		if (errIndicator) {
			// No error
			this.setState({
				loading: false,
				errorProcessing: false,
				outputMsg: localMsg,
				contributedOk: true
			});
		} else {
			this.setState({
				loading: false,
				errorProcessing: true,
				outputMsg: localMsg,
				contributedOk: false
			});
		}

	};

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	async componentWillMount() {
		this.setState({
			loading: true,
			outputMsg: 'Fetching exchange rates ... wait'
		});

		this.getAccAndBalance();

		let rates;
		await axios
			.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR')
			.then(function(response) {
				rates = response.data;
			})
			.catch(function(error) {
				console.log('axios error:', error);
			});

		this.setShowData();

		try {
			const campaign = Campaign(this.state.campaignAddress);

			const minimumAmount = await campaign.methods.minAmt().call();

			this.setState({
				minAmount: minimumAmount
			})

		} catch (err) {
			console.log('Try-catch while getting minAmt :' + err);
		}
 

		this.setState({
			rates: rates,
			loading: false,
			outputMsg: ''
		});
	}

	setShowData = () => {
		// console.log('this.props.campaignid: ' + this.props.campaignid);
		campaignMaster.forEach((el) => {
			if (el.campaignBaandaId === this.props.campaignid) {
				this.setState({
					campaignBaandaId: el.campaignBaandaId,
					campaignName: el.campaignName,
					campaignHeader: el.campaignHeader,
					startDate: el.startDate,
					endDate: el.endDate,
					minAmount: el.minAmount,
					controlDomain: el.controlDomain,
					campaignAddress: el.campaignAddress
				});
			}
		});
	};

	render() {
		// console.log('rates:' + JSON.stringify(this.state));

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

		if (this.state.errorProcessing) {
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
		} else {
			
			if (!this.state.loading) {
				if (this.state.ethConnection && this.state.ethBalance) {
					if (!this.state.contributedOk) {
						msgPanel = (
							<div>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-10 text-left balanceShowNote">
										{/* <font color="#bad1a7" size="2"> */}
											A/c: {this.state.yourEthAcc} &nbsp;&nbsp; Bal: {this.state.yourEthBalance}{' '}
											Eth.
										{/* </font> */}
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
							</div>
						);
					}
				} else {
					if (!this.state.ethConnection) {
						msgPanel = (
							<div>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-10 text-left loadingMsgPad">
										<font color="red" size="2">
											Error: Your are not connected Ethereum. Check How-to-steps to contribute
											please.
										</font>
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
										<font color="red" size="2">
											Error: You have no Eth balance to transact. Check How-to-steps to contribute
											please.
										</font>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
							</div>
						);
					}
				}
			}
		}

		return (
			<div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-center">
						<font color="yellow">
							<h6>Assist the Dream Chasers (Contribute)</h6>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="for-top-space" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-5 text-left">
						Name: <font color="lightyellow">{this.state.campaignName}</font>
					</div>
					<div className="col-5 text-left">
						Campaign Id: <font color="lightyellow">{this.state.campaignBaandaId}</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">Caption: {this.state.campaignHeader}</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-3 text-left">
						Control Tech:&nbsp;<font color="lightyellow">{this.state.controlDomain}</font>
					</div>
					<div className="col-7 text-left">
						Eth Address: &nbsp;<font color="lightyellow">{this.state.campaignAddress}</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-3 text-left">
						Starts on:&nbsp;<font color="lightyellow">{this.state.startDate}</font>
					</div>
					<div className="col-3 text-left">
						Ends on: &nbsp;<font color="lightyellow">{this.state.endDate}</font>
					</div>
					<div className="col-4 text-left">
						Minimum: &nbsp;<font color="lightyellow">
							{(this.state.minAmount/100).toLocaleString(undefined, { minimumFractionDigits: 2 })} $
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row-spacing" />
				<div className="row-spacing" />
				<div className="row">
					<div className="col">
						<div className="text-center">
							<font color="yellow">
								<h6>Exchange Rates at Load Time (now)</h6>
							</font>
						</div>
					</div>
				</div>
				<div className="showExchangeBox">
					<b>
						<p>
							Rate of 1 Eth = {this.state.rates.USD} $,&nbsp; {this.state.rates.EUR} &euro;,{' '}
							{this.state.rates.BTC} &#x0e3f;
						</p>
						<p>
							<font color="#11543c">
								Minimum Contribution in Ether ={' '}
								{(this.state.minAmount * 1 / this.state.rates.USD).toFixed(8)}&nbsp; Eth
							</font>
						</p>
						<p>
							<font color="#11543c">
								Fiat ($, &euro;) pay is via your Baanda-credit-points(named EIR) [@ 1EIR = 1$ ]
							</font>
						</p>
					</b>
				</div>
				<div className="row-spacing" />
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
				<div className="row">
					<div className="col">
						<div className="text-center">
							<font color="yellow" size="2">
								Note: For UX, we would be updating test-Ethereum only in Rinkby Testnet.
							</font>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-8">{msgPanel}</div>
					<div className="col-2">
						<div className="float-right btnContributePlacement">
							<button
								className="btn-respondReq"
								onClick={() => {
									this.createCampaignContribute();
								}}
							>
								<b>Contribute</b>
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
	}
}

export default CFContribute;
