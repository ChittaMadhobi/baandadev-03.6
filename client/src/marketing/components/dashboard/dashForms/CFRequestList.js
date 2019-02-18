import React, { Component } from 'react';

import Campaign from '../../../../ethereum/campaign';
import web3 from '../../../../ethereum/web3';

import ManageRequest from './ManageRequest';

import '../mktdash.css';
// import { campaignMaster } from '../data/campaignMaster';
import { campaignMaster } from '../../../../sharedData/campaignMaster';

const months_arr = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
class CFRequestList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			requestIndices: [],
			requests: [],
			campAddress: '',
			campHeader: '',
			showRequests: true,
      engage: false,
      engageObj: ''
		};
	}

	handleRequests = (type, data) => {
    // console.log('type:' + type + '  data:' + JSON.stringify(data));
    this.setState({
      engage: true,
      engageObj: data,
      showRequests: false
    })
	};

	componentWillMount() {
		this.getPrepRequests(this.props.campaignid);
	}
	// campaignId is this.props.baandaId - should be passed when invoked
	getPrepRequests = async (campaignId) => {
		let campAddress;
		campaignMaster.forEach((element) => {
			if (campaignId === element.campaignBaandaId) {
				this.setState({
					campAddress: element.campaignAddress,
					campHeader: element.campaignHeader
				});
				campAddress = element.campaignAddress;
			}
		});

		const campaign = Campaign(campAddress);

		const reqArry = await campaign.methods.getReqAddrs().call();
		this.setState({
			requestIndices: reqArry
		});

		// console.log('reqArry:' + reqArry);
		let details;
		let obj = {};
		let arr = [];
		let date, fulldate;

		reqArry.forEach(async (element) => {
			details = await campaign.methods.getRequest(element).call();
			date = new Date(Number(details[1]));
			fulldate = months_arr[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
			obj = {
				reqAddr: element,
				desc: details[0],
				byDay: Number(details[1]),
				byDate: fulldate,
				recipiantC: details[2],
				recipiantF: details[3],
				valueInC: web3.utils.fromWei(details[4], 'ether'),
				// valueInF: (details[5] / 100).toFixed(2)
				// valueInC: details[4],
				valueInF: (details[5] / 100).toFixed(2),
				status: details[6]
			};
			arr.push(obj);
			this.setState({
				requests: arr
			});
		});
	};

	render() {
		// console.log('this.props:' + JSON.stringify(this.props));
		//  console.log('this.state:' + JSON.stringify(this.state));
		let showList, showEngageDetails;
		let keyi = 0;

		if (this.state.showRequests) {
			showList = (
				<div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10 text-center">
							<h6>
								Requests For: <font color="yellow">{this.state.campHeader}</font>
							</h6>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="for-top-space" />
					<hr className="campaign-divider" />
					{this.state.requests.map((req) => {
						return (
							<div key={keyi++}>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-10 text-left">
										Req. Name: <font color="#edd9bd">{req.desc}</font>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-7 text-left">
										Request: <font color="#edd9bd">{req.reqAddr}</font>
									</div>
									<div className="col-3 text-left">
										Approve By: <font color="#edd9bd">{req.byDate}</font>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-7 text-left">
										Recipiant Eth: <font color="#edd9bd">{req.recipiantC}</font>
									</div>
									<div className="col-3 text-left">
										BaandaId: <font color="#edd9bd">{req.recipiantF}</font>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-6 text-left">
										Value Crypto: <font color="#edd9bd">{req.valueInC} Eth</font>
									</div>
									<div className="col-4 text-left">
										Value Fiat: <font color="#edd9bd">{req.valueInF} $</font>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
								<div className="row">
									<div className="col-1">&nbsp;</div>
									<div className="col-10 text-right">
										<button
											className="btn-ReqParticipate"
											onClick={() => {
												this.handleRequests('Detail', req);
											}}
										>
											<b>Engage</b>&nbsp;
											<div className="float-right">
												<i className="fas fa-door-open" />
											</div>
										</button>
									</div>
									<div className="col-1">&nbsp;</div>
								</div>
								<hr className="campaign-divider" />
							</div>
						);
					})};
				</div>
			);
		} else {
			showList = null;
		}

    if (this.state.engage) {
      console.log('this.props.campaignid:' + this.props.campaignid);
      showEngageDetails = (
        <div>
          <ManageRequest request={this.state.engageObj} campaignId={this.props.campaignid}  />
        </div>
      )
    } else {
      showEngageDetails = null;
    }

		let output;
		if (this.state.showRequests) {
			output = showList;
		} else if (this.state.engage) {
			output = showEngageDetails;
		} else {
			output = null;
		}

		return <div>{output}</div>;
	}
}

export default CFRequestList;
