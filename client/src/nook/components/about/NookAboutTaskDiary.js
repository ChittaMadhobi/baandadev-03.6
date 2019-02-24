import React, { Component } from 'react';

class NookAboutTaskDiary extends Component {
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
          <font color="blue">Ans 1: </font> The task section is a place to store a
          a to-do list. The diary section is a place to write down anything you want
          to store for your eyes only. These tools integrate into all the Baanda 
          modules and Baanda AI uses them to learn about you. Particularly in the 
          diary, if you are constantly writing about something, Baanda will know that
          it is an important issue in your life at this time.
          <div className="about-bottom-buffer" />
        </div>
      );
    }

    if (btnClickNo === '2') {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> This section can help you be more 
          organized. You can jot down notes that you might want to remember later 
          and you can search for them. Indirectly, Baanda AI will learn about your
          priorities and your emotional state at that time. It will learn if you 
          procrastinate, it will learn if you like to keep busy, it will learn about
          your long-term goals, etc. Eventually, the system will be able to help you
          accomplish your tasks and goals more efficiently. The system will eventually 
          be able to find opportunities or connections for you based on your interests,
          needs, goals, etc.
          <div className="about-bottom-buffer" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 3: </font> The Baanda promise is never to sell, keep
          or provide access to anyone's private information. Our security is state-of-the
          -art. Users will have the ability to choose where to save their data, data will be
          encrypted and we will have 3rd party audits to ensure that Baanda is in compliance
          with our security promise.
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    if (btnClickNo === '4') {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font> We expect that the evolution of Baanda AI
          will lead to something like a humanoid relationship. For each individual,
          Baanda will have a unique relationship. The tasks and diary sections are the
          first stab at that relationship.
          <div className="about-bottom-buffer" />
        </div>
      );
    }
    // if (btnClickNo === '5') {
    //   aboutAns5 = (
    //     <div>
    //       <font color="blue">Ans 5: </font> This is the answer 5
    //       <div className="about-bottom-buffer" />
    //     </div>
    //   );
    // }
    // if (btnClickNo === '6') {
    //   aboutAns6 = (
    //     <div>
    //       <font color="blue">Ans 6: </font> This is the answer 6
    //       <div className="about-bottom-buffer" />
    //     </div>
    //   );
    // }
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
              1. What am I supposed to do in the Tasks and Diary section?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. How is this section going to help me?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. A diary is personal. Should I be worried about keeping my private
              thoughts in Baanda memory?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. What is the evolution path of this Tasks and Diary section?
            </button>
            {aboutAns4}
            {/* <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. More Tasks and diary questions ...?
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. More Tasks and diary questions ...?
            </button>
            {aboutAns6}
            <button
              id="7"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              7. More Tasks and diary questions ...?
            </button>
            {aboutAns7}
            <button
              id="8"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              8. More Tasks and diary questions ...?
            </button>
            {aboutAns8} */}
          </div>
        </div>
      </div>
    );
  }
}

export default NookAboutTaskDiary;
