import React, { Component } from "react";

import './mktAbout.css';

class SXPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer1: "",
      answer2: "",
      answer3: "",
      btnClickNo: ""
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
    if (btnClickNo === "1") {
      aboutAns1 = (
        <div>
          <font color="lightyellow">
          <p align="justify">
          Baanda philosophy of crowdfund is neither confined to finance nor ‘fund with blind trust’ syndrome. The significance is that Baanda crowdfund is really asking for your cooperation. For example:
          </p>
          <ul>
            <li>
              <p align="justify">
              You can fund via financial assistance but also via your service or goods & material. The values of your service or good-and-materials will be included as your funding.
              </p>
            </li>
            <li>
              <p align="justify">
              All accounting is transparent. If you participate, you will be able to see how it is being spent.
              </p>
            </li>
            <li>
              <p align="justify">
              At the time of setting up the crowdfund process, the requestor states the base-agreement or policy / constitution that the team will follow and Baanda will watch.
              </p>
            </li>
            <li>
              <p align="justify">
              Based on transparent policy, donner will be able to participate in spending decision making. The manager will raise requests and you will approve and disapprove
              </p>
            </li>
            <li>
              <p align="justify">
              Most of the time, your donation will be held in an escrow. Upon approval, it will be paid to the vendor of the service and all donners will know how it is being spent
              </p>
            </li>
            <li>
              <p align="justify">
              The donners can also ask for audio-visual involvement (if/when IoT devices are included). That way, Baanda will enable you to see and hear the implementation of fundraising vision.
              </p>
            </li>
            <li>
              <p align="justify">
              Accounting will be transparent. When you log into your account in Baanda, you will see how much you have donated and how it is being used.
              </p>
            </li>
            <li>
              <p align="justify">
              Every agreement, approvals, accounting would be handled by blockchain making everything immutable. 
              </p>
            </li>
            <li>
              <p align="justify">
              In subsequent phase, the crowdfund will be backed by DCCS (dynamic co-op chemistry score) to see the reputation of the team, the endeavor and/or the people involved. Also, how they handle the proceeds will show up in their subsequent DCCS and hence participants will be careful. 
              </p>
            </li>
            <li>
              <p align="justify">
              Crowdfunding would be open for investment where, at the on-set will expose how your investment will be handled. 
              </p>
            </li>
            <li>
              <p align="justify">
              In 5 years, vision, during the crowdfunding phase and during the implementation, a participant will be able to have an immersive experience via holographic interfaces.  
              </p>
            </li>
          </ul>
          <p align="justify">
          Your crowdfunding can be propagated as broadcast via Baanda as well as ripple (gossip) each having its own advantage and efficiency (discussed in next section).
          </p>
          </font> 
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === "2") {
      aboutAns2 = (
        <div>
          <font color="lightyellow">
          <p align="justify">
          Message propagation is a process of sending a message with a purpose to others. There are various ways of messaging through the history. In ancient times, pharaonic monuments or enormous nature of religious monuments including pomp and pageantry was part of messaging.
          </p>
          <p align="justify">
          In modern time, making a message visible/auditable to many is the default process. It is done via various media and/or mass email broadcast with the hope the recipient will pay attention. The purpose is generally (not restricted to) to sale/market goods and services or used by politicians to gain power or keep them in power. Broadcast principle plays with law of numbers. The philosophy is, if a million people see the message, 10% (or 100,000 pays attention) and 10% of that purchase the merchandise then one has sold 10,000 of them. The cost of the broadcast is folded into the cost of the product to make it viable. 
          </p>
          <p align="justify">
          While broadcasting reach a huge population, it has few major draw backs. They are:
          </p>
          
          <ul>
            <li>
              <p align="justify">
              People with wealth can actually access them. So, for common people, to access a TV advertisement is not easy.
              </p>
            </li>
            <li>
              <p align="justify">
              It is inefficient. If less than 1% of the audience converts into customers, then conversion process has 1% efficiency. That is higly inefficient.
              </p>
            </li>
            <li>
              <p align="justify">
              Messaging is impersonal. The message, the originator or the recipient do not have human emotional connections. This is, in emerging media, is compensated by known people called ‘influencers.’ Influencers have larger impact because audience somewhat trust or like them and hence listens to their messages. Influencers connect to ‘trust’ via reputation.
              </p>
            </li>
            <li>
              <p align="justify">
              The purpose is to get audience involved to buy or make someone more powerful most of the time.
              </p>
            </li>
          </ul>

          <p align="justify">
            Ripple propagation is ancient in nature. It is like ‘gossip’ but coming from a trusted person (known person with a positive reputation with reference to the context)
          </p>

          <ul>
            <li>
              <p align="justify">
              Baanda sends a message to your circles based on your context.
              </p>
            </li>
            <li>
              <p align="justify">
              The person who receive the message knows you and your reputation.
              </p>
            </li>
            <li>
              <p align="justify">
              They forward it to their circle if they think it is worth it. When they forward, they can add their comments.
              </p>
            </li>
            <li>
              <p align="justify">
              It introduces human touch based trust. Trust is personal. Reputation is DCCS centric.
              </p>
            </li>
            <li>
              <p align="justify">
              It is affordable by most (very low cost – a fraction of broadcasting).
              </p>
            </li>
            <li>
              <p align="justify">
              Baanda follow the path of propagation and mines intelligence of who-is-who in one’s life for future advises. 
              </p>
            </li>
            <li>
              <p align="justify">
              The ripple-messaging may be used for cooperation (beyond sell or control). It intends to bring people together.
              </p>
            </li>
            <li>
              <p align="justify">
              In future (very near future), the word of mouth may be audio-visual, giving more personal feel (to be mindful, humans decide everything … meaning ‘all’ decisions … via feelings).
              </p>
            </li>
            <li>
              <p align="justify">
              In far future (about 5 years), Baanda will promote holographic immersive gossip or ripple propagation with intelligence tracking of the effectiveness of propagation.
              </p>
            </li>
            <li>
              <p align="justify">
              Baanda will warn the source of message that they may be trying to control other people’s thoughts for a not-so-good purpose. A repeat of such messaging will be frowned upon via DCCS scores. 
              </p>
            </li>
          </ul>
          <p align="justify">
          Baanda will have the ability to broadcast but its power and specialty lie in ripple or ancient personalized trustworthy gossip.
          </p>
          </font> 
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === "3") {
      aboutAns3 = (
        <div>
          <font color="lightyellow">
          <p align="justify">
          Catalog is a system where small businesses, endeavors can expose what they would like to sell or offer. It may be good, services, or anything else.
          </p>
          <p align="justify">
          Baanda do not facilitate advertisement. If one (person, co-op, or an entity) posts one’s good/service offering in catalog, then if some Baanda (Baanda user) needs them, then Baanda match them up that is best for both parties. One of the missions is to promote togetherness. Often, Baanda may promote good, services from local small businesses to balance out the power of very large corporations to eliminate the existence of small businesses all together and make purchasing an impersonal experience where only thing that matters is the merchandise
          </p>
          <p align="justify">
          Through ages, marketspace or bazars, as been an epicenter of human connections. Even friends going to bazar was a life-experience. E-commerce has converted the purchasing experience that included togetherness among friend, among traders, into cold transactions. That is further pushing the society towards loneliness. 
          </p>
          <p align="justify">
          Baanda intends to enhance togetherness in every conduit possible. Catalog is one such conduit.
          </p>
          </font> 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === "4") {
      aboutAns4 = (
        <div>
          <font color="lightyellow">
          <p align="justify">
          When you post your desire categorically, with preferences of geolocations, types of endeavor etc. Baanda will keep a keen eye to match you as an individual human being with your liking and preferences with that of others.
          </p>

          <p align="justify">
          Further, if you like to invest that includes your financial, service, goods and materials, Baanda will keep an eye around with its intelligence. 
          </p>
          <p align="justify">
          Lastly, as mentioned in prior discussions, Baanda remains with you far beyond you just investing or funding. Baanda make you a part of the endeavor if you so desire. If the endeavor is close by, Baanda will persuade you to be a part in person. If the endeavor is far away or need other kinds of participation, Baanda will make everything transparent, including investment entropies and remote participations. 
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
              1. Please explain CrowdFunding posting and its Baanda-uniqueness.
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. How do you post a message-propagation and how does ripple propagation work?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. What is Market Catalog and how does it work?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. How do I post to participate intelligently for CrowdFunding as philanthropist and/or investor? 
            </button>
            {aboutAns4}

          </div>
        </div>
      </div>
    );
  }
}

export default SXPost;
