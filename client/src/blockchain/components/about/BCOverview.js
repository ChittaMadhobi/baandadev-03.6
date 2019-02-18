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
					<font color="blue">Ans 1: </font>
					<div className="textspaceTop" />
				</div>
			);
		}

		if (btnClickNo === '2') {
			aboutAns2 = (
				<div>
					<font color="blue" />

					<div className="textspaceTop" />
				</div>
			);
		}

		if (btnClickNo === '3') {
			aboutAns3 = (
				<div>
					<font color="blue">Ans 2: </font>
					<div className="textspaceTop" />
				</div>
			);
		}
		if (btnClickNo === '4') {
			aboutAns4 = (
				<div>
					<font color="blue">Ans 4: </font>
					<div className="textspaceTop" />
				</div>
			);
		}
		if (btnClickNo === '5') {
			aboutAns5 = (
				<div>
					<font color="blue">Ans 5: </font>
					<div className="textspaceTop" />
				</div>
			);
		}
		if (btnClickNo === '6') {
			aboutAns6 = (
				<div>
					<font color="blue">Ans 6: </font>
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
