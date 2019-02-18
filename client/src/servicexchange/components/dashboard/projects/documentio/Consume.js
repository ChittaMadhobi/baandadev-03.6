import React, { Component } from "react";
import Select from "react-select";
import TextFieldGroup from "../../../../../utils/TextFieldGroup";
import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";

import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

import { projectContext } from "./data/projectContext";
import { documentDomain } from "./data/documentDomain";
import { mediaTypeEtc } from "./data/mediaTypeEtc";

import { listAssetInfo } from "./data/listAssetInfo";

import "./dio.css";

class Consume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      howtoConsume: false,
      locate: true,
      showListDocs: false,
      showReview: false,

      pubProjectContext: "",
      domainName: "",
      metaWords: "",
      pubName: "",
      mediaType: "",
      //============Review Variarbles===========
      rvName: "",
      rvDescription: "",
      rvPubDate: "",
      //=======================
      docReview: "",
      docContentQty: 5,
      docPresentQlty: 5,
      docUsageIndex: 5,

      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.gotoConsumeProcess = this.gotoConsumeProcess.bind(this);
    this.handleProjContext = this.handleProjContext.bind(this);
    this.handleDomainName = this.handleDomainName.bind(this);
    this.handleMediaType = this.handleMediaType.bind(this);
    this.handleGoFind = this.handleGoFind.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
    this.prepToShowList = this.prepToShowList.bind(this);
    this.handleDocumentProcessing = this.handleDocumentProcessing.bind(this);
    this.handleOnChangeDocQuality = this.handleOnChangeDocQuality.bind(this);
    this.handlePresentationReview = this.handlePresentationReview.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleOnChangeDocQuality = value => {
    this.setState({
      docContentQty: value
    });
  };

  handlePresentationReview = value => {
    this.setState({
      docPresentQlty: value
    });
  };

  handledocUsageIndex = value => {
    this.setState({
      docUsageIndex: value
    });
  };

  handleSave = (docName) => {
    alert('In production, on click of this button, your review on asset (' + docName + ') would be saved and author would be able to review your comments.')
  }

  handleGoFind() {
    alert(
      "Based on your search selection, it will fetch the results and list it for your interactions."
    );
    this.prepToShowList();
  }

  handleShowAll = () => {
    alert(
      "It will list all the documents related to this project for your consumption."
    );
    this.prepToShowList();
  }

  prepToShowList = () => {
    this.setState({
      howtoConsume: false,
      locate: false,
      showListDocs: true,
      showReview: false
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleMediaType = (value, { action }) => {
    this.setState({
      mediaType: value
    });
  };

  handleDomainName = (value, { action }) => {
    this.setState({
      domainName: value
    });
  };

  handleDocumentProcessing = (btnType, docName, docDes, docDate) => {
    // console.log(
    //   "btnType:" +
    //     btnType +
    //     " || docName:" +
    //     docName +
    //     " |docDes:" +
    //     docDes +
    //     " Date:" +
    //     docDate
    // );
    if (btnType === "review") {
      this.setState({
        howtoConsume: false,
        locate: false,
        showListDocs: false,
        showReview: true,
        rvName: docName,
        rvDescription: docDes,
        rvPubDate: docDate
      });
    } else if (btnType === "download") {
      alert(
        "In production, you would be enabled to download the asset with publish Name: " +
          docName
      );
    } else {
      alert(
        "In production, you would be able to view, listen, or read the document named " +
          docName +
          "."
      );
    }
  };

  gotoConsumeProcess = value => {
    if (value === "howtoConsume") {
      this.setState({
        howtoConsume: !this.state.howtoConsume,
        locate: false,
        showListDocs: false,
        showReview: false
      });
    } else if (value === "locate") {
      this.setState({
        howtoConsume: false,
        locate: true,
        showListDocs: false,
        showReview: false
      });
    }
  };

  handleProjContext = (value, { action }) => {
    this.setState({
      pubProjectContext: value
    });
  };

  render() {
    const { errors } = this.state;
    // let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let option;

    let reviewDoc;
    reviewDoc = (
      <div>
        <div className="row">
          <div className="col">
            <div className="display-list-lines">
              <p>
                Doc Name: {this.state.rvName} published on:{" "}
                {this.state.rvPubDate}
              </p>
              <p>Abstract: {this.state.rvDescription}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TextAreaFieldGroup
              placeholder="Enter your comment and review description"
              name="docReview"
              value={this.state.docReview}
              rows={4}
              onChange={this.onChange}
              error={errors.docReview}
              info="Enter your review description / comments ... "
            />
          </div>
        </div>
        <p>Please follow guidelines in 'how-to' for the scaling below (0: very-bad to 10: very good) </p>
        <div className="row">
          <div className="col-md-4">
            <div className="float-left slider-text-paddig">
              <b>
                Content Quality :
                <font color="blue">
                  <strong> {this.state.docContentQty}</strong>
                </font>
              </b>
            </div>
          </div>
          <div className="col-md-8">
            <div className="slider-padding">
              <Slider
                value={this.state.docContentQty}
                orientation="horizontal"
                max={10}
                handleLabel={"--Pts"}
                onChange={this.handleOnChangeDocQuality}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="float-left slider-text-paddig">
              <b>
                Presentation Quality :
                <font color="blue">
                  <strong> {this.state.docPresentQlty}</strong>
                </font>
              </b>
            </div>
          </div>
          <div className="col-md-8">
            <div className="slider-padding">
              <Slider
                value={this.state.docPresentQlty}
                orientation="horizontal"
                max={10}
                handleLabel={"--Pts"}
                onChange={this.handlePresentationReview}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="float-left slider-text-paddig">
              <b>
                Project Usability:
                <font color="blue">
                  <strong> {this.state.docUsageIndex}</strong>
                </font>
              </b>
            </div>
          </div>
          <div className="col-md-8">
            <div className="slider-padding">
              <Slider
                value={this.state.docUsageIndex}
                orientation="horizontal"
                max={10}
                handleLabel={"--Pts"}
                onChange={this.handledocUsageIndex}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="control-btn-consume"
              onClick={() => {
                this.handleSave(
                  this.state.rvName
                );
              }}
            >
              Save&nbsp;
              <div className="float-right">
                <i className="fa fa-check" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );

    let listDocs;
    listDocs = (
      <div>
        {listAssetInfo.map(obj => {
          return (
            <div key={obj.id}>
              <div className="row">
                <div className="col">
                  <div className="display-list-lines">
                    Asset Name <b>{obj.pubName}</b> of context{" "}
                    <b>{obj.pubContext}</b>, domain <b>{obj.pubDomain}</b> and
                    media type as <b>{obj.mediaType}</b> is for{" "}
                    <b>{obj.consumptionType}</b>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="display-list-lines">
                    Published on: <b>{obj.publishedOn}</b>. &nbsp; You have
                    visited this <b>{obj.NoOfTimeVisited}</b> times.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="display-list-lines">
                    <u>Abstract / Summary :</u> <b>{obj.abstract}</b>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="float-right">
                    <button
                      className="doc-btn"
                      onClick={() => {
                        this.handleDocumentProcessing(
                          "download",
                          obj.pubName,
                          obj.abstract,
                          obj.publishedOn
                        );
                      }}
                    >
                      Download&nbsp;
                      <div className="float-right">
                        <i className="fa fa-check" />
                      </div>
                    </button>
                    <button
                      className="doc-btn"
                      onClick={() => {
                        this.handleDocumentProcessing(
                          "review",
                          obj.pubName,
                          obj.abstract,
                          obj.publishedOn
                        );
                      }}
                    >
                      Review&nbsp;
                      <div className="float-right">
                        <i className="fa fa-check" />
                      </div>
                    </button>
                    <button
                      className="doc-btn"
                      onClick={() => {
                        this.handleDocumentProcessing(
                          "consume",
                          obj.pubName,
                          obj.abstract,
                          obj.publishedOn
                        );
                      }}
                    >
                      Consume&nbsp;
                      <div className="float-right">
                        <i className="fa fa-check" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );

    let howtoConsumeSteps;
    if (this.state.howtoConsume) {
      howtoConsumeSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              <font color="lightyellow">
                <p>
                  Consumption process is based on publishing style. If you have
                  been notified and/or you are here, you may have documents for
                  you to read, see, hear, and you may be asked for comments,
                  review, or collaboration.
                  <br />
                  <b>
                    <p>
                      NOTE: All the digital assets to be consumed are with
                      respect to this project(this SX endeavor) only.
                    </p>
                  </b>
                </p>
                <p>
                  Only the documents or digital assets that you have been asked
                  to read, see, hear or comment / review, for this project, will
                  be located.
                </p>
                <ul>
                  <li>Dropdowns are searchable</li>
                  <li>You can use a combination for locating</li>
                </ul>
              </font>
            </div>
          </div>
        </div>
      );
    } else {
      howtoConsumeSteps = null;
    }

    let showLocate;

    showLocate = (
      <div>
        <div className="textspaceTop" />
        <div className="textspaceTop" />
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-md-6 text-left-select">
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
                placeholder="Find by a Project Component Context"
              />
            </font>
            <p>Find by a Project Component Context </p>
          </div>
          <div className="col-md-6 text-right-select">
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
            <p>Find by document domain ...</p>
          </div>
        </div>
        <div className="row">
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
          <div className="col-md-6 text-right-select">
            <font color="blue">
              <Select
                value={this.state.pubName}
                //isMulti
                autosize={false}
                options={option}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handlePubName}
                maxMenuHeight={150}
                isSearchable={true}
                placeholder="Seacrh and select published name"
              />
            </font>
            <p>Find by published name (searchable)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-left-select">
            <font color="blue">
              <Select
                value={this.state.mediaType}
                //isMulti
                autosize={false}
                options={mediaTypeEtc}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleMediaType}
                maxMenuHeight={150}
                //isSearchable={true}
                placeholder="Find by media type etc."
              />
            </font>
            <p>Find by media type</p>
          </div>
          <div className="col-md-6">
            <div className="float-right">
              <button className="btn-locate" onClick={this.handleGoFind}>
                Go Find &nbsp;
                <i className="fas fa-search" />
              </button>
              <button className="btn-locate" onClick={this.handleShowAll}>
                List All &nbsp;
                <i className="fas fa-list-ul" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    let output;
    if (this.state.locate) {
      output = showLocate;
    } else if (this.state.showListDocs) {
      output = (
        <div className="view-doc-list">
          <h5>
            <u>List of Assets</u>
          </h5>
          {listDocs}
        </div>
      );
    } else if (this.state.showReview) {
      output = (
        <div className="view-doc-list">
          <h5>
            <u>Review the document</u>
          </h5>
          {reviewDoc}
        </div>
      );
    }

    return (
      <div>
        <div className="form-panel-publish">
          <div className="text-center">
            <h5>Consume Digital Artifacts</h5>
            <div className="row">
              <div className="col-md-3">
                <div className="float-left">
                  <button
                    className="control-btn-consume"
                    onClick={() => {
                      this.gotoConsumeProcess("howtoConsume");
                    }}
                  >
                    How-to
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                </div>
              </div>
              <div className="col-md-3">
                <div className="float-left">
                  <button
                    className="btn btn-target-consume"
                    onClick={() => {
                      this.gotoConsumeProcess("locate");
                    }}
                  >
                    Locate
                    <div className="float-right">
                      <i className="fas fa-chalkboard-teacher" />
                    </div>
                  </button>{" "}
                </div>
              </div>
              <div className="col-md-6">&nbsp;</div>
            </div>
            <div className="row">
              <div className="col">{howtoConsumeSteps}</div>
            </div>
            {output}
          </div>
        </div>
      </div>
    );
  }
}
  
export default Consume;
