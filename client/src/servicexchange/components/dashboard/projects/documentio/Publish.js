import React, { Component } from "react";
import Select from "react-select";
import TextFieldGroup from "../../../../../utils/TextFieldGroup";
import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";

import "./dio.css";

import { projectContext } from "./data/projectContext";
import { documentDomain } from "./data/documentDomain";
import { consumptionType } from "./data/consumptionType";
import { pubTargetArtGallery } from "./data/pubTargetArtGallery";
import { pubTargetCBTL } from "./data/pubTargetCBTL";

class Publish extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pubName: "",
      pubWIPName: "",
      pubProjectContext: "",
      metaWords: "",
      domainName: "",
      domainOtherName: "",
      abstract: "",
      consumableBy: [],
      pubNotify: [],
      howtoPublish: false,

      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.gotoPublishingProcess = this.gotoPublishingProcess.bind(this);
    this.handleProjContext = this.handleProjContext.bind(this);

    this.handlePubNotify = this.handlePubNotify.bind(this);
    this.handleConsumeable = this.handleConsumeable.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleSaveClickWIP = this.handleSaveClickWIP.bind(this);
    this.handleDomainName = this.handleDomainName.bind(this);
  }

  handleSaveClick() {
    alert(
      "Eventually -- When you click this, your work will be saved in database and right people notified (if so desired)."
    );
  }

  handleSaveClickWIP() {
    alert(
      "This will store the existing data as WIP (work in progress) but will not publish. That is, it will not be available for consumption."
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handlePubNotify = (value, { action }) => {
    this.setState({
      pubNotify: value
    });
  };

  handleConsumeable = (value, { action }) => {
    this.setState({
      consumableBy: value
    });
  };

  handleDomainName = (value, { action }) => {
    this.setState({
      domainName: value
    });
  };

  handleProjContext = (value, { action }) => {
    this.setState({
      pubProjectContext: value
    });
  };

  handlePubWIPName = (value, { action }) => {
    this.setState({
      pubWIPName: value
    });

    // load PubWIPName's values - setState
    // setWIPPublishValues(value);
  };

  // setWIPPublishValues = (name) => {
  //   this.setState({});
  // }

  gotoPublishingProcess = value => {
    if (value === "howtoPublish") {
      this.setState({
        howtoPublish: !this.state.howtoPublish
      });
    }
  };

  render() {
    const { errors } = this.state;
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let option;
    let targetoption;
    if (engagementType === "time-based") {
      targetoption = pubTargetCBTL;
    } else {
      targetoption = pubTargetArtGallery;
    }

    let otherDomain; // If the domain name selected is 'other'
    if (this.state.domainName.label === "Other Domain Type") {
      otherDomain = (
        <TextFieldGroup
          name="domainOtherName"
          placeholder="Enter a new domain name ..."
          value={this.state.domainOtherName}
          onChange={this.onChange}
          error={errors.domainOtherName}
          info="Enter a new domain (if not in dropdown)"
        />
      );
    } else {
      otherDomain = null;
    }

    let pubbody;
    pubbody = (
      <div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              name="pubName"
              placeholder="Enter a pub name ..."
              value={this.state.pubName}
              onChange={this.onChange}
              error={errors.pubName}
              info="Enter a publishing Name for reference"
            />
          </div>
          {/* <div className="col-md-6 text-left-select"> */}
          <div className="col-6">
            <font color="blue">
              <Select
                value={this.state.pubWIPName}
                //isMulti
                autosize={false}
                options={option}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handlePubWIPName}
                maxMenuHeight={150}
                isSearchable={true}
                placeholder="Select WIP publish-name"
              />
            </font>
            <p>Select to edit (if continuing on WIP)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <font color="blue">
              <Select
                value={this.state.pubProjectContext}
                //isMulti
                autosize={false}
                options={projectContext}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleProjContext}
                maxMenuHeight={150}
                isSearchable={true}
                placeholder="Select a Project Component Context"
              />
            </font>
            <p>Select a project ops-context ... </p>
          </div>
          <div className="col-md-6">
            <TextFieldGroup
              name="metaWords"
              placeholder="Enter meta words (comma delimited) ..."
              value={this.state.metaWords}
              onChange={this.onChange}
              error={errors.metaWords}
              info="Enter search meta words (comma delimited)"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <font color="blue">
              <Select
                value={this.state.domainName}
                //isMulti
                autosize={false}
                options={documentDomain}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleDomainName}
                maxMenuHeight={150}
                isSearchable={true}
                placeholder="Select a document domain ..."
              />
            </font>
            <p>Select a document domain of the asset</p>
          </div>
          <div className="col-md-6">{otherDomain}</div>
        </div>

        <div className="row">
          <div className="col-6">
            <font color="blue">
              <Select
                value={this.state.consumableBy}
                isMulti
                autosize={false}
                options={consumptionType}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleConsumeable}
                maxMenuHeight={150}
                isSearchable={true}
                placeholder="Select consumption type"
              />
            </font>
            <p>Select type of consumption pattern </p>
          </div>
          <div className="col-6">
            <font color="blue">
              <Select
                value={this.state.pubNotify}
                isMulti
                autosize={false}
                options={targetoption}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handlePubNotify}
                maxMenuHeight={150}
                isSearchable={true}
                placeholder="Notify to targets"
              />
            </font>
            <p>Select targets to be notified</p>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Summary description of the asset"
              name="abstract"
              value={this.state.abstract}
              rows={4}
              onChange={this.onChange}
              error={errors.abstract}
              info="Summary description, or abstract, of the asset you are about to publish."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile02"
                />
                <label className="custom-file-label">Load your asset</label>
              </div>
              <div className="input-group-append">
                <span className="input-group-text" id="">
                  Upload
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 upload-text-pad">
            <p>
              <small>Upload the asset you would like to publish.</small>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <font color="yellow">Asset Type: </font>&nbsp;&nbsp;
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                />
                Text
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                />
                Audio
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                />
                Video
              </label>
            </div>
            <div className="form-check-inline disabled">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  disabled
                />
                Hologram
              </label>
            </div>
          </div>
        </div>

        <div className="textspaceTop" />
        <div className="row">
          <div className="col">
            <div className="float-right">
              <button
                className="btn-check-document-wip"
                onClick={this.handleSaveClickWIP}
              >
                Save WIP &nbsp;
                <i className="fa fa-check" />
              </button>
              <button
                className="btn-check-document-pub"
                onClick={this.handleSaveClick}
              >
                Publish &nbsp;
                <i className="fa fa-check" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    let howtoPublishSteps;
    if (this.state.howtoPublish) {
      howtoPublishSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              <font color="#c48346">
                <p>
                  The restrictions on what you can publish is based on the
                  project. Please refer (Consume button) to the guideline for
                  publishing. If you violate that trust, the consequence may
                  range from 'not being published', 'retracted', 'asked to
                  redact' to 'termination of your engagement per project policy
                  (by manager or peers)'.{" "}
                </p>
                </font>
                <p>Please enter the following fields to upload digital assets you would like to share per following guidelines:</p>
             
              <ul>
                <li>Enter a name (unique to the project) for reference</li>
                <font color="lightyellow" size="2">* Select a name from the WIP drop down if you want to continue publishing process.</font>
              <li>Select a context from the Context drop down. This will enable reader to focus / locate for some operation associated with the project.</li>
              <li>
                Select a domain for the asset. If it is not there, select 'other' and type in the other domain name.
              </li>
              <li>Request the consumption type (from general read/write/view to peer-review</li>
              <li>Notify specific targets if needed, particularly for peer-review.</li>
              <li>Describe your asset at the high-level for the reader. 
                <p><font color="lightblue">You would be able to load audio/video and in little ahead in future, hologram based presentation instead of or addendum to text abstract.</font></p>

              </li>
              </ul>
              <font color="white"><p>Note: You could save as WIP to continue working at a later point of time. Once you publish, it will no longer be available for edit.</p></font>
            </div>
          </div>
        </div>
      );
    } else {
      howtoPublishSteps = null;
    }

    let output;
    output = pubbody;

    return (
      <div>
        <div className="form-panel-publish">
          <div className="text-center">
            <h3>Publish Digital Artifacts</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="float-left">
                  <button
                    className="btn control-btn-review"
                    onClick={() => {
                      this.gotoPublishingProcess("howtoPublish");
                    }}
                  >
                    How-to-steps
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                </div>
              </div>
              <div className="col-md-8"> &nbsp;</div>
            </div>
            <div className="row">
              <div className="col">{howtoPublishSteps}</div>
            </div>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Publish;
