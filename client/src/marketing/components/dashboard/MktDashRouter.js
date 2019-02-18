import React, { Component } from 'react';

import DefaultMessage from './DefaultMessage';
import CFDashboard from './dashForms/CFDashboard';

import './mktdash.css';

class MktDashRouter extends Component {
	render() {
		const { selectValue } = this.props;
		//console.log('selectValue:' + selectValue);
		let output;
		if (selectValue === 'none') {
			output = (
				<div>
					<DefaultMessage />
				</div>
			);
		}

		if (selectValue === 'crowdsource') {
			output = (
				<div>
					<CFDashboard />
				</div>
			);
		}

		if (selectValue === 'msgPropagation') {
			output = (
				<div>
					<div className="for-bottom-space" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10 text-center">
							<font color="orange" size="3">
								<p>You have no campaign-propagation related operations at this point.</p>
								<br />
							</font>
							<font color="yellow" size="3">
								<p>
									<b>Note for UX feedback participants:</b>
								</p>
								<p>
									Your dashboard will contain only the list of active operations in the Campaign
									Propagations domain for this selection.
								</p>
							</font>
							<br />
							<font color="white" size="2">
								<p align="justify">
									<b>Comming Soon: </b> In the next release of Baanda UX, Angelo and his group will
									use Baanda to propagate their Art-Gallery using Baanda's Ripple Propagation
									mechanism.
								</p>
							</font>

							<font color="lightblue" size="3">
								<p align="justify">
									<b>Ripple Propagation: </b> Present trend of marketing is to broadcast to many with
									the philosophy "Put it front of people in a generalized enticing way. If people like
									it they will follow/buy your idea." This mass broadcast is very inefficient with
									reference to amount of energy and expense, not to mention, often this is repetitive
									and irritative. However, mass broadcast is used for it is better than nothing for
									marketing. <b>Ripple Propagation</b> address these inefficiencies using the outcomes
									of Causal Inference and quasi Strong-AI techniques. Please check the <b>About</b>{' '}
									section for more on Ripple Propagation.
								</p>
							</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		}

		if (selectValue === 'catalogue') {
			output = (
				<div>
					<div className="for-bottom-space" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10 text-center">
							<font color="yellow" size="3">
								<p>You have no service or goods catalogue operations at this point.</p>
								<br />
								<p>
									<b>Note for UX feedback participants:</b>
								</p>
								<p>
									Your dashboard will contain only the list of active operations if you are a business
									owner and published your cataloge for consumption by Baanda user community.
								</p>
							</font>
							<font color="white" size="2">
								<p align="justify">
									<b>Comming Soon: </b> In the next release of Baanda UX, Angelo and his group will
									use Baanda catalogue to list their art-items for sale.
								</p>
							</font>

							<font color="lightblue" size="3">
								<p align="justify">
									<b>Intelligent Catalogue Service: </b> Baanda will let individuals or entities to
									publish their catalogue in Baanda to sell their goods and services. Baanda's would
									be able to browse your catalgue but no product, service and/or organization would be
									marketed. If an individual needs, and/or wish to purchase something then Baanda will
									propose, based on the available published catalogue, high-efficiency matches of the
									individual, marchendise, and merchant. Please check up about Baanda Catalogue
									services in the <b>About</b> section.
								</p>
							</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		}

		if (selectValue === 'message') {
			output = (
				<div>
					<div className="for-bottom-space" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10 text-center">
							<font color="yellow" size="3">
								<p>You have no service messages for market space at this point.</p>
								<br />
								<br />
								<p>
									<b>Note for UX feedback participants:</b>
								</p>
								<p>
									This selection will list you all your messages for the market space. It will be very
									similar to how Serice Xchange messaging section. It enables you to send / receive
									messages via text, audio, vedio etc. including exchange of DCCS contextually.
								</p>
							</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		}
		return (
			<div className="col-lg-12 col-md-8 col-sm-6">
				<div>{output}</div>
			</div>
		);
	}
}

export default MktDashRouter;
