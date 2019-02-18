import React, { Component } from "react";
import Tree from "react-d3-tree";
import TreeD3Nodelevel from "./TreeD3Nodelevel";

import "../teams.css";

import { teamSummary } from '../data/teamSummary';
  
const svgSquare = {
  shape: "rect",

  shapeProps: {
    width: 10,
    height: 10,
    color: "red",
    x: -5,
    y: -5,
    fill: "red"
  },
  stroke: "white",
  strokeWidth: 1
};

  class TreeD3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined
    };
  }
  
  componentWillMount() {
    this.setState({
      data: teamSummary
    });
  }

  someFn = value => {
    console.log("got here:" + value);
  };
  render() {
    //const { nodeData } = this.props;

    return (
      <div className="container">
        <div>
          <div id="treeWrapper" className="form-panel-tree-view">
            <h5>
              <b>Art-Gallery Team-Tree</b>
            </h5>
            <div className="header">
              <div>
                {" "}
                Drag the start-icon center; roll to size; expand/contract.
              </div>
              <div>Legend: <b>M</b> = Team-member & <b>T</b> = "Sub-team"</div>
            </div>
            {/* <Tree data={this.state.data} nodeSvgShape={svgSquare}  onClick={() => this.someFn(nodeData)}/> */}
            <Tree
              data={this.state.data}
              allowForeignObjects
              className="main-start"
              orientation="vertical"
              nodeLabelComponent={{
                render: <TreeD3Nodelevel className="upper-margin" />
                // foreignObjectWrapper: {
                //   y: 4
                // }
              }}
              nodeSvgShape={svgSquare}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TreeD3;
