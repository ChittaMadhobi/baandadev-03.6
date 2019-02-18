import React, { Component } from 'react';

class SXOverview extends Component {
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
    if (btnClickNo === '1') {
      aboutAns1 = (
        <div>
          <font color="blue">Ans 1: </font> Baanda Service Xchange is a one stop shop for finding work,
          finding workers & co-workers, finding & creating teams, creating agreements, handling projects, 
          etc. Using artificial intelligence, Baanda matches individuals with jobs they would excel at and
          it also matches individuals with the people at those work places. Hiring managers as well as 
          individuals looking for jobs, would get a sense of how well they would work together. 
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '2') {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> Baanda Service Xchange is significantly different from other 
          widely used job posting sites. We have tried to alleviate the pain points associated with other
          sites and provide solutions. For example, there are many freelancing sites such as Fiverr
          and Freelancer.com. We did a lot of research on these sites and discovered that although the sites
          are geared towards freelancers, they charge hefty sums and don't provide freelancers much in the way of support.
          Freelancers complain that they have to spend a lot of time hunting for jobs, maintaining a portoflio 
          and if they get a job, often the scope of the job creeps up and they don't have any recourse other than
          to finish the job or to be faced with a bad review. We created a system that helps freelancers find
          appropriate jobs based on a personal scoring system that we call DCCS. DCCS stands for Dynamic 
          Co-operative Chemistry Score. DCCS is like a credit score, but so much more. It scores you in multiple
          and dynamic ways. Not only does the Baanda artificial intelligence figure you out, but it also
          incorporates other people's remarks and assessments of you on an ongoing basis. It is an easy way to 
          know who you can trust before you even meet. It will help freelancers tremendously as well as the people
          who need to hire them by allowing them to know each other's strengths and weaknesses. It will no longer
          be possible to threaten someone with a bad review. 
          
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 2: </font> Machine Learning provides us with pattern matching, but there
          is so much more to AI and intelligent matching. Baanda Service Xchange matches individuals and entities to 
          other individuals and entities via multiple means and measures.  
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '4') {
      aboutAns4 = (
        <div>
          <font color="blue">Ans 4: </font> We have designed the initial release of Baanda to be most useful for
          individuals seeking local jobs, cooperatives and "mom and pop" businesses. But, when you look at the design, you'll 
          see some very sophisticated tools particularly in the project management section. Even though we are
          focusing on individuals and cooperatives, there are definitely many other use cases.
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '5') {
      aboutAns5 = (
        <div>
          <font color="blue">Ans 5: </font> Baanda's long term vision is to change the way people work together. We 
          want to change the idea of working 'for' someone into working 'with' someone and remove the hierarchical
          structure prevalent in today's wrokplaces. 
          <div className="textspaceTop" />
        </div>
      );
    }
    if (btnClickNo === '6') {
      aboutAns6 = (
        <div>
          <font color="blue">Ans 6: </font> Start by exploring the site. Then, set aside some time to fill out
          your profile. You can change your answers any time, but try to be honest and accurate. That way, the
          system can find better matches for you.
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
              1. What is Baanda Service Xchange?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. How is SX different from other job-sites?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. What is an intelligent match?
            </button>
            {aboutAns3}
            <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. Who is best suited for Service Xchange in its initial release
              (2019)?
            </button>
            {aboutAns4}
            <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. What is Service Xchange's long term vision (2019)?
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. How would one start using SX?
            </button>
            {aboutAns6}
          </div>
        </div>
      </div>
    );
  }
}

export default SXOverview;
