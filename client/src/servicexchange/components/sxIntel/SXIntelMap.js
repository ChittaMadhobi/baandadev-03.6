import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { PropTypes } from 'prop-types';
import controllable from 'react-controllables';
import data from './data/data';
import data1 from './data/data1';

import EventOnHover from './utils/EventOnHover';
import { K_SIZE } from './utils/eventStyle';

import MessageCol from './utils/MessageCol';
import './css/map.css';

const API_KEY = 'AIzaSyAPySlosiPZOKm2yTg7TaOcl96kDO8NOp8';

const SXIntelMap = controllable(['center', 'zoom', 'hoverKey', 'clickKey'])(
  class SXIntelMap extends Component {
    static propTypes = {
      center: PropTypes.any,
      zoom: PropTypes.number,
      hoverKey: PropTypes.string, // @controllable
      clickKey: PropTypes.string, // @controllable
      onCenterChange: PropTypes.func, // @controllable generated fn
      onZoomChange: PropTypes.func, // @controllable generated fn
      onHoverKeyChange: PropTypes.func, // @controllable generated fn
      //greatPlaceCoords: PropTypes.any
      greatPlaces: PropTypes.array
    };

    constructor(props) {
      super(props);
      this.state = {
        pointsOfIntersts: [],
        allpointsOfInterst: [],
        selectedpointsOfInterst: '',
        intelIntent: '',
        search: ''
      };
    }
    handleSaveClick() {
      alert(
        'This is an UX or usability experience. Now, your entries are not being saved or validated. When released, the click of this button will save the data entered.'
      );
    }

    componentWillMount() {
      //console.log('componentWillMount' + JSON.stringify(this.props));
      if (this.props.id === 0) {
        this.setState({
          pointsOfIntersts: data,
          allpointsOfInterst: data,
          intelIntent:
            'Intel-Suggestions for your posting in SX for Work-after-school'
        });
      } else {
        this.setState({
          pointsOfIntersts: data1,
          allpointsOfInterst: data1,
          intelIntent:
            'Intel-Suggestions for your posting in SX seeking art-master'
        });
      }
    }

    componentDidMount() {
      if (this.props.id === 0) {
        this.setState({
          pointsOfIntersts: data,
          allpointsOfInterst: data,
          intelIntent:
            'Intel-Suggestions for your posting in SX for Work-after-school'
        });
      } else {
        this.setState({
          pointsOfIntersts: data1,
          allpointsOfInterst: data1,
          intelIntent:
            'Intel-Suggestions for your posting in SX seeking art-master'
        });
      }
    }

    static defaultProps = {
      // center: [34.02678, -118.48886],
      // center1: {
      //   lat: 34.02678,
      //   lng: -118.48886
      // },
      zoom: 14
    };

    // _onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {
    //   this.props.onCenterChange(center);
    //   this.props.onZoomChange(zoom);
    // };

    _onChange = (center, zoom /* , bounds, marginBounds */) => {
      this.props.onCenterChange(center);
      this.props.onZoomChange(zoom);
    };

    _onChildMouseEnter = (key /*, childProps */) => {
      this.props.onHoverKeyChange(key);
    };

    _onChildMouseLeave = (/* key, childProps */) => {
      this.props.onHoverKeyChange(null);
    };

    selectPoi = poi => {
      console.log('poi:' + JSON.stringify(poi));
      this.setState({
        selectedpointsOfInterst: poi
      });
    };

    render() {
      // In real app, get this value from database ... with coordinate of
      // start-to work address provided in the posting by the candidate.
      let center = {
        lat: 34.0170266,
        lng: -118.46975659999998
      };
      if (this.state.selectedpointsOfInterst) {
        center = {
          lat: this.state.selectedpointsOfInterst.lat,
          lng: this.state.selectedpointsOfInterst.lng
        };
      }

      const places = this.state.pointsOfIntersts.map(pointsOfInterst => {
        //const { id, msg, ...coords } = place;
        const {
          id,
          shortDescription,
          intelForBubble,
          ...coords
        } = pointsOfInterst;
        // const { id, shortDescription, ...coords } = place;

        //msg = shortDescription;
        return (
          <EventOnHover
            key={id}
            {...coords}
            id={id}
            text={shortDescription}
            intel={intelForBubble}
            // use your hover state (from store, react-controllables etc...)
            hover={this.props.hoverKey === id}
          />
        );
      });

      return (
        <div className="fixedsize-intel-map">
          <div className="row">
            <div className="col-md-3 col-ms-6">
              <div className="text-center">
                <div className="lead_card_adjustment ">
                  <small>
                    {this.state.intelIntent}
                    <p>
                      <b>POI: Point-of-Interest</b>
                    </p>
                  </small>
                </div>
                <div className="fixedsize-intel-selected">
                  {this.state.pointsOfIntersts.map(pointsOfInterst => {
                    //console.log('pointsOfInterst id:' + pointsOfInterst.id);
                    return (
                      <MessageCol
                        key={pointsOfInterst.id}
                        poi={pointsOfInterst}
                        handleClick={this.selectPoi}
                      />
                    );
                  })}
                  <div className="space-below-intel-map-col" />
                </div>
              </div>
              &nbsp;
              {/* <div className="space-below-intel-map-col" /> */}
            </div>
            <div className="col-md-9 col-ms-6">
              <div
                style={{ height: '65vh', width: '100%' }}
                className="map_sticky"
              >
                <GoogleMapReact
                  bootstrapURLKeys={{ key: API_KEY }}
                  center={center}
                  defaultZoom={this.props.zoom}
                  hoverDistance={K_SIZE / 2}
                  onChange={this._onChange}
                  onChildClick={this._onChildClick}
                  onChildMouseEnter={this._onChildMouseEnter}
                  onChildMouseLeave={this._onChildMouseLeave}
                >
                  {places}
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
);

// onBoundsChange={this._onBoundsChange}

export default SXIntelMap;
