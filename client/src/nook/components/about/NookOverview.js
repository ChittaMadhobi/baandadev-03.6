import React, { Component } from 'react';

class NookOverview extends Component {
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
          <font color="blue">Ans 1: </font> The Nook is your personal
          space and it is also the conduit through which Baanda AI gets 
          to know you as an individual. The Nook is private and encrypted.
          It includes sections for personal tasks and provides some simple 
          tools to use for budgeting, a to-do list and a journal. It is also
          the space that houses your profile, your messaging, your social 
          circle and bi-directional reputation scoring.
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '2') {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> The Nook is the place where
          a user interacts with Baanda. In an effort to get to know and 
          understand each individual, Baanda will ask many personal questions.
          Baanda AI will use this information to assist in matching people
          for work, co-living, projects and opportunities. It is Baanda's 
          purpose to seek out matches, connections and opportunities for every 
          user. In this way, Baanda is fulfilling users' desires by
          drawing out untapped potential and connecting like-minded people 
          to one another. Baanda not only helps indviduals deepen their self-worth,
          but also, helps us to create community and connection.
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 3: </font> The Nook Profile is a private conversation
          between you and Baanda. Human beings are constantly changing, growing,
          and learning. Baanda will be by your side learning about you as long
          as you choose to be connected to it. In the Nook profile, Baanda will ask you 
          questions from time to time about all aspects of your life. The
          process will be on-going and dynamic.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '4') {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font> The Nook Profile is where the magic happens
          in regard to AI. Using the methods and algorithms of causal inference, Baanda 
          will get to know you as an individual and that in itself is extremely complex. 
          It will know your likes, your strengths, your goals and it will be able to connect 
          you to people with similarities, to 
          opportunities, to jobs. It will be able to make recommendations based specifically
          on your needs. It will be able to help you make decisions by giving you unbiased
          intelligence. Baanda's job is to help you make your life better by helping you 
          realize your true talents, by connecting you with other people who you may not
          have otherwise known and by teaching us all that the path to happiness and well 
          being is as much one of collaborating and giving to others than of receiving.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '5') {
      aboutAns5 = (
        <div>
          <font color="blue">Ans 5: </font> The Nook Tasks section is a to-do list for everyday
          chores. The diary section is an online journal or diary. They are tools for personal
          productiviy, but also they are another way that Baanda learns about your priorities,
          your interests, how you spend you time, whether or not you procrastinate, etc. The 
          Baanda journal can also be a creative space. There is no wrong way to use it at this 
          time.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '6') {
      aboutAns6 = (
        <div>
          <font color="blue">Ans 6: </font> Budgeting in the Nook facilitates freelancers
          using Service Xchange to budget their income and expenses so that they can choose 
          to work non-traditional schedules and help them develop scenarios for how to 
          accomplish that. 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '7') {
      aboutAns7 = (
        <div>
          <font color="blue">Ans 7: </font> Yes, Baanda's understanding of you will be
          dynamic and that concept is built into the underlying algorithms which take 
          that into account. Every aspect of Baanda's intelligence is based on the idea 
          that human beings are dynamic in all respects - physically, emotionally, mentally,
          spiritually. Life in general is dynamic, as are relationships, ideas, thoughts, etc.
          Over time, everything changes. If it doesn't change, Baanda will know that something
          is wrong.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '8') {
      aboutAns8 = (
        <div>
          <font color="blue">Ans 8: </font> It is our top priority to keep your private
          information private and encrypted. We have no intention of selling anyone's data
          and it is not our revenue model which is available for anyone to see. We are 
          currently researching and considering various models including hiring a third 
          party to conduct audits to ensure that Baanda data is secure.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '9') {
      aboutAns9 = (
        <div>
          <font color="blue">Ans 9: </font> Your data will be encrypted. Even if someone
          is able to get access to it, they won't be able to decipher it without your access
          key.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '10') {
      aboutAns10 = (
        <div>
          <font color="blue">Ans 10: </font> Baanda will use the methods of causal inference
          to make mathematically based conclusions about you. We are designing it to be as
          humanoid as possible meaning that it will be able to figure out what you are feeling
          as if it were a human. For example, it will be able to recognize facial expressions, 
          tone of voice, etc. When Baanda gets it wrong, it will learn just like a person would.
          That is Baanda intelligence. Information about you is your data like where you live, 
          your birthday, etc.
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
              1. What is the Nook?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. What is the significance of the Nook?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. What is the Nook Profile?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. Why is the Nook profile so complex?
            </button>
            {aboutAns4}
            <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. What is the Nook Task and Diary section for?
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. What is the need for budgeting in the Nook?
            </button>
            {aboutAns6}
            <button
              id="7"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              7. Everyone changes over time. Will Baanda's understanding of
              me be dynamic?
            </button>
            {aboutAns7}
            <button
              id="8"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              8. Baanda will know me intimately and that's scary. 
              Can I be manipulated for commerce or politics?
            </button>
            {aboutAns8}
            <button
              id="9"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              9. How can you guarantee technologically that no one will have access 
              to my data?
            </button>
            {aboutAns9}
            <button
              id="10"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              10. What is the difference between intelligence and information about me?
            </button>
            {aboutAns10}
          </div>
        </div>
      </div>
    );
  }
}

export default NookOverview;
