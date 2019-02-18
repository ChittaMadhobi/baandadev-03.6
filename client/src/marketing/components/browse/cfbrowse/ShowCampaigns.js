import React, { Component } from 'react';

import factory from '../../../../ethereum/factory';
import './agree.css';

class ShowCampaigns extends Component {
	constructor(props) {
		super(props);

		this.state = {
			campaignsAddr: [],
			campaigns: [],
			showCampaign: true,
			name: ''
		};
	}

	async componentWillMount() {
		//async componentDidMount() {
		const campaigns = await factory.methods.getCreatedCampList().call();
		// console.log('---------------');
		// console.log(campaigns);
		// console.log('no of  campaigns:' + campaigns.length);
		this.setState({
			campaignsAddr: campaigns
		});
		let arr = [];
		let obj = {};

		if (!this.state.campaignsAddr) {
			this.setState({
				showCampaign: false
			});
		} else {
			let details;
			this.state.campaignsAddr.forEach(async (element) => {
				details = await factory.methods.getCreatedCampDetails(element).call();
				obj = {
					mrgName: details[0],
					campaignName: details[1],
					campaignAddress: details[2],
					mgrAddress: details[3]
				};
				arr.push(obj);
				this.setState({
					campaigns: arr
				});
			});
		}
	}

	handleCampaignDetails = (msg, addr) => {
		// console.log('details:' + msg + ' | ' + JSON.stringify(addr));
		alert(
			'Hello ' +
				addr.mrgName +
				', ... If you have clicked on your name as manager in the list then you are seeing your registered name. As discussed before, this UX feedback is disconnected from database and intelligences to focus on the functionalities thru the eyes of Angelo Michael. In production, this will show you all the details. If you want to participate in any of the campaign, when you click on Participate (contribute, invest, propagate etc.), that will appear in your dashboard. You would be viewing campaign ' +
				addr.campaignName +
				' deployed at address ' +
				addr.campaignAddress +
				' You had clicked on button: ' +
				msg
		);
	};

	render() {
		// console.log('this.props:' + JSON.stringify(this.props));

		let campaignList;
		let i = 0;

		if (this.state.showCampaign) {
			// console.log('this.state.campaigns:' + JSON.stringify(this.state.campaigns));
			campaignList = (
				<div>
					<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-left">
						<font color="yellow" size="2">
							<p align="justify">The following list shows the list of campaigns originated from the same contract-request on repeat generation in campaign factory you all have been generating. In production, there would only one per campaign but many from many campaingns, originated by many from different corners of the world, filtered by your search. 
							</p>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
					</div>
					<hr className="campaign-divider" />
					{this.state.campaigns.map((addr) => {
						return (
							<div key={i++}>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-10">
										<div className="row">
											<div className="col-5">
												<font color="#e5dec9">Campaign:</font>
												<b>&nbsp;&nbsp;{addr.campaignName}</b>
											</div>
											<div className="col-7">
												<font color="#e5dec9">Address:</font>&nbsp;&nbsp;{addr.campaignAddress}
											</div>
										</div>
										<div className="row">
											<div className="col-5">
												<font color="#e5dec9">Manager:</font>&nbsp;&nbsp;{addr.mrgName}
											</div>
											<div className="col-7">
												<font color="#e5dec9">Address:</font>&nbsp;&nbsp;{addr.mgrAddress}
											</div>
										</div>
										<div className="row">
											<div className="col">
												<div className="float-right">
													<button
														className="btn-campaignDetails"
														onClick={() => {
															this.handleCampaignDetails('Detail', addr);
														}}
													>
														Details&nbsp;
													</button>
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
													<button
														className="btn-campaignParticipate"
														onClick={() => {
															this.handleCampaignDetails('Participate', addr);
														}}
													>
														Participate&nbsp;
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
								<hr className="campaign-divider" />
							</div>
						);
					})}
				</div>
			);
		} else {
			campaignList = (
				<div>
					<h4>Campaign list did not appear</h4>
				</div>
			);
		}

		let output = campaignList;

		return (

			<div>
				<div className="text-center">
					<div className="header-margin">
						<div className="row">
							<div className="col">
								<div className="float-center">
									<font color="#e0d7bc">
										<h4>Campaign List</h4>
									</font>
								</div>
							</div>

						</div>
					</div>

					<div>
						{output}
					</div>
					<div className="spaceBelowBuf" />
				</div>
			</div>
		);
	}
}

export default ShowCampaigns;
