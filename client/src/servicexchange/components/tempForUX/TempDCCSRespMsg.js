import React, { Component } from 'react';

import APersonalityCompResp from './charts/APersonalityCompResp';
import CCoperationComp from './charts/CCooperationComp';
import DDriverComp from './charts/DDriverComp';
import ISummaryComp from './charts/ISummaryComp';

class TempDCCSRespMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartA: true,
      chartB: false,
      chartC: false,
      chartD: false,
      chartE: false,
      chartF: false,
      chartG: false,
      chartH: false,
      chartI: false
    };

    //this.startListening = this.startListening.bind(this);
    this.showChartType = this.showChartType.bind(this);
  }

  showChartType(chartName) {
    for (let name in this.state) {
      if (name === chartName) {
        this.setState({
          [name]: true
        });
      } else {
        this.setState({
          [name]: false
        });
      }
    }
  }

  render() {
    let chartout;
    //console.log('this.state:' + JSON.stringify(this.state));

    if (this.state.chartA) {
      chartout = (
        <div>
          <APersonalityCompResp />
          <div>
            <font color="blue">
              Note: You have more contextual overlap to job.
            </font>
          </div>
        </div>
      );
    } else if (this.state.chartC) {
      chartout = (
        <div>
          <CCoperationComp />
          <div>
            <font color="blue">
              Cooperation traits in % strength per you & your peers(now)
            </font>
          </div>
        </div>
      );
    } else if (this.state.chartD) {
      chartout = (
        <div>
          <DDriverComp />
          <div>
            <font color="blue">
              Drivers: Hands-on-skill, theoretical knowledge, inteligence,
              imagination
            </font>
          </div>
        </div>
      );
    } else if (this.state.chartI) {
      chartout = (
        <div>
          <ISummaryComp />
          <div>
            <font color="blue">
              Summary: General deductive work-related common traits comparison
            </font>
          </div>
        </div>
      );
    } else {
      chartout = (
        <div>
          <div className="space-at-top" />
          <div className="space-at-top" />

          <h3>
            <font color="brown">
              <b>Not approved and/or Not-requested</b>

              <div>A. Personality</div>
              <div>B. Culture</div>
              <div>C. Cooperation</div>
              <div>D. Skill,KB,Intel,Imagine</div>
              <div>E. Management Styles</div>
              <div>F. Work Styles</div>
              <div>G. Project Delivery</div>
              <div>H. Peer Sentiments</div>
              <div>I. Work Summary Traits</div>
            </font>
          </h3>
        </div>
      );
    }

    let charts = (
      <div>
        <div className="row">
          <div className="col-2">
            <div className="dccs-review-margin float-right">
              <b>
                <font color="#514e93">Click :</font>{' '}
              </b>
            </div>
          </div>
          <div className="col-1">
            <button
              name="chartA"
              className="btn control-btn-graphs"
              //onClick={this.startListening}
              onClick={() => {
                this.showChartType('chartA');
              }}
            >
              <b>
                <font color="#514e93">A</font>
              </b>
            </button>
          </div>
          <div className="col-1">
            <button
              name="chartB"
              className="btn control-btn-graphs"
              //onClick={this.startListening}
              onClick={() => {
                this.showChartType('chartB');
              }}
            >
              <b>
                <font color="#514e93">B</font>
              </b>
            </button>
          </div>
          <div className="col-1">
            <button
              name="chartC"
              className="btn control-btn-graphs"
              //onClick={this.startListening}
              onClick={() => {
                this.showChartType('chartC');
              }}
            >
              <b>
                <font color="#514e93">C</font>
              </b>
            </button>
          </div>
          <div className="col-1">
            <button
              name="chartD"
              className="btn control-btn-graphs"
              //onClick={this.startListening}
              onClick={() => {
                this.showChartType('chartD');
              }}
            >
              <b>
                <font color="#514e93">D</font>
              </b>
            </button>
          </div>
          <div className="col-1">
            <button
              name="chartE"
              className="btn control-btn-graphs"
              //onClick={this.startListening}
              onClick={() => {
                this.showChartType('chartE');
              }}
            >
              <b>
                <font color="#514e93">E</font>
              </b>
            </button>
          </div>
          <div className="col-1">
            <button
              name="chartF"
              className="btn control-btn-graphs"
              //onClick={this.startListening}
              onClick={() => {
                this.showChartType('chartF');
              }}
            >
              <b>
                <font color="#514e93">F</font>
              </b>
            </button>
          </div>
          <div className="col-1">
            <button
              name="chartG"
              className="btn control-btn-graphs"
              //onClick={this.startListening}
              onClick={() => {
                this.showChartType('chartG');
              }}
            >
              <b>
                <font color="#514e93">G</font>
              </b>
            </button>
          </div>
          <div className="col-1">
            <button
              name="chartH"
              className="btn control-btn-graphs"
              //onClick={this.startListening}
              onClick={() => {
                this.showChartType('chartH');
              }}
            >
              <b>
                <font color="#514e93">H</font>
              </b>
            </button>
          </div>
          <div className="col-1">
            <button
              name="chartI"
              className="btn control-btn-graphs"
              //onClick={this.startListening}
              onClick={() => {
                this.showChartType('chartI');
              }}
            >
              <b>
                <font color="#514e93">I</font>
              </b>
            </button>
          </div>
          <div className="col-1">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col">
            <div className="chart-size">{chartout}</div>
          </div>
        </div>
      </div>
    );

    return (
      <div className="container">
        <div className="dccschartsfixedsize">{charts}</div>
      </div>
    );
  }
}

export default TempDCCSRespMsg;
