import React, { Component } from "react";
import Select from "react-select";

import { docUsagePubNames } from "./data/docUsagePubNames";
import { docUsage } from "./data/docUsage";

class DioUsageIntel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      howtoReadUsage: false,

      pubName: "",
      pubContext: "",
      pubDomain: "",
      consumptionType: "",
      mediaType: "",
      publishedOn: "",
      NoOfReaders: 0,
      abstract: "",
      contentQuality: 0,
      presentationQuality: 0,
      projectUsability: 0,
      comments: []
    };

    this.gotoDioUsage = this.gotoDioUsage.bind(this);
    this.handlePubNameSelect = this.handlePubNameSelect.bind(this);
    this.setStateWithSelectedName = this.setStateWithSelectedName.bind(this);
  }

  handlePubNameSelect = (value, { action }) => {
    this.setState({
      pubName: value,
      comments: []
    });
    this.setStateWithSelectedName(value);
  };

  setStateWithSelectedName = name => {
    docUsage.map(obj => {
      if (obj.pubName === name.label) {
        this.setState({
          pubContext: obj.pubContext,
          pubDomain: obj.pubDomain,
          consumptionType: obj.consumptionType,
          mediaType: obj.mediaType,
          publishedOn: obj.publishedOn,
          NoOfReaders: obj.NoOfReaders,
          abstract: obj.abstract,
          contentQuality: obj.contentQuality,
          presentationQuality: obj.presentationQuality,
          projectUsability: obj.projectUsability,
          //comments: [...this.state.comments, obj.comments]
          comments: obj.comments
        });
      }
      return obj.pubName;
    });
  };

  gotoDioUsage = value => {
    if (value === "howtoReadUsage") {
      this.setState({
        howtoReadUsage: !this.state.howtoReadUsage
      });
    }
  };

  render() {
    // let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    // let option;

    let howtoUsageSteps;
    if (this.state.howtoReadUsage) {
      howtoUsageSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              <font color="lightyellow">
                <p>
                  This provides intel on your publication. The first option is
                  the combination of all publication. You could also select a
                  particular publication name and find different kinds of
                  response that is an average of peer's feedbacks.
                  <br />
                  <b>
                    <p>
                      Select a name from the drop down and see the high-level
                    </p>
                  </b>
                </p>
                <p>
                  The review logs would be visible after the graphical response
                  section.
                </p>
              </font>
            </div>
          </div>
        </div>
      );
    } else {
      howtoUsageSteps = null;
    }

    // -------------------- Content Bar
    let contentBar, yy, barbg, genStyle, contentqper;
    // let contentq = this.state.contentQuality;
    // percentage = (value - min) / (max - min)
    // sentimentper = Math.floor(((sentimentBarScore + 1) / 2) * 100);

    contentqper = this.state.contentQuality * 10; // Converts into percentage

    if (contentqper <= 25) {
      barbg = "progress-bar bg-danger";
    } else if (contentqper > 25 && contentqper <= 50) {
      barbg = "progress-bar bg-warning";
    } else if (contentqper > 50 && contentqper <= 75) {
      barbg = "progress-bar bg-primary";
    } else {
      barbg = "progress-bar bg-success";
    }
    yy = contentqper.toString() + "%";
    genStyle = { width: yy };

    contentBar = (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div className="float-right">Content Quality:</div>
          </div>
          <div className="col-md-6">
            <div className="progress progbar-pad">
              <div
                className={barbg}
                //style={{ width: '70%' }}
                style={genStyle}
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {this.state.contentQuality}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="float-left">{this.state.contentQuality}</div>
          </div>
        </div>
      </div>
    );
    // ----------------------- Presentation Bar

    let presentBar, presentqper;
    presentqper = this.state.presentationQuality * 10; // Converts into percentage

    if (presentqper <= 25) {
      barbg = "progress-bar bg-danger";
    } else if (presentqper > 25 && presentqper <= 50) {
      barbg = "progress-bar bg-warning";
    } else if (presentqper > 50 && presentqper <= 75) {
      barbg = "progress-bar bg-primary";
    } else {
      barbg = "progress-bar bg-success";
    }
    //qlBarBg = "progress-bar bg-primary";
    yy = presentqper.toString() + "%";
    genStyle = { width: yy };

    presentBar = (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div className="float-right">Presentation Quality :</div>
          </div>
          <div className="col-md-6">
            <div className="progress progbar-pad">
              <div
                className={barbg}
                //style={{ width: '70%' }}
                style={genStyle}
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {this.state.presentationQuality}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="float-left">{this.state.presentationQuality}</div>
          </div>
        </div>
      </div>
    );

    // ---------------------------- Project Usability
    let projectBar, projectqper;
    projectqper = this.state.projectUsability * 10; // Converts into percentage

    if (projectqper <= 25) {
      barbg = "progress-bar bg-danger";
    } else if (projectqper > 25 && projectqper <= 50) {
      barbg = "progress-bar bg-warning";
    } else if (projectqper > 50 && projectqper <= 75) {
      barbg = "progress-bar bg-primary";
    } else {
      barbg = "progress-bar bg-success";
    }
    //qlBarBg = "progress-bar bg-primary";
    yy = projectqper.toString() + "%";
    genStyle = { width: yy };

    projectBar = (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div className="float-right">Usability Quality :</div>
          </div>
          <div className="col-md-6">
            <div className="progress progbar-pad">
              <div
                className={barbg}
                //style={{ width: '70%' }}
                style={genStyle}
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {this.state.projectUsability}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="float-left">{this.state.projectUsability}</div>
          </div>
        </div>
      </div>
    );

    let intel = (
      <div>
        <div className="space-at-top" />
        <div className="row">
          <div className="col">
            <div className="pub-intel-pad">
              The publication &nbsp;
              <font color="lightyellow">{this.state.pubName.label}</font>
              &nbsp; of &nbsp;
              <font color="lightyellow">{this.state.pubDomain}</font>{" "}
              &nbsp;domain and &nbsp;
              <font color="lightyellow">{this.state.pubContext}</font> &nbsp;
              context was published on &nbsp;
              <font color="lightyellow">{this.state.publishedOn}</font> &nbsp;
              was consumed by &nbsp;
              <font color="lightyellow">{this.state.NoOfReaders}</font> &nbsp;
              peers.
            </div>
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col">
            <div className="pub-intel-pad">
              Abstract/Summary: &nbsp;
              <font color="lightyellow">{this.state.abstract}</font>
            </div>
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="space-between-buttons" />
        {contentBar}
        <div className="space-between-buttons" />
        {presentBar}
        <div className="space-between-buttons" />
        {projectBar}
        <div className="space-between-buttons" />
        <hr />
        <div className="align-left">
          {this.state.comments.map(ob => {
            return (

                <div key={ob.seq}>
                  <div className="row">
                    <div className="col">
                      <div className="show-review">
                        <font color="white">
                          <p>
                            Comment By: <b>{ob.reviewBy}</b>
                          </p>
                          {ob.review}
                        </font>
                        {/* {console.log(JSON.stringify(ob))} */}
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

            );
          })}
        </div>
      </div>
    );

    let output;
    if (this.state.pubName) {
      output = intel;
    } else {
      output = null;
    }

    return (
      <div>
        <div className="form-panel-publish">
          <div className="text-center">
            <h5>Publication Usage Intel</h5>
            <div className="row">
              <div className="col-md-3">
                <div className="float-left">
                  <button
                    className="control-btn-consume"
                    onClick={() => {
                      this.gotoDioUsage("howtoReadUsage");
                    }}
                  >
                    How-to
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                </div>
              </div>
              <div className="col-md-5">
                <font color="blue">
                  <Select
                    value={this.state.pubName}
                    //isMulti
                    autosize={false}
                    options={docUsagePubNames}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handlePubNameSelect}
                    maxMenuHeight={150}
                    isSearchable={true}
                    placeholder="Select a published name "
                  />
                </font>
              </div>
              <div className="col-md-4 pub-intel-padding">
                <p>Select a published doc-name to check usage </p>
              </div>
            </div>
            <div className="row">
              <div className="col">{howtoUsageSteps}</div>
            </div>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default DioUsageIntel;
