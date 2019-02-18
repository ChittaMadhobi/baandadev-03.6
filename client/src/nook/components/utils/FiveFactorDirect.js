import React, { Component } from 'react';

import './nook.css';
import Openness from './Openness';
import Conscientiousness from './Conscientiousness';
import Extraversion from './Extraversion';
import Agreeableness from './Agreeableness';
import Neuroticism from './Neuroticism';

class FiveFactorDirect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnClickNo: ''
    };

    this.topFactorClick = this.topFactorClick.bind(this);
    this.handleSelfEval = this.handleSelfEval.bind(this);
  }

  handleSelfEval() {
    alert(
      'In production, this will update your self-evaluation as of today (it will not be over-ridden of the one before). ' +
        'This change of self perception will tell Baanda how, or if at all, your self-perception is changing and what could be the reason. '
    );
  }

  topFactorClick(e) {
    console.log(e.target.id);
    this.setState({
      btnClickNo: e.target.id
    });
  }

  render() {
    const { btnClickNo } = this.state;

    let topFactor1 = null;
    let topFactor2 = null;
    let topFactor3 = null;
    let topFactor4 = null;
    let topFactor5 = null;

    if (btnClickNo === '1') {
      topFactor1 = (
        <div>
          <Openness />
        </div>
      );
    }
    if (btnClickNo === '2') {
      topFactor2 = (
        <div>
          <Conscientiousness />
        </div>
      );
    }
    if (btnClickNo === '3') {
      topFactor3 = (
        <div>
          <Extraversion />
        </div>
      );
    }
    if (btnClickNo === '4') {
      topFactor4 = (
        <div>
          <Agreeableness />
        </div>
      );
    }
    if (btnClickNo === '5') {
      topFactor5 = (
        <div>
          <Neuroticism />
        </div>
      );
    }

    return (
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <button
                id="1"
                className="btn btn-outline-info btn-sm btn-block text-left custom_button-top5"
                onClick={this.topFactorClick}
              >
                Openness
              </button>
            </div>
            <div className="col-md-8 col-sm-6">
              <div className="top-text-adjust">
                Refers to intellect and imagination, and is a measure of
                creativity, desire for knowledge, new experiences.
              </div>
            </div>
          </div>
          {topFactor1}
          <div className="textspaceTop" />

          <div className="row">
            <div className="col-md-4 col-sm-6">
              <button
                id="2"
                className="btn btn-outline-info btn-sm btn-block text-left custom_button-top5"
                onClick={this.topFactorClick}
              >
                Conscientiousness
              </button>
            </div>
            <div className="col-md-8 col-sm-6">
              <div className="top-text-adjust">
                This looks at the level of care that you take in your life and
                work. More if you are thorough and organizaed; less if you are more 
                casual.
              </div>
            </div>
          </div>
          {topFactor2}
          <div className="textspaceTop" />

          <div className="row">
            <div className="col-md-4 col-sm-6">
              <button
                id="3"
                className="btn btn-outline-info btn-sm btn-block text-left custom_button-top5"
                onClick={this.topFactorClick}
              >
                Extroversion or Introversion
              </button>
            </div>
            <div className="col-md-8 col-sm-6">
              <div className="top-text-adjust">
                This measures your level of sociability. Outgoing (extroverted) or
                quiet (introverted)? Do social situations energize you or drain you?
              </div>
            </div>
          </div>
          {topFactor3}
          <div className="textspaceTop" />

          <div className="row">
            <div className="col-md-4 col-sm-6">
              <button
                id="4"
                className="btn btn-outline-info btn-sm btn-block text-left custom_button-top5"
                onClick={this.topFactorClick}
              >
                Agreeableness
              </button>
            </div>
            <div className="col-md-8 col-sm-6">
              <div className="top-text-adjust">
                Are you considerate, helpful and willing to compromise? Or do
                you tend to put your needs before others?
              </div>
            </div>
          </div>
          {topFactor4}
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <button
                id="5"
                className="btn btn-outline-info btn-sm btn-block text-left custom_button-top5"
                onClick={this.topFactorClick}
              >
                Neuroticism
              </button>
            </div>
            <div className="col-md-8 col-sm-6">
              <div className="top-text-adjust">
                Also called 'emotional stability'. Do you
                worry about small things or are you relaxed and less stressed?
              </div>
            </div>
          </div>
          {topFactor5}
          <div className="textspaceTop" />
          <div className="float-right ">
            <button
              type="button"
              style={{ marginTop: '25px' }}
              className="btn btn-success btn-sm custom_button3"
              onClick={this.handleSelfEval}
            >
              Save the evaluation
            </button>
          </div>
          <div className="text-center">
            Note: Please fill out assessments honestly.
          </div>
        </div>
      </div>
    );
  }
}

export default FiveFactorDirect;
