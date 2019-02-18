import React, { Component } from "react";
import Select from "react-select";

import "../../css/browse.css";
import { browseTypes } from "./data/browseTypes";

import BrowsePosts from "./BrowsePosts";
import BrowseHistoricProjects from "./BrowseHistoricProjects";

class SXBrowse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      browseType: "",
      howToBrowse: true,
      browseNow: false
    };

    this.selectBrowseDomain = this.selectBrowseDomain.bind(this);
    this.gotoBrowseProcess = this.gotoBrowseProcess.bind(this);
  }

  gotoBrowseProcess = value => {
    if (value === "createSteps") {
      this.setState({
        howToBrowse: !this.state.howToBrowse,
        browseNow: false,
        browseType: ""
      });
    }
  };

  selectBrowseDomain = (ideaType, { action }) => {
    //console.log("Ideation handleNewIdea: " + JSON.stringify(ideaName) + ' ' + ideaName.label);
    this.setState({
      browseType: ideaType,
      howToBrowse: false,
      browseNow: true
    });
  };

  render() {
    //console.log("this.state: " + JSON.stringify(this.state));

    let browseProcess;

    if (this.state.howToBrowse) {
      browseProcess = (
        <div>
          <div className="how-to-header-space" />
          <div className="row">
            <div className="how-to-create-team">
              <div className="text-center">
                <h5> How to Browse Contextually </h5>
              </div>
              <ul>
                <li>
                  Select your domain of posting. Your browsing will be in the
                  context of the posting.
                  <ul>
                    <li>
                      The listing is per Baanda RC (Recommendaiton Score) based
                      on intelligence based average of multidimensional scoring.
                    </li>
                    <li>You can filter on description.</li>
                    <li>Click on a row to expand.</li>
                    <li>
                      If interested, click on 'Click to Notify interest' and
                      your interest would be in target's message box.
                    </li>
                  </ul>
                </li>
                <li>
                  To view your past project history ... select the 'Your
                  Historic Project'.
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      browseProcess = null;
    }
    let output;
    if (this.state.browseNow) {
      //console.log("this.state:" + JSON.stringify(this.state));
      // This (value = 99999) is how we defined in data and should be in db too in future.
      // Or ... change  the plan for recognizing project vs. posts.
      if (this.state.browseType.value === "99999") {
        output = (
          <div>
            <BrowseHistoricProjects fwdProp={this.props} />
          </div>
        );
      } else {
        output = (
          <div>
            <BrowsePosts fwdProp={this.props} />
          </div>
        );
      }
    } else {
      output = null;
    }

    return (
      <div className="browse-header text-center">
        <div className="row">
          <div className="col">
            <div className="browse-body">
              {browseProcess}
              {output}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="header-shadow">
              <b>
                <font color="#64682a" size="5">
                  B R O W S E
                </font>
              </b>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center">
              <button
                className="show-btn-howto"
                onClick={() => {
                  this.gotoBrowseProcess("createSteps");
                }}
              >
                How To
                <div className="float-right">
                  <i className="fas fa-toggle-off" />
                </div>
              </button>{" "}
            </div>
          </div>
          <div className="col-md-6">
            <div className="browse-select">
              <font color="#293087">
                <Select
                  value={this.state.browseType}
                  options={browseTypes}
                  classNamePrefix="select"
                  onChange={this.selectBrowseDomain}
                  maxMenuHeight={150}
                  placeholder="Select browsing domain"
                />
              </font>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            <div className="browse-body">
              {browseProcess}
              {output}
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default SXBrowse;
