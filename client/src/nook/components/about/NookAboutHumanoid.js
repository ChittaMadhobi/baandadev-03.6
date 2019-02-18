import React, { Component } from 'react';

class NookAboutHumanoid extends Component {
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
    let aboutAns8 = null;
    let aboutAns9 = null;
    let aboutAns10 = null;
    if (btnClickNo === '1') {
      aboutAns1 = (
        <div>
          <font color="blue">Ans 1: </font> Spontaneous back and forth, human-like conversation is
          the holy grail of artificial intelligence research. It's not just canned chatbot responses,
          but includes emotion and sentiment analysis, facial expression recognition, tonality of voice
          recognition, etc. Baanda will eventually have humanoid conversation abilities, but it will not have its
          own emotions, feelings or bias. It will be intelligent enough to recognize these in a human being
          and it will be programmed to respond appropriately with sympathy, encouragement, etc. Much of
          human communication is non-verbal and non-linguistic, using various technologies, baanda will
          be able to pick up on subtle clues such as micro muscle movement in the face, heartbeat increase,
          flutter in the voice, etc.
          
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '2') {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> There is a lot of research on why we like to talk to robots
          and the psychology around why we become attached to them. In regards to Baanda, a few reasons 
          come to mind. Firstly, Baanda provides an unbiased viewpoint. You can't pay or manipulate your way to a better experience
          with Baanda - everyone is treated equally. That's the whole point and only an artificial intelligence
          can be that unbiased party. Secondly, Baanda doesn't judge. For a multitude of reasons, you might be afraid to reveal to friends/family 
          about certain aspects of your personality or desires, but there is no fear in telling it to Baanda.
          In fact, Baanda would try to help you realize those desires if that was something you wanted 
          rather than trying to squash them due to bias or assumptions. This is why Baanda security is our highest priority and our
          biggest challenge. Baanda must protect your feelings and vulnerabilities. That is not because
          Baanda itself feels something, but because that is what it is programmed to do.
          
          
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 3: </font> Our brand of AI is not machine learning or deep 
          learning. In Baanda, individuals are never statistics. We will be using the concepts of 
          causal inference – the causal analysis of multivariate data using the general theory of 
          causation described by Judea Pearl which provides a coherent mathematical 
          framework for our AI. 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '4') {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font> Artificial intelligence cannot replace human to human 
          interaction. 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '5') {
      aboutAns5 = (
        <div>
          <font color="blue">Ans 5: </font> Machine learning is based in statistics. Baanda will not
          treat individuals as statistics. Our brand of AI is based on causal inference and is a much 
          more nuanced and contextual approach.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '6') {
      aboutAns6 = (
        <div>
          <font color="blue">Ans 6: </font> IoT devices can give Baanda greater detail into how an
          individual is feeling. Heartbeat and pulse rate sensors can indicate fluctuations due to 
          various situations. Those are the simplest devices, but there are so many possible
          biometric sensors that Baanda could use to glean information about an individual's 
          emotional state. 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '7') {
      aboutAns7 = (
        <div>
          <font color="blue">Ans 7: </font> This is the answer 7
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '8') {
      aboutAns8 = (
        <div>
          <font color="blue">Ans 8: </font> This is the answer 8
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '9') {
      aboutAns9 = (
        <div>
          <font color="blue">Ans 9: </font> This is the answer 9
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '10') {
      aboutAns10 = (
        <div>
          <font color="blue">Ans 10: </font> This is the answer 10
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
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              1. What is humanoid conversation?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. What is the need for humanoid conversation?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. How does it work?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. What are the shortcomings of Baanda humanoid conversation?
            </button>
            {aboutAns4}
            <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. Why is Baanda not using traditional machine learning based AI?
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. What role will IoT devices (sensors) play in Baanda humanoid conversation?
            </button>
            {aboutAns6}
            <button
              id="7"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              7. ?
            </button>
            {aboutAns7}
            <button
              id="8"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              8. ?
            </button>
            {aboutAns8}
            <button
              id="9"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              9. ?
            </button>
            {aboutAns9}
            <button
              id="10"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              10. ?
            </button>
            {aboutAns10}
          </div>
        </div>
      </div>
    );
  }
}

export default NookAboutHumanoid;
