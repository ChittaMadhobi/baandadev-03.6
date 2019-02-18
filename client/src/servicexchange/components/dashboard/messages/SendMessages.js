import React, { Component } from 'react';

import VedioMessage from '../../../../utils/components/vedio/VedioMessage';
import AudioMessage from '../../../../utils/components/audio/AudioMessage';
import SpeechEditorBase from '../../../../utils/components/text/SpeechEditorBase';
import DccsSendBase from '../../../../utils/components/dccs/DccsSendBase';

class SendMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeState: ''
    };
  }

  render() {
    //console.log('Send msg props' + JSON.stringify(this.props));
    let type = this.props.msg;
    //console.log('type:' + type);
    let output = '';
    if (type === 'vedio') {
      output = (
        <div>
          <VedioMessage />
        </div>
      );
    } else if (type === 'audio') {
      output = (
        <div>
          <AudioMessage />
        </div>
      );
    } else if (type === 'text') {
      output = (
        <div>
          <SpeechEditorBase />
        </div>
      );
    } else if (type === 'dccs') {
      output = (
        <div>
          <DccsSendBase />
        </div>
      );
    }

    return <div>{output}</div>;
  }
}

export default SendMessages;
