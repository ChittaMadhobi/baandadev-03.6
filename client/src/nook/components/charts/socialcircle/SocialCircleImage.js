import React, { Component } from "react";
//import { ForceGraph2D, ForceGraph3D, HighlightGraph } from "react-force-graph";
import { ForceGraph3D } from "react-force-graph";
// import Three from "three";
import "./css/socialCircleImage.css";

//import { gData } from "./data/scRelation";
import { mySocialCircle } from "./data/mySocialCircle";

class SocialCircleImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlightNodes: [],
      highlightLink: null,
      showPopLink: false,
      showPopNode: false,
      clickNode: {},
      clickLink: null
    };

    this.nodeClick = this.nodeClick.bind(this);
    this.linkClick = this.linkClick.bind(this);

    this.handleNodeHover = this.handleNodeHover.bind(this);
  }

  handleNodeHover = node => {
    //this.setState({ highlightNodes: node ? [node] : [] });
    //alert('Testig node hover: ' + JSON.stringify(node));
    // alert('xxxxx');
    this.setState({
      showPop: !this.state.showPop
    });
  };

  nodeClick = node => {
    //console.log("nodeClick node:" + JSON.stringify(node));
    this.setState({
      showPopNode: true,
      showPopLink: false,
      clickNode: node
    });
  };

  linkClick = link => {
    this.setState({
      showPopNode: false,
      showPopLink: true,
      clickLink: link
    });
  };

  // test2 = link => {
  //   alert("LLLL:" + JSON.stringify(link));
  // };

  render() {
    //console.log("XXXX:" + JSON.stringify(this.state.clickLink));
    //console.log("YYYY:" + this.state.clickNode.name);
    // let img = this.state.clickNode.img;
    // console.log('img:' + img);
    let yy;

    if (this.state.showPopNode) {
      if (this.state.clickNode.img === "hub") {
        yy = (
          <div className="fixed-heightx">
            <div className="row">
              <div className="col">
                <font color="lightblue">
                  <h4>Close Social Circle</h4>
                </font>
              </div>
            </div>
            <div className="line-gap" />
            <div className="line-gap" />
            <div className="line-gap" />
            <div className="row">
              <div className="col">
                <div>
                  <font color="white">This is a relation-hub</font>
                </div>
              </div>
            </div>
            <div className="line-gap" />
            <div className="row">
              <div className="col">
                <div>
                  Hub Name:{" "}
                  <font color="#ed8161">
                    <b> {this.state.clickNode.name}</b>
                  </font>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        yy = (
          <div className="fixed-heightx">
            <div className="row">
              <div className="col">
                <font color="lightblue">
                  <h4>Close Social Circle</h4>
                </font>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <img
                    src={this.state.clickNode.img}
                    alt="..."
                    height="150px"
                    width="75%"
                    border="5"
                  />
                </div>
              </div>
            </div>
            <div className="line-gap" />
            <div className="text-frame">
              <div className="row">
                <div className="col">
                  <div className="text-center">
                    Name: <b> {this.state.clickNode.name}</b>
                  </div>
                </div>
              </div>
              <div className="line-gap" />
              <hr />
              <div className="row">
                <div className="col">
                  Describe: <b> {this.state.clickNode.desc}</b>
                </div>
              </div>
              <div className="line-gap" />
              <div className="row">
                <div className="col">
                  Value: <b>{this.state.clickNode.val} </b>
                </div>
              </div>
            </div>
          </div>
        );
      }
    } else {
      yy = null;
    }

    if (this.state.showPopLink) {
      yy = (
        <div className="fixed-heightx">
          <div className="row">
            <div className="col">
              <font color="lightblue">
                <h4>Close Social Circle</h4>
              </font>
            </div>
          </div>
          <div className="line-gap" />
          <div className="line-gap" />
          <div className="line-gap" />
          <div className="row">
            <div className="col">
              <div>
                <font color="white">
                  You clicked on a link. In production version, this would state
                  the nature and strength of relationship.
                </font>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div>
          <div className="row">
            <div className="col-3">
              <div>{yy}</div>
            </div>
            <div className="col-9">
              <div className="flex-container">
                <ForceGraph3D
                  graphData={mySocialCircle}
                  height={500}
                  width={820}
                  backgroundColor="#092f6d"
                  //showNavInfo={true}
                  linkVisibility={true}
                  linkCurvature={0.25}
                  onNodeClick={this.nodeClick}
                  onLinkClick={this.linkClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialCircleImage;