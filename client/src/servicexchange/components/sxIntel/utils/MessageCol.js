import React, { Component } from 'react';
import '../css/map.css';

class MessageCol extends Component {
  handleclick = () => {
    this.props.handleClick(this.props.poi);
  };
  constructor(props) {
    super(props);

    this.handleConnectClick = this.handleConnectClick.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleConnectClick() {
    alert(
      'Connect-Click: In production, thic clieck will enable you to connect to the corresponding manager. This would be per your strategy.'
    );
  }

  handleDetailsClick() {
    alert(
      'Details-Click: In production, thic clieck will show you the details of the post of this context. You could connect from there too if you like.'
    );
  }

  render() {
    //console.log('MessageCol props:' + JSON.stringify(this.props));

    const poi = this.props.poi;
    // console.log('poi:' + JSON.stringify(poi));

    let clk;
    if (poi.id === '1' || poi.id === '2') {
      clk = null;
    } else {
      clk = (
        <div>
          <button
            className="btn btn-light btn-sm"
            type="button"
            onClick={this.handleConnectClick}
          >
            Connect &nbsp;
            <div className="float-right">
              <i className="fas fa-phone-volume" />
            </div>
          </button>
          <button
            className="btn btn-light btn-sm"
            type="button"
            onClick={this.handleDetailsClick}
          >
            Details &nbsp;
            <div className="float-right">
              <i className="fas fa-phone-volume" />
            </div>
          </button>
        </div>
      );
    }

    return (
      <div className="text-center">
        <div className="stadium" onClick={this.handleclick}>
          <div className="card card-width card_decoration">
            <div className="card-body">
              <small>
                <div>
                  <b>{poi.id}</b>
                  .&nbsp;POI:&nbsp;
                  <font color="#d0d7e2">{poi.nameOfPlace}</font>
                </div>
                Intel: <font color="#d0d7e2">{poi.intelForCard}</font>
              </small>
              {clk}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageCol;
