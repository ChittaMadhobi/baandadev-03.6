import React, { Component } from 'react';

import TextFieldGroup from '../../../../utils/TextFieldGroup';
import Select from 'react-select';
import { RadioGroup, Radio } from 'react-radio-group';

import { intent } from '../data/intent';

import '../post.css';

class MessagePropagation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			howtoSetup: false,
			formEntry: true,
			preview: false,

			campaignName: '',
			editCampaignName: '',
			campaignApproach: '',
			intent: '',

			errors: []
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleCampaignApproach = (value) => {
		this.setState({
			campaignApproach: value
		});
	};

	handleEditCampaign = (value, { action }) => {
		this.setState({
			editCampaignName: value
		});
		// this.setCampaignEditValues(value);
	};

	handleIntent = (value, { action }) => {
		this.setState({
			intent: value
		});
		// this.setCampaignEditValues(value);
	};

	selectOperation = (value) => {
		if (value === 'formEntry') {
			this.setState({
				howtoSetup: false,
				formEntry: true,
				preview: false
			});
		} else if (value === 'preview') {
			this.setState({
				howtoSetup: false,
				formEntry: false,
				preview: true
			});
		} else if (value === 'howtoSetup') {
			this.setState({
				howtoSetup: !this.state.howtoSetup,
				formEntry: false,
				preview: false
			});
		}
	};

	render() {
		// console.log('approach:' + JSON.stringify(this.state));

		const { errors } = this.state;
		let option;

		let setupSteps;
		if (this.state.howtoSetup) {
			setupSteps = (
				<div>
					<div className="row">
						<div className="how-to">
							<div className="text-left">
								<p>Posting of message campaign is divided into two main categories:</p>
								<ul>
									<li>
										Seting up for propagating via Ripple Mechanism
									</li>
									<li>
										Enable usage of broadcasting your message via partner conduits such as FB, Google and likes.
									</li>
								</ul>
								<p>
									For either way, you start with defining a campaign name for reference to work
									through authoring, creation of the pitch and message, and campaign propagation intent. Every aspect of on-going process would be driven based on the intent you define.
								</p>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			setupSteps = null;
		}

		let campaignForm;
		campaignForm = (
			<div className="text-coloring">
				<div className="spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-5">
						<TextFieldGroup
							name="campaignName"
							placeholder="Enter crowdfund campaign name"
							value={this.state.campaignName}
							onChange={this.onChange}
							error={errors.campaignName}
							info="Enter Messaging campaign name for reference"
						/>
					</div>
					<div className="col-5">
						<font color="blue">
							<Select
								value={this.state.editCampaignName}
								//isMulti
								autosize={false}
								options={option}
								className="basic-multi-select"
								classNamePrefix="select"
								onChange={this.handleEditCampaign}
								maxMenuHeight={150}
								isSearchable={true}
								placeholder="Select campaign name to edit"
							/>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<RadioGroup
							name="campaignApproach"
							selectedValue={this.state.campaignApproach}
							onChange={this.handleCampaignApproach}
						>
							{' '}
							<label>
								<h6>Messaging Approach is &nbsp;&nbsp;</h6>
							</label>
							<label>
								<Radio value="ripple" />
								&nbsp;Intelligent-Ripple &nbsp;&nbsp;
							</label>
							<label>
								<Radio value="broadcast" />
								&nbsp;Broadcast-Traditional &nbsp;&nbsp;
							</label>
						</RadioGroup>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-5">
						<font color="blue">
							<Select
								value={this.state.intent}
								//isMulti
								autosize={false}
								options={intent}
								className="basic-multi-select"
								classNamePrefix="select"
								onChange={this.handleIntent}
								maxMenuHeight={150}
								isSearchable={true}
								placeholder="Select your intent"
							/>
						</font>
					</div>
					<div className="col-5">
						<font color="lightyellow" size="2">
							<p align="justify">
								A proper match of intent and approach will maximize the campaign's efficiency.
							</p>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
			</div>
		);

		let ripplePanel;
		if (this.state.campaignApproach === 'ripple') {
			ripplePanel = (
				<div>
					<div className="spacing" />
					<div className="text-center">
						<h6>WIP - work in progress</h6>
					</div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<font color="#aff2a9" size="2">
								<p align="justify">
									<b>Intelligent-Ripple</b> presents your messaging contextually, per your intent, to
									attain maximum efficiency of the intent-entropy (effectiveness). This process
									includes studying sentiment of the recipients, enabling recipiants to contribute
									towards your cost and/or personalize as the message ripples. Baanda will study the
									intent-&-effect entropy, graph propagation pathway, to learn and help you and others
									with similarities to maximize efficiency towards attaining your intent. This also
									reduces irritation of blast and on-the-face prevailing advertisement techniques.
								</p>
								<p align="justify">
									The ripple posting will enable you to form different groups from your social circle,
									work-circle, co-living circles, aquaintences, and ask Baanda to search for others
									who may be looking for someone like you with your intent using AI. It will let you
									customize you message and propose conduit of propagation (e.g. small text-msg,
									audio, video, gamey etc.) and deliver based on context and recipiant.
								</p>
							</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			ripplePanel = null;
		}

		let broadcastPanel;
		if (this.state.campaignApproach === 'broadcast') {
			broadcastPanel = (
				<div>
					<div className="spacing" />
					<div className="text-center">
						<h6>WIP - work in progress</h6>
					</div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<font color="#f1c6a8" size="2">
								<p align="justify">
									<b>Broadcast - Prevalent</b> presents your in traditional way in partnership with
									other (partner) conduits like FB, Google, and others. There will be additional costs
									associated based on the cost of the conduit you would like to use. This process
									reaches a huge crowd but may have relatively less effectiveness eventually when
									compared to Ripple Propagation, particularly when it comes to individualistic and
									small life's endeavors.
								</p>
								<p align="justify">
									In Broadcast, you would be assisted to create your message that would cater to most.
									You may want to refer to advertisement techniques to mass influence. Baanda will
									endeavor to track this propagation intellgence as much as possible but will be
									depndent on intel available from partner conduits and your expenditure capacity.
								</p>
							</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			broadcastPanel = null;
		}

		let output;
		if (this.state.formEntry) {
			if (this.state.campaignApproach === 'ripple') {
				output = (
					<div>
						<div>{campaignForm}</div>
						<div>{ripplePanel}</div>
					</div>
				);
			} else if (this.state.campaignApproach === 'broadcast') {
				output = (
					<div>
						<div>{campaignForm}</div>
						<div>{broadcastPanel}</div>
					</div>
				);
			} else {
				output = campaignForm;
			}
		} else if (this.state.preview) {
      output = (
        <div>
          <div className="spacing" />
					<div className="text-center">
						<h6>WIP - work in progress</h6>
					</div>
					<div className="row">
						<div className="col-2">&nbsp;</div>
						<div className="col-8">
							<font color="#f1c6a8" size="2">
								<p align="justify">
									Preview will be available after the completion of messaging campaign posting is complete. Baanda workers are working tirelessly to complete. Want to join in the movement?
								</p>
							</font>
						</div>
						<div className="col-2">&nbsp;</div>
					</div>
        </div>
      )
    } else {
      output = setupSteps;
    }

		return (
			<div>
				<div>
					<div className="text-center">
						<div className="header-margin">
							<div className="row">
								<div className="col-md-4">
									<div className="float-center">
										<font color="#e0d7bc">
											<h4>Messaging Campaign</h4>
										</font>
									</div>
								</div>
								<div className="col-md-8">
									<div className="float-center">
										<button
											className="btn btn-save-ideation"
											onClick={() => {
												this.selectOperation('howtoSetup');
											}}
										>
											How-to-steps
											<div className="float-right">
												<i className="fas fa-toggle-off" />
											</div>
										</button>{' '}
										<button
											className="btn btn-target-feedback"
											onClick={() => {
												this.selectOperation('formEntry');
											}}
										>
											Post
											<div className="float-right">
												<i className="fas fa-chalkboard-teacher" />
											</div>
										</button>{' '}
										<button
											className="btn btn-target-feedback"
											onClick={() => {
												this.selectOperation('preview');
											}}
										>
											Preview
											<div className="float-right">
												<i className="fas fa-chess-bishop" />
											</div>
										</button>{' '}
									</div>
								</div>
							</div>
						</div>
						{/* </font> */}
						<div className="posts-panel">
							{output}
							<div className="spaceBelow" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MessagePropagation;
