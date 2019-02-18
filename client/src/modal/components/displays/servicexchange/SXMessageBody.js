import React, { Component } from 'react';
//import moment from 'moment';

import SendMessages from '../../../../servicexchange/components/dashboard/messages/SendMessages';
import ReceiveMessages from '../../../../servicexchange/components/dashboard/messages/ReceiveMessages';

import './css/sx.css';

class SXMessageBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      receiveMessages: true,
      sendMessages: false,
      sendVedio: false,
      sendAudio: false,
      sendText: false,
      sendDccs: false,
      recVedio: false,
      recAudio: false,
      recText: false,
      recDccsReq: false,
      recDccsResp: false,
      senderProfile: false
    };

    this.switchToSend = this.switchToSend.bind(this);
    this.switchToReceive = this.switchToReceive.bind(this);

    this.switchToSendVedio = this.switchToSendVedio.bind(this);
    this.switchToSendAudio = this.switchToSendAudio.bind(this);
    this.switchToSendText = this.switchToSendText.bind(this);
    this.switchToSendDccs = this.switchToSendDccs.bind(this);
    this.switchToSenderProfile = this.switchToSenderProfile.bind(this);
  }

  switchToSendVedio = () => {
    this.setState({
      receiveMessages: false,
      sendMessages: true,
      sendVedio: true,
      sendAudio: false,
      sendText: false,
      sendDccs: false,
      recVedio: false,
      recAudio: false,
      recText: false,
      recDccsReq: false,
      recDccsResp: false,
      senderProfile: false
    });
  };

  switchToSendAudio = () => {
    this.setState({
      receiveMessages: false,
      sendMessages: true,
      sendVedio: false,
      sendAudio: true,
      sendText: false,
      sendDccs: false,
      recVedio: false,
      recAudio: false,
      recText: false,
      recDccsReq: false,
      senderProfile: false
    });
  };

  switchToSendText = () => {
    this.setState({
      receiveMessages: false,
      sendMessages: true,
      sendVedio: false,
      sendAudio: false,
      sendText: true,
      sendDccs: false,
      recVedio: false,
      recAudio: false,
      recText: false,
      recDccsReq: false,
      recDccsResp: false,
      senderProfile: false
    });
  };

  switchToSendDccs = () => {
    this.setState({
      receiveMessages: false,
      sendMessages: true,
      sendVedio: false,
      sendAudio: false,
      sendText: false,
      sendDccs: true,
      recVedio: false,
      recAudio: false,
      recText: false,
      recDccsReq: false,
      recDccsResp: false,
      senderProfile: false
    });
  };

  switchToSend = () => {
    this.setState({
      receiveMessages: false,
      sendMessages: true,
      sendVedio: false,
      sendAudio: false,
      sendText: false,
      sendDccs: false,
      recVedio: false,
      recAudio: false,
      recText: false,
      recDccsReq: false,
      recDccsResp: false,
      senderProfile: false
    });
  };

  switchToReceive = () => {
    this.setState({
      receiveMessages: true,
      sendMessages: false,
      sendVedio: false,
      sendAudio: false,
      sendDccs: false,
      recVedio: false,
      recAudio: false,
      recText: false,
      recDccsReq: false,
      recDccsResp: false,
      senderProfile: false
    });
  };

  switchToReceiveText = () => {
    //console.log('switchToReceiveText');
    this.setState({
      receiveMessages: true,
      sendMessages: false,
      sendVedio: false,
      sendAudio: false,
      sendText: false,
      sendDccs: false,
      recVedio: false,
      recAudio: false,
      recText: true,
      recDccsReq: false,
      recDccsResp: false,
      senderProfile: false
    });
  };

  switchToReceiveVideo = () => {
    this.setState({
      receiveMessages: true,
      sendMessages: false,
      sendVedio: false,
      sendAudio: false,
      sendText: false,
      sendDccs: false,
      recVedio: true,
      recAudio: false,
      recText: false,
      recDccsReq: false,
      recDccsResp: false,
      senderProfile: false
    });
  };

  switchToReceiveAudio = () => {
    this.setState({
      receiveMessages: true,
      sendMessages: false,
      sendVedio: false,
      sendAudio: false,
      sendText: false,
      sendDccs: false,
      recVedio: false,
      recAudio: true,
      recText: false,
      recDccsReq: false,
      recDccsResp: false,
      senderProfile: false
    });
  };

  switchToReceiveDCCSReq = () => {
    this.setState({
      receiveMessages: true,
      sendMessages: false,
      sendVedio: false,
      sendAudio: false,
      sendText: false,
      sendDccs: false,
      recVedio: false,
      recAudio: false,
      recText: false,
      recDccsReq: true,
      recDccsResp: false,
      senderProfile: false
    });
  };

  switchToReceiveDCCSResp = () => {
    this.setState({
      receiveMessages: true,
      sendMessages: false,
      sendVedio: false,
      sendAudio: false,
      sendText: false,
      sendDccs: false,
      recVedio: false,
      recAudio: false,
      recText: false,
      recDccsReq: false,
      recDccsResp: true,
      senderProfile: false
    });
  };

  switchToSenderProfile = () => {
    this.setState({
      receiveMessages: true,
      sendMessages: false,
      sendVedio: false,
      sendAudio: false,
      sendText: false,
      sendDccs: false,
      recVedio: false,
      recAudio: false,
      recText: false,
      recDccsReq: false,
      recDccsResp: false,
      senderProfile: true
    });
  };
  render() {
    //console.log('SXMessageBody props:' + JSON.stringify(this.props));
    let receivemsg;
    let sendmsg;
    let msgpanel;
    //var exdate = moment();
    //var signDate = exdate.format('dddd, MMMM Do YYYY, h:mm:ss a');

    // let postdate = this.props.messageDate.format(
    //   'dddd, MMMM Do YYYY, h:mm:ss a'
    // );

    // let id = this.props.id;
    // -----------------------------------------------
    // Selecting the type of RECEIEIVE MESSAGES

    let messageType = this.props.msg.messageType;
    let recButton = '';
    if (messageType === 'text') {
      recButton = (
        <button
          className="btn button-message-ops"
          onClick={this.switchToReceiveText}
        >
          Text&nbsp;
          <div className="float-right">
            <i className="far fa-file-alt" />
          </div>
        </button>
      );
    } else if (messageType === 'audio') {
      recButton = (
        <button
          className="btn button-message-ops"
          onClick={this.switchToReceiveAudio}
        >
          Audio&nbsp;
          <div className="float-right">
            <i className="fas fa-headphones" />
          </div>
        </button>
      );
    } else if (messageType === 'vedio') {
      recButton = (
        <button
          className="btn button-message-ops"
          onClick={this.switchToReceiveVideo}
        >
          Video&nbsp;
          <div className="float-right">
            <i className="fas fa-video" />
          </div>
        </button>
      );
    } else if (messageType === 'dccsReq') {
      recButton = (
        <button
          className="btn button-message-ops"
          onClick={this.switchToReceiveDCCSReq}
        >
          DccsRq&nbsp;
          <div className="float-right">
            <i className="far fa-file-alt" />
          </div>
        </button>
      );
    } else if (messageType === 'dccsResp') {
      recButton = (
        <button
          className="btn button-message-ops"
          onClick={this.switchToReceiveDCCSResp}
        >
          DccsRs&nbsp;
          <div className="float-right">
            <i className="far fa-file-alt" />
          </div>
        </button>
      );
    } else if (messageType === 'selectTarget') {
      recButton = null;
    }

    let detailOnSenderButton = (
      <button
        className="btn button-message-ops"
        onClick={this.switchToSenderProfile}
      >
        Sender&nbsp;
        <div className="float-right">
          <i className="fas fa-user-alt" />
        </div>
      </button>
    );
    //================================================

    if (this.state.receiveMessages) {
      receivemsg = (
        <div>
          <button
            className="btn button-message-switch"
            onClick={this.switchToSend}
          >
            Switch to Send >>
            <div className="float-right">
              <i className="fas fa-toggle-on" />
            </div>
          </button>
          <div className="float-right">
            {detailOnSenderButton}
            &nbsp;
            <b>Click for the message>> &nbsp;&nbsp; </b>
            {recButton}
          </div>
        </div>
      );
    } else {
      receivemsg = null;
    }

    let switchToReceiveButton;
    let sendMsgOnly = false;
    if (messageType === 'selectTarget') {
      switchToReceiveButton = null;
      receivemsg = null;
      sendMsgOnly = true;
    } else {
      switchToReceiveButton = (
        <button
          className="btn button-message-switch"
          onClick={this.switchToReceive}
        >
          Switch to Receive >>
          <div className="float-right">
            <i className="fas fa-toggle-on" />
          </div>
        </button>
      );
    }

    if (this.state.sendMessages || sendMsgOnly) {
      sendmsg = (
        <div>
          {switchToReceiveButton}
          <div className="float-right">
            <b>Send Message Types: </b>
            {/* <b>Receive Ops: </b> */}
            <button
              className="btn button-message-ops"
              onClick={this.switchToSendVedio}
            >
              Video&nbsp;
              <div className="float-right">
                <i className="fas fa-video" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={this.switchToSendAudio}
            >
              Audio&nbsp;
              <div className="float-right">
                <i className="fas fa-headphones" />
              </div>
            </button>
            &nbsp;
            <button
              className="btn button-message-ops"
              onClick={this.switchToSendText}
            >
              Text&nbsp;
              <div className="float-right">
                <i className="far fa-file-alt" />
              </div>
            </button>
            <button
              className="btn button-message-ops"
              onClick={this.switchToSendDccs}
            >
              DCCS&nbsp;
              <div className="float-right">
                <i className="far fa-file-alt" />
              </div>
            </button>
          </div>
        </div>
      );
    } else {
      sendmsg = null;
    }

    if (this.state.sendMessages) {
      if (this.state.sendVedio) {
        msgpanel = (
          <div className="message-panel-size text-center">
            <SendMessages msg="vedio" />
          </div>
        );
      } else if (this.state.sendAudio) {
        msgpanel = (
          <div className="message-panel-size text-center">
            <SendMessages msg="audio" />
          </div>
        );
      } else if (this.state.sendText) {
        msgpanel = (
          <div className="message-panel-size text-center">
            <SendMessages msg="text" />
          </div>
        );
      } else if (this.state.sendDccs) {
        msgpanel = (
          <div className="message-panel-size text-center">
            <SendMessages msg="dccs" />
          </div>
        );
      }
    }

    if (this.state.receiveMessages) {
      if (this.state.recVedio) {
        msgpanel = (
          <div className="message-panel-size text-center">
            <ReceiveMessages msg="vedio" />
          </div>
        );
      } else if (this.state.recAudio) {
        msgpanel = (
          <div className="message-panel-size text-center">
            <ReceiveMessages msg="audio" />
          </div>
        );
      } else if (this.state.recDccsReq) {
        msgpanel = (
          <div className="message-panel-size text-center">
            <ReceiveMessages msg="dccsReq" />
          </div>
        );
      } else if (this.state.recDccsResp) {
        msgpanel = (
          <div className="message-panel-size text-center">
            <ReceiveMessages msg="dccsResp" />
          </div>
        );
      } else if (this.state.recText) {
        //console.log('inside if this.state.recText');
        msgpanel = (
          <div className="message-panel-size text-center">
            <ReceiveMessages msg="text" />
          </div>
        );
      } else if (this.state.senderProfile) {
        //console.log('inside if this.state.recText');
        msgpanel = (
          <div className="message-panel-size text-center">
            <ReceiveMessages msg="sender" senderData={this.props.msg} />
          </div>
        );
      } else {
        msgpanel = (
          <div className="message-panel-size text-center">
            <ReceiveMessages msg="other" />
          </div>
        );
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-6">{msgpanel}</div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-6">{receivemsg}</div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-6">{sendmsg}</div>
        </div>
        {/* <div>{msgpanel}</div> */}
        {/* <div>{receivemsg}</div>
        <div>{sendmsg}</div> */}
      </div>
    );
  }
}

export default SXMessageBody;
