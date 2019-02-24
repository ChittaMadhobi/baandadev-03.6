import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './temp.css';

class TempVideoMsg extends Component {
  render() {
    // console.log('inside TempVideoMsg ...');
    return (
      <div className="fixedsize-video">
        <div className="text-center">
          <ReactPlayer
            url="https://s3-us-west-2.amazonaws.com/baandadev1/trj66-bwmdy-crowdfund.webm"
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
