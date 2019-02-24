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
												<b>Context Setup</b>: Unlike prevailing trends of smart-phone facing singleton (one or very-few functions) application, Baanda is expansive and interconnected to understand an individual user and emulate a humanoid experience that touches all aspects of their life. If we compare the present trend to a shop, then Baanda is a bazaar or mall. For anyone to experience the system and ‘feel’ its impacts on time to come, one has to use it as well as interact with their peers in the world around them for a long time. To present the experience in a fast-paced way … we have created data and intelligence around a story. Please refer to the Design Perspective below for more on design thought-process.
											</p>
										</font>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-12">
									<div className="start-here-msg">
										<font color="#ffffff" size="2">
											<p align="justify">
												<b>Background Story</b>: You are viewing Baanda through the eyes of a young man named Angelo Michael. He is studying programming in a community college, and has been looking for a part time job that works around his school schedule. He is also passionate about art, and is trying to create an art-gallery co-operative with other aspiring young men and women. He wants to live with like-minded people, and share resources (pool-shared economy) instead of barely living to make ends meet. His co-op is also crowdfunding and propagating their art-gallery news via emulated word-of-mouth (gossip or ripple) process. Soon, they want to sell their artwork by Baanda catalog system (coming soon in next release). This UX is Baanda helping Angelo with all of these dimensions of his life.
											</p>

											<p align="justify">
											<b>Request to you</b>: This release for (UX) User Experience feedback and advisory purpose. One person has been responsible for coming up with the concept, authoring papers, algorithms, design, architecture, tech-framework selection, developing, administration, deployment and all aspects of the system. Please use lap-tops to view and assist with your point-of-views, suggestions, critique and let us together transform and enhance lives of billions of people. 
											</p>

											<h6>Via Service Xchange (SX)</h6>
											<ul>
												<li>
												Baanda enabled Angelo to find a job that suits not just his location and skills, but also other life-contexts like schedule and temperament.{' '}
												</li>
												<li>
												Angelo is getting assistance to start an Art Gallery co-op that he and his peers intend to pass on to the next generation going forward. Baanda is helping them to grow, and helping them trust each other via DCCS (Dynamic Co-op Chemistry Score) scores, continuous feedback, and conflict resolution
												</li>
												<li>
												Baanda is helping them to look for people to market their co-op to the community
												</li>
											</ul>

											<h6>Via Co-living</h6> <i>(Details in next-release; operates like SX)</i>
											<ul>
												<li>
												Angelo is looking for like-minded people to live with. Baanda will not just help him find a new home, but help them create and maintain their own agreements. As Baanda is dynamic, these agreements can be amended with life’s events.{' '}
												</li>
												<li>
												Baanda also helps them operate their day-to-day communal life..{' '}
												</li>
											</ul>

											<h6>Via Marketspace</h6><i>(Ethereium based transactions are active)</i>
											<ul>
												<li>
												Angelo and his team are crowd-funding, via total contributor transparency (finance, operation and actual physical process via remote IoT sensors).{' '}
												</li>
												<li>Ripple their art-gallery production message to the community. </li>
												<li>
												All controls of the art gallery’s crowd-funding endeavors are governed via blockchain (Ethereum). Feel free to check it out but be mindful: you are Angelo, and you are seeing operations as if you are the fundraising manager.
												</li>
												<li>
												Art-gallery will publish their artwork for sale via catalogue (Detail functions to released soon)
												</li>
											</ul>

											<h6>Via Agreements</h6> 
											<ul>
												<li>
												Whenever Angelo needed to make an agreement, like in SX for creating the Art Gallery Co-op, or for creating a forum for fundraising, he finds a request in his agreement panel. With information entered, Baanda generates a smart-contract in Ethereum. {' '}
												</li>
												<p align="justify">
													<b>Note</b>: Presently, the request stays in place even after the factory has generated the contract. This is by design for all of you to view it. To be mindful: Ethereum is very slow in mining (compared computing speed we are used to). Distributed trust has its price in time. Furthermore, if location-centric legal help is needed, Baanda will connect Angelo to Baanda's legal partners based on context. It will also enable Notary, e-signature for non-blockchain based agreements, and make digital-documents immutable via blockchain.
												</p>
											</ul>

											<h6>Via Nook</h6>
											<p align="justify">
											Angelo was reluctant to participate in the Nook. He knew he wanted a part-time job, means to create a co-op, live with like-minded people, and fund-raise to make the gallery happen. But soon, Angelo realized that it is in Nook (Angelo’s private corner) that Baanda gets to know Angelo and his world. In Nook, Angelo:{' '}
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
							<div className="row">
								<div className="col">
									<div className="start-here-msg">
										<font color="lightgreen">
											<h6>
												Note for partners, companions, investors, engineers & collaborators:
											</h6>
											<p align="justify">
											Presently, the Baanda team is working with shoestring budget and has only a one-man tech-team; time and finances are stretched very thin. The UX is designed in compartments, like Lego-pieces, such that it can be easily transformed into backwards facing traditional devices (mobile-first), as well as for immersive holographic experience on next-gen browsers (e.g. Argon etc.), or other augmented reality (AR) devices, like HoloLens). This also allow compartmentalized scalability on demand. For now, Baanda is completely reliant on free services in the clouds, and it is hitting all the limits. Effectively, it is providing split experience (focused on functions), databases and microservices disconnected, to enable enough computing resources to present a holistic Baanda vision on the cloud (using free services only) for seeking your collaboration.
											</p>
                      </font>
                      <font color="#f7b962">
											<p align="justify">
												<b>Technology and Architecture</b>: <i>[Skip if not a techie :) - tech understanding is not needed to experience this]</i> The technology base is via MERNE (MongoDB, Express, React, Nodejs, Ethereum), graphs-charts via Fusioncharts, uses cloud-based API as GoogleMap, NLP engine as DialogFlow. The cloud vendors used are Heroku on AWS, MLab (for database) and Rinkby testnet of Ethereum. Microservices is and will be in distributed servers (Express/Pivotal/AWS etc.), like lego-pieces, scalable on demand, zero downtime, and use any language that is appropriate for the cause. Baanda (R&D) is dabbling with Argon for holographic interface and holoLens for VR interface but waiting for more generalize conduits since they need iOS and MS-windows respectively. IoT sensors are now limited to camera but intends to partner with IoT vendors as funds become available. When funded, it will be a combination of Web-App, DApp, & Holo-App. The immersive experience is not conceived for vision & sound only but immersed direct interaction with the world around via IoT sensors and acutator. Present security is standard now but Baanda architecture envisions biometric-security, attached to global lifetime Baanda ID, with scrambled data to keep Baanda (mathematical) promise that individual's data will not be used for marketing, government, or mind-manipulation in any way.
											</p>

											<p align="justify"><b>Design Perspective: </b>Popular and prevailing UX design is conceived with Mobile-first design (formally initiated in 2009). Mobile-first design also set forth singleton app. Baanda being a large life-encompassing app say, “If you are playing card, chess, or a board game, think in terms of a coffee table. But don’t think of coffee table if you are playing a field-game like say soccer or football.” Baanda is considering few important factors towards UX design (though this is restricted by cost, resource is still Chrome browser based).</p>
											<ul>
												<li>
												Major tech-companies (Apple, Huawai, Samsung etc.) are coming up with folding-phone that open up into tablets. This will re-establish a different UX design patterns that imply the smart-phone realestate is insufficient for our tech-depndent lives. This too would be temporal in nature for it is fundamentally built on tame device technology.
												</li>
												<li>
												People of the world will increasingly expect more immersive, less touch driven, auto-sensors enabled holographic UX. By the time Baanda becomes a household name, backwards facing devices and design techniques would obsolete.   
												</li>
												<li>
												<b>Most importantly</b>, Baanda is <b>NOT</b> focused towards the top 10% of the world population who control 90%+ of global wealth, power, and subsurviance of the rest of the planet. Baanda's focus set of people is expected to share devices. Hence, design would be based on auto-transformation UX via biometric sensors that would be transformative with respect to Mobile-First design criterion.
												</li>
											</ul>
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
                 <h6>Come together, collaborate, and participate. Let's make Baanda a reality.</h6>
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
