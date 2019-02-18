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
    let aboutAns5 = null;
    // let aboutAns6 = null;
    if (btnClickNo === "1") {
      aboutAns1 = (
        <div>
          <font color="blue">Ans 1: </font> There are four parts to the self
          assessment. Keep in mind that this is geared to the work place and not
          necessesarily your personal life. The first part deals with your
          management style. It doesn't matter if you are a seasoned manager or
          if you have never managed anyone. Tell us how you manage your team or
          how you would manage your team if you were the manager. Move the
          sliders. You can change any of this later. Zero indicates that trait
          is not a part of your style and ten means that it is a major part of
          your style. The second section deals with what kind of people you
          prefer to work with. List four traits that are important, from your
          point of view, that describe your perfect co-workers. Here's an
          example: assertive, humorous, generous and intelligent. The third
          section deals with your work style. Use the sliders to indicate how
          you see yourself in the workplace. Zero indicates a little and ten
          indicates a lot. The fourth section is a trust calculator. Use the
          sliders to indicate which traits your would trust more or prefer in
          people you work with.
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === "2") {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> In Service Xchange, click the Post
          button on the left and choose Service Requester (Help Wanted/Job
          Posting) from the drop-down menu.
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === "3") {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 3: </font> After you fill out the self
          assessment, create a posting for yourself. In Service Xchange, click
          on Post on the left side and choose Service Provider (Will
          Help/Seeking Work) from the drop-down menu. Baanda will find matches
          and make suggestions for you that will show up in your dashboard.
          Another way to find jobs is to Browse. You must create a posting
          first. Then click on Browse from the left side menu. Choose your
          posting from the drop-down menu and Baanda will allow you to Browse
          jobs.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === "4") {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font> A co-op is a group of individuals
          working together on a shared goal. Say you are three freelancers who
          work together on projects. You have complimentary skill sets and you
          bounce ideas off each other. There is strength in numbers and it beats
          working solo all the time. Or you have had a lifetime dream to create
          something and Baanda can put you in touch with people who have similar
          dreams and a similar mindset. Baanda will bring you together and help
          create trust via DCCS and then, Baanda can help you make contracts and
          agreements so you can feel secure.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === "5") {
      aboutAns5 = (
        <div>
          <font color="blue">Ans 5: </font> Currently, in the UX, the Browse
          function brings up random photos, random names and random ipsem lorem
          descriptions. You can click on them to give you an idea of how the
          system will work when we go live and have real data. The reason is
          driven by 3 factors:
          <br />
          <br />
          <ul>
            <li>
              Our focus is on getting feedback from this sample users (you) for
              the point-of-view of an user's experience. It has been found that,
              when it is done by actual readable data, users spend time in
              reading the content. Content is not of importance here. Loren
              ipsum, fakers have been created for this purpose only and Baanda
              use that extensively.{" "}
            </li>
            <li>
              To have a good user'e experience, there needs to be adequate data
              and knowledge in place. For that, a user have to use it for long
              time. We have created pre-fab data and intel to bypass that hurdle
              for that purpose.
            </li>
            <li>
              There needs to be 3-AI (The Mask, DCCS, & NL to FL translator)
              engines that has to be in place to generate the intel data. Those
              are yet to be made.
            </li>
          </ul>
          <p>
            <font color="blue" size="2">
              Some of it does look a bit creepy! Hope you have a good laugh.
            </font>
          </p>
          <div className="textspaceTop" />
        </div>
      );
    }
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
              1. How do I fill out the self-assessment?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. How do I post a job?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. How do I use this to find a job?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. What is a co-op?
            </button>
            {aboutAns4}
            <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. Why is the browse section full of fake information?
            </button>
            {aboutAns5}
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
