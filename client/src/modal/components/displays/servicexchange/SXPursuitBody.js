import React, { Component } from 'react';
import moment from 'moment';

import SXMapIntel from '../../../../servicexchange/components/sxIntel/SXIntelMap';

import './css/sx.css';

class SXPursuitBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comparitive: true,
      sentiment: false
    };

    this.switchToPostDetails = this.switchToPostDetails.bind(this);
    this.switchToIntelMap = this.switchToIntelMap.bind(this);
    this.showDetailMsg = this.showDetailMsg.bind(this);
  }

  showDetailMsg = () => {
    alert(
      'In production, this would lead to deeper level comparison of how you perceive yourself and how your circle perceived you.'
    );
  };

  switchToPostDetails = () => {
    this.setState({
      comparitive: true,
      sentiment: false
    });
  };

  switchToIntelMap = () => {
    this.setState({
      comparitive: false,
      sentiment: true
    });
  };

  render() {
    //console.log('SXPursuiBody props:' + JSON.stringify(this.props));
    let sentimentout;
    let comparitiveout;
    var exdate = moment();
    var signDate = exdate.format('dddd, MMMM Do YYYY, h:mm:ss a');

    let postdate = this.props.messageDate.format(
      'dddd, MMMM Do YYYY, h:mm:ss a'
    );

    let id = this.props.id;
    // -----------------------------------------------

    if (this.state.sentiment) {
      sentimentout = (
        <div className="fixedsize-gauge text-center ">
          <h3>
            <font color="#4f6277">Your Service Exchange Pursuits</font>
          </h3>
          <strong>At: </strong>
          <font color="blue">{signDate}</font>
          <div className="textspaceTop" />
          <div className="fixed-size-post-details">
            <div className="row">
              <div className="col-md-6">
                {parseInt(id, 10) + 1} .&nbsp;
                <b>
                  Posting Type: &nbsp;
                  <font color="blue">{this.props.postName} </font>
                </b>
              </div>
              <div className="col-md-2">
                <div className="float-right">
                  <b>Posting Name: &nbsp;</b>
                </div>
              </div>
              <div className="col-md-4">
                <div className="float-left">
                  <b>
                    <font color="blue">{this.props.title} </font>
                  </b>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">&nbsp;</div>
              <div className="col-md-2">
                <div className="float-right">
                  <b>To Do: &nbsp;</b>
                </div>
              </div>
              <div className="col-md-4">
                <div className="float-left">
                  <b>
                    <font color="blue">{this.props.from} </font>
                  </b>
                </div>
              </div>
            </div>
            <div className="textspaceTop" />
            <div className="row">
              <div className="col-2">
                <div className="float-right">
                  <b>Description: &nbsp;</b>
                </div>
              </div>
              <div className="col-9">
                <div className="float-left">
                  <b>
                    <font color="blue">{this.props.message} </font>
                  </b>
                </div>
              </div>
              <div className="col-1">&nbsp;</div>
            </div>
            <div className="textspaceTop" />
            <div className="row">
              <div className="col-md-2">
                <div className="float-right">
                  <b>Post Date: &nbsp;</b>
                </div>
              </div>
              <div className="col-md-6">
                <div className="float-left">
                  <b>
                    <font color="blue"> {postdate} </font>
                  </b>
                </div>
              </div>
              <div className="col-md-4">&nbsp;</div>
            </div>
            <div className="textspaceTop" />
            <div className="row">
              <div className="col-md-2">
                <div className="float-right">
                  <b>SX Type: &nbsp;</b>
                </div>
              </div>
              <div className="col-md-4">
                <div className="float-left">
                  <b>
                    <font color="blue">{this.props.type} </font>
                  </b>
                </div>
              </div>
              <div className="col-md-6">&nbsp;</div>
            </div>
          </div>

          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <div className="float-right">
                <button
                  className="btn btn-primary btn-sm shadow"
                  onClick={this.switchToPostDetails}
                >
                  Geo-time Intel Map &nbsp;
                  <i className="fa fa-check" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      sentimentout = null;
    }

    if (this.state.comparitive) {
      comparitiveout = (
        <div className="text-center">
          <SXMapIntel id={this.props.id} />

          <div className="textspaceTop" />
          <div className="float-right">
            <button
              className="btn btn-primary btn-sm shadow"
              onClick={this.switchToIntelMap}
            >
              Show Posting Details&nbsp;
              <i className="fas fa-check" />
            </button>
          </div>
        </div>
      );
    } else {
      comparitiveout = null;
    }

    return (
      <div>
        <div>{sentimentout}</div>
        <div>{comparitiveout}</div>
      </div>
    );
  }
}

export default SXPursuitBody;
