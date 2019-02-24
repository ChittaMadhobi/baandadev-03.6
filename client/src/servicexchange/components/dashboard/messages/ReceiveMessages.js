import React, { Component } from 'react';

import TempVideoMsg from '../../tempForUX/TempVideoMsg';
import TempAudioMsg from '../../tempForUX/TempAudioMsg';
import TempTextMsg from '../../tempForUX/TempTextMsg';
import TempDCCSReqMsg from '../../tempForUX/TempDCCSReqMsg';
import TempDCCSRespMsg from '../../tempForUX/TempDCCSRespMsg';
import TempSenderPost from '../../tempForUX/TempSenderPost';

import '../../posts/post.css';

class ReceiveMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeState: ''
    };
  }

  render() {
    //console.log('Send msg props' + JSON.stringify(this.props));
    let type = this.props.msg;
    // if (type === 'other') {
    //   console.log('this.props: ' + JSON.stringify(this.props));
    // }
    //console.log('type:' + type);

    let output = '';
    if (type === 'video') {
      console.log('In ReceiveMessages ... type === video')
      output = (
        <div>
          <TempVideoMsg />
        </div>
      );
    } else if (type === 'audio') {
      output = (
        <div>
          <TempAudioMsg />
        </div>
      );
    } else if (type === 'dccsReq') {
      output = (
        <div>
          <TempDCCSReqMsg />
        </div>
      );
    } else if (type === 'dccsResp') {
      output = (
        <div>
          <TempDCCSRespMsg />
        </div>
      );
    } else if (type === 'text') {
      output = (
        <div>
          <TempTextMsg />
        </div>
      );
    } else if (type === 'sender') {
      //console.log('sender this.props:' + JSON.stringify(this.props));
      output = (
        <div>
          <TempSenderPost senderData={this.props.senderData} />
        </div>
      );
    } else {
      output = (
        <div>
          <div className="footerspace" />
          <div className="footerspace" />
          <div className="text-center">
            <div className="shadow card-message-body">
              <h3>Please click on your selection</h3>
            </div>
          </div>
        </div>
      );
    }

    return <div>{output}</div>;
  }
}

export default ReceiveMessages;
