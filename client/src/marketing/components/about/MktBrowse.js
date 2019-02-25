import React, { Component } from 'react';

class SXBrowse extends Component {
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

    if (btnClickNo === '1') {
      aboutAns1 = (
        <div>
          <font color="lightyellow"> 
          <p align="justify">
          In order to browse, you must first post something. Then, you can browse for the context you are in the market to begin with. You would also be able to browse and see/participate in the campaign if you have been invited via ripple-propagations or in response to some advertisement boards.
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
          Without you posting, Baanda would not know what you would like to browse and why. However, to be backwards compatible with other systems and people's expectation, in the beginning Baanda will enable freeform search and browse. In most cases, a user  may have few interest. If/when posted, Baanda will not only show a list but also show that is most apt (right match) with match-values associated to do something with the browse. 
          </p>
           </font>   
          
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="yellow">
          <p align="justify">
          This is for UX response/feedback only. Presently, there is no data in Baanda system to show. Effectively Baanda has reached out to various faker sites to gather to emulate a future-facing experience for a feedback. This will be replaced in production.
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
              1. How can I browse the marketSpace?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. Why do I have to post first?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-light btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. Why is the browse section full of fake information?
            </button>
            {aboutAns3}

          </div>
        </div>
      </div>
    );
  }
}

export default SXBrowse;
