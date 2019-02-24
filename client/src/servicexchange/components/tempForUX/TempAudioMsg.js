import React, { Component } from 'react';
import soundwavepic from '../../../utils/components/audio/img/tenor.gif'; //'./img/tenor.gif';

import './temp.css';

class TempAudioMsg extends Component {
  constructor() {
    super();
    this.state = {
      granted: false,
      rejectedReason: '',
      showsoundgif: true,
      srcURL: 'https://s3-us-west-2.amazonaws.com/baandadev1/audio-message-for-sxmessage.webm'
    };

    this.handleAudioEnded = this.handleAudioEnded.bind(this);
  }

  handleAudioEnded() {
    this.setState({
      showsoundgif: false
    });
  }

  render() {
    let soundwave;
    let { srcURL } = this.state;

    if (this.state.showsoundgif) {
      soundwave = (
        <div className="sound-height">
          <img
            src={soundwavepic}
            width="100%"
            height="300"
            // class="img-thumbnail"
            className="img-fluid"
            alt="..."
          />
        </div>
      );
    } else {
      soundwave = null;
    }

    return (
      <div className="container the-box-background">
        <div ref="app">
          <div className="text-center">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="buffer-height" />
                <div className="">
                  <audio
                    controls="controls"
                    className="sound-box-ctrl"
                    onEnded={this.handleAudioEnded}
                    id="yyy"
                    autoPlay
                  >
                    <source src={srcURL} type="audio/webm" />
                  </audio>
                </div>
              </div>
              <div className="col-md-8 col-sm-6">
                <div className="sound-height">{soundwave}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TempAudioMsg;

// https://s3-us-west-2.amazonaws.com/baandadev1/audio1.webm
