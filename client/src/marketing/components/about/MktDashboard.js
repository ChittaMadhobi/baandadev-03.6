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
          <font color="lightyellow">
          <p align="justify">
          Once something is posted in marketspace (anywhere in Baanda), there would be activities around it. A catalog will change. A crowdfund will need participation, contribution, or expense request raised and responded etc. A marketing campaign will have its activities based on intelligence, push-backs to be replied, messaged and so on. 
          </p>
          <p align="justify">
          All activities around posting, including message exchanges in the marketspace is done in Dashboard.
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
          Yes of course. The context of catalog would be different from that of crowdfunding, investment or message propagation. Each of their intelligence briefs would be different.  
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
          There will be two main types of activities in this space. 
          </p>
          <ul>
            <li>
            The one who initiates and manages the crowdfunding or investments.
            </li>
            <li>The others who participate.  </li>
          </ul>
          <p>In either case, there would be activities to know the:</p>
          <ul>
            <li>
            The details of the post going forward.
            </li>
            <li>
            Details of the state of the crowdfunding.
              </li>
              <li>To raise a request (for manager who initiated) </li>
              <li>Respond to a request. </li>
              <li>Get to the request list for approvals. </li>
              <li>Contribute and/or invest. </li>
          </ul>
          <p align="justify">The outline of this is already in place and  is controlled using blockchain. Please check it out. </p>
          </font> 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '4') {
      aboutAns4 = (
        <div>
          <font color="lightyellow">
          Coming Soon (next release):
          <p align="justify">
          Catalog can be compared to exposer to a shop or bazzar. Increasingly, there would be immersive experience. However, the shopkeeper or presenter may provide an in-person appearence in video (eventually via holographic presentation). This would be divided into two parts. One is from the POV of the presenter or shopkeeper. The other is that of a custmer.  
          </p>
          <p align="justify">
          In line with no-advertisement policy in Baanda, catalog will not be just presented. However, it can be reached via two channels. 
          </p>
          <ul>
            <li>A person may browse to a catalog (from browse button)</li>
            <li>A person's need has been matched and is directed to the shop (virtual) or the catalog.</li>
          </ul>
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
          Message propagation most likely will have least dashboard activities among other marketspace services. However, there could be two major type. One is to see the nature of the propagation and what is the sentiment among the recipient. This may require sender to adjust his/her message. The second is to respond to pushbacks. There may be three kinds of reponse to ripple.  
          </p>
          <ul>
            <li>Inactivity by the recipient</li>
            <li>Eagerly forwards with high energy</li>
            <li>Either push back or has questions around the propagation. This will entail you to respond. Imagine, you said something to your friend in ancient marketspace. Instead of directly gossiping, she/he asks you for clarification or wants to know  the facts or source of it. This will require you to actively either respond one-to-one or create a list of Q&A that will respond to all questions raised or refer to digital assets or even person (if needed for in-person interaction) of interest.</li>
          </ul>
          </font> 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '6') {
      aboutAns6 = (
        <div>
          <font color="blue">
          <p align="justify">
          One of the characteristic of infamous Pyramid Scheme is that one asks people to contribute to participate with the promise that, if they do, the next layer's contribution/sales/whatever will increase their income. However, parts of all contribution reach to the top and top-layers has no deliverables.
          </p>
           <p align="justify">
           When user of baanda incentivise for (say) message propagation, the participant do not need to:
           </p>
           <ul>
             <li>Pay back anything to the requestor</li>
             <li>Incentive may be in reputation or via other means (e.g. recorded favor)</li>
             <li>Incentive is based on delivery (e.g. say, message propagation)</li> 
           </ul>
           <p align="justify">In some ways, incentivizing for ripple-messaging is like saying, 'if you do this work then you will get paid beyond just being a good friend.' It is siilar to incentivizing for helping collegue out via assistance in service sxchange. If/when one helps, the helper may get some point (income, with promised concent) from the person who is helping. This incentive could be in reputation too that will tell others that someone is a helpful person.</p>
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
          In life, people work and cooperate together based on explicit or implicit agreements. From ancient times, people would use marketspace to have witness to an agreements. In increasingly anonymous and dynamic world, such witness are hard to find and enforcement of such agreements become difficult.
          </p>
          <p align="justify">
          Baanda enables explicit agreements via Blockchain and implicit agreement via context of promise. In some explicit agreements, there may be an escrow or event-triggered via agreements done in Blockchain. The enforcement in case of escrow is via deliverance or not of the agreement based on the outcome. In event driven smart contract, the event is watched and corresponding actions is taken.   
          </p>
          <p align="justify">
          Whether implicit or explicit, agreement kept or not-kept effects one's reputation or DCCS. Effectively, DCCS will not only state what the repouation is but is backed by immutable events and facts to back the reputation in a very objective way.
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
              1. What does MarketSpace Dashboard supposed to do?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. Would dashboards of various contexts vary?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. How will dashboard behave for Fundraising from an individual's POV?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. How will dashboard behave for Catalog Publishing from an individual's POV?
            </button>
            {aboutAns4}
            <button
              id="5"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. How would message propagation work and how is ripple different from conventional mass-influencing?
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. How would incentivizing propagation be different from pyramid schemes?
            </button>
            {aboutAns6}
            <button
              id="7"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              7. How would blockchain assist MarketSpace philosophicall and operationally?
            </button>
            {aboutAns7}
          </div>
        </div>
      </div>
    );
  }
}

export default SXDashboard;
