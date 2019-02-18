import React, { Component } from 'react';

import Publish from './Publish';
import Consume from './Consume';
import DioUsageIntel from './DioUsageIntel';

class DioMgmt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // setup: false,
      publish: false,
      consume: false,
      usage: false
    };

    this.DocumentMgmtPanel = this.DocumentMgmtPanel.bind(this);
  }

  DocumentMgmtPanel = value => {
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
    //console.log('this.state:' + JSON.stringify(this.state));

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
              <font color="#cbd8ed">Digital Asset Mgmt.</font>
            </b>
          </div>
        </h4>

        <div className="space-at-top" />
        <div className="space-at-top" />
        <div className="text-center">
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.DocumentMgmtPanel("publish");
            }}
          >
            Publish
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.DocumentMgmtPanel("consume");
            }}
          >
            Consume
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.DocumentMgmtPanel("usage");
            }}
          >
            Usage
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-at-top" />
          <div className="space-between-buttons" />
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
    if (this.state.publish) {
      workarea = (
        <div>
          <Publish fwdProps={this.props} />
        </div>
      );
    } else if (this.state.consume) {
      workarea = (
        <div>
          <Consume fwdProps={this.props} />
        </div>
      );
    } else if (this.state.usage) {
      workarea = (
        <div>
          <DioUsageIntel fwdProps={this.props} />
        </div>
      );
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DioMgmt;