import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class Neuroticism extends Component {
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

    let neuroticismAns1 = null;
    let neuroticismAns2 = null;
    let neuroticismAns3 = null;
    let neuroticismAns4 = null;
    let neuroticismAns5 = null;
    let neuroticismAns6 = null;

    // Imagination
    if (btnOpenClickNo === '1') {
      neuroticismAns1 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Anxiety &nbsp; || &nbsp; Use slider to mark your score: &nbsp;
                  <font color="blue">{this.state.scaleValue1}</font>
                </strong>
                <br />
                It is a feeling of worry, nervousness, or unease, typically
                about an imminent event or something with an uncertain outcome.
                In extreme cases, it is a disorder and may lead to panic attacks.
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
      neuroticismAns1 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '2') {
      neuroticismAns2 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Anger &nbsp; || &nbsp; Use slider to mark your scoree: &nbsp;
                  <font color="blue">{this.state.scaleValue2}</font>
                </strong>
                <br />
                This is a strong feeling of annoyance, displeasure, or
                hostility. It is an emotion of antagonism. An angry person
                often feels antagonism towards life or
                his/her environment.
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
      neuroticismAns2 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '3') {
      neuroticismAns3 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Depression &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue3}</font>
                </strong>
                <br />
                This is a a mood disorder marked by sadness, inactivity,
                difficulty in thinking, a significant increase or decrease in
                appetite and time spent sleeping, feelings of dejection and
                hopelessness, and sometimes suicidal tendencies.
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
      neuroticismAns3 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '4') {
      neuroticismAns4 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Self-consciousness &nbsp; || &nbsp; Use slider to mark your
                  score: &nbsp;
                  <font color="blue">{this.state.scaleValue4}</font>
                </strong>
                <br />
                It is an undue awareness of oneself, one's appearance, or one's
                actions; to be uncomfortably conscious of oneself as an object of 
                the observation of others.
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
      neuroticismAns4 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '5') {
      neuroticismAns5 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Immoderation &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue5}</font>
                </strong>
                <div>
                  It is the quality of being excessive and lacking in restraint;
                  overindulgence. Immoderate indicates, excessive, inordinate,
                  extravagant, exorbitant, and extreme all mean going beyond a
                  normal limit.
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
      neuroticismAns5 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '6') {
      neuroticismAns6 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Vulnerability &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue6}</font>
                </strong>
                <div>
                  It is the quality or state of being exposed to the possibility
                  of being attacked or harmed, either physically or emotionally.
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
      neuroticismAns6 = null;
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
              Are you an anxious person? Do you feel fearful in new situations,
              places, people?
            </button>
            {neuroticismAns1}

            <button
              id="2"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you feel anger easily? Do you have a constant 
              feeling of annoyance, displeasure, or hostility?
            </button>
            {neuroticismAns2}
            <button
              id="3"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you feel depressed? Do you feel some degree of despondency and
              dejection?
            </button>
            {neuroticismAns3}
            <button
              id="4"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you think you are self-conscious? Do you have undue awareness
              of your appearence, actions etc.?
            </button>
            {neuroticismAns4}
            <button
              id="5"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you believe, or have you been told, that you lack restraint and
              often overindulge? Are you immoderate?
            </button>
            {neuroticismAns5}
            <button
              id="6"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you feel vulnarable? Do you feel exposed, fearful of attack
              physically or emotionally?
            </button>
            {neuroticismAns6}
          </div>
        </div>
      </div>
    );
  }
}

export default Neuroticism;
