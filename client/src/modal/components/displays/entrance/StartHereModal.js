import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../../../../actions/modalActions';
import '../../../css/localModal.css';
import './css/entrance.css';

class StartHereModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todotext: ''
		};

		this.closeModal = this.closeModal.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	closeModal(e) {
		e.preventDefault();
		console.log('closeModal.func : ' + this.state.todotext);
		const modTask = {
			todotext: this.state.todotext
		};

		this.props.hideModal(modTask);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		console.log('props :' + JSON.stringify(this.props));
		//const { title, message, todotext } = this.props;
		const { user } = this.props.auth;
		console.log('user:' + JSON.stringify(user));
		const { title, message } = this.props;

		console.log('title :' + title + ' | message:' + message);
		return (
			<div className="container">
				<div className="modal-content-z">
					<div className="row text-center justify-content-center">
						<div className="modal-header">
							<h5>
								Welcome <font color="blue">{this.props.auth.user.name} ...</font>
								&nbsp; ... let's become baandas (friends)
							</h5>
						</div>
					</div>

					<div className="modal-body">
						<div className="fixedsize-start-here">
							<div className="row">
								<div className="col-8">
									<div className="starthere-padding">
										<div className="text-center">
											<p align="justify">
												<b>Intent</b> of this User Experience (UX) demo is to introduce Baanda via functional UX
												and request collaboration in any way you can including creative
												feedbacks. Please start with the story in the audio.
											</p>
										</div>
									</div>
								</div>
								<div className="col-4">
									<b>Background story of Baanda</b> &nbsp;{' '}
									<font size="1" color="">
										(audio : 3.55 mins)
									</font>{' '}
									<br />
									<audio controls>
										<source
											src="https://s3-us-west-2.amazonaws.com/baandadev1/BaandaIntroduction.mp3"
											type="audio/mpeg"
										/>
										Your browser does not support the audio element.
									</audio>
								</div>
							</div>
							<hr />

							<div className="row">
								<div className="col-12">
									<div className="start-here-msg">
										<font color="#f2d579" size="2">
											<p align="justify">
												<b>Context Setup</b>: It will take a long time and life-exchanges to experience  the  system. To provide a holistic experience, you would be experiencing this via a fictional character.
											</p>
										</font>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-12">
									<div className="start-here-msg">
										<font color="#ffffff" size="3">
											<p align="justify">
												<b>Background Story</b>: You are viewing Baanda through the eyes of a young man named Angelo Michael. He is studying programming in a community college, and has been looking for a part time job that works around his school schedule. He is also passionate about art, and is trying to create an art-gallery co-operative with other aspiring young men and women. He wants to live with like-minded people, and share resources (pool-shared economy) instead of barely living to make ends meet. His co-op is also crowdfunding and propagating their art-gallery news via emulated word-of-mouth (gossip or ripple) process. Soon, they want to sell their artwork by Baanda catalog system (coming soon in next release). This UX is Baanda helping Angelo with all of these dimensions of his life.
											</p>

											<p align="justify">
											<b>Components</b>: 
											</p>

											<h6>Service Xchange (SX)</h6>
											<ul>
												<li>
												Posts: Help wanted; Service Offering; Apprentice-master; cooperative 
												</li>
												<li>
												Dashboard: Intelligence based match recommendations
												</li>
												<li>
												Dashboard: Project creation, handling, feedback, conflict-reselution, feedbacks, intelligence, DCCS (send/receive) etc.
												</li>
											</ul>

											<h6>Via Co-living</h6> <i></i>
											<ul>
												<li>
												Angelo is looking for like-minded people to live with. 
												</li>
												<li>
												Baanda also helps them operate their day-to-day communal life..{' '}
												</li>
											</ul>

											<h6>Marketspace</h6><i>(Ethereium based transactions are active)</i>
											<ul>
												<li>
												Angelo and his team are crowd-funding, via total contributor transparency (finance, operation and actual physical process via remote IoT sensors).{' '}
												</li>
												<li>Ripple their art-gallery production message to the community. </li>
									
												<li>
												Art-gallery will publish their artwork for sale via catalogue (Detail functions to released progressively)
												</li>
											</ul>

											<h6>Agreement</h6> 
											<ul>
												<li>
												Whenever Angelo needed to make an agreement, like in SX for creating the Art Gallery Co-op, or for creating a forum for fundraising, he finds a request in his agreement panel. With information entered, Baanda generates a smart-contract in Ethereum. {' '}
												</li>
												
											</ul>

											<h6>Nook</h6>
											<p align="justify">
											 It is in Nook (Angelo’s private corner) that Baanda gets to know Angelo and his world. In Nook, Angelo:{' '}
											</p>
											<ul>
												<li>
													Angelo converses with Baanda and shares his own profile and
													self-perceptions
												</li>
												<li>Creates and maintains his task list</li>
												<li>Interacts with his close social circle</li>
												<li>Maintains his personal wiki in different media types</li>
												<li>Gets a feedback on how the world around him envisions him </li>
											</ul>
										</font>
									</div>
								</div>
							</div>
							<hr />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Disregard if you are here for experiencing the app</b>
							<div className="row">
								<div className="col">
									<div className="start-here-msg">
										<font color="lightgreen">
											<h6>
												Note for partners, companions, investors, engineers & collaborators:
											</h6>
											<p align="justify">
											Presently, the Baanda team is working with shoestring budget and has only a one-man tech-team; time and finances are stretched very thin. The UX is designed in compartments, like Lego-pieces, such that it can be easily transformed into backwards facing traditional devices (mobile-first), as well as for immersive holographic experience on next-gen browsers (e.g. Argon etc.), or other augmented reality (AR) devices, like HoloLens). 
											</p>
                      </font>
                      <font color="#f7b962">
											<p align="justify">
												<b>Technology and Architecture</b>: The technology base is via MERNE (MongoDB, Express, React, Nodejs, Ethereum), graphs-charts via Fusioncharts, uses cloud-based API as GoogleMap, NLP engine as DialogFlow. The cloud vendors used are Heroku on AWS, MLab (for database) and Rinkby testnet of Ethereum. Microservices is and will be in distributed servers (Express/Pivotal/AWS etc.), like lego-pieces, scalable on demand, zero downtime, and use any language that is appropriate for the cause. Baanda (R&D) is dabbling with Argon for holographic interface and holoLens for VR interface but waiting for more generalize conduits since they need iOS and MS-windows respectively. IoT sensors are now limited to camera but intends to partner with IoT vendors as funds become available. When funded, it will be a combination of Web-App, DApp, & Holo-App. The immersive experience is not conceived for vision & sound only but immersed direct interaction with the world around via IoT sensors and acutator. Present security is standard now but Baanda architecture envisions biometric-security, attached to global lifetime Baanda ID, with scrambled data to keep Baanda (mathematical) promise that individual's data will not be used for marketing, government, or mind-manipulation in any way.
											</p>

											<p align="justify">It has been tested in Chrome browser only for now.</p>
											
										</font>
									
									</div>
								</div>
							</div>
              <div className="row">
                 <div className="col-12">
                 <div className="start-here-msg">
                 <div className="text-center">
                 <font size="4">
                 <b>The only thing that will redeem mankind is via cooperation</b> -- Bertrand Russell
                 </font>
                 </div>
                 
                 <p align="justify">
                 <font size="2" color="lightblue">
											For questions, or if interested in partnering/investing/collaborating and
											want to view business-plan (detail or small), present-state etc. please
											contact Gabrielle Mittlebach at g.mittelbach@baanda.com
										</font>
                 </p>
                 </div>
                 </div>
              </div>
						</div>
					</div>

					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={this.closeModal}
							onChange={this.onChange}
						>
							<strong>Continue</strong> &nbsp;
							<div className="float-right">
								<i className="fas fa-broadcast-tower" />
							</div>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

StartHereModal.propTypes = {
	hideModal: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { hideModal })(StartHereModal);
