import React, { Component } from 'react';
import CBTL from './CBTLText.png';
import './temp.css';

class TempTextMsg extends Component {
  render() {
    return (
      <div className="fixedsize-text">
        <div className="workarea-padding-text">
          <div className="pictures">
            <img src={CBTL} width="100%" height="100%" alt="..." />
          </div>
        </div>
      </div>
    );
  }
}

export default TempTextMsg;
