import React, { Component } from 'react';

import '../../css/profile.css';

class DefaultMessage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mx-auto text-center">
              <div className="card card-body bg-dark text_white">
                <h5 className="card-title">
                  <strong>
                    <font color="white">Social Circle</font>
                  </strong>
                </h5>
                <p className="card-test">
                  Select the Social Circle type for the the right
                  operation
                </p>
                <p className="card-test">
                  Invite someone to be part of your Social Circle
                </p>
                <p className="card-test">
                  Beyond self-evaluations, personality-tests, and Baanda
                  assessments, your social circle will provide a vital reflection
                  of you.
                </p>
                <p className="card-test">
                  <font color="white">
                    ** Get a relevent reflections from your friends and
                    adversaries{' '}
                  </font>
                </p>
                <p className="card-test">
                  <font color="white">
                    ** The better your assessments, the higher the probability that
                    Baanda can assist you.{' '}
                  </font>
                </p>
                <p className="card-test">
                  <font color="white">
                    ** Self-reflection is for your eyes only.
                    Choose your Social Circle wisely.
                  </font>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultMessage;
