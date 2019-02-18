import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class Extraversion extends Component {
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

    let extraversionAns1 = null;
    let extraversionAns2 = null;
    let extraversionAns3 = null;
    let extraversionAns4 = null;
    let extraversionAns5 = null;
    let extraversionAns6 = null;

    // Imagination
    if (btnOpenClickNo === '1') {
      extraversionAns1 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Friendliness &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue1}</font>
                </strong>
                <br />
                Friendliness is taking an interest in other people, being warm
                and courteous; make others feel welcome or to make a stranger
                feel at home. (e.g. good natured, humor, warmth,
                affection, demonstrativeness, joviality, companion, sociable,
                gregarious, accessible, open, kind, benevolence etc.)
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
      extraversionAns1 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '2') {
      extraversionAns2 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Gregariousness &nbsp; || &nbsp; Use slider to mark your
                  scoree: &nbsp;
                  <font color="blue">{this.state.scaleValue2}</font>
                </strong>
                <br />
                Do you instinctively or temperamentally seek and enjoying the
                company of others; prefer a flock, group, people over solitude. Do
                you like to flirt, be charming and feel that connection is important?
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
      extraversionAns2 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '3') {
      extraversionAns3 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Assertiveness &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue3}</font>
                </strong>
                <br />
                Forceful conviction, confident and assert one's point of view. Someone whose
                personality is bold, decisive, self-assured, forthright,
                empathic, firm, strong-willed, insistent, and commanding.
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
      extraversionAns3 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '4') {
      extraversionAns4 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Activity level &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue4}</font>
                </strong>
                <br />
                Activity level (AL), also PAL (physical AL) is a way to express
                a person's daily physical activity as a number, and is an
                estimate of a person's energy bandwidth. 
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
      extraversionAns4 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '5') {
      extraversionAns5 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Excitement-seeking &nbsp; || &nbsp; Use slider to mark your
                  score: &nbsp;
                  <font color="blue">{this.state.scaleValue5}</font>
                </strong>
                <div>
                  A personality trait defined by the search for experiences and
                  feelings, that are "varied, novel, complex and intense", and
                  by the readiness to take physical, social, legal, and
                  financial risks for the sake of such experiences.
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
      extraversionAns5 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '6') {
      extraversionAns6 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Cheerfulness &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue6}</font>
                </strong>
                <div>
                  It is the the quality or state of being noticeably happy and
                  optimistic; promoting or inducing cheer; pleasant; bright 
                  and positive, humorous, 'life-of-the-party', make others
                  feel good despite everything.
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
      extraversionAns6 = null;
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
              Are you friendly by nature or would you rather be by yourself?
            </button>
            {extraversionAns1}

            <button
              id="2"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you consider yourself gregariouos? Are you popular and like to
              be in a flock?
            </button>
            {extraversionAns2}
            <button
              id="3"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Are you assertive? Are you confident and forceful?
            </button>
            {extraversionAns3}
            <button
              id="4"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you have high or low activity level? 
            </button>
            {extraversionAns4}
            <button
              id="5"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Are you an excitement seeker? Do you like to do things just for
              the experience?
            </button>
            {extraversionAns5}
            <button
              id="6"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Are you a cheerful person in general? Are you mostly bubbly and
              gleefully expresive?
            </button>
            {extraversionAns6}
          </div>
        </div>
      </div>
    );
  }
}

export default Extraversion;
