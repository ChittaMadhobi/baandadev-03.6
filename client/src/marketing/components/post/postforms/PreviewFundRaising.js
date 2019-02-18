import React, { Component } from 'react';
import moment from 'moment';
import ReactPlayer from 'react-player';

import '../post.css';
import { previewFunding } from '../data/previewFunding';

class PreviewFundRaising extends Component {
	constructor(props) {
		super(props);

		this.state = {
			campaignName: '',
			campaignHeader: '',
			description: '',
			startDate: moment(),
			endDate: moment(),
			targetAmount: 0,
			targetAmountCurrencyType: '',
			currencyType: '',
			purposeType: '',
			howWillItHelpOthers: '',
			approverMinAmount: 0,
			reqMgrName: '',
			mgrPictureURL: '',
			locationCountry: 'USA',
			returnPercent: 7,
			donationOver: 0,
			address1: '',
			address2: '',
			zip: '',
			inspectionOver: 0,

			// All Check boxes below
			contributionFinancial: '',
			contributionFinancialcheck: '',
			contributionGoods: '',
			contributionGoodscheck: '',
			contributionServices: '',
			contributionServicescheck: '',
			returnGoods: '',
			returnGoodscheck: '',
			returnFunds: '',
			returnFundscheck: '',
			accountTransparency: '',
			accountTransparencycheck: '',
			iotdevice: '',
			iotdevicecheck: '',
			inpersonInspector: '',
			inpersonInspectorcheck: '',
			proofOfWork: '',
			proofOfWorkcheck: '',
			summaryNote: '',

			previewAvailable: false
		};
	}

	componentWillMount() {
		console.log('this.props willmount:' + JSON.stringify(this.props));
		// console.log('previewFunding name:' + previewFunding[0].reqMgrName);
		if (this.props.campaignName) {
			let ex = previewFunding[0];
			this.setState({
				previewAvailable: true,
				campaignName: ex.campaignName,
				campaignHeader: ex.campaignHeader,
				description: ex.description,
				startDate: moment(ex.startDate, 'MM-DD-YYYY'),
				endDate: moment(ex.endDate, 'MM-DD-YYYY'),
				targetAmount: ex.targetAmount,
				targetAmountCurrencyType: ex.targetAmountCurrencyType,
				purposeType: ex.purposeType,
				howWillItHelpOthers: ex.howWillItHelpOthers,
				approverMinAmount: ex.approverMinAmount,
				approverMinCurrencyType: ex.approverMinCurrencyType,
				reqMgrName: ex.reqMgrName,
				mgrPictureURL: ex.mgrPictureURL,
				returnPercent: ex.returnPercent,
				donationOver: ex.donationOver,
				inspectionOver: ex.inspectionOver,
				contributionFinancial: ex.contributionFinancial,
				contributionFinancialcheck: ex.contributionFinancialcheck,
				contributionGoods: ex.contributionGoods,
				contributionGoodscheck: ex.contributionGoodscheck,
				contributionServices: ex.contributionServices,
				contributionServicescheck: ex.contributionServicescheck,
				returnGoods: ex.returnGoods,
				returnGoodscheck: ex.returnGoodscheck,
				returnFunds: ex.returnFunds,
				returnFundscheck: ex.returnFundcheck,
				accountTransparency: ex.accountTransparency,
				accountTransparencycheck: ex.accountTransparencycheck,
				iotdevice: ex.iotdevice,
				iotdevicecheck: ex.iotdevicecheck,
				inpersonInspector: ex.inpersonInspector,
				inpersonInspectorcheck: ex.inpersonInspectorcheck,
				proofOfWork: ex.proofOfWork,
				proofOfWorkcheck: ex.proofOfWorkcheck,
				summaryNote: ex.summaryNote
			});
		} else {
			this.setState({
				previewAvailable: false
			});
		}
	}
	render() {
		// console.log('in render this.props:' + JSON.stringify(this.props));
		let preview;

		if (this.state.previewAvailable) {
			preview = (
				<div>
					<div className="preview-padding">
						<div className="text-center">
							<h5>Preview of {this.props.campaignName.label}</h5>
						</div>
						<div className="spacing" />
						<div className="row">
							<div className="col-7">
								<div className="spacing" />
								<div className="text-left">
									<p>
										<font color="#e8edc7">
											<b>campaignName: </b>
										</font>
										{this.state.campaignName}{' '}
									</p>
									<p>
										<font color="#e8edc7">
											<b>Caption: </b>
										</font>
										{this.state.campaignHeader}{' '}
									</p>
									<p>
										<font color="#e8edc7">
											<b>Requestor's Name: </b>
										</font>
										{this.state.reqMgrName}{' '}
									</p>
									<p>
										<font color="#e8edc7">
											<b>Fundraising Start Date: </b>
										</font>
										{moment(this.state.startDate).format('YYYY-MM-DD')} &nbsp;&nbsp;
									</p>
									<p>
										<font color="#e8edc7">
											<b>Fundraising End Date: </b>
										</font>
										{moment(this.state.endDate).format('YYYY-MM-DD')}
									</p>
									<p>
										<font color="#e8edc7">
											<b>Target Amount: </b>
										</font>
										{this.state.targetAmount.toLocaleString()}{' '}
										{this.state.targetAmountCurrencyType.label}
									</p>
								</div>
							</div>
							<div className="col-4">
								<div className="float-center">
									<img
										src={this.state.mgrPictureURL}
										alt="..."
										height="150px"
										width="75%"
										border="5"
									/>
								</div>
							</div>
							<div className="col-1">&nbsp;</div>
						</div>
						<div className="spacing" />
						<div className="row">
							<div className="col">
								<div className="text-left">
									<font color="#e8edc7">
										<b>Fundraising Endeavor's Goal: </b>
									</font>
									<p>{this.state.description}</p>
								</div>
							</div>
						</div>
						<div className="spacing" />
						<div className="row">
							<div className="col">
								<div className="text-left">
									<font color="#e8edc7">
										<b>Aspired Impact on Community: </b>
									</font>
									<p>{this.state.howWillItHelpOthers}</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="text-left">
									<font color="#e8edc7">
										<b>Return Policy (if we fail): </b>
									</font>
									<ul>
										<li> {this.state.iotdevice}</li>
										<li>
											{' '}
											{this.state.returnFunds}&nbsp;{this.state.returnPercent} % admin cost for
											donation over ${this.state.donationOver}
										</li>
										<li>{this.state.accountTransparency}</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="text-left">
									<font color="#e8edc7">
										<b>Endeavor monitoring by Contributors: </b>
									</font>
									<ul>
										<li> {this.state.returnGoods}</li>
										<li> {this.state.inpersonInspector}</li>
										<li>{this.state.proofOfWork}</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="spacing" />
						<div className="row">
							<div className="col-2">&nbsp;</div>
							<div className="col-8">
								<div className="text-left">
									<font color="#e8edc7">
										<b>Quasi Inspirational Concept Video: </b>
									</font>
								</div>
							</div>
							<div className="col-2">&nbsp;</div>
						</div>
						<div className="row">
							<div className="col-2">&nbsp;</div>
							<div className="col-8">
								<div className="fixedsize-video">
									<div className="text-center">
										<ReactPlayer
											url="https://s3-us-west-2.amazonaws.com/baandadev1/IMG_3193.webm"
											className="react-player"
											playing={false}
											controls={true}
											width="100%"
											height="480px"
										/>
									</div>
								</div>
							</div>
							<div className="col-2">&nbsp;</div>
						</div>
						<div className="spacing" />
						<div className="row">
							<div className="col">
								<div className="text-left">
									<font color="#e8edc7">
										<b>Summay - Help us bridge opportunity & talents: </b>
									</font>
									<p>{this.state.summaryNote}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			preview = (
				<div>
					<div className="spaceBelow" />
					<div className="spaceBelow" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<div className="text-center">
              <font color="#eaca96" size="3">
								<b>
									The intent of this presentation is for you to experience the user interface.
									Effectively, on purpose, this is disconnected from database. It will take a while to
									generate content enough to have full experience.
								</b>
                <br /><br />
								<p>
									Please select the editable posting from Post button's drop down (Select Campaign Name to Edit) and then click Preview. That way, you wil experience how the campaign form filled like may be and how it may seem like in preview.{' '}
								</p>
                </font>
							</div>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		}
		return <div>{preview}</div>;
	}
}

export default PreviewFundRaising;
