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
    let aboutAns2 = null;
    let aboutAns3 = null;
    let aboutAns4 = null;
    // let aboutAns5 = null;
    // let aboutAns6 = null;
    if (btnClickNo === "1") {
      aboutAns1 = (
        <div>
          <font color="blue">Ans 1: </font> 
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === "2") {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> I
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === "3") {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 3: </font> 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === "4") {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font>
          <div className="textspaceTop" />
        </div>
      );
    }
    // if (btnClickNo === "5") {
    //   aboutAns5 = (
    //     <div>
    //       <font color="blue">Ans 5: </font> 
    //     </div>
    //   );
    // }
    // if (btnClickNo === '6') {
    //   aboutAns6 = (
    //     <div>
    //       <font color="blue">Ans 6: </font> xx
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
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              1. Please explain CrowdFunding posting and its Baanda-uniqueness.
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. How do you post a message-propagation and how does ripple propagation work?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. What is Market Catalog and how does it work?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. How do I post to participate intelligently for CrowdFunding as philanthropist and/or investor? 
            </button>
            {aboutAns4}
            {/* <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. Why is the browse section full of fake information?
            </button>
            {aboutAns5} */}
            {/* <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. q6?
            </button>
            {aboutAns6} */}
          </div>
        </div>
      </div>
    );
  }
}

export default SXPost;
