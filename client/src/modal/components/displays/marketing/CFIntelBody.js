import React, { Component } from "react";
import moment from "moment";

// import FundRaiseTrend from '../../../../marketing/components/browse/charts/FundRaiseTrend';

import EffectPropMap from '../../../../marketing/components/browse/charts/EffectPropMap';
// import "./css/nook.css";
import LineTrend from '../../../../marketing/components/browse/charts/LineTrendEarningExpense';

import './modalmkt.css';

class CFIntelBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comparitive: false,
      sentiment: true,
      socialCircle: false
    };

    // this.switchToComparitive = this.switchToComparitive.bind(this);
    // this.switchToSentiment = this.switchToSentiment.bind(this);
    // this.showDetailMsg = this.showDetailMsg.bind(this);
  }

  showDetailMsg = () => {
    alert(
      "In production, this would lead to deeper level comparison of how you perceive yourself and how your circle perceived you."
    );
  };

  // switchToComparitive = () => {
  //   this.setState({
  //     comparitive: true,
  //     sentiment: false,
  //     socialCircle: false
  //   });
  // };

  // switchToSentiment = () => {
  //   this.setState({
  //     comparitive: false,
  //     sentiment: true,
  //     socialCircle: false
  //   });
  // };

  // switchToSocialCircle = () => {
  //   this.setState({
  //     comparitive: false,
  //     sentiment: false,
  //     socialCircle: true
  //   });
  // };

  render() {
    let sentimentout;
    // let comparitiveout;
    // let socialcircleout;


    var exdate = moment();
    // var signDate = exdate.format('YYYY-MM-DD HH:mm A');
    var signDate = exdate.format("dddd, MMMM Do YYYY, h:mm:ss a");
    // -----------------------------------------------

    if (this.state.sentiment) {
      sentimentout = (
        <div className="fixedsize-gauge text-center">
          <h3>
            <font color="#4f6277">Your Art-gallery Crowd Fund Intel</font>
          </h3>
          <strong>At: </strong>
          <font color="blue">{signDate}</font>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-6">
              <div>
                <EffectPropMap />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <LineTrend />
              </div>
            </div>
          </div>
          {/* <div className="textspaceTop" /> */}
          {/* <div className="row">
            <div className="col-12">
              <div className="float-right">
                <button
                  className="btn btn-primary btn-sm shadow"
                  onClick={this.switchToComparitive}
                >
                  Show Comparitive Chart &nbsp;
                  <i className="fa fa-check" />
                </button>
              </div>
              <div className="float-right">
                <button
                  className="btn btn-primary btn-sm shadow"
                  onClick={this.switchToSocialCircle}
                >
                  Show My Social Circle &nbsp;
                  <i className="far fa-dot-circle" />
                </button>
              </div>
            </div>
          </div> */}
        </div>
      );
    } else {
      sentimentout = null;
    }



    return (
      <div>
        <div>{sentimentout}</div>
        {/* <div>{comparitiveout}</div>
        <div>{socialcircleout}</div> */}
      </div>
    );
  }
}

export default CFIntelBody;
