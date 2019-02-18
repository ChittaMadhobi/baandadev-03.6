import React, { Component } from "react";
import Select from "react-select";

import ReactPlayer from "react-player";
import ArtGalleryTimeChart from "./ArtGAlleryTimeChart";

import { interactionOption } from "./data/interactionOption";

class Interact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoSetup: false,
      requestInteraction: "",

      errors: []
    };

    this.gotoIotProcess = this.gotoIotProcess.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.uploadFile = this.uploadFile.bind(this);
    // this.handleiotContext = this.handleiotContext.bind(this);
    // this.handleiotOpsType = this.handleiotOpsType.bind(this);
    this.handleInteractionServices = this.handleInteractionServices.bind(this);
  }

  handleInteractionServices = (value, { action }) => {
    this.setState({
      requestInteraction: value,
      howtoSetup: false
    });
  };

  gotoIotProcess = value => {
    if (value === "howtoSetup") {
      this.setState({
        howtoSetup: !this.state.howtoSetup
      });
    }
  };

  render() {
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let option;
    if (engagementType !== "time-based") {
      option = interactionOption;
    }

    let setupSteps;
    if (this.state.howtoSetup) {
      setupSteps = (
        <div className="how-to-request-iot">
          <p>
            There are thousands of types of IoT sensors and actuators around the
            world used for multitude of purpose. The purpose here is for the
            project team to interact with the IoT devices for enabling the
            project. In this example, all the contexts are art-gallery oriented.{" "}
          </p>
          <p>
            There is no standard way to either access the IoT devices (similar
            to accessing a web page) and/or receive standardized response or
            interaction conduits. Baanda tech-team will increasingly work with
            various IoT vendors and other tech-organization to include IoT
            services that various kinds of projects to use them.{" "}
          </p>

          <p>
            At present, this presentation is for UX-experience and hence IoT
            interface is static.{" "}
          </p>
        </div>
      );
    } else {
      setupSteps = null;
    }

    let survillance;

    survillance = (
      <div className="fixedsize-video">
        <div className="text-center">
          <ReactPlayer
            url="https://s3-us-west-2.amazonaws.com/baandadev1/IMG_3193.webm"
            className="react-player"
            playing={true}
            controls={true}
            width="100%"
            height="480px"
          />
        </div>
      </div>
    );
    let output;
    if (engagementType === "time-based") {
      output = (
        <div>
          <font color="orange" size="3">
            In CBTL SM, as a barista, you are not authorized for IoT
            interaction.
          </font>
        </div>
      );
    } else {
      if (this.state.requestInteraction) {
        if (this.state.requestInteraction.value === "surveillance") {
          output = survillance;
        } else {
          output = (
            <div>
              {/* <font color="lightyellow" size="3">time-card-chart</font> */}
              <ArtGalleryTimeChart />
            </div>
          );
        }
      } else {
        output = (
          <div>
            <font color="lightyellow" size="3">
              Please select an service to interact
            </font>
          </div>
        );
      }
    }

    return (
      <div>
        <div className="form-panel-iot">
          <div className="text-center">
            <font color="lightblue">
              <h5>IoT-Project Interaction</h5>
            </font>
            <font color="green">
              <div className="row">
                <div className="col-md-4">
                  <div className="float-left">
                    <button
                      className="btn btn-save-ideation"
                      onClick={() => {
                        this.gotoIotProcess("howtoSetup");
                      }}
                    >
                      How-to-steps
                      <div className="float-right">
                        <i className="fas fa-toggle-off" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <font color="blue">
                    <Select
                      value={this.state.requestTo}
                      //isMulti
                      autosize={false}
                      options={option}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={this.handleInteractionServices}
                      maxMenuHeight={150}
                      isSearchable={true}
                      placeholder="Select service for interaction"
                    />
                  </font>
                  {/* <font color="lightblue" size="2"><p>Select a target name for you to interact.</p></font> */}
                </div>
                <div className="col-md-2">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col">{setupSteps}</div>
              </div>
            </font>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Interact;
