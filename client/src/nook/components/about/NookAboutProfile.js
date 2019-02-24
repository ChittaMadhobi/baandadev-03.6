import React, { Component } from 'react';

class NookAboutProfile extends Component {
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
    if (btnClickNo === '1') {
      aboutAns1 = (
        <div>
          <font color="blue">Ans 1: </font> Your name and phone number are mandatory. 
          The rest is optional, but the more information you give, the more Baanda will
          be able to assist you.<p> </p>
          
          <p>Preferred Name: Your preferred name is how you want Baanda to address you. For example, your name
          is Jeffrey, but everyone calls you 'The Dude' and you like that nickname too. Baanda
          will call you whatever you like.</p>
          <p>Preferred Pronoun: Your preferred pronoun is the gender you identify yourself with. You can also
          say, 'Just my name, please.'</p>
          <p>Age you Feel: The age you feel is not necessarily your chronological age. The numbers and
          descriptions are guidelines. Don't overthink it. You can change it anytime.</p>
          <p>How you feel Physically and Mentally: Your physical and mental attributes are ballpark answers. It simply gives Baanda
          a general sense of who you are today. You can always change your answer later if you want. 
          Baanda knows that human beings may change how they feel about themselves from one day 
          to the next, or one minute to the next in some cases.</p>
          <p>Share a snippet of your life: You can write anything. What makes you special? 
          What makes you tick? What did you do last night? What do you like to think about? 
          Remember, it's just you and Baanda here. Baanda is AI and doesn't judge.</p>
          



          
          <div className="about-bottom-buffer" />
        </div>
      );
    }

    if (btnClickNo === '2') {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> The system is designed to assist you. The more
          it knows about you, the more it will be able to do it's job.
          <div className="about-bottom-buffer" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 2: </font> Right now, there are three parts to the Nook
          profile - the basic profile, a self-evaluation and a personality test. These 
          are the ways that Baanda will begin to know you. Don't worry too much about
          your answers because Baanda will not make snap judgements about you based on 
          them. It is more of a starting point and as time goes on, Baanda will know you
          based on other methods such as causal inference.
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    if (btnClickNo === '4') {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font> Absolutely. Change is expected.
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    if (btnClickNo === '5') {
      aboutAns5 = (
        <div>
          <font color="blue">Ans 5: </font> Most likely. 
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    if (btnClickNo === '6') {
      aboutAns6 = (
        <div>
          <font color="blue">Ans 6: </font> That is the great leap forward. Eventually
          there will be virtual assistants that will be able to engage in turn-taking
          conversations. In addition to speech recognition, natural language understanding
          and machine learning, these virtual assistants will be able to detect your
          emotions, your mood and your persona. 
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    if (btnClickNo === '7') {
      aboutAns7 = (
        <div>
          <font color="blue">Ans 7: </font> Baanda's job is to be your virtual assistant.
          The more it knows about you, the more it can find opportunities for you or help 
          you make connections with people who you have chemistry with or shared interests.
          Baanda is like that friend who introduces you to someone new and says you guys 
          have so much in common. At Baanda, we use a term called "mining talent". We
          believe that everyone has talent and sometimes we don't even realize that the
          thing that we're good at naturally can have a greater purpose. Baanda's goal is
          to bring those talents to light.
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    if (btnClickNo === '8') {
      aboutAns8 = (
        <div>
          <font color="blue">Ans 8: </font> Absolutely. Baanda understands that human beings 
          are changeable creatures.
          <div className="about-bottom-buffer" />
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
              1. What are the minimal requirements of the profile? And how do I answer these
              weird questions?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. Why is the Nook profile needed for Baanda services beyond signup
              registration?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. What are the different aspects of the Nook profile in the immediate
              future?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. Can I change the slider scales of my different life aspects over time?
            </button>
            {aboutAns4}
            <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. Will the Nook eventually retain my biometric information? 
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. What is conversational persona detection?
            </button>
            {aboutAns6}
            <button
              id="7"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              7. Why does Baanda need to know my personality, traits, values,
              point-of-view and life-contexts?
            </button>
            {aboutAns7}
            <button
              id="8"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              8. My aspirations and dreams in life will change. Will Baanda
              morph based on my changes?
            </button>
            {aboutAns8}
          </div>
        </div>
      </div>
    );
  }
}

export default NookAboutProfile;
