import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { placeStyle, placeStyleHover } from './eventStyle';
import '../css/map.css';

class EventOnHover extends Component {
  static propTypes = {
    // use hover from controllable
    hover: PropTypes.bool,
    text: PropTypes.string
  };
  // constructor(props) {
  //   super(props);
  // }

  static defaultProps = {};

  render() {
    const style = this.props.hover ? placeStyleHover : placeStyle;
    const vis = this.props.hover ? 'visible box-to-display' : 'invisible';

    return (
      <div className="hint hint--html hint--info hint--top" style={style}>
        <div>{this.props.id}</div>
        <div className={vis}>
          <div className="row">
            <div className="col">
              <div style={{ width: 175 }} className="intel_font text-center">
                <div>{this.props.nameOfPlace}</div>
                {this.props.intel} &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventOnHover;
