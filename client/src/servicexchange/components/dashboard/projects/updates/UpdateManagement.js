import React, { Component } from 'react';

import Active from './Active';
import Release from './Release';
import Intel from './Intel';

import './update.css';

class UpdateManagement extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: false,
      release: false,
      intel: false
    }

    this.UpdateMgmtPanel = this.UpdateMgmtPanel.bind(this);
  }

  UpdateMgmtPanel = value => {
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
              <font color="#cbd8ed">Project Updates</font>
            </b>
          </div>
        </h4>

        <div className="space-at-top" />
        <div className="space-at-top" />
        <div className="text-center">
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.UpdateMgmtPanel("active");
            }}
          >
            Active
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.UpdateMgmtPanel("release");
            }}
          >
            Release
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.UpdateMgmtPanel("intel");
            }}
          >
            intel
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
    if (this.state.active) {
      workarea = (
        <div>
          <Active fwdProps={this.props} />
        </div>
      );
    } else if (this.state.release) {
      workarea = (
        <div>
          <Release fwdProps={this.props} />
        </div>
      );
    } else if (this.state.intel) {
      workarea = (
        <div>
          <Intel fwdProps={this.props} />
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

export default UpdateManagement;