import React, { Component } from 'react';

class NookAboutBudgeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
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
    // let aboutAns5 = null;
    // let aboutAns6 = null;
    // let aboutAns7 = null;
    // let aboutAns8 = null;
    if (btnClickNo === '1') {
      aboutAns1 = (
        <div>
          <font color="blue">Ans 1: </font> It is a tool for managing your personal finances.
          Also, it's a way for Baanda AI to learn about your priorities as to how you spend
          your money and what you save for. If you save up for a vacation or something for a 
          long time, that not only says something about how much you want that thing or that 
          vacation, but it tells about your level of patience and determination.
          <div className="about-bottom-buffers" />
        </div>
      );
    }

    if (btnClickNo === '2') {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> Budgeting forces you to take a closer look at 
          your spending habits. The core mission of Baanda is wellbeing for individuals.
          Like it or not, your income, how you earn it and how you spend it plays a role in your
          wellbeing. If Baanda AI can tap into that, it can help you maximize your earnings.
          Additionally, overspending is often related to stress, boredom, loneliness, etc.
          For example, in the not-too-distant future, Baanda will be able to stop you from
          going on a shopping spree that you can't afford and redirect you to something
          less expensive and more fulfilling like a project or a new friend.
          <div className="about-bottom-buffers" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 3: </font> In the UX, you can see that we have made it
          as simple and as user friendly as possible. Right now, you can enter data, but it
          will not be saved. In this way, you can get a sense of what the system will be capable of.
          <p>
            
          </p>
          <p>
            
            You can have more than one budget in Baanda. For example, you may have a monthly budget
            and a vacation budget that you are saving up for. Give your budget a name so you can find 
            it later if you want to edit it. Click on the green plus symbol to add a line for 
            earnings or expenses. You can categorize your entry with high level categories as well as
            sub categories. Click the x symbol to delete a line. Baanda will quickly add up your
            expenses and income and give you a comparison.
          </p>
          <div className="about-bottom-buffers" />
        </div>
      );
    }
    if (btnClickNo === '4') {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font> Eventually, Baanda will be able to link to 
          credit cards, bank statements, etc. We want Baanda to do as much of the work
          as possible, but in the interim, you have to do it yourself. See the answer to
          number 2 for more about why use Baanda.
          <div className="about-bottom-buffers" />
        </div>
      );
    }
    // if (btnClickNo === '5') {
    //   aboutAns5 = (
    //     <div>
    //       <font color="blue">Ans 5: </font> This is the answer 5
    //       <div className="about-bottom-buffers" />
    //     </div>
    //   );
    // }
    // if (btnClickNo === '6') {
    //   aboutAns6 = (
    //     <div>
    //       <font color="blue">Ans 6: </font> This is the answer 6
    //       <div className="about-bottom-buffers" />
    //     </div>
    //   );
    // }
    // if (btnClickNo === '7') {
    //   aboutAns7 = (
    //     <div>
    //       <font color="blue">Ans 7: </font> This is the answer 7
    //       <div className="about-bottom-buffers" />
    //     </div>
    //   );
    // }
    // if (btnClickNo === '8') {
    //   aboutAns8 = (
    //     <div>
    //       <font color="blue">Ans 8: </font> This is the answer 8
    //       <div className="about-bottom-buffers" />
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
              1. What is the main objective of budgeting in the Nook?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. Why would I use this?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. How do I setup my budget?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. Isn't it too much work? If I use credit cards, it already gives
              me a break down. Why do it again?
            </button>
            {aboutAns4}
            {/* <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. More Tasks and budgeting questions ...?
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. More Tasks and budgeting questions ...?
            </button>
            {aboutAns6}
            <button
              id="7"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              7. More Tasks and budgeting questions ...?
            </button>
            {aboutAns7}
            <button
              id="8"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              8. More Tasks and budgeting questions ...?
            </button>
            {aboutAns8} */}
          </div>
        </div>
      </div>
    );
  }
}

export default NookAboutBudgeting;
