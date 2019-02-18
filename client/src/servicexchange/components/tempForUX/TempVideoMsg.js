import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './temp.css';

class TempVideoMsg extends Component {
  render() {
    return (
      <div className="fixedsize-video">
        <div className="text-center">
          <ReactPlayer
            url="https://s3-us-west-2.amazonaws.com/baandadev1/videoMsg4.webm"
            className="react-player"
            playing={true}
            controls={true}
            width="100%"
            height="480px"
          />
        </div>
      </div>
    );
  }
}

export default TempVideoMsg;
