import React, { Component } from 'react';

import './feedback.css';

import GeneralFeedback from './GeneralFeedback';
import TargetedFeedback from './TargetedFeedback';
import TeamFeedback from './TeamFeedback';

class FeedbackMgmt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalFeedback: false,
      reqRespFedback: false,
      teamFeedback: false
      
    };

    this.FeedbackMgmtPanel = this.FeedbackMgmtPanel.bind(this);
  }

  FeedbackMgmtPanel = value => {
    //console.log("got here :" + value);
    for (let name in this.state) {
      if (name !== value) {
        this.setState({
          [name]: false
        });
      } else {
        this.setState({
          [name]: true
        });
      }
    }
  };

  render() {
    //console.log('inside render props:' + JSON.stringify(this.props));

    let defaultMsg;
    defaultMsg = (
      <div className="default-msg">
        <div className="left-align">
          <div>
            <b>Name:&nbsp; </b>{" "}
            <font color="#ddd1a8">
              {this.props.thisProject.msg.engagementName}{" "}
            </font>
          </div>
          <div>
            <b>Description: </b>{" "}
            <font color="#ddd1a8">
              {this.props.thisProject.msg.description}
            </font>
          </div>
          <div>
            <b>Project Type: </b>{" "}
            <font color="#ddd1a8">
              {this.props.thisProject.msg.engagementType}
            </font>
          </div>
          <div>
            <b>Project Manager: </b>
            <font color="#ddd1a8"> You </font>
          </div>
        </div>
        <br />
        <br />
        <div className="text-center">
          <font color="#ddd1a8">
            If all values above are empty, you may want to initiate a project.
          </font>
        </div>
      </div>
    );

    let controlBar = (
      <div className="text-center ctrl-panel-x">
        <div className="space-at-top" />
        <h4>
          <div className="header-shadow">
            <b>
              <font color="#cbd8ed">Feedback Management</font>
            </b>
          </div>
        </h4>

        <div className="space-at-top" />
        <div className="space-at-top" />
        <div className="space-between-buttons" />
        <div className="text-center">

          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.FeedbackMgmtPanel("generalFeedback");
            }}
          >
            General
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.FeedbackMgmtPanel("reqRespFedback");
            }}
          >
            Targeted
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.FeedbackMgmtPanel("teamFeedback");
            }}
          >
            TeamBased
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
         

          <div className="space-at-top" />
          <div className="row">
            <div className="col-1">&nbsp;</div>
            <div className="col-10">
              <div className="text-center vedio-msg">
                Click the option to work on a context.
              </div>
            </div>
            <div className="col-1">&nbsp;</div>
          </div>
        </div>
      </div>
    );

    let workarea;
  
    if (this.state.generalFeedback) {
      workarea = (<div><GeneralFeedback fwdProps={this.props} /></div>);
    } else if (this.state.reqRespFedback) {
      workarea = (<div><TargetedFeedback fwdProps={this.props}/></div>);
    } else if (this.state.teamFeedback) {
      workarea = (<div><TeamFeedback fwdProps={this.props}/></div>);
    } else {
      workarea = defaultMsg;
    }

    return (
      <div className="container the-box-background">
        <div ref="app">
          <div className="text-center">
            <div className="row">
              <div className="col-md-4 col-sm-6">{controlBar}</div>
              <div className="col-md-8 col-sm-6">
                <div className="chart-panel">{workarea}</div>
                {/* {speakout} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div><font color="white">In ProjectingMgmt.js</font></div>
    );
  }
}

export default FeedbackMgmt;