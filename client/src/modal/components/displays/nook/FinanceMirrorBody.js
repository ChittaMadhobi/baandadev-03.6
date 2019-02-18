import React, { Component } from 'react';
import moment from 'moment';

import PiChart from '../../../../nook/components/charts/budget/Pi3D';
import BarChartIncome from '../../../../nook/components/charts/budget/BarBudgetRealIncome';
import BarChartExpense from '../../../../nook/components/charts/budget/BarBudgetRealExpense';
import LineChart from '../../../../nook/components/charts/budget/LineTrendEarningExpense';

import './css/nook.css';

class FinanceMirrorBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pidistribution: true,
      barincomedist: false,
      barexpensedist: false,
      linetrend: false
    };

    this.switchToPiDistribution = this.switchToPiDistribution.bind(this);
    this.switchToBarIncDist = this.switchToBarIncDist.bind(this);
    this.switchToBarExpDist = this.switchToBarExpDist.bind(this);
    this.switchToLinetrend = this.switchToLinetrend.bind(this);
  }

  showDetailMsg = () => {
    alert(
      'In production, this would lead to deeper level comparison of how you perceive yourself and how your circle perceived you.'
    );
  };

  switchToPiDistribution = () => {
    this.setState({
      pidistribution: true,
      barincomedist: false,
      barexpensedist: false,
      linetrend: false
    });
  };

  switchToBarIncDist = () => {
    this.setState({
      pidistribution: false,
      barincomedist: true,
      barexpensedist: false,
      linetrend: false
    });
  };

  switchToBarExpDist = () => {
    this.setState({
      pidistribution: false,
      barincomedist: false,
      barexpensedist: true,
      linetrend: false
    });
  };

  switchToLinetrend = () => {
    this.setState({
      pidistribution: false,
      barincomedist: false,
      barexpensedist: false,
      linetrend: true
    });
  };

  render() {
    let picharttout;
    let barchartincome;
    let barchartexpense;
    let linechartout;

    var exdate = moment();
    var signDate = exdate.format('dddd, MMMM Do YYYY, h:mm:ss a');

    if (this.state.pidistribution) {
      picharttout = (
        <div className="fixedsize-budget text-center">
          {/* <h3>
            <font color="#4f6277">
              Cumulative Income and Expense Distribution{' '}
            </font>
          </h3> */}
          <strong>Begining of this year to : </strong> {signDate}
          <div className="textspaceTop" />
          <div className="row">
            <div className="col">
              <PiChart />
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            {/* <div className="col-6">&nbsp;</div> */}
            <div className="col-12">
              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToBarIncDist}
              >
                Income Bar &nbsp;
                <i className="fa fa-check" />
              </button>

              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToBarExpDist}
              >
                Expense Bar &nbsp;
                <i className="fa fa-check" />
              </button>

              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToLinetrend}
              >
                Trend Line&nbsp;
                <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      picharttout = null;
    }

    if (this.state.barincomedist) {
      barchartincome = (
        <div className="fixedsize-budget text-center">
          {/* <h3>
            <font color="#4f6277">Income and Expense Ratio-Bar </font>
          </h3> */}
          <strong>As on: </strong>
          &nbsp; {signDate}
          <div className="row">
            <div className="col">
              <BarChartIncome />
            </div>
          </div>
          <div className="row">
            <div className="col">&nbsp;</div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToPiDistribution}
              >
                Income-Exp Pi &nbsp;
                <i className="fa fa-check" />
              </button>

              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToBarExpDist}
              >
                Expense Bar &nbsp;
                <i className="fa fa-check" />
              </button>

              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToLinetrend}
              >
                Trend Line&nbsp;
                <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      barchartincome = null;
    }

    if (this.state.barexpensedist) {
      barchartexpense = (
        <div className="fixedsize-budget text-center">
          {/* <h3>
            <font color="#4f6277">Income and Expense Ratio-Bar </font>
          </h3> */}
          <strong>As on: </strong>
          &nbsp; {signDate}
          <div className="row">
            <div className="col">
              <BarChartExpense />
            </div>
          </div>
          <div className="row">
            <div className="col">&nbsp;</div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToPiDistribution}
              >
                Income-Exp Pi &nbsp;
                <i className="fa fa-check" />
              </button>

              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToBarIncDist}
              >
                Income Bar &nbsp;
                <i className="fa fa-check" />
              </button>

              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToLinetrend}
              >
                Trend Line&nbsp;
                <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      barchartexpense = null;
    }

    if (this.state.linetrend) {
      linechartout = (
        <div className="fixedsize-budget text-center">
          {/* <h3>
            <font color="#4f6277">Income, Expense, Saving Trend-lines </font>
          </h3> */}
          <strong>As on: </strong>
          &nbsp; {signDate}
          <div className="textspaceTop" />
          <div className="row">
            <div className="col">
              <LineChart />
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToPiDistribution}
              >
                Income-Exp Pi &nbsp;
                <i className="fa fa-check" />
              </button>
              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToBarIncDist}
              >
                Income Bar &nbsp;
                <i className="fa fa-check" />
              </button>
              <button
                className="btn btn-info btn-sm shadow"
                onClick={this.switchToBarExpDist}
              >
                Expense Bar &nbsp;
                <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      linechartout = null;
    }

    return (
      <div>
        <div>{picharttout}</div>
        <div>{barchartincome}</div>
        <div>{barchartexpense}</div>
        <div>{linechartout}</div>
      </div>
    );
  }
}

export default FinanceMirrorBody;
