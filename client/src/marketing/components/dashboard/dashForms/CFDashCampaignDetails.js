import React, { Component } from 'react';

// import { campaignMaster } from '../data/campaignMaster';

import { campaignMaster } from '../../../../sharedData/campaignMaster';

class CFDashCampaignDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			campaignBaandaId: '',
			campaignName: '',
			campaignHeader: '',
			controlDomain: '',
			campaignAddress: '',
			campaignMgrAddr: '',
			description: '',
			intention: '',
			purpose: '',
			startDate: '',
			endDate: '',
			targetValueInFiat: '',
			currencyType: '',
			contributionType: {
				financial: false,
				material: false,
				service: false
			},
			policy: {
				governance: '',
				costing: '',
				returnPolicy: '',
				monitoring: ''
			},
			location: {
				address1: '',
				address2: '',
				city: '',
				zip: '',
				virtual: ''
			},
			summary: '',
			stateOfEndeavor: '',
			minAmount: '',
			requestStatus: 'Contract Raised',
			requestOrigin: ''
		};
	}

	componentDidMount() {
		campaignMaster.forEach((el) => {
			if (el.campaignBaandaId === this.props.campaignid) {
				this.setState({
					campaignBaandaId: el.campaignBaandaId,
					campaignName: el.campaignName,
					campaignHeader: el.campaignHeader,
					controlDomain: el.controlDomain,
					campaignAddress: el.campaignAddress,
					campaignMgrAddr: el.campaignMgrAddr,
					description: el.description,
					intention: el.intension,
					purpose: el.purpose,
					startDate: el.startDate,
					endDate: el.endDate,
					targetValueInFiat: el.targetValueInFiat,
					currencyType: el.currencyType,
					contributionType: {
						financial: el.contributionType.financial,
						material: el.contributionType.material,
						service: el.contributionType.service
					},
					policy: {
						governance: el.policy.governance,
						costing: el.policy.costing,
						returnPolicy: el.policy.returnPolicy,
						monitoring: el.policy.monitoring
					},
					location: {
						address1: el.location.address1,
						address2: el.location.address2,
						city: el.location.city,
						zip: el.location.zip,
						virtual: el.location.virtual
					},
					summary: el.summary,
					stateOfEndeavor: el.stateOfEndeavor,
					minAmount: el.minAmount,
					requestStatus: 'Contract Created Successfully',
					requestOrigin: el.requestOrigin
				});
			}
		});
	}

	render() {
		// console.log('this.state: ' + JSON.stringify(this.state));
		// console.log('this.props: ' + JSON.stringify(this.props));

		return (
			<div className="campaignDetails">
				<div className="row">
					<div className="col text-center">
						<h4>Campaign Details</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-6 text-left">
						Id: <font color="lightyellow">{this.state.campaignBaandaId}</font>
					</div>
					<div className="col-6 text-left">
						Name: <font color="lightyellow">{this.state.campaignName}</font>
					</div>
				</div>
				<div className="row">
					<div className="col text-left">
						Caption:&nbsp; <font color="lightyellow">{this.state.campaignHeader}</font>
					</div>
				</div>
				<div className="row">
					<div className="col-4 text-left">
						Control Tech:&nbsp;<font color="lightyellow">{this.state.controlDomain}</font>
					</div>
					<div className="col-8 text-left">
						Eth Address: &nbsp;<font color="lightyellow">{this.state.campaignAddress}</font>
					</div>
				</div>

				<div className="row">
					<div className="col-7 text-left">
						Mgr Addr:&nbsp;<font color="lightyellow">{this.state.campaignMgrAddr}</font>
					</div>
					<div className="col-5 text-left">
						Purpose: &nbsp;<font color="lightyellow">{this.state.purpose}</font>
					</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col text-left">
						Description :&nbsp; <font color="lightyellow">{this.state.description}</font>
					</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col text-left">
						Intent :&nbsp; <font color="lightyellow">{this.state.intention}</font>
					</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col-4 text-left">
						Starts on:&nbsp;<font color="lightyellow">{this.state.startDate}</font>
					</div>
					<div className="col-4 text-left">
						Ends on: &nbsp;<font color="lightyellow">{this.state.endDate}</font>
					</div>
					<div className="col-4 text-left">
						Target: &nbsp;<font color="lightyellow">
							{this.state.targetValueInFiat.toLocaleString(undefined, { minimumFractionDigits: 2 })} $
						</font>
					</div>
				</div>
				<div className="row">
					<div className="col-5 text-left">
						Contribution Types>> &nbsp; Financial:&nbsp;<font color="lightyellow">
							{this.state.contributionType.financial}
						</font>{' '}
						&nbsp;
					</div>
					<div className="col-4 text-left">
						Material & Goods: &nbsp;<font color="lightyellow">
							{this.state.contributionType.material}
						</font>{' '}
						&nbsp;
					</div>
					<div className="col-3 text-left">
						Services: &nbsp;<font color="lightyellow">{this.state.contributionType.service} </font>
					</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col text-left">
						Governance:&nbsp;<font color="lightyellow">{this.state.policy.governance}</font> &nbsp;
					</div>
				</div>
				<div className="row">
					<div className="col text-left">
						Costing:&nbsp;<font color="lightyellow">{this.state.policy.costing}</font> &nbsp;
					</div>
				</div>
				<div className="row">
					<div className="col text-left">
						Return Policy:&nbsp;<font color="lightyellow">{this.state.policy.returnPolicy}</font> &nbsp;
					</div>
				</div>
				<div className="row">
					<div className="col text-left">
						Monitoring:&nbsp;<font color="lightyellow">{this.state.policy.monitoring}</font> &nbsp;
					</div>
				</div>
				<div className="row">
					<div className="col text-left">
						At :&nbsp;<font color="lightyellow">
							{this.state.location.address1}&nbsp;{this.state.location.address2}&nbsp;{this.state.location.city},&nbsp;{' '}
							{this.state.location.zip}
						</font>{' '}
						&nbsp;
					</div>
				</div>
				<div className="row-spacing" />
				<div className="row">
					<div className="col text-left">
						Summary:&nbsp;<font color="lightyellow">{this.state.summary}</font> &nbsp;
					</div>
				</div>
			</div>
		);
	}
}

export default CFDashCampaignDetails;
