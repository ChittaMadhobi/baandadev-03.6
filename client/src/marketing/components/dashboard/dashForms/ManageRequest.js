import React, { Component } from 'react';

import TextAreaFieldGroup from '../../../../utils/TextAreaFieldGroup';
// import TextFieldGroup from '../../../../utils/TextFieldGroup';
// import ReactLoading from 'react-loading';

// import Campaign from '../../../../ethereum/campaign';
import web3 from '../../../../ethereum/web3';
import '../mktdash.css';
import { RadioGroup, Radio } from 'react-radio-group';

class ManageRequest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			decision: 'yes',
			rejectionReason: '',
			errors: []
		};

		this.onChange = this.onChange.bind(this);
	}

	handleApproveVote = () => {
		alert("On click, it will in production take your vote and update the vote in Ethereum net based on the policy setup. If 1 vote 1 person then the counter would be incremented. For other, vote will be based on contribution and DCCS (for now DCCS = 1 till AI engine is operational and Baanda has enough data to calculate that. Decsion will be done post byDate.")
	};

	handleCancelRequest = () => {
		alert('This button will be only available to campaign manager. For some reason, the team and manager may want to change the original request. On cancel, the money-value on hold (escrow) will be returned to the coffer and status changed to CANCEL. The request will not exist any more.')
	}

	handleFinalize = () => {
		alert('This button is available only after the approval criteria is met. That is, enough approvers have voted, the last voting days has passed, and decision has been made per policy. If the button is available, onClick, the money from escrow will be deposited to the recipient. If it is Ethereum then it will be sent to recipiant ethereum account. If recipient is BaandaID holder only and selected Fiat based payment, then that BaandaID will receive corresponding points or EIR. The recipiant can change EIR into the Fiat currency specified ($ for now).')
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleDecision = (value) => {
		console.log('radio value: ' + value);
		this.setState({
			decision: value
		});
	};
	render() {
		let requestBody;
		let { errors } = this.state;

		const { reqAddr, desc, byDate, recipiantC, recipiantF, valueInC, valueInF, status } = this.props.request;
		const campaignId = this.props.campaignId;

		let statusName;

		let cValue = web3.utils.fromWei(valueInC, 'ether');

		let noReasonPanel;

		if (this.state.decision === 'no') {
			noReasonPanel = (
				<div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<TextAreaFieldGroup
								placeholder="Please tell us why you diapprove so we can raise requests per your guidelines."
								name="rejectionReason"
								value={this.state.rejectionReason}
								rows={2}
								onChange={this.onChange}
								error={errors.rejectionReason}
								info="Please tell us why you diapprove so we can raise requests per your guidelines."
							/>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			noReasonPanel = null;
		}

		if (parseInt(status) === 0) {
			statusName = 'New-Active';
		} else {
			statusName = 'Unknown';
		}
		requestBody = (
			<div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-center">
						<h5>
							<font color="lightyellow">Manage & Approve Request</font>
						</h5>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="for-top-space" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-5 text-left">
						Campaign:<font color="lightyellow"> {campaignId}</font>
					</div>
					<div className="col-5 text-left">
						Expense Index: <font color="lightyellow">{reqAddr}</font>{' '}
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-5 text-left">
						Request Name:<font color="lightyellow"> {desc}</font>
					</div>
					<div className="col-5 text-left">
						Done By: <font color="lightyellow">{byDate}</font>{' '}
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-7 text-left">
						Recipiant Eth:<font color="lightyellow"> {recipiantC}</font>
					</div>
					<div className="col-3 text-left">
						BaandaID: <font color="lightyellow">{recipiantF}</font>{' '}
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						<b>Expense Details: </b>
						<font color="lightyellow">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
							Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
							sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
							Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
							conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
							lacinia nunc. Curabitur tortor.
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-3 text-left">
						Status:<font color="yellow"> {statusName}</font>
					</div>
					<div className="col-3 text-left">
						Value Fiat: <font color="lightyellow"> {valueInF} </font> $
					</div>
					<div className="col-4 text-left">
						Value Crypto: <font color="lightyellow"> {cValue} </font> Eth
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
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
				<div className="row-spacing" />
				{noReasonPanel}
				<div className="row-spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-right">
						<button
							className="btn-ReqParticipate"
							onClick={() => {
								this.handleApproveVote();
							}}
						>
							<b>Approve-Vote</b>&nbsp;
							<div className="float-right">
								<i className="fas fa-door-open" />
							</div>
						</button>
						<button
							className="btn-ReqParticipate"
							onClick={() => {
								this.handleCancelRequest();
							}}
						>
							<b>Cancel-Req</b>&nbsp;
							<div className="float-right">
								<i className="fas fa-door-open" />
							</div>
						</button>
						<button
							className="btn-ReqParticipate"
							onClick={() => {
								this.handleFinalize();
							}}
						>
							<b>Finalize-Pay</b>&nbsp;
							<div className="float-right">
								<i className="fas fa-door-open" />
							</div>
						</button>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
			</div>
		);

		console.log('this.props:' + JSON.stringify(this.props));
		return <div>{requestBody}</div>;
	}
}

export default ManageRequest;
