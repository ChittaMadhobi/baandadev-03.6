import React, { Component } from 'react';

import '../utils/nook.css';

class DefaultAboutMessage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mx-auto text-center">
              <div className="card card-body bg-dark text_white">
                <h5 className="card-title">
                  <strong>
                    <font color="white">About Nook</font>
                  </strong>
                </h5>
                <p className="card-test">
                  Information -- Usage Overview 
                </p>
                <div className="card-test text_center">
                  <font color="lightblue">
                    Step 1: Select area of interest from the above drop
                    down.
                    <br />
                    Step 2: Click on a question and Baanda will answer.
                    <br />
                    Step 3: If your question is not on the list, contact us at
                    info@baanda.com.
                  </font>
                  <br />
                  <br />
                  <i className="fas fa-angle-double-right" /> &nbsp;
                  Overview Q&A: concepts of Your Nook (Why, What, & How){' '}
                  <br />
                  <i className="fas fa-angle-double-right" /> &nbsp; Profile Q&A:
                  Focuses on Nook profile (How and Why) & roadmap <br />
                  <i className="fas fa-angle-double-right" /> &nbsp; Task List Q&A:
                  Focuses on daily chores (What and How) & roadmap <br />
                  <i className="fas fa-angle-double-right" /> &nbsp; Social
                  Circle Q&A: Focuses on the people in your life & roadmap <br />
                  <i className="fas fa-angle-double-right" /> &nbsp; Budgeting Q&A:
                  Focuses on tools for budgeting & roadmap <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultAboutMessage;
