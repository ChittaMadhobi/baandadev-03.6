import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Select from "react-select";

import { setVisibilityFilter } from "../../../../actions/tasklistActionCreator";
import { showModal } from "../../../../actions/socialActionTest";
//import { showModal } from '../../../../actions/modalActions';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../../../../actions/types";
import "../../../css/dashboard.css";
import ModalContainer from "../../../../modal/components/ModalContainer";
import "../../../../modal/css/template.css";
import "../../../../modal/css/localModal.css";
import "./messages.css"; // to be kept if this work

// Target data for dropdown
import { options } from "./data/targetData";

class ManageMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      holoEmulation: false,
      selectedOption: null
    };
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
    this.handleSelectClick = this.handleSelectClick.bind(this);
  }

  handleChangeTarget = selectedOption => {
    this.setState({
      selectedOption
    });
    //console.log('selectedOption:' + selectedOption.value);
  };
  handleSelectClick = () => {
    //let x = 'Selected option is : ' + JSON.stringify(this.state.selectedOption);
    if (this.state.selectedOption) {
      let id = this.state.selectedOption.id;
      let select = {
        id: id,
        caption: this.state.selectedOption.label
      };
      this.popupFunction(id, select);
    } else {
      alert("Select a target to send to.");
    }
  };

  popupFunction = (id, select = null) => {
    // console.log('popup fn id:' + id);
    // console.log('length:' + this.props.sxMessages.length);
    // console.log('this.props:' + JSON.stringify(this.props));
    let len = this.props.sxMessages.length;
    if ( len < id) {
      id = id - len -1;
    }
    // console.log(
    //  'message type id:' +
    //    id +
    //    ' | messageType: ' +
    //    this.props.sxMessages[id].messageType
    // );

    let msgObj;
    
    if (select) {
      msgObj = {
        id: id, // the one passed in as input parameter
        senderPostCaptionName: select.caption,
        readSate: "",
        yourRefPostName: "",
        description: "",
        senderAddress: "",
        skillList: "",
        workLocationType: "",
        workType: "",
        datePosted: "",
        contactType: "",
        messageType: "selectTarget"
      };
    } else {
      // console.log('this id:' + id);
      // console.log('props length:' + this.props.sxMessages.length);
      // console.log('this.props.sxMessages:' + JSON.stringify(this.props.sxMessages));
      //idx=this.props.sxMessages.length;
      msgObj = {
        id: id, // the one passed in as input parameter
        senderPostCaptionName: this.props.sxMessages[id].senderPostCaptionName,
        readSate: this.props.sxMessages[id].readSate,
        yourRefPostName: this.props.sxMessages[id].yourRefPostName,
        description: this.props.sxMessages[id].description,
        senderAddress: this.props.sxMessages[id].senderAddress,
        skillList: this.props.sxMessages[id].skillList,
        workLocationType: this.props.sxMessages[id].workLocationType,
        workType: this.props.sxMessages[id].workType,
        datePosted: this.props.sxMessages[id].datePosted,
        contactType: this.props.sxMessages[id].contactType,
        messageType: this.props.sxMessages[id].messageType
      };
    }
    //alert(JSON.stringify(msgObj));

    this.openAlertModal(msgObj);
  };

  openAlertModal = param => {
    //console.log('ConnectToSC openAlertModal param: ' + JSON.stringify(param));

    const modalProps = {
      open: true,
      title: param.Title,
      message: param,
      closeModal: this.closeModal
    };
    const modalType = "sxMessage";
    this.props.showModal(modalProps, modalType);
  };

  render() {
    //console.log('ManageMessages props:' + JSON.stringify(this.props));
    const { selectedOption } = this.state;
    return (
      <div children="container">
        <div>
          <div className="row">
            <div className="col-md-5">
              <div >
                <Select
                  value={selectedOption}
                  onChange={this.handleChangeTarget}
                  options={options}
                  placeholder="Selelct a target (no default) "
                />
              </div>
            </div>
            <div className="col-md-1">
              <div className="float-left">
                <button
                  className="plus-button-adjustments"
                  type="button"
                  onClick={() => this.handleSelectClick()}
                >
                  <i className="fas fa-search-plus" />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="target-msg-font">
                <font color="#358ddd">
                  <b>
                    Select a target to send a message, if not responding to
                    received list.
                  </b>
                </font>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-primary navbar-tasklist-color">
            <div
              className="btn-toolbar btn-top-pad"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <button
                type="button"
                onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
                className="btn btn-secondary custom_button1 btn-sm btn-size-rows"
              >
                All
              </button>
              <button
                type="button"
                onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
                className="btn btn-secondary custom_button1 btn-sm btn-size-rows"
              >
                Blues
              </button>
              <button
                type="button"
                onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
                className="btn btn-secondary custom_button1 btn-sm btn-size-rows"
              >
                Greens
              </button>
            </div>
            <div className="float-right">
              <i className="fas fa-search-plus">: Click for details</i>{" "}
              &nbsp;&nbsp;
            </div>
          </nav>
          {this.props.sxMessages.length !== 0 ? (
            <table
              style={{ marginTop: "10px" }}
              className="table table-hover table-info"
            >
              <thead className="thead-blue">
                <tr>
                  <th scope="col">
                    Your Messages: &nbsp;{" "}
                    <font color="lightgreen">New Messages (green)</font> &{" "}
                    <font color="#4cace8">Old Messages (blue)</font>{" "}
                  </th>
                  <th scope="col">Open</th>
                </tr>
              </thead>

              <tbody>
                {this.props.sxMessages.map(message => (
                  <tr key={message.id}>
                    <td
                      style={{
                        color: message.readState ? "blue" : "green"
                      }}
                    >
                      From&nbsp;{" "}
                      <b>
                        {/* {message.invite ? 'Invite  ' : 'Message'} :{' '} */}
                        {message.senderPostCaptionName}
                      </b>{" "}
                      &nbsp;for your post&nbsp;
                      <b>{message.yourRefPostName}</b> &nbsp;(Type:&nbsp;{" "}
                      {message.messageType})
                    </td>
                    <td className="bg-blue text-center">
                      <span
                        className="fas fa-search-plus"
                        onClick={() => this.popupFunction(message.id)}
                        style={{
                          color: "white",
                          fontSize: "20pt",
                          marginRight: "20px"
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div
              style={{ marginTop: "50px" }}
              className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
            >
              <div className="alert alert-danger" role="alert">
                No messages for you at this time (old or new)
              </div>
            </div>
          )}{" "}
        </div>
        <ModalContainer />
        <div className="footerspace" />
      </div>
    );
  }
}

const getVisibleSXMessages = (sxMessages, filter) => {
  // console.log('getVisibleSXMessages :' + JSON.stringify(sxMessages[0]));
  // console.log('getVisibleSXMessages :' + sxMessages[0].readState);
  switch (filter) {
    case SHOW_ALL:
      return sxMessages;
    case SHOW_COMPLETED:
      return sxMessages.filter(t => t.readState);
    case SHOW_ACTIVE:
      return sxMessages.filter(t => !t.readState);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return {
    sxMessages: getVisibleSXMessages(state.sxMessages, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

ManageMessages.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { setVisibilityFilter, showModal }
)(ManageMessages);
