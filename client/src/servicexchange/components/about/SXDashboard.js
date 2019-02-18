import React, { Component } from 'react';

class SXDashboard extends Component {
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
          <font color="blue">Ans 1: </font> The SX Pursuits section lists whatever you are pursuing in the job
          world - whatever you already posted up. You don't have to look in several places to find all your
          postings. They are all in one place.
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '2') {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> The SX Message Center is the place to connect to prospective &
          current employers, co-workers, mentors, apprentices, co-op members, team members, etc. Click on
          a magnifying glass to the right of a name to open the message modal. Click on 'Sender' to see  
          the senders's post so that you know how or why you got connected. If you click on 'Text',
          the messages will open in the window. Click on 'Switch to Send' to send a message. You can choose
          Audio, Video or Text. Audio will record an audio message and video will record an audivisual message.
          If you click on Text, you can speak your message and then edit it using editing tools. The last part 
          of message sending is sharing your DCCS - Dynamic Co-operative Chemistry Score. You get to choose which 
          parts of your DCCS that you want to share. DCCS is growing and changing as you use the system more
          and more. If you look at DCCS Send Controls, and click on 'Review', you will see samples of the kind 
          of charts, graphs and information that the system can share with others at this time. 
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 3: </font> Only Help-Requesters, Co-op Leads and Mentors can initiate 
          agreements. Multiple people can be tagged in the agreement as approvers who have some stake or
          involvement in the agreement. Agreements are written documents that are saved in the blockchain. 
          Agreements can be about anything, but in the Service Xchange, we are focusing on work agreements
          or contracts that state the details and scope of the work, the expectations, the deliverables, the
          time factors, the payment, etc. We suggest making your contracts as detailed as possible. When
          Baanda goes live, we will provide more guidelines about how to write a good contract to protect
          everyone involved to get the best outcome and to prevent conflict. Baanda will also allow you to 
          amend and update your agreements by going through the same approval process.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '4') {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font> In addition to helping you find a job or find workers to do a job
          and making solid agreements, Baanda also helps you manage your projects. Our project management
          system is based on well-known project management philosophy and methodology. We make it easy, but
          we don't dumb it down so much that it no longer resembles a project. Baanda takes you through the
          steps to define a project, the baseline tasks and even helps you make cost and time projections. 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '5') {
      aboutAns5 = (
        <div>
          <font color="blue">Considerable toolinh is being put in place for conflict resolutions. In Dasboard->Project, there is a button that enables conflict resolution processes. On each panel, there is a how-to button that details what the user should do or expect from. </font> 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '6') {
      aboutAns6 = (
        <div>
          <font color="blue">Baanda will enable multiple decision process. In Dashboard->project there is a button named 'decision.' That takes the user step-by-step process for coming to a decision. Baanda also will mine intelligence on the outcome of decisioning process to finetune its own methodology by learning from it. </font> xx
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '7') {
      aboutAns7 = (
        <div>
          <font color="blue">In most prevailing socio-economic systems and almost alll legacy systems, data was fed by humans. Progressively, there would be billions of IoT devices that will work as sensors and actuators. These can be used to both get data and provide intelligence based guidance to both humans and machines to work.</font> 
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
              1. What do you mean by pursuits?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. What is the message center for?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. What is the agreement section about?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. What is the project section for?
            </button>
            {aboutAns4}
            <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. What if we have a conflict?
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. Can Baanda help us make decisions?
            </button>
            {aboutAns6}
            <button
              id="7"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              7. What is the IoT Feed for?
            </button>
            {aboutAns7}
          </div>
        </div>
      </div>
    );
  }
}

export default SXDashboard;
