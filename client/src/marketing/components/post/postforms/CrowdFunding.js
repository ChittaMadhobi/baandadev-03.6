import React, { Component } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import TextFieldGroup from '../../../../utils/TextFieldGroup';
import TextAreaFieldGroup from '../../../../utils/TextAreaFieldGroup';
import { RadioGroup, Radio } from 'react-radio-group';

import '../post.css';

import PreviewFundRaising from './PreviewFundRaising';

import { crowdFundEdit } from '../data/crowdFundEdit';
import { currency } from '../data/currency';
import { country } from '../data/country';
import { fundraisingPurpose } from '../data/fundraisingPurpose';
import { previewFunding } from '../data/previewFunding';
  
class CrowdFunding extends Component {
	constructor(props) {
		super(props);

		this.state = {
			howtoSetup: false,
			formEntry: true,
			preview: false,

			campaignName: '',
			editCampaignName: '',
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
			approverMinCurrencyType: '',
			reqMgrName: '',
			locationCountry: '',
			returnPercent: 7,
			donationOver: 0,
			address1: '',
			address2: '',
			zip: '',
			inspectionOver: 0,

			// All Check boxes below
			contributionFinancial: false,
			contributionFinancialcheck: '',
			contributionGoods: false,
			contributionGoodscheck: '',
			contributionServices: false,
			contributionServicescheck: '',
			returnGoods: false,
			returnGoodscheck: '',
			returnFunds: false,
			returnFundscheck: '',
			accountTransparency: true,
			accountTransparencycheck: '',
			iotdevice: false,
			iotdevicecheck: '',
			inpersonInspector: false,
			inpersonInspectorcheck: '',
			proofOfWork: false,
			proofOfWorkcheck: '',

			//
			vaultedPercent: 0,
			totalTokens: 0,
			tagCurrencyType: '',

			bizApproach: '',
			tokenName: '',
			tokenAbbriviate: '',
			bizWebSiteUrl: '',

			summaryNote: '',

			errors: []
		};

		this.onChange = this.onChange.bind(this);
	}

	onRadioChange = (value) => {
		//console.log('value:' + value);
		if (value === 'iotdevice') {
			this.setState({
				iotdevice: !this.state.iotdevice
			});
			if (this.state.iotdevicecheck === 'checked') {
				this.setState({
					iotdevicecheck: ''
				});
			} else {
				this.setState({
					iotdevicecheck: 'checked'
				});
			}
		}
		if (value === 'inpersonInspector') {
			this.setState({
				inpersonInspector: !this.state.inpersonInspector
			});
			if (this.state.inpersonInspectorcheck === 'checked') {
				this.setState({
					inpersonInspectorcheck: ''
				});
			} else {
				this.setState({
					inpersonInspectorcheck: 'checked'
				});
			}
		}
		if (value === 'proofOfWork') {
			this.setState({
				proofOfWork: !this.state.proofOfWork
			});
			if (this.state.proofOfWorkcheck === 'checked') {
				this.setState({
					proofOfWorkcheck: ''
				});
			} else {
				this.setState({
					proofOfWorkcheck: 'checked'
				});
			}
		}
		if (value === 'returnGoods') {
			this.setState({
				returnGoods: !this.state.returnGoods
			});
			if (this.state.returnGoodscheck === 'checked') {
				this.setState({
					returnGoodscheck: ''
				});
			} else {
				this.setState({
					returnGoodscheck: 'checked'
				});
			}
		}
		if (value === 'returnFunds') {
			this.setState({
				returnFunds: !this.state.returnFunds
			});
			if (this.state.returnFundscheck === 'checked') {
				this.setState({
					returnFundscheck: ''
				});
			} else {
				this.setState({
					returnFundscheck: 'checked'
				});
			}
		}
		if (value === 'accountTransparency') {
			this.setState({
				accountTransparency: !this.state.accountTransparency
			});
			if (this.state.accountTransparencycheck === 'checked') {
				this.setState({
					accountTransparencycheck: ''
				});
			} else {
				this.setState({
					accountTransparencycheck: 'checked'
				});
			}
    }
    if (value === 'contributionFinancial') {
			this.setState({
				contributionFinancial: !this.state.contributionFinancial
			});
			if (this.state.contributionFinancialcheck === 'checked') {
				this.setState({
					contributionFinancialcheck: ''
				});
			} else {
				this.setState({
					contributionFinancialcheck: 'checked'
				});
			}
    }
    if (value === 'contributionGoods') {
			this.setState({
				contributionGoods: !this.state.contributionGoods
			});
			if (this.state.contributionGoodscheck === 'checked') {
				this.setState({
					contributionGoodscheck: ''
				});
			} else {
				this.setState({
					contributionGoodscheck: 'checked'
				});
			}
    }
    if (value === 'contributionServices') {
			this.setState({
				contributionServices: !this.state.contributionServices
			});
			if (this.state.contributionServicescheck === 'checked') {
				this.setState({
					contributionServicescheck: ''
				});
			} else {
				this.setState({
					contributionServicescheck: 'checked'
				});
			}
    }
    
	};

	handleDiscard = () => {
		alert(
			'CAUTION: On click, in production, you will get a warning. If you continue ... your campaing will be removed or deleted.'
		);
	};

	handleSaveWIP = () => {
		alert(
			'Note: In production, onClick your work on campaign thus far will be saved and the campaign-name will appear on drop-down for you to continue working.'
		);
	};

	handleSaveDone = () => {
		alert(
			'Once this button is clicked, your campaign related agreement-creation for contribution and participation would be listed in the Agreement section from Baanda Lobby. Only after successful completion of the agreement(s) will the campaign will be ready to be propagated.'
		);
	};

	handleTagCurrencySelect = (value) => {
		this.setState({
			tagCurrencyType: value
		});
	};

	handleBizApproach = (value) => {
		this.setState({
			bizApproach: value
		});
	};

	handleEditCampaign = (value, { action }) => {
		this.setState({
			editCampaignName: value
		});
		this.setCampaignEditValues(value);
	};

	handleSelectCountry = (value, { action }) => {
		this.setState({
			locationCountry: value
		});
	};

	handleCurrencySelect = (value, { action }) => {
		if (value === 'targetAmount') {
			this.setState({
				targetAmountCurrencyType: value
			});
		}
		if (value === 'tagCurrencyType') {
			this.setState({
				tagCurrencyType: value
			});
		}
	};
	handlePurposeType = (value, { action }) => {
		//console.log('purpose type value:' + JSON.stringify(value));
		this.setState({
			purposeType: value
		});
	};

	handleStartDate = (date) => {
		this.setState({
			startDate: date
		});
	};

	handleEndDate = (date) => {
		this.setState({
			endDate: date
		});
	};

	setCampaignEditValues = (campaignName) => {
		//console.log('got here : ' + campaignName.label);
		let ex = previewFunding[0];
		this.setState({
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
      returnPercent: ex.returnPercent,
      donationOver: ex.donationOver,
      inspectionOver: ex.inspectionOver,
      contributionFinancial: true,
			contributionFinancialcheck: ex.contributionFinancialcheck,
			contributionGoods: true,
			contributionGoodscheck: ex.contributionGoodscheck,
			contributionServices: true,
			contributionServicescheck: ex.contributionServicescheck,
			returnGoods: true,
			returnGoodscheck: ex.returnGoodscheck,
			returnFunds: true,
			returnFundscheck: ex.returnFundcheck,
			accountTransparency: true,
			accountTransparencycheck: ex.accountTransparencycheck,
			iotdevice: true,
			iotdevicecheck: ex.iotdevicecheck,
			inpersonInspector: true,
			inpersonInspectorcheck: ex.inpersonInspectorcheck,
			proofOfWork: true,
      proofOfWorkcheck: ex.proofOfWorkcheck,
      summaryNote: ex.summaryNote
		});
	};

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

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
		const { errors } = this.state;
		//let option;
		//console.log('this.state.bizApproach:' + this.state.bizApproach);
		//console.log('this.state.iotdevice:' + this.state.iotdevice + ' checked:' + this.state.iotdevicecheck);

		let setupSteps;
		if (this.state.howtoSetup) {
			setupSteps = (
				<div>
					<div className="row">
						<div className="how-to">
							<div className="text-left">
								<p>Posting is divided into two main parts:</p>
								<ul>
									<li>
										1. Request for crowdfunding, contribution for an inspiring endeavor for
										artistic, scientific and communal endeavors that has benevolent goal.
									</li>
									<li>
										2. Requesting funding, contribution, and/or investment for for-profit business.
									</li>
								</ul>
								<p>
									For either way, you start with defining a campaign name for reference to work
									through authoring, creation of contracts, and campaign propagation
								</p>

								<p align="justify">
									First section’s form entry is self-explanatory. Each field describes what kind of
									information it needs. There are many crowdfund raising sites. There are
									philanthropic minded people around the world. So is the prevalence of people who are
									maleficent and would like to scam. There is a section down below that kind of
									creates checks against malevolent and Baanda wishes to learn from events its users
									encounter or perpetuate to create further checks and opportunities
								</p>
								<p align="justify">
									In the business side, one can opt for fund raising via investments. Investor would
									be interested if you show the profit opportunities, risks, benevolence nature of
									your endeavor etc. The form will take you through step-by-step and further
									assistance is available in the About section of MarketSpace.{' '}
								</p>
								<p align="justify">
									There is a Co-op P2P NG-Fintech radio-button in business for profit investment
									section. You need to be particularly careful about details if you opt for this.
									While this has tremendous advantages of distributed economy among peers (p2p or
									peer-to-peer) flat organizational governance with NG (next generation) blockchain
									based distributed financial model, it is also in infantile stage. You should take
									help of white-papers on this on Baanda website; do some of your own mathematical
									calculations; and select that only if you aspire for a balanced socio-economy of
									tomorrow
								</p>
								<p align="justify">
									Baanda site will have increasingly details step-by-step process for setting this up.
									Baanda also intends to learn from the outcome and believes that together humanity
									will step into a newer socio-economy that is neither socialistic or capitalistic in
									nature.{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			setupSteps = null;
		} 

		let getAddress;
		if (this.state.locationCountry.label === 'USA') {
			getAddress = (
				<div>
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-4">
							<TextFieldGroup
								name="address1"
								placeholder="Enter address 1 ..."
								value={this.state.address1}
								onChange={this.onChange}
								error={errors.address1}
								info="Address "
							/>
						</div>
						<div className="col-4">
							<TextFieldGroup
								name="address2"
								placeholder="Apartment, suits, floors etc."
								value={this.state.address2}
								onChange={this.onChange}
								error={errors.address2}
								info="Apartment, suits, floors etc."
							/>
						</div>
						<div className="col-2">
							<TextFieldGroup
								name="zip"
								placeholder="Zip Code"
								value={this.state.zip}
								onChange={this.onChange}
								error={errors.zip}
								info="Zip Code"
							/>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			getAddress = null;
		}

		let ngDistributedModel;
		if (this.state.bizApproach === 'Co-op P2P NG-FinTech') {
			ngDistributedModel = (
				<div>
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<p className="text-center">
								<font color="#76b262">
									----------------------Start Co-op P2P NG-FinTech setup --------------------
								</font>
							</p>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-4">
							<div className="float-left"> Proposed transaction-token name is </div>
						</div>
						<div className="col-3">
							<TextFieldGroup
								name="tokenName"
								placeholder="Token Name"
								value={this.state.tokenName}
								onChange={this.onChange}
								error={errors.tokenName}
								info="Enter a token name"
							/>
						</div>
						<div className="col-2">
							<div className="float-left">Abbriviated as</div>
						</div>
						<div className="col-1">
							<TextFieldGroup
								name="tokenAbbriviate"
								placeholder=""
								value={this.state.tokenAbbriviate}
								onChange={this.onChange}
								error={errors.tokenAbbriviate}
								info="XXX"
							/>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<div className="float-left">
								<input
									name="totalTokens"
									value={this.state.totalTokens}
									type="number"
									// min="0"
									// max="15"
									title="Format: 10 digits"
									onChange={this.onChange}
								/>{' '}
								will be total nunmber of tokens for the life of the endeavor(1 billion max).
							</div>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<div className="float-left">
								<input
									name="vaultedPercent"
									value={this.state.vaultedPercent}
									type="number"
									min="0"
									max="15"
									title="Format: 2 digits"
									onChange={this.onChange}
								/>{' '}
								% of the total tokens would be in vault, to be released per plan periodically.
							</div>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-3">
							<div className="float-left">One {this.state.tokenAbbriviate} token is tagged to &nbsp;</div>
						</div>
						<div className="col-2">
							<div className="float-left" />
							<input
								name="taggedUnit"
								value={this.state.taggedUnit}
								type="number"
								min="0"
								max="15"
								title="Format: 2 digits"
								onChange={this.onChange}
							/>{' '}
							<small className="form-text">Unit</small>
						</div>
						<div className="col-2">
							<font color="blue">
								<Select
									value={this.state.tagCurrencyType}
									//isMulti
									autosize={false}
									options={currency}
									className="basic-multi-select"
									classNamePrefix="select"
									onChange={(value) => this.handleCurrencySelect('tagCurrencyType')}
									maxMenuHeight={100}
									//isSearchable={true}
									placeholder="Currency"
								/>
							</font>
						</div>
						<div className="col-2">* check policy.</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<div className="text-left">
								<font color="#d18585" size="3">
									<b>CAUTION:&nbsp;</b>
									This&nbsp;<b>
										<font color="lightyellow">{this.state.tokenAbbriviate}</font>
									</b>&nbsp;token is{' '}
									<b>
										<u>NOT</u>
									</b>{' '}
									an ICO and/or cryptocurrency. There are similarities, particularly with the use of
									underlying technology dependency on blockchain. You are the manager posting this
									fundraising campaign. Please study scholarly article on this area (available on the
									Baanda website whitepapers). Do your own calculations; ponder on diverse what-if
									scenarios etc. Then compose your own modas-oparandi to clarify 'this' in context to
									your endeavor for now and for the future. This being a new frontier, expect all
									kinds of questions from contributors. Be honest and be cognizant there is evil in
									and among us. Observe patterns and nuances of early ICO calamity and fraudulant
									activities specially around cryptocurrency. Plan on giving as you ask. If unclear,
									DO NOT follow this path. Reach out for Baanda help (if you need beyound what is
									available on the site). Contributors and participants will be able to review and
									provide feedback that will be reflected in all your future endeavors.
								</font>
							</div>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="spacing" />
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-md-6">
							<div className="input-group mb-3">
								<div className="custom-file">
									<input type="file" className="custom-file-input" id="inputGroupFile02" />
									<label className="custom-file-label">Upload token-document </label>
								</div>
								<div className="input-group-append">
									<span className="input-group-text" id="">
										Upload
									</span>
								</div>
							</div>
						</div>
						<div className="col-4 upload-text-pad">
							<p>
								<small>
									Load details of tokenized-econ of P2P co-op endevor for investor/contributors.{' '}
								</small>
							</p>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<p className="text-center">
								<font color="#76b262">
									----------------------End Co-op P2P NG-FinTech setup --------------------
								</font>
							</p>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			ngDistributedModel = null;
		}

		let bizSection;
		if (this.state.purposeType.label === 'Business (for profit)') {
			bizSection = (
				<div className="biz-section">
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<div className="float-left">
								<h5>Fundraise/Investment for Business (for profit):</h5>
							</div>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<RadioGroup
								name="bizApproach"
								selectedValue={this.state.bizApproach}
								onChange={this.handleBizApproach}
							>
								{' '}
								<label>
									<h6>Business Approach is &nbsp;&nbsp;</h6>
								</label>
								<label>
									<Radio value="Centralized-Traditional" />
									&nbsp;Centralized-Traditional&nbsp;&nbsp;
								</label>
								<label>
									<Radio value="Co-op traditional" />
									&nbsp;Co-op Traditional&nbsp;&nbsp;
								</label>
								<label>
									<Radio value="Co-op P2P NG-FinTech" />
									&nbsp;Co-op P2P NG-FinTech
								</label>
							</RadioGroup>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					{ngDistributedModel}

					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<div className="float-left">
								<b>
									<font color="#e8ba92">Business Model Packaging:</font>
								</b>
							</div>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<div className="float-left">
								<div className="form-check">
									<label className="form-check-label">
										<input type="checkbox" className="form-check-input" value="" />
										Business Ideation Overview (1-2 slides) or pictures etc.
									</label>
								</div>
							</div>
							<br />
							<div className="float-left">
								<div className="form-check">
									<label className="form-check-label">
										<input type="checkbox" className="form-check-input" value="" />
										Business Plan / Pitch (10-12 slides)
									</label>
								</div>
							</div>
							<br />
							<div className="float-left">
								<div className="form-check">
									<label className="form-check-label">
										<input type="checkbox" className="form-check-input" value="" />
										Specific white-papers / scholarships (if you want to attach)
									</label>
								</div>
							</div>
							<br />
							<div className="float-left">
								<div className="form-check">
									<label className="form-check-label">
										<input type="checkbox" className="form-check-input" value="" />
										Socio-economic, ecological or other implications
									</label>
								</div>
							</div>
							<br />
							<div className="float-left">
								<div className="form-check">
									<label className="form-check-label">
										<input type="checkbox" className="form-check-input" value="" />
										Sample models of desired Partnership / Contributions / investment.
									</label>
								</div>
							</div>
							<br />
							<div className="float-left">
								<div className="form-check">
									<label className="form-check-label">
										<input type="checkbox" className="form-check-input" value="" />
										Financial Model / projections.
									</label>
								</div>
							</div>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10 text-left">
							<b>Direction:</b> Please package the checked assets in one PDF and load it here.
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-md-7">
							<div className="input-group mb-3">
								<div className="custom-file">
									<input type="file" className="custom-file-input" id="inputGroupFile02" />
									<label className="custom-file-label">Upload the biz-model package </label>
								</div>
								<div className="input-group-append">
									<span className="input-group-text" id="">
										Upload
									</span>
								</div>
							</div>
						</div>
						<div className="col-3 upload-text-pad">
							<p>
								<small>Load business model-plan financial-projection package</small>
							</p>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<TextFieldGroup
								name="bizWebSiteUrl"
								placeholder="Please enter your business web site URL"
								value={this.state.bizWebSiteUrl}
								onChange={this.onChange}
								error={errors.zip}
								info="Please enter your business web site URL"
							/>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
					<div className="spacing" />
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
							<p className="text-center">
								<font color="#efba56">
									---------------------------- End of Biz-for-profit section
									--------------------------------
								</font>
							</p>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			bizSection = null;
		}

		let btnSubmit;
		btnSubmit = (
			<div>
				<div className="spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<font color="#fbfcd6">
							<TextAreaFieldGroup
								placeholder="Personalize your ask in few lines of summary."
								name="summaryNote"
								value={this.state.summaryNote}
								rows={4}
								onChange={this.onChange}
								error={errors.summaryNote}
								info="Personalize your ask as summary adding your personality traits."
							/>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<div className="text-left">
							<font color="#fbfcd6">
								<b>Points on Buttons: </b> Click 'Save (WIP)' (work in progress) to save to continue on
								your campaing later on. Click 'Discard' to delete all your work (be careful). 'Save &
								Done' will list your campaign in 'Agreement' section in Baanda Lobby for you to create a
								smart-contract in blockchain. Unless that is complete, your campaing will not start.
								Once the contract is complete, your campaign will be removed from this Crowdfunding
								Posts section.
							</font>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>

				<div className="spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<div className="float-right">
							<button className="btn-discard" onClick={this.handleDiscard}>
								Discard &nbsp;
								<div className="float-right">
									<i className="fas fa-trash-alt" />
								</div>
							</button>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<button className="btn-done" onClick={this.handleSaveWIP}>
								Save & Done &nbsp;
								<div className="float-right">
									<i className="fa fa-check" />
								</div>
							</button>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<button className="btn-wip-save" onClick={this.handleSaveDone}>
								Save (WIP) &nbsp;
								<div className="float-right">
									<i className="fab fa-phoenix-framework" />
								</div>
							</button>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
			</div>
		);

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
							info="Enter crowdfund campaign name for reference"
						/>
					</div>
					<div className="col-5">
						<font color="blue">
							<Select
								value={this.state.editCampaignName}
								//isMulti
								autosize={false}
								options={crowdFundEdit}
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
						<TextFieldGroup
							name="campaignHeader"
							placeholder="Enter a campaign header to publish ..."
							value={this.state.campaignHeader}
							onChange={this.onChange}
							error={errors.campaignHeader}
							info="Enter a campaign header to publish in less than 50 characters"
						/>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<TextAreaFieldGroup
							placeholder="Describe your fundraising goal "
							name="description"
							value={this.state.description}
							rows={4}
							onChange={this.onChange}
							error={errors.description}
							info="Your description would be published ... be sincere, passionate & to the point."
						/>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-md-7">
						<div className="input-group mb-3">
							<div className="custom-file">
								<input type="file" className="custom-file-input" id="inputGroupFile02" />
								<label className="custom-file-label">Upload the funding vision </label>
							</div>
							<div className="input-group-append">
								<span className="input-group-text" id="">
									Upload
								</span>
							</div>
						</div>
					</div>
					<div className="col-3 upload-text-pad">
						<p>
							<small>Present the vision audio-visually for contributors</small>
						</p>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col">
						<font color="yellow">Digital Upload Asset Type: </font>&nbsp;&nbsp;
						<div className="form-check-inline">
							<label className="form-check-label">
                <input 
                type="radio" 
                className="form-check-input" 
                name="optradio" />
								Photograph
							</label>
						</div>
						<div className="form-check-inline">
							<label className="form-check-label">
								<input type="radio" className="form-check-input" name="optradio" />
								Audio
							</label>
						</div>
						<div className="form-check-inline">
							<label className="form-check-label">
								<input type="radio" className="form-check-input" name="optradio" />
								Video
							</label>
						</div>
						<div className="form-check-inline disabled">
							<label className="form-check-label">
								<input type="radio" className="form-check-input" name="optradio" disabled />
								Hologram
							</label>
						</div>
					</div>
				</div>
				<div className="spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-2">
						<div className="float-right">
							<font color="#a8cbed">
								<b>Start On:</b>
							</font>
						</div>
					</div>
					<div className="col-3">
						<div className="task_calendar_place">
							<div className="float-left">
								<DatePicker selected={this.state.startDate} onChange={this.handleStartDate} />
							</div>
						</div>
					</div>
					<div className="col-2">
						<div className="float-right">
							<font color="#a8cbed">
								<b>End By:</b>
							</font>
						</div>
					</div>
					<div className="col-3">
						<div className="task_calendar_place">
							<div className="float-left">
								<DatePicker selected={this.state.endDate} onChange={this.handleEndDate} />
							</div>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="spacing" />
				<div className="spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-3">
						<div className="float-left">
							<input
								name="targetAmount"
								value={this.state.targetAmount}
								type="number"
								pattern="^\d*(\.\d{0,2})?$"
								title="Format: 4 digits"
								width="25"
								onChange={this.onChange}
								placeholder="TTTTTT"
							/>{' '}
							<small className="form-text">Minimum Target Amount</small>
						</div>
					</div>
					<div className="col-2">
						<font color="blue">
							<Select
								value={this.state.targetAmountCurrencyType}
								//isMulti
								autosize={false}
								options={currency}
								className="basic-multi-select"
								classNamePrefix="select"
								onChange={(value) => this.handleCurrencySelect('targetAmount')}
								maxMenuHeight={100}
								//isSearchable={true}
								placeholder="Currency"
							/>
						</font>
					</div>

					<div className="col-1">
						<div className="float-right">
							<font color="#a8cbed">
								<b>Purpose:</b>
							</font>
						</div>
					</div>
					<div className="col-4">
						<font color="blue">
							<Select
								value={this.state.purposeType}
								//isMulti
								autosize={false}
								options={fundraisingPurpose}
								className="basic-multi-select"
								classNamePrefix="select"
								onChange={this.handlePurposeType}
								maxMenuHeight={100}
								//isSearchable={true}
								placeholder="Purpose of Fundraising"
							/>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<TextAreaFieldGroup
							placeholder="Describe ... How will it help the world around ..."
							name="howWillItHelpOthers"
							value={this.state.howWillItHelpOthers}
							rows={4}
							onChange={this.onChange}
							error={errors.howWillItHelpOthers}
							info="Influence contributors on how it is good for society, world, ecosystem etc."
						/>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				{/* <div className="spacing" /> */}
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-5 float-right">Minimum amount to be an expenditure approver:</div>
					<div className="col-3">
						<input
							name="approverMinAmount"
							value={this.state.approverMinAmount}
							type="number"
							pattern="^\d*(\.\d{0,2})?$"
							size="8"
							onChange={this.onChange}
						/>
					</div>
					<div className="col-2">
						<font color="blue">
							<Select
								value={this.state.approverMinCurrencyType}
								//isMulti
								autosize={false}
								options={currency}
								className="basic-multi-select"
								classNamePrefix="select"
								onChange={this.handleapproverMinCurrencySelect}
								maxMenuHeight={100}
								//isSearchable={true}
								placeholder="Currency"
							/>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<b>Contribution Types accepted:&nbsp;&nbsp;</b>
						<div className="form-check-inline">
							<label className="form-check-label">
								<input
									name="contributionFinancial"
									type="checkbox"
									className="form-check-input"
									checked={this.state.contributionFinancialcheck}
									onChange={(value) => this.onRadioChange('contributionFinancial')}
									value={this.state.contributionFinancial}
								/>Financial
							</label>
						</div>
						<div className="form-check-inline">
							<label className="form-check-label">
								<input
									name="contributionServices"
									type="checkbox"
									className="form-check-input"
									checked={this.state.contributionServicescheck}
									onChange={(value) => this.onRadioChange('contributionServices')}
									value={this.state.contributionServices}
								/>Services
							</label>
						</div>
						<div className="form-check-inline disabled">
							<label className="form-check-label">
								<input
									name="contributionGoods"
									type="checkbox"
									className="form-check-input"
									checked={this.state.contributionGoodscheck}
									onChange={(value) => this.onRadioChange('contributionGoods')}
									value={this.state.contributionGoods}
								/>Goods and Materials
							</label>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				{/* <--------------------------- Right Usage Section ------------------> */}
				<hr />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<p className="float-center">
							<font color="#efe5bf">
								<b>
									Right Usage Assurance, Trust-Control, and Governance & Accounting Transparency
									Framework
								</b>{' '}
							</font>
						</p>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				{/* <------------------ Requestor & Endeavor Info ------------------------> */}
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-5">
						<TextFieldGroup
							name="reqMgrName"
							placeholder="Enter Manager's or Requestors Name"
							value={this.state.reqMgrName}
							onChange={this.onChange}
							error={errors.reqMgrName}
							info="Enter Manager's or Requestors Name"
						/>
					</div>
					<div className="col-5">
						<div className="input-group mb-3">
							<div className="custom-file">
								<input type="file" className="custom-file-input" id="inputGroupFile02" />
								<label className="custom-file-label">
									<div className="float-left">Requestor's Picture</div>{' '}
								</label>
							</div>
							<div className="input-group-append">
								<span className="input-group-text" id="">
									Upload
								</span>
							</div>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-5">
						<div className="float-left">
							<b>Endeavor Location Address Type &nbsp;------------></b>
						</div>
					</div>
					<div className="col-5">
						<font color="blue">
							<Select
								value={this.state.locationCountry}
								//isMulti
								autosize={false}
								options={country}
								className="basic-multi-select"
								classNamePrefix="select"
								onChange={this.handleSelectCountry}
								maxMenuHeight={100}
								isSearchable={true}
								placeholder="Select Country"
							/>
						</font>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				{getAddress}
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<div className="float-left">
							<b>
								<font color="#e8ba92">Return clauses in case of failure:</font>
							</b>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input
										name="returnGoods"
										type="checkbox"
										className="form-check-input"
										checked={this.state.returnGoodscheck}
										onChange={(value) => this.onRadioChange('returnGoods')}
										value={this.state.returnGoods}
									/>
									Goods & Materials (Not consumable) returned as is.
								</label>
							</div>
						</div>
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input
										name="returnFundscheck"
										type="checkbox"
										className="form-check-input"
										checked={this.state.returnFundscheck}
										onChange={(value) => this.onRadioChange('returnFunds')}
										value={this.state.returnFunds}
									/>Proportional returned minus &nbsp;&nbsp;
									<input
										name="returnPercent"
										value={this.state.returnPercent}
										type="number"
										min="0"
										max="15"
										title="Format: 2 digits"
										onChange={this.onChange}
									/>{' '}
									% admin cost for donation over &nbsp;
									<input
										name="donationOver"
										value={this.state.donationOver}
										type="number"
										pattern="^\d*(\.\d{0,2})?$"
										// title="Format: 4 digits"
										width="20"
										onChange={this.onChange}
									/>{' '}
									$ .
								</label>
							</div>
						</div>
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input
										name="accountTransparency"
										type="checkbox"
										className="form-check-input"
										checked={this.state.accountTransparencycheck}
										onChange={(value) => this.onRadioChange('accountTransparency')}
										value={this.state.accountTransparency}
									/>
									Total accounting transparency with causal entropy (why failed).
								</label>
							</div>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<div className="float-left">
							<b>
								<font color="#e8ba92">Endeavor monitoring by Contributors:</font>
							</b>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input
										name="iotdevice"
										type="checkbox"
										className="form-check-input"
										checked={this.state.iotdevicecheck}
										onChange={(value) => this.onRadioChange('iotdevice')}
										value={this.state.iotdevice}
									/>
									IoT device based remote monitor (on demand)
								</label>
							</div>
						</div>
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input
										name="inpersonInspector"
										type="checkbox"
										className="form-check-input"
										checked={this.state.inpersonInspectorcheck}
										onChange={(value) => this.onRadioChange('inpersonInspector')}
										value={this.state.inpersonInspector}
									/>In person inspection for contribution above &nbsp;
									<input
										name="inspectionOver"
										value={this.state.inspectionOver}
										type="number"
										pattern="^\d*(\.\d{0,2})?$"
										// title="Format: 4 digits"
										width="20"
										onChange={this.onChange}
									/>{' '}
									$ .
								</label>
							</div>
						</div>
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input
										name="proofOfWork"
										type="checkbox"
										className="form-check-input"
										checked={this.state.proofOfWorkcheck}
										onChange={(value) => this.onradioChange('proofOfWork')}
										value={this.state.proofOfWork}
									/>
									Proof-of-work upon request (e.g. photograph, documents etc.)
								</label>
							</div>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>

				{/* <div className="spaceBelow" /> */}
				<div className="spacing" />
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<div className="float-left">
							<b>
								<font color="#e8ba92">State of the endeavor (check if more than 90% done now):</font>
							</b>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" value="" />
									Ideation Stage (Details of Ideation Complete)
								</label>
							</div>
						</div>
						<br />
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" value="" />
									Plans, designs, architecture, scholarly-work and similar pre-start work done.
								</label>
							</div>
						</div>
						<br />
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" value="" />
									Prototype, wireframe, website, peer-review of plans are done.
								</label>
							</div>
						</div>
						<br />
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" value="" />
									Functional front-end or back-end of software, experiments, done or not needed.
								</label>
							</div>
						</div>
						<br />
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" value="" />
									Product made; endeavor business ready, need additional help to launch.
								</label>
							</div>
						</div>
						<br />
						<div className="float-left">
							<div className="form-check">
								<label className="form-check-label">
									<input type="checkbox" className="form-check-input" value="" />
									Fully functional and operational. Need help to expand.
								</label>
							</div>
						</div>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<hr />
			</div>
		);

		let output;

		if (this.state.formEntry) {
			output = (
				<div>
					<div>{campaignForm}</div>
					<div>{bizSection}</div>
					<div>{btnSubmit}</div>
				</div>
			);
		}
		if (this.state.preview) {
			output = (
				<div>
					<PreviewFundRaising campaignName={this.state.editCampaignName} />
				</div>
			);
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
											<h4>Funding Campaign</h4>
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
							{setupSteps}
							{output}
							<div className="spaceBelow" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CrowdFunding;
