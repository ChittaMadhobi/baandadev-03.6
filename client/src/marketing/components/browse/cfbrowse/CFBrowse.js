import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';

import ShowCampaign from './ShowCampaigns';
// import CFIntelViaModal from './CFIntelViaModal';
import { showModal } from '../../../../actions/socialActionTest';
import ModalContainer from '../../../../modal/components/ModalContainer';
import '../../../../modal/css/template.css';
import '../../../../modal/css/localModal.css';

import '../mktbrowse.css';

class CFBrowse extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchApproach: 'myPosts',
			interestedIn: 'contribute',
      likeToAvail: 'participate',
      letsBrowse: false,
      letsSearch: true
		};
	}

  handleLetsBrowse = () => {
    alert('This is for UX feedback. It takes many to interact; long period of propagation of messages and participation of funding that would enable proper intelligence. Right now, the intelligence is read from a JSON file (MongoDB Collection), as it should appear from database in real world scenario. ');
    this.setState({
      letsBrowse: true,
      letsSearch: false,
      howtoSetup: false,
		})
		
		if (this.state.likeToAvail === 'intelligence') {
			// alert ('from here we modal ...');
			this.setState({
				letsBrowse: false,
				letsSearch: true,
				howtoSetup: false,
			})
			this.modalReadyFunction('selfOnly');
		} else {
			this.setState({
				letsBrowse: true,
				letsSearch: false,
				howtoSetup: false,
			})
		}
  }

	modalReadyFunction = reflectionType => {
    //console.log('reflectionType: ' + reflectionType);

    this.setState({
      assess: false,
      mirror: false,
      message: true
    });

    this.openMirrorModal(reflectionType);
  };
 
  openMirrorModal = param => {
    const modalProps = {
      open: true,
      title: param.Title,
      message: param,
      closeModal: this.closeModal
    };

    const modalType = 'cfIntel';

    this.props.showModal(modalProps, modalType);
  };




	handleSearchApproach = (value) => {
		this.setState({
			searchApproach: value
		});
	};
	handleLikeToAvail = (value) => {
		this.setState({
			likeToAvail: value
		});
	};
	handleInterestedIn = (value) => {
		this.setState({
			interestedIn: value
		});
	};

	selectOperation = (value) => {
		console.log('value: ' + value);
		if (value === 'howtoSetup') {
			this.setState({
				howtoSetup: true,
				letsBrowse: false,
        letsSearch: false
			});
		}
		if (value === 'cfSearch') {
			this.setState({
				howtoSetup: false,
        letsBrowse: false,
        letsSearch: true
			});
		}
	};

	render() {
    console.log('this.props:' + JSON.stringify(this.props));
    
    let setupSteps;
		if (this.state.howtoSetup) {
			setupSteps = (
				<div>
					<div className="row">
						<div className="how-to">
							<div className="text-left">
								<b>Posting is divided into two main parts:</b>
								<ul>
									<li>
										1. Request for crowdfunding, contribution for an inspiring endeavor for
										artistic, scientific and communal endeavors that has benevolent goal.
									</li>
									<li>
										2. Requesting funding, contribution, and/or investment for for-profit business.
									</li>
								</ul>


							</div>
						</div>
					</div>
				</div>
			);
		} else {
			setupSteps = null;
		}


		let searchSpecPanel;
		if (this.state.searchApproach === 'openSearch') {
			searchSpecPanel = (
				<div>
					<div className="row">
						<div className="col-1">&nbsp;</div>
						<div className="col-10">
						<font color="lightyellow">
							<p align="justify">
							In production, for new-open search, Baanda will enable geolocation with search radius based filter along with 'purpose' of crowd funding and/or investments (e.g. Community development; education, health and fitness; R&D of science or technology; arts & crafts etc.). Further, Baanda will also allow word or phrase based filtering and governance type of the endeavor (e.g. traditional hirerchical, cooperation peer-to-peer, co-op hierarchical etc.)
							</p>
							</font>
						</div>
						<div className="col-1">&nbsp;</div>
					</div>
				</div>
			);
		} else {
			searchSpecPanel = null;
		}

		let likeToAvailPanel;
		if (this.state.likeToAvail === 'participate') {
			likeToAvailPanel = (
				<div>
					<ShowCampaign auth={this.props.auth} campaignId={8000000023} />
				</div>
			);
		} else {
			likeToAvailPanel = null;
		}
		// else {
		// 	console.log('I amin CFBrowse ...  1');
		// 	likeToAvailPanel = (
		// 		<div>
		// 			<CFIntelViaModal campaignId={8000000023} modalType="cfIntel" />
		// 		</div>
		// 	);
		// }

		let mainPanel;
		mainPanel = (
			<div>
				<div className="row">
					<div className="col text-center header-rightpad">
						<font color="lightyellow">
							<h5>Reachout - Search & Browse</h5>
						</font>
					</div>
				</div>
				<div className="for-top-space" />
				<div className="row header-rightpad">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<RadioGroup
							name="searchApproach"
							selectedValue={this.state.searchApproach}
							onChange={this.handleSearchApproach}
						>
							{' '}
							<label>
								<font color="lightyellow">
									<h6>I am looking for &nbsp;&nbsp;</h6>
								</font>
							</label>
							<label>
								<Radio value="myPosts" />
								&nbsp;Per my contribution postings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</label>
							<label>
								<Radio value="openSearch" />
								&nbsp;New & Open Search&nbsp;&nbsp;
							</label>
						</RadioGroup>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
				<div className="row header-rightpad">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<RadioGroup
							name="likeToAvail"
							selectedValue={this.state.likeToAvail}
							onChange={this.handleLikeToAvail}
						>
							{' '}
							<label>
								<font color="lightyellow">
									{' '}
									<h6>I would like to avail &nbsp;&nbsp;</h6>
								</font>
							</label>
							<label>
								<Radio value="intelligence" />
								&nbsp;Intelligence and summaries&nbsp;&nbsp;&nbsp;&nbsp;
							</label>
							<label>
								<Radio value="participate" />
								&nbsp;Listings for participation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</label>
						</RadioGroup>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />

				<div className="row header-rightpad">
					<div className="col-1">&nbsp;</div>
					<div className="col-10">
						<RadioGroup
							name="interestedIn"
							selectedValue={this.state.interestedIn}
							onChange={this.handleInterestedIn}
						>
							<label>
								<font color="lightyellow">
									<h6>I am interested in; &nbsp;&nbsp;</h6>
								</font>
							</label>

							<label>
								<Radio value="contribute" />
								&nbsp;Contribute and participate&nbsp;&nbsp;&nbsp;&nbsp;
							</label>

							<label>
								<Radio value="invest" />
								&nbsp;Invest and cooperate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</label>
						</RadioGroup>
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row">
					<div className="col-1">&nbsp;</div>
					<div className="col-10 text-right">
						<button
							className="btn-letbrowse"
							onClick={() => {
								this.handleLetsBrowse();
							}}
						>
							<b>Let's Browse</b>
							<div className="float-right">
								<i className="fas fa-toggle-off" />
							</div>
						</button>{' '}
					</div>
					<div className="col-1">&nbsp;</div>
				</div>
				<div className="row-spacing" />
        {searchSpecPanel}
			</div>
		);

    let output;
    if (this.state.letsSearch) {
      output = mainPanel;
    }
    if (this.state.letsBrowse) {
      output = likeToAvailPanel;
    }
    if (this.state.howtoSetup) {
      output = setupSteps;
    }

		return (
			<div>
				<div className="text-center">
					<div className="header-margin">
						<div className="row">
							<div className="col-md-5">
								<div className="float-center note-placement">
									<font color="#e0d7bc">
										<h5>Browse CrowdFund & Investment</h5>
									</font>
								</div>
							</div>
							<div className="col-md-7">
								<div className="float-center">
									<button
										className="btn-howto"
										onClick={() => {
											this.selectOperation('howtoSetup');
										}}
									>
										<b>How-to-steps</b>
										<div className="float-right">
											<i className="fas fa-toggle-off" />
										</div>
									</button>{' '}
									<button
										className="btn-listContractReq"
										onClick={() => {
											this.selectOperation('cfSearch');
										}}
									>
										<b>Search Pane</b>
										<div className="float-right">
											<i className="fas fa-chalkboard-teacher" />
										</div>
									</button>{' '}
								</div>
							</div>
						</div>
					</div>
					<div className="browse-cfpanel">
						{output}
					</div>
					<div>
						<ModalContainer />
					</div>
					<div className="spaceBelow" />
				</div>
			</div>
		);
	}
}

CFBrowse.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, {showModal})(CFBrowse);
