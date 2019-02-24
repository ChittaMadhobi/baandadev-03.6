import React, { Component } from 'react';

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
					The future is uncertain in every respect. For two or more humans to work together, they need to contain this uncertainty with a set of possible conditions and come to a consensus what they agree to do if or when such conditions arise. This setting up of future possible cause-and-effect entropy or policy is an agreement. Agreement may be implied with reference to the underlying framework or social structure. For example, if one is born in a country, implicitly the person accepts the terms and conditions of being a citizen along with the privileges of it.  In most business cases, working-together, or living together, more explicit agreements are forged with various outcomes as best people involved can imagine about the states of the future
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
					In any agreement there needs to be a way to figure out three major factors beyond the content of the agreement. First being immutability (a contract signed off by participants is fixed until formal amendments). Secondly, there has to be witnesses. Thirdly, if a participant does not abide by the and effect that is agreed upon then how is the consequence enforced. 
					</p>

					<p align="justify">
					Traditionally, there were various kinds of centralized authorities, depending on the context, who would be responsible for the custodians of those tasks above. However, in a morphing society of today agreements can be forged where multiple anonymous people could be witnesses and make the agreement immutable using Blockchain technology.
					</p>

					<p align="justify">
					Ethereum has coined the word Smart-Contract that allow certain types of agreements be made immutable and some events watch and trigger next set of events. In other cases, the same technology can hash (convert a digital asset – text, audio, video, pictures, document into a unique string of characters) and stored to make the document immutable. Even if one character of the asset changes, the hash will change telling the viewer that document has been tampered. 
					</p>

					<p align="justify">
					The third factor, dealing with consequence of breaking an agreement, is non-trivial. In prevailing world, there are court system and law enforcement systems use various methodologies to force people to abide by agreements. The premise is people’s trust on centralized authority of government, banking etc. In emerging distributed socio-economy, that would be increasingly difficult. The enforcement of disobeying smart-contract based agreements is discussed marginally in #5 (DCCS). 
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
					The term ‘intelligence’ should be discussed before drawing the difference between the human and machine. Intelligence is a process of an entity (humans mainly but not confined to humans only) receiving some input signals from the environment; make a sense of the input signals; analyze them based on existing knowledge of past; based on the patterns of the past, draw a conclusion of the outcome or the underlying meaning of the signals.
					</p>
					<p align="justify">
					All life-form including humans, feels the world around and only a little of communication happens using linguistic process. A language is use to modulate sound (spoken) or light (read/seen) to communicate perception of one’s mind to another. At the end, all decisions by all lifeform uses feelings. This is basis of human intelligence. Humans continuously learn through these environmental interactions and enhances its knowledge base to interpret the next incoming signals
					</p>
					<p align="justify">
					Computers that can mimic some of this aspect of humans is called artificial intelligence or machine intelligence. The process of readjusting a machine’s memory and process without any human intervention is called machine learning.
					</p>
					<p align="justify">
					Machines use only numbers and do not feel. Even when is pretends to understand or sense environment via IoT devices, all signals are converted into binary number and then processes. Machines also do not take decisions via feelings. The decision making is based on computational outcome and behavior may be empirical or stochastic. 
					</p>
					<p align="justify">
					There are two relatively new advent of AI (artificial intelligence or machine intelligence) called Causal Inference and leading to strong AI. Increasingly, the external perception of a machine is becoming indistinguishable from humans. 
					</p>
					<p align="justify">
					However, the machine is still digital and humans (all life) are elector-chemical and analogue in nature. We, as human race collectively, have a long way to learn about life and our own intelligence. In the meantime, Baanda propose to use Causal Inference leaning towards strong AI for helping improve quality of life across humanity.
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
					4.	AI, a term coined in 1955, has and is going through evolution. Both terms, AI (Artificial Intelligence) and IA (Intelligence Augmentation) are siblings from the same period. The first-generation utilization was in form of statistical processing leading to business intelligence (BI – from static data). Later, with improved processing powers and access to larger volumes of data, static nature of BI converted into ML (machine learning). Subsequently, with access to more data, powerful processors, and intent of recognitions and handle cause-and-effect entropy for identification or self-governing machine gave rise to a sub-group of machines learning called Deep-learning. For a long time, Turing Test was a test to state intelligence of a machine is a conversation is unrecognizable if the it was with a human or a machine. 
					</p>

					<p align="justify">
					However, machines being digital and humans are not, there has been a chasm of difference between the two. Lately, pivoting on the works of Prof. Judea Pearl, a more sophisticated cause and inference-based (Causal Inference) mimicking of human intelligence is being adopted (like in Baanda) for machine to interact with humans via interpreting human emotions. He next layer is combination of Causal Inference with deep learning used in robotics to create near perfect mimicking of human intelligence (From the surface). 
					</p>

					<p align="justify">
					As of, no machine concept is known to be energized or uplifted to change the state of the machine that we (humans) do when they listen to music, a beautiful fork of art, and a dear friend. State of machine does not change or are able to feel fear. Sexual desire, an inherent part of life, is still not a driver in machines. Love and hate are still digital shadow, if artificially enacted, to mimic humans as in strong AI. Hence, however close copy of the shadow of machine intelligence we may be able to make, human intelligence is far more sophisticated, and mostly unknown to us. 
					</p>

					<p align="justify">
					umanity may replace a bus-driver, a miner, or a pilot with a machine. But, the human in the bus driver, pilot, or the miner cannot be replaced in our wildest imagination as of now.        
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
					When a person borrows something, lender wants to know whether it would be returned in time and with a prize for lending in the time of borrower’s need. So, lender would ask others to see if borrower is reliable. In 1956, mathematician Earl Isaac teamed up with Bill Fair to create a standardized impartial credit scoring system for lending and borrowing. In 1989, the current FICO score system became the industry standard. 
					</p>

					<p align="justify">
					The only ‘context’ for credit score is around financial transaction. What about the rest of the life dimensions? What about all the other contexts? Not only that, for humans, there cannot be a standard score for a context. Something, popularly known as chemistry, exists between or among people and is sensitive to point-of-time. Two people can be perfect friends with each other but not with another and society would say that there is no chemistry between them.
					</p>

					<p align="justify">
					Baanda’s main premise is to propagate co-operation, togetherness, and enhance life-quality. And, via co-operation-based society the transformative socio-economic endeavors, move world from centralized governance and control to more distributed and self-governing society. In this dynamic world, strangers will need to work and require trust to forge co-operations.
					</p>

					<p align="justify">
					DCCS (Dynamic Co-operation Chemistry Score) is a process of Baanda interacting with an individual in all their life-dimensions, contexts, and society to create a dimensional scoring process. Then present the score, upon request and approval, for a purpose and around a context, among or between people who will interact in some life-scenario. At this point, DCCS does not directly include FICO score but could reach out and augment that if needed for a purpose of the context. Baanda expects DCCS will evolve, like everything else, based on the learning from its impacts.  
					</p>

					<p align="justify">
					When Baanda helps forging agreements among people for some purpose, DCCS will play an integral role, just like credit-score plays an integral role in financial contracts in the society. 
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
					<p align='justofy'>
					All agreements in human society is temporary in nature. Life happens, context changes, mandating amendment of prior agreements. However, it is also necessary the history of the present agreement and how it has evolved. A well-known example would be property titles where ownership change and title retain the history of ownership. 
					</p>
					<p align='justofy'>
					All blockchain based agreements are immutable. In case of amendment, one cannot just go and change the prior agreement. However, Baanda will enable creation of a new agreement, deactivate the old agreement operationally, and chain these agreements. This, in Baanda scholarship, is called Soft-chaining.  
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
							AI refers to taking decision of all kinds based on facts and stringent logical manipulation
							to predict a possibility with high probability and decide do something about it. Reader must
							be mindful that humans do not take decision based on data or algorithms but based on
							feelings. Outcome of observations of data manipulation may lead to a feeling that leads to a
							decision but, at the end, it is the feeling that drives a human decision. This is a vital
							difference, among others, between typical AI and human intelligence. An emerging AI, past
							Causal Inference, known as Strong-AI, that leads to humanoid interaction between human and
							machines. This Strong-AI is Baanda's vision.
						</p>
						<p align="justify">
							Blockchain, under veil of complex algorithms and all kinds of buzz words, solves one major
							problem of handling transaction without real money and central authority. This is known as
							double-dip problem. That is, if in a computer a number is associated against your name, that
							number (r part of the number) can be only given out one time. In recent years, the same
							concept is used for various number based socio-economic problems beyond currency handling
							(e.g. voting, escrow, some gambling etc.).{' '}
						</p>
						<p align="justify">
							Baanda uses best of both worlds to enable humans to interact and cooperate intelligently
							while using Blockchain’s immutability. Please refer to the white papers or reach out to
							Baanda scholars for more.
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
							1. What is an agreement in human society?
						</button>
						{aboutAns1}
						<button
							id="2"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							2. What is Smart Contract and its relation to Blockchain technology?
						</button>
						{aboutAns2}
						<button
							id="3"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							3. What is the main difference between human-intelligence and machine-intelligence (AI) ?
						</button>
						{aboutAns3}
						<button
							id="4"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							4. What are different categories, or evolution of AI?
						</button>
						{aboutAns4}
						<button
							id="5"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							5. What is DCCS and how does it associate with Baanda based agreements?
						</button>
						{aboutAns5}
						<button
							id="6"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							6. What is Baanda softchaining and how does it relate to human society and cooperation?
						</button>
						{aboutAns6}
						<button
							id="7"
							className="btn btn-outline-light btn-sm btn-block text-left"
							onClick={this.handlePostClick}
						>
							7. What is Baanda’s AI & Blockchain companionship??
						</button>
						{aboutAns7}
					</div>
				</div>
			</div>
		);
	}
}

export default SXOverview;
