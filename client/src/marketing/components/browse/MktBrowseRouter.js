import React, { Component } from 'react';

import DefaultMessage from './DefaultMessage';
import CFBrowse from './cfbrowse/CFBrowse';

import './mktbrowse.css';

class MktBrowseRouter extends Component {
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
					<CFBrowse />
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
								<p>You have no information to browse in Message Propagation domain,</p>
								<br />
							</font>
							<font color="yellow" size="3">
								<p>
									<b>Note for UX feedback participants:</b>
								</p>
								<p>
									Your browse will contain information you are interesed in per your posting and you
									will be able to search both intelligenec and participation opportunitites.
								</p>
							</font>
							<br />
							<font color="white" size="2">
								<p align="justify">
									<b>Comming Soon: </b> In the next release of Baanda UX, you will be able to
									visualize the intelligence on message propagation.
								</p>
							</font>

							<font color="lightblue" size="3">
								<p align="justify">
									From the point-of-view of a business, advertisement has the objective of increase
									sales. This is all about making more money, often by creating needs via various
									emotional conduits. After all, scholars are well aware that humans always take
									decision using their feelings. The question that Baanda faces, with reference to its
									mission, is “Why would an individual be interested in marketing?” What will an
									individual market and why would one want to do that? Than comes the question ‘how’.
									This browsing intelligence intends to address individualistic and contextual
									intelligence to attain her/his life needs for increased wellbeing. Please check the
									<b>‘About’</b> section for more.
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
									<b>Intelligent & browsing of Catalogue Service </b> in Baanda start with the question, “Why would anyone want to publish their catalogue in Baanda?” There is two-part answer to this. An individual or a small business, without huge corporate resource that would raise the product or service price and often catering to a local community, may want to use high-efficiency mechanism to take their product/service to their focused and contextual customers. Secondly, an individual may want to know what good or service would best suited to them to enhance their life? This kind of matching is only possible because of Baanda’s understanding of individual of both sides in a market. 
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
									This section will provide intelligene on the efficiency of your communication with your community contextually.
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

export default MktBrowseRouter;
