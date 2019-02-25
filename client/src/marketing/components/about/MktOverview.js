import React, { Component } from 'react';

import './mktAbout.css';

class SXOverview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			answer1: '',
			answer2: '',
			answer3: '',
			btnClickNo: ''
		};

		this.handlePostClick = this.handlePostClick.bind(this);
	}

	handlePostClick(e) {
		console.log(e.target.id);
		this.setState({
			btnClickNo: e.target.id
		});
	}

	render() {
		const { btnClickNo } = this.state;

		let aboutAns1 = null;
		let aboutAns2 = null;
		let aboutAns3 = null;
		let aboutAns4 = null;
		let aboutAns5 = null;
		let aboutAns6 = null;
		let aboutAns7 = null;
		if (btnClickNo === '1') {
			aboutAns1 = (
				<div>
					<font color="lightyellow">
						<p align="justify">
							Marketspace is exactly as the meaning of the word is. This is a place where an individual
							trade, mingle, know about others, let their point of view be known. This has been the trend
							of human society from the beginning of human civilization.
						</p>
						<p align="justify">
							In general, through history, the propagation of message was personal. Gossips and
							story-telling was the main medium beyond periodic visits to religious institutions. The
							weight of one’s words depends on one’s social status or standing. One would receive or
							propagate messages based on mutual trust. The propaganda of rich and powerful was mostly
							symbolic and was done via elaborate monuments.
						</p>
						<p align="justify">
							Post industrialization of nineteenth century and with discovery of radio, TV and then
							internet, the whole pattern changed to mass broadcasting. Propaganda became the tool of
							maneuvering the minds of the populous. Increasingly, people lost personal touch with each
							other, and media became the truth bearer of the time. Individuals lost their voice and rich
							and powerful, who are in control of the expensive and complex broadcast systems, drowned the
							voices of individuals.
						</p>
						<p align="justify">
							A social symptom of loneliness, that started in later half of the twentieth century, became
							an epidemic in twenty-first. This is apparent by declaration of loneliness as an epidemic by
							US Surgeon general six years in a row. England started a ministry of loneliness in 2018.
							This detached humanity, glued to media, is cancerous now across the world.
						</p>
						<p align="justify">
							Baanda intends to change that and give voice to individuals to exchange ideas, find
							likeminded people to live, exchange work, services, and cooperate to celebrate life. Baanda
							will do this by understanding individuals and cascading their message via a Ripple
							Propagation mechanism using advanced AI (artificial intelligence) and trust while providing
							intelligence of the entropy of the propagation. And, Baanda itself will learn from the
							marketspace about the humanity and an individual’s existence in it.
						</p>
						<p align="justify">
							Baanda’s mission is to enhance wellbeing of individual and enable a cooperative peer-to-peer
							socio-economy. Baanda Marketspace is an invaluable enabler and a tool to achieve such a
							vision.
						</p>
					</font>
					<div className="textspaceTop" />
				</div>
			);
		}

		if (btnClickNo === '2') {
			aboutAns2 = (
				<div>
					<font color="lightyellow">
						<p align="justify">
							Baanda uses an ancient mechanism renamed as Ripple Propagation. It has a close resemblance
							to word-of-mouth from trusted people. Words between friends, father to a son, mother to her
							daughter, words among friends or from other trusted entities. This model works when people
							knew each other and few-people knowing was good enough for life activities. The problem of
							this process in the contemporary time is the violent dynamics of socio-economy and turbulent
							social relations. Further, the message often needs to be known by many to have an impact in
							a world with more than 7.2 billion people.
						</p>
						<p align="justify">
							Ripple Propagation has two main traits. They are, ‘what to tell’ and ‘who to tell?’ The
							what-factor is based on how we talk to each other contextually. The content, tonality, and
							presentation are dependent on a context. The next one is, ‘who should one say?’ That too is
							dependent on people or entities that are relevant to the context of the message and the
							intention
						</p>
						<p align="justify">
							Baanda let’s you compose a message in a fluid way (content is not static). The content is
							parsed to understand the meaning and thus form the ontology of the message and form its
							taxonomy. Then, one can send the message to his/her circles (social-circles, work-circles,
							co-living circles, and, in some case a broader but small passion (e.g. club, gathering etc.)
							or local customer base.
						</p>
						<p align="justify">
							In the first act of Ripple, the message is not sent as-is but is presented to the recipient
							in a personal way. This is possible, assuming the recipient too is a Baanda, through the
							knowledge who they are using AI mechanisms. Baanda also filters the message in this scenario
							using a context. For example, say a young man of a poor family is raising fund for a small
							business. While the young man sends the message out to his social circle where his father is
							a member, Baanda does not ask the propagation with ‘Would you like to contribute or invest?’
							making his father feel bad (after all, Baanda is a friend of all individual including his
							father). Instead, Baanda would ask his father if he knew someone to whom he would forward
							the message and thus rippling it forward.
						</p>
						<p align="justify">
							The second act the ripple is allowing the forwarding with a personal note. That is, say in
							the above story, father has a friend with some wealth. When he forwards his son’s message,
							he adds a personal note. This note has only one-step propagation capability.
						</p>
						<p align="justify">
							The last act is for Baanda to observe the entropy (cause and effect) of a propagation.
							Learning from the past, Baanda propagates messages in increased effectiveness and
							efficiency, meaning a higher-impact lower cost while avoiding irritating and overwhelming
							blasting of messaging that only larger organizations can afford.
						</p>
					</font>

					<div className="textspaceTop" />
				</div>
			);
		}

		if (btnClickNo === '3') {
			aboutAns3 = (
				<div>
					<font color="lightyellow">
						<p align="justify">
							Continuing on the answer of the last discussion on Ripple propagation, an intelligent match
							refers to a message (of all kinds) that has highest effect of sender’s intent, recipient’s
							context while eliminating the nuisance of a propaganda and advertisement blasting.
						</p>
						<p align="justify">
							A dominant driver to a person’s mind is one of the three words. They are what, why, or how.
							That is, someone may say, “Just tell me what is that you want and I will decide.” Another
							person may say, “Explain me why you want and how is it going to effect so and so.” Yet
							another person may ask, “How would you want to do it?” A dominant driver does not imply that
							other drivers are not present but the dominant driver is a dominant conduit to one’s
							feeling. And, we all know, humans take decision using feeling (like the rest of the living
							world). The other sub-drivers such as ‘who’, ‘when’, ‘where’ are also taken into
							consideration, among other traits, while making a matching message propagation. Hence, this
							Ripple Propagation is termed as an intelligent match.
						</p>
						<p align="justify">
							Baanda can make such an intelligent match happen because Baanda would know all parties
							involved by being their in different facets of people’s life like in Nook, Service Xchange
							(for work), Co-living and from market space too.
						</p>
						<p align="justify">
							One needs to be mindful that, Baanda will reach out to broadcast mechanisms (e.g. as in FB,
							Google, and other such media driven message broadcasting system) if needed or conducive to
							the intent of the message as well as Baanda determines that that kind of mechanism would be
							more efficient to the context. Perhaps, before Baanda has sufficient number of users, there
							would be more occasions to broadcast as is the trend now. Baanda, at the present time, does
							not intend to build its own broadcasting mechanism. Instead, it will partner with others.
							Baanda, in line with its vision, does not see its long-term benefits of mass broadcasting.
						</p>
					</font>
					<div className="textspaceTop" />
				</div>
			);
		}
		if (btnClickNo === '4') {
			aboutAns4 = (
				<div>
					<font color="lightyellow">
						<p align="justify">
							For 2019, Marketspace pipeline included balanced Crowd Sourcing and Investment using a
							merger of AI and blockchain technologies; initiation of Ripple Messaging Propagation with
							ability to partner with major broadcasting medias; and enable small businesses to share
							their catalogue either using Baanda catalogue tools or via API based interface to an
							existing catalogue.
						</p>

						<p align="justify">
							To be mindful, Baanda is oriented around individuals and not so much for big corporations.
							Please discuss with Baanda team on this milestone for details.
						</p>
					</font>
					<div className="textspaceTop" />
				</div>
			);
		}
		if (btnClickNo === '5') {
			aboutAns5 = (
				<div>
					<font color="lightyellow">
						<p align="justify">
							Baanda Marketspace’s long-term vision is to propagate cooperation around the world for a
							better socio-economy and self-sufficiency. One can perceive this marketspace as a global
							marketspace for all kinds of people to come together and create a peer-to-peer
							self-governing society.
						</p>
						<p align="justify">
							The vision of Baanda is neither Capitalism not socialism. Also, money is not the intent or
							advocation of Baanda for the people, happiness and wellbeing is. For more details on
							emerging socio-economic thought process for a more balanced humanity of tomorrow, please
							refer to white papers on Baanda site or contact Baanda team. This ‘About’ section is too
							small for such a vast subject.
						</p>
						<p align="justify">
							Marketspace intends to reach out to the farthest corners of the world to bring like-minded
							people together while promoting a geolocation centric intelligence-based promotion to make
							people step out from behind computers and interact in person for more holistic celebration
							of life.
						</p>
						<p align="justify">
							Baanda is also designed with holographic interface in mind. That will definitely provide
							more immersive experience but, not all conduits of the human perceptions and feelings would
							be possible even with all of today’s understanding of hologram concepts. Human mind and
							brain, or brains of most living entities are far beyond the grasp of even the most
							sophisticated computer. After all, humans feel through one’s life journey and computers do
							not feel or has a self-awareness.
						</p>
						<p align="justify">
							Baanda wants to form a conduit among humans to enable a heightened and more balanced
							celebration of life. Baanda is forged from an idea that humanity has a universe to explore
							and humanity must operate as a more efficient undivided wholeness of a Earth-mind to do
							that.
						</p>
					</font>
					<div className="textspaceTop" />
				</div>
			);
		}
		if (btnClickNo === '6') {
			aboutAns6 = (
				<div>
					<font color="lightyellow">
						<p align="justify">NO</p>
						<p align="justify">
							Baanda will not allow anyone to advertise as is understood in today’s world. There will be
							no banners, pop-ups, sneak-up, click-or-I-will-not-go-away, including start to play audio,
							video and, may be, in future pulled into immersive holographic experience to entice people
							into buying or manipulate.
						</p>
						<p align="justify">
							As have been mentioned before many times, Baanda is all about individuals and cooperation
							among individual. Everything in Baanda is contextual. Baands strongly wants to avoid being a
							conduit to be a propaganda tool. Baanda would have intelligence about individual. Such an
							ambition comes with great responsibility. There are enough people who would like to take
							advantage of individual's understanding to dominate and use people for one's selfish needs.
							The protective algorithms is built into Baanda design while being aware that it will be an
							eternal battle in front of Baanda for, as ancient saying of Yin and Yang goes, seed of
							darkness lie in the heart of light and vice versa.
						</p>
						<p align="justify">
							In a roundabout way, one can advertise, with a differ point of view. That is, by signing up
							in SX, Co-living, or messaging, crowd-funding, or publishing one’s catalogue (wish to sell
							information), one (individual or entities) is placing one’s self in the global marketspace
							with a bias of geolocation specificity. That is a kind of advertising. However, the ways and
							means of connecting people together is done by Baanda intelligently, with a balance of
							overall wellbeing that transcends just persuation Money-God that pervades in all arena of
							life today. Baanda intends to remind humanity that money is a means to transact and life has
							to be celebrated with feelings, an enigma that defines life on this planet.
						</p>
					</font>
					<div className="textspaceTop" />
				</div>
			);
		}
		if (btnClickNo === '7') {
			aboutAns7 = (
				<div>
					<font color="lightyellow">
						<p align="justify">
							How-factor is an enticing engineering feat. Deep details of the process is out of scope for
							this forum but is available in Baanda scholarship for interested people.
						</p>
						<p align="justify">
							Baanda engineers have traversed different strata of AI (artificial intelligence) and have
							realized that it is too limiting to understand an individual. AI has started with
							preliminary statistical mechanics as BI (business intelligence). Over time, with the
							increase of computing power and data volume, AI has used more sophisticated
							machine-learning, using sophisticated ANN (artificial neural network) endeavoring to mimic
							shadowing understanding of human, leading to deep learning to do more sophisticated tasks as
							recognizing entities, people via sight or sound.
						</p>
						<p align="justify">
							In more recent years, scholars are realizing the limitation of computing. While mechanistic
							work (e.g. robotics) to self-driving machine to propel spaceships out of our heliosphere is
							possible, it alludes understanding of an average mind and her feelings. Using LLN (law of
							large numbers), it is possible to predict a possible outcome of an individual with some
							traits with some probability but, asserting ‘one’ human is unimaginable. After all, human’s
							often do not understand themselves and are filled with apparent irrationality that makes
							humanity such a magnificent creation of Mother Nature.
						</p>
						<p align="justify">
							Lately, scholars are embarking on AI oriented on Causal Inference and looking far past
							Turing tests to perceive something called Strong-AI (near human AI). But, all the
							sophistication of machine is at best ‘a good tool’ to do some work catering to humanity.
						</p>
						<p align="justify">
							Many people say that not all individuals have same capacity and/or are good. Baanda scholars
							ask, ’good for what?’ As Albert Einstein once said, “Everyone is a genius. But, if you judge
							a fish by its ability to climb a tree, it will live forever its whole life believing it is
							stupid.” A very good manager who earn a lot of money will be useless and stupid if there is
							not managerial job left in a self-organizing society. Baanda intends to find a genius and a
							point of view of individual, though that genius may not be a definition of genius by most
							others.
						</p>
						<p align="justify">
							Being a machine, Baanda is well aware of its limitations. Baanda engineers humbly admits the
							limitation. Going past this preamble, Baanda intends to visualize Marketspace to connect
							people t- people by understanding individuals. Individual is understood based on many
							dimensions and a dynamic (ever changing) profile is made. Baanda has something called
							‘invisible parameter’ to emulate irrationality of an individual based on that one’s life
							story.
						</p>
						<p align="justify">
							Baanda’s ideology is wellbeing of many in contrast to well-being of the few that is the
							centerpiece of the hierarchical socio-economy prevailing for millennia. This marketspace is
							where Baanda intends to facilitate cooperation among individuals, which is Baanda’s mission
							statement.
						</p>
					</font>
					<div className="textspaceTop" />
				</div>
			);
		}

		return (
			<div>
				<div className="row">
					<div className="col-12">
						<button
							id="1"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							1. What is Baanda MarketSpace service offerings? How is this relevant to Baanda vision?
						</button>

						{aboutAns1}
						<button
							id="2"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							2. What is Ripple Message Propagtion and it's difference
							with the broadcast mechanisms?
						</button>
						{aboutAns2}
						<button
							id="3"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							3. What is an intelligent match?
						</button>
						{aboutAns3}
						<button
							id="4"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							4. What features will be contained in (2019) Market Space pipeline (condition to
							resourcing)?{' '}
						</button>
						{aboutAns4}
						<button
							id="5"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							5. What is MarketSpace's long term vision (beyond 2019)?
						</button>
						{aboutAns5}
						<button
							id="6"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							6. Can people adversite in Baanda Market Space (explain)?
						</button>
						{aboutAns6}
						<button
							id="7"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							7. How is this MarketSpace individualized per Baanda ideology?
						</button>
            {aboutAns7}
            <div className="footerspace" />
					</div>
				</div>
			</div>
		);
	}
}

export default SXOverview;
