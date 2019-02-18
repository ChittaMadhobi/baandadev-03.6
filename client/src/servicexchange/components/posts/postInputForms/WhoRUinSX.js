import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import '../post.css';

import Select from 'react-select';
import { options } from './data/whoruinsxData';

class WhoRUinSX extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mgmtAnalytical: 0, // Number
      mgmtDriver: 0,
      mgmtAmiable: 0,
      mgmtExpressive: 0,
      wsDirector: 0, // ws = work style
      wsThinker: 0,
      wsSocializer: 0,
      wsRealtors: 0,
      desiredCharacterTraits: [], // Max 5 of the list
      trustFactors: [
        {
          trait: '',
          value: 0
        }
      ],
      engagementStyle: 0, // 0 high hands-on follow the  order ... 10 imaginative,  strategic etc.
      imaginationOrKB: 0, // 0 with high emhpasis of Knowledge and 10 high-on imagination
      selectedOption: [],
      authentic: 5,
      consistant: 5,
      integrity: 5,
      compassionate: 5,
      kind: 5,
      resourceful: 5,
      connector: 5,
      humble: 5
    };

    this.onChange = this.onChange.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
  }
  handleSaveClick() {
    alert(
      'Eventually -- When you click this, your work will be saved in database. This is not a posting and will not be visible to anyone, excepting you will see it graphically. However, this would be considered as one of the parameters in aidng you in SX.'
    );
  }

  handlewsHumblefulOnChange = value => {
    this.setState({
      humble: value
    });
  };

  handlewsConnectorfulOnChange = value => {
    this.setState({
      connector: value
    });
  };
  handlewsResourcefulOnChange = value => {
    this.setState({
      resourceful: value
    });
  };
  handlewsKindOnChange = value => {
    this.setState({
      kind: value
    });
  };
  handlewsCompassionateOnChange = value => {
    this.setState({
      icompassionate: value
    });
  };
  handlewsIntigrityOnChange = value => {
    this.setState({
      integrity: value
    });
  };

  handlewsAuthenticOnChange = value => {
    this.setState({
      authentic: value
    });
  };
  handlewsConsistantOnChange = value => {
    this.setState({
      consistant: value
    });
  };

  handleChangeTarget = (selectedOption, { action }) => {
    // console.log('action:' + action);
    // console.log('selectedOption length:' + selectedOption.length);
    if (selectedOption.length <= 4) {
      this.setState({
        selectedOption
      });
    } else {
      alert(
        'not allowed beyond 4 entries. To select another delete one from the selected or chosen list.'
      );
    }
    // console.log('selectedOption:' + JSON.stringify(selectedOption));
    // console.log('selectedOption:' + selectedOption[0].label);
  };

  handlemgmtAnalyticalOnChange = value => {
    this.setState({
      mgmtAnalytical: value
    });
  };
  handlemgmtDriverOnChange = value => {
    this.setState({
      mgmtDriver: value
    });
  };
  handlemgmtAmiableOnChange = value => {
    this.setState({
      mgmtAmiable: value
    });
  };
  handlemgmtExpressiveOnChange = value => {
    this.setState({
      mgmtExpressive: value
    });
  };

  handlewsDirectorOnChange = value => {
    this.setState({
      wsDirector: value
    });
  };

  handlewsSocializerOnChange = value => {
    this.setState({
      wsSocializer: value
    });
  };

  handlewsRealtorsOnChange = value => {
    this.setState({
      wsRealtors: value
    });
  };
  handlewsThinkerOnChange = value => {
    this.setState({
      wsThinker: value
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { selectedOption } = this.state;

    let mgmtStyle = (
      <div className="text-center context-box-personality">
        <font color="#1a458c">
          <b>
            Four Basic Personality Types Combo in a Workplace - Who are you?
          </b>
          <br />
          Following are four basic management style patterns in work. Everyone
          possess all these patterns. One should be a dominant style, one
          sub-dominant and other two not so much. Better you project, better
          would be the match. This is your relative assessment and not relative
          to anyone else's.
        </font>
        <div className="card card-top5-slider-header">
          <div className="card-body shadow ">
            <div className="text-center text-area-size">
              <strong>
                Analytical Mgmt. Style &nbsp; || &nbsp; Use slider to mark your
                score: &nbsp;
                <font color="blue">{this.state.mgmtAnalytical}</font>
              </strong>
              <br />
              The analytical type is deep and thoughtful. They’re serious and
              purposeful individuals and set very high standards for themselves.
              Analyticals are orderly and organized and do not need much
              oversight.{' '}
              <font color="#c16d5e">
                <b>Weaknesses</b>: Moody, critical, negative, indecisive, over
                analyze
              </font>
            </div>
          </div>
          <div className="card-body shadow card-top5-slider-body">
            <Slider
              value={this.state.mgmtAnalytical}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlemgmtAnalyticalOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-top5-slider-header">
          <div className="card-body shadow ">
            <div className="text-center text-area-size">
              <strong>
                Driver Mgmt. Style &nbsp; || &nbsp; Use slider to mark your
                score: &nbsp;
                <font color="blue">{this.state.mgmtDriver}</font>
              </strong>
              <br />
              The driver is dynamic and active. They’re not easily discouraged.
              Drivers are natural-born leaders who exude confidence and move
              quickly to action. They are visionaries.
              <font color="#c16d5e">
                <b>Weaknesses</b>: Insensitive, unsympathetic, harsh, proud,
                sarcastic, not detail-oriented
              </font>
            </div>
          </div>
          <div className="card-body shadow card-top5-slider-body">
            <Slider
              value={this.state.mgmtDriver}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlemgmtDriverOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-top5-slider-header">
          <div className="card-body shadow ">
            <div className="text-center text-area-size">
              <strong>
                Amiable Mgmt. Style &nbsp; || &nbsp; Use slider to mark your
                score: &nbsp;
                <font color="blue">{this.state.mgmtAmiable}</font>
              </strong>
              <br />
              Amiables are patient and well balanced individuals. They’re quiet,
              sympathetic, kind, and inoffensive. Amiables are easy going and
              very well liked in their organizations.
              <font color="#c16d5e">
                <b>Weaknesses</b>: Stubborn, selfish, avoids conflict, easily
                overwhelmed
              </font>
            </div>
          </div>
          <div className="card-body shadow card-top5-slider-body">
            <Slider
              value={this.state.mgmtAmiable}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlemgmtAmiableOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-top5-slider-header">
          <div className="card-body shadow ">
            <div className="text-center text-area-size">
              <strong>
                Expressive Mgmt. Style &nbsp; || &nbsp; Use slider to mark your
                score: &nbsp;
                <font color="blue">{this.state.mgmtExpressive}</font>
              </strong>
              <br />
              The expressive type loves to have fun, are generous, and want to
              be included. They are outgoing, charismatic, and very persuasive.
              They can sell ice cubes to an Eskimo.
              <font color="#c16d5e">
                <b>Weaknesses</b>: Disorganized, undisciplined, loud, talkative
              </font>
            </div>
          </div>
          <div className="card-body shadow card-top5-slider-body">
            <Slider
              value={this.state.mgmtExpressive}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlemgmtExpressiveOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
      </div>
    );

    let workStyle = (
      <div className="text-center context-box-workstyle">
        <font color="#1a458c">
          <b>Four Basic Work Style Combo in a Workplace - Who are you?</b>
          <br />
          Following are four basic management work patterns in work. The real
          intent of the Golden Rule is to treat others the way they would like
          to be treated. The Golden Rule- The Platinum Rule:{' '}
          <b>“DO UNTO OTHERS AS THEY’D LIKE DONE UNTO THEM.”</b> Tell us your
          style so others can tune to you.
        </font>
        <div className="card card-top5-slider-header">
          <div className="card-body shadow ">
            <div className="text-center text-area-size">
              <strong>
                The Director &nbsp; || &nbsp; Use slider to mark your score:
                &nbsp;
                <font color="blue">{this.state.wsDirector}</font>
              </strong>
              <br />
              Directors are forceful, take-charge people. Their impatience-and
              sometimes their insensitivity-may make you wince. Driven by an
              inner need to get results, they’re more concerned with outcomes
              than egos.{' '}
            </div>
          </div>
          <div className="card-body shadow card-top5-slider-body">
            <Slider
              value={this.state.wsDirector}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlewsDirectorOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-top5-slider-header">
          <div className="card-body shadow ">
            <div className="text-center text-area-size">
              <strong>
                Socializer Style &nbsp; || &nbsp; Use slider to mark your score:
                &nbsp;
                <font color="blue">{this.state.wsSocializer}</font>
              </strong>
              <br />
              The friendly, enthusiastic Socializers are fast-paced people who
              thrive on admiration, acknowledgment, and applause. They love to
              talk, and while strong on fresh concepts, they’re usually weak on
              execution.
            </div>
          </div>
          <div className="card-body shadow card-top5-slider-body">
            <Slider
              value={this.state.wsSocializer}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlewsSocializerOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-top5-slider-header">
          <div className="card-body shadow ">
            <div className="text-center text-area-size">
              <strong>
                Relator Style &nbsp; || &nbsp; Use slider to mark your score:
                &nbsp;
                <font color="blue">{this.state.wsRealtors}</font>
              </strong>
              <br />
              Relaters are the teddy bears of the human zoo. Rather easygoing,
              people-oriented, and slow-paced, Relaters tend to drag their feet
              when it comes to change, preferring routine ways of doing things.
            </div>
          </div>
          <div className="card-body shadow card-top5-slider-body">
            <Slider
              value={this.state.wsRealtors}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlewsRealtorsOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-top5-slider-header">
          <div className="card-body shadow ">
            <div className="text-center text-area-size">
              <strong>
                Thinker Style &nbsp; || &nbsp; Use slider to mark your score:
                &nbsp;
                <font color="blue">{this.state.wsThinker}</font>
              </strong>
              <br />
              Thinkers are results-oriented problem solvers. They seek results
              in a quiet, low-key way. Thinkers are analytical, persistent,
              independent, and well organized, but often seen as aloof, picky,
              and critical.
            </div>
          </div>
          <div className="card-body shadow card-top5-slider-body">
            <Slider
              value={this.state.wsThinker}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlewsThinkerOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
      </div>
    );

    let baseTraits = (
      <div>
        <div className="card card-trust-slider-header">
          <div className="card-body shadow ">
            <div className="text-center text-area-size">
              <strong>
                <font color="blue">Top-trait expectations of co-workers</font>
              </strong>
              <br />
              Following is a list of desirable traits in collegues. Select top
              four (4) traits that are very important to have from your point of
              view.
            </div>
          </div>
          <div className="card-body shadow card-top5-slider-body">
            <Select
              value={selectedOption}
              isMulti
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={this.handleChangeTarget}
            />
          </div>
        </div>
      </div>
    );

    let trustCalculator = (
      <div className="text-center context-box-workstyle">
        <font color="#1a458c">
          <h5>Trust Calculator Slide-Rule</h5>
          <b>Slide your character trait preferences</b>
          <br />
        </font>
        <div className="card card-trust-slider-header">
          <div className="card-body shadow ">
            <div className="text-area-size">
              <div className="inline">
                <div className="float-left">
                  <b>Authentic</b>
                </div>
                <div className="float-right">
                  <b>Diplomatic</b>
                </div>
              </div>
              <div className="text-center">
                Score: <b>{this.state.authentic}</b>
              </div>
            </div>
          </div>
          <div className="card-body shadow card-trust-slider-body">
            <Slider
              value={this.state.authentic}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlewsAuthenticOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-trust-slider-header">
          <div className="card-body shadow ">
            <div className="text-area-size">
              <div className="inline">
                <div className="float-left">
                  <b>Consistant</b>
                </div>
                <div className="float-right">
                  <b>Vary with context</b>
                </div>
              </div>
              <div className="text-center">
                Score: <b>{this.state.consistant}</b>
              </div>
            </div>
          </div>
          <div className="card-body shadow card-trust-slider-body">
            <Slider
              value={this.state.consistant}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlewsConsistantOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-trust-slider-header">
          <div className="card-body shadow ">
            <div className="text-area-size">
              <div className="inline">
                <div className="float-left">
                  <b>Integrity</b>
                </div>
                <div className="float-right">
                  <b>Politicking</b>
                </div>
              </div>
              <div className="text-center">
                Score: <b>{this.state.intigrity}</b>
              </div>
            </div>
          </div>
          <div className="card-body shadow card-trust-slider-body">
            <Slider
              value={this.state.integrity}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlewsIntigrityOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-trust-slider-header">
          <div className="card-body shadow ">
            <div className="text-area-size">
              <div className="inline">
                <div className="float-left">
                  <b>Compassionate</b>
                </div>
                <div className="float-right">
                  <b>Stern to the Cause</b>
                </div>
              </div>
              <div className="text-center">
                Score: <b>{this.state.compassionate}</b>
              </div>
            </div>
          </div>
          <div className="card-body shadow card-trust-slider-body">
            <Slider
              value={this.state.compassionate}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlewsCompassionateOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-trust-slider-header">
          <div className="card-body shadow ">
            <div className="text-area-size">
              <div className="inline">
                <div className="float-left">
                  <b>Kind</b>
                </div>
                <div className="float-right">
                  <b>Policy Driven</b>
                </div>
              </div>
              <div className="text-center">
                Score: <b>{this.state.kind}</b>
              </div>
            </div>
          </div>
          <div className="card-body shadow card-trust-slider-body">
            <Slider
              value={this.state.kind}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handlewsKindOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-trust-slider-header">
          <div className="card-body shadow ">
            <div className="text-area-size">
              <div className="inline">
                <div className="float-left">
                  <b>Resourceful</b>
                </div>
                <div className="float-right">
                  <b>Bound to provision</b>
                </div>
              </div>
              <div className="text-center">
                Score: <b>{this.state.resourceful}</b>
              </div>
            </div>
          </div>
          <div className="card-body shadow card-trust-slider-body">
            <Slider
              value={this.state.resourceful}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handleResourcefulOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-trust-slider-header">
          <div className="card-body shadow ">
            <div className="text-area-size">
              <div className="inline">
                <div className="float-left">
                  <b>Connector</b>
                </div>
                <div className="float-right">
                  <b>Non-interference</b>
                </div>
              </div>
              <div className="text-center">
                Score: <b>{this.state.connector}</b>
              </div>
            </div>
          </div>
          <div className="card-body shadow card-trust-slider-body">
            <Slider
              value={this.state.connector}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handleConnectorOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
        <div className="card card-trust-slider-header">
          <div className="card-body shadow ">
            <div className="text-area-size">
              <div className="inline">
                <div className="float-left">
                  <b>Humble</b>
                </div>
                <div className="float-right">
                  <b>Proud</b>
                </div>
              </div>
              <div className="text-center">
                Score: <b>{this.state.humble}</b>
              </div>
            </div>
          </div>
          <div className="card-body shadow card-trust-slider-body">
            <Slider
              value={this.state.humble}
              orientation="horizontal"
              max={10}
              handleLabel={'--Pts'}
              onChange={this.handleHumbleOnChange}
            />
          </div>
        </div>
        <div className="space-between-sliders" />
      </div>
    );

    return (
      <div className="container">
        <div className="text-center">
          <h4>
            Self-assessment for intelligence driven service exchange forum. Try
            to be as genuine as possile in your answers.
          </h4>
        </div>
        <div className="space-between-sliders" />
        {mgmtStyle}
        <div className="space-between-sliders" />
        <div className="space-between-sliders" />
        {baseTraits}
        <div className="space-between-sliders" />
        <div className="space-between-sliders" />
        {workStyle}
        <div className="space-between-sliders" />
        <div className="space-between-sliders" />
        {trustCalculator}
        <div className="space-between-sliders" />
        <div className="space-between-sliders" />
        <div className="space-between-sliders" />
        <div className="text-center">
          <h5>
            On click, your assessment would be saved. You can later change. The
            changes would be considered in your assessment intelligence trends.
          </h5>
        </div>
        <div className="float-right">
          <button
            className="btn shadow border border-white btn-primary btn-sm button-pad-top"
            onClick={this.handleSaveClick}
          >
            Save &nbsp;
            <i className="fa fa-check" />
          </button>
        </div>
        <div className="space-between-sliders" />
      </div>
    );
  }
}

export default WhoRUinSX;
