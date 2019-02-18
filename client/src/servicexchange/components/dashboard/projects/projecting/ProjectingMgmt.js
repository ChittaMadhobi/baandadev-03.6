import React, { Component } from "react";
import "./project.css";
import Projecting from './projectingForms/Ideation';
import Discovery from './projectingForms/Dicovery';
import Baseline from './projectingForms/Baseline';
import Costing from './projectingForms/costing/Budget';
import Timing from './projectingForms/timing/Timing';

class ProjectingMgmt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projecting: false,
      discovery: false,
      baseline: false,
      costing: false,
      timing: false
      
    };

    this.ProjectingMgmtPanel = this.ProjectingMgmtPanel.bind(this);
  }

  ProjectingMgmtPanel = value => {
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
              <font color="#cbd8ed">Endeavor Projection</font>
            </b>
          </div>
        </h4>

        <div className="space-at-top" />

        <div className="text-center">
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.ProjectingMgmtPanel("projecting");
            }}
          >
            Ideation
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.ProjectingMgmtPanel("discovery");
            }}
          >
            Discovery
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.ProjectingMgmtPanel("baseline");
            }}
          >
            Baseline
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.ProjectingMgmtPanel("costing");
            }}
          >
            Costing
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
          <div className="space-between-buttons" />
          <button
            className="btn control-btn-preview"
            onClick={() => {
              this.ProjectingMgmtPanel("timing");
            }}
          >
            Timing
            <div className="float-right">
              <i className="fas fa-angle-right" />
            </div>
          </button>{" "}
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

    if (this.state.projecting) {
      workarea = (<Projecting propsForward={this.props} />);
    } else if (this.state.discovery) {
      workarea = (<Discovery propsForward={this.props} />);
    } else if (this.state.baseline) {
      workarea = (<Baseline propsForward={this.props} />);
    } else if (this.state.costing) {
      workarea = (<Costing propsForward={this.props} />);
    } else if (this.state.timing) {
      workarea = (<Timing propsForward={this.props} />);
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

export default ProjectingMgmt;
