import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class Conscientiousness extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnOpenClickNo: '',
      scaleValue1: 5,
      scaleValue2: 5,
      scaleValue3: 5,
      scaleValue4: 5,
      scaleValue5: 5,
      scaleValue6: 5
    };

    this.handleOpenClick = this.handleOpenClick.bind(this);
  }

  handleOpenClick(e) {
    //console.log('btnOpenClickNo:' + e.target.id);
    this.setState({
      btnOpenClickNo: e.target.id
    });
  }

  handleOnChange1 = value => {
    this.setState({
      scaleValue1: value
    });
  };

  handleOnChange2 = value => {
    this.setState({
      scaleValue2: value
    });
  };

  handleOnChange3 = value => {
    this.setState({
      scaleValue3: value
    });
  };

  handleOnChange4 = value => {
    this.setState({
      scaleValue4: value
    });
  };

  handleOnChange5 = value => {
    this.setState({
      scaleValue5: value
    });
  };

  handleOnChange6 = value => {
    this.setState({
      scaleValue6: value
    });
  };

  render() {
    const { btnOpenClickNo } = this.state;

    let conscientiousnessAns1 = null;
    let conscientiousnessAns2 = null;
    let conscientiousnessAns3 = null;
    let conscientiousnessAns4 = null;
    let conscientiousnessAns5 = null;
    let conscientiousnessAns6 = null;

    // Imagination
    if (btnOpenClickNo === '1') {
      conscientiousnessAns1 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Self-efficacy &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue1}</font>
                </strong>
                <br />
                Self-efficacy reflects confidence in the ability to exert
                control over one's own motivation, behavior, and social
                environment. The four factors involved are performance-experience,
                observational-learning, verbal-persuasion, & emotional-arousal.
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue1}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange1}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      conscientiousnessAns1 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '2') {
      conscientiousnessAns2 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Orderliness &nbsp; || &nbsp; Use slider to mark your scoree:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue2}</font>
                </strong>
                <br />
                Orderliness is associated with qualities such as cleanliness and
                diligence, and the desire for order and symmetry; generally
                considered a desirable quality. If excessive orderliness, then score
                low (indicates - obsessive compulsive disorder)
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue2}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange2}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      conscientiousnessAns2 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '3') {
      conscientiousnessAns3 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Dutifulness &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue3}</font>
                </strong>
                <br />A dutiful person discharges their duty sincerely. They do
                what is expected of them, obey and respect whom, by duty, they
                have to obey and respect. The dutiful describe obedient
                children, servants, and soldiers etc. (people who willingly obey and feel
                good about it).
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue3}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange3}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      conscientiousnessAns3 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '4') {
      conscientiousnessAns4 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Achievement-striving &nbsp; || &nbsp; Use slider to mark your
                  score: &nbsp;
                  <font color="blue">{this.state.scaleValue4}</font>
                </strong>
                <br />
                People who tend to be achievement striving are
                hardworking and persistent (goal driven) and they
                are self-disciplined. This refers to someone who might be self-conscious or
                feels vulnerable. Are you?
                <strong>
                  {' '}
                  Scale Value: &nbsp;
                  <font color="blue">{this.state.scaleValue4}</font>
                </strong>
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue4}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange4}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      conscientiousnessAns4 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '5') {
      conscientiousnessAns5 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Self-disciplined &nbsp; || &nbsp; Use slider to mark your
                  score: &nbsp;
                  <font color="blue">{this.state.scaleValue5}</font>
                </strong>
                <div>
                  It is the ability to control one's feelings and overcome one's
                  weaknesses; perseverance, restraint, endurance, think
                  before acting, finish what you start, & the ability to
                  carry out one's decisions and plans in spite of
                  inconvenience, hardships or obstacles (grit).
                </div>
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue5}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange5}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      conscientiousnessAns5 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '6') {
      conscientiousnessAns6 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Cautiousness &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue6}</font>
                </strong>
                <div>
                  Associated with being cautious, circumspect, wary, it means to be
                  prudently watchful and discreet in the face of danger or risk.
                  Cautious implies the exercise of forethought usually prompted
                  by fear of danger (prudent, guarded, wary, circumspect,
                  watchful, vigilant)
                </div>
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue6}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange6}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      conscientiousnessAns6 = null;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12 col-sm-6">
            <button
              id="1"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you possess a high degree of self-efficacy? Are you performance
              driven, do you learn from observation?
            </button>
            {conscientiousnessAns1}

            <button
              id="2"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Are you an orderly person and seek symmetry in your environment?
            </button>
            {conscientiousnessAns2}
            <button
              id="3"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Are you a dutiful person? Do you want to do what is expected of
              you?
            </button>
            {conscientiousnessAns3}
            <button
              id="4"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Are you driven by achievement? Do you evaluate yourself by what
              you achieve?
            </button>
            {conscientiousnessAns4}
            <button
              id="5"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Are you self-desciplined? Can you easily resist temptation?
            </button>
            {conscientiousnessAns5}
            <button
              id="6"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Are you a cautious person? Do you think and be careful before
              you leap?
            </button>
            {conscientiousnessAns6}
          </div>
        </div>
      </div>
    );
  }
}

export default Conscientiousness;
