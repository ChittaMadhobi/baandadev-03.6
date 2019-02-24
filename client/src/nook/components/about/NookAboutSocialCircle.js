import React, { Component } from 'react';

class NookAboutSocialCircle extends Component {
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
    // let aboutAns7 = null;
    // let aboutAns8 = null;
    if (btnClickNo === '1') {
      aboutAns1 = (
        <div>
          <font color="blue">Ans 1: </font> First, fill out your Nook profile. After you assess
          yourself, then you can 'Request Connections' and invite people to your Social Circle.
          The people you invite to your Social Circle are people who can and will give you an 
          honest assessment and reflection. The Social Circle allows Baanda to analyze how the people around you
          see you and through that assessment, you can get an idea of where you excel and where
          you need to improve at any point of time. The assessment will be dynamic and the people 
          in your Social Circle can be swapped in or out at any point of time to get a more relevent 
          reflection. 
          <p> </p>
          <p>
            When you invite someone to you Social Circle, they will receive an email or a text message.
            Once the person accepts the invitation, he/she can start to assess you by answering questions
            with respect to you - how he/she views you. 
          </p>
          <p>You will get a report that averages the responses from the people in your Social Circle,
            but you will not know exactly who said what about you. That is why we suggest that you choose
            your social circle wisely. You might want to choose a combination of people who care deeply
            about you, a few who you know will give you tough love, a few who are new to your life, a
            few who have known you for years, maybe even a few people who you don't even like! </p>
            <p>The idea behind all this honesty is not to beat yourself up about it. We all have
              strengths and weaknesses. In fact, depending on the 
              situation, most strengths are weaknesses and vice versa. When you know what they are, 
              you have a better chance of using them to your advantage and Baanda can help you with
              that.

            </p>
          <div className="about-bottom-buffer" />
        </div>
      );
    }

    if (btnClickNo === '2') {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> In prevailing social media, you get to present 
          yourself in whatever way you want. Usually, people present themselves only in the most 
          positive light. In Baanda, you get a reflection back from people you know and have 
          invited to your Social Circle. When your circle assesses you, you earn
          scores in various dimensions of your personality. Those scores are call DCCS - dynamic
          co-op chemistry scores. You can choose which scores, when and who you want to
          present them to. 
          <div className="about-bottom-buffer" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 3: </font> Select people who know you enough to score you and
          will do it honestly. We suggest that you select a diverse group of people who have 
          different kinds of interactions with you. You don't want to choose only your best friends
          and buddies, you really need to mix it up so that you get more useful scores. 
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    if (btnClickNo === '4') {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font> It will show you the scores from your social circle
          averaged in the form of graphs and meters. DCCS is multidimensional so there will be many more
          scores and gauges than what you see now.
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    if (btnClickNo === '5') {
      aboutAns5 = (
        <div>
          <font color="blue">Ans 5: </font> The three parts are Invite, Connect and Assess.
          <p> </p>
          <p>
            Invite - When you invite someone to your Social Circle, the invitee will receive a message
            from you asking if they accept or decline. If they choose to accept, Invitees must first 
            create a profile in Baanda in order to participate. It is not automatic that you become
            a part of their Social Circle. It is up to the invitee to invite you. Currently, your Social
            Circle is limited to 15 people. (See question 6 for the reasoning behind that.) The Social
            Circle is meant to mimic real life in that the people who are important in your life at any point of time
            are often in flux.
          </p>
          <p>
            Connect - Messages can be filtered by Invitations and Messages. In this section, you can
            only send messages to people you have invited to your Social Circle or the people who you have
            accepted to be a part of their Social Circle. There is another messaging center outside of the 
            Nook where you can send a message to anyone you like.
          </p>
          <p>
            Assess (Reflect) - 
          </p>
          <p>
            Assess (Reflection - Mirror Mirror) - 
          </p>
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    if (btnClickNo === '6') {
      aboutAns6 = (
        <div>
          <font color="blue">Ans 6: </font> This is an arbitrary limit for considering close-circle at a point of time to get right reflection. This is opposite to what social-media did where people advertised themselves. It is for interosepction and for me to understand who you are as a continuously morphing personality and life-contexts. The weighted-average of contextual feedback on time-series (adjusting moment-by-moment) becomes marginal with more people while computational cost-time increases. In future, this (15 in close social circle) may change based on utilization feedback and me learning about human beings (you).
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    // if (btnClickNo === '7') {
    //   aboutAns7 = (
    //     <div>
    //       <font color="blue">Ans 7: </font> This is the answer 7
    //       <div className="about-bottom-buffer" />
    //     </div>
    //   );
    // }
    // if (btnClickNo === '8') {
    //   aboutAns8 = (
    //     <div>
    //       <font color="blue">Ans 8: </font> This is the answer 8
    //       <div className="about-bottom-buffer" />
    //     </div>
    //   );
    // }

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <button
              id="1"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              1. What does Nook's social circle do and how do I fill out this weird form?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. How is Nook's social circle different from prevailing social
              media?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. Who should I select for my social circle?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. What does the button 'Mirror Mirror' show me?
            </button>
            {aboutAns4}
            <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. What are the three parts of the Social Circle module?
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. Why is the Social Circle limited to 15 people?
            </button>
            {aboutAns6}
            {/* <button
              id="7"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              7. More Tasks and social circle questions ...?
            </button>
            {aboutAns7}
            <button
              id="8"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              8. More Tasks and social circle questions ...?
            </button>
            {aboutAns8} */}
          </div>
        </div>
      </div>
    );
  }
}

export default NookAboutSocialCircle;
