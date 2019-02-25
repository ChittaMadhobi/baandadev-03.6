import React, { Component } from "react";

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
    // let aboutAns2 = null;
    // let aboutAns3 = null;
    // let aboutAns4 = null;
    // let aboutAns5 = null;
    // let aboutAns6 = null;
    if (btnClickNo === "1") {
      aboutAns1 = (
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

    // if (btnClickNo === "2") {
    //   aboutAns2 = (
    //     <div>
    //       <font color="blue">Ans 2: </font> I
    //       <div className="textspaceTop" />
    //     </div>
    //   );
    // }

    // if (btnClickNo === "3") {
    //   aboutAns3 = (
    //     <div>
    //       <font color="blue">Ans 3: </font> 
    //       <div className="textspaceTop" />
    //     </div>
    //   );
    // }
    // if (btnClickNo === "4") {
    //   aboutAns4 = (
    //     <div>
    //       <font color="blue">Ans 4: </font>
    //       <div className="textspaceTop" />
    //     </div>
    //   );
    // }


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
            {/* <button
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
            {aboutAns4} */}

          </div>
        </div>
      </div>
    );
  }
}

export default SXPost;
