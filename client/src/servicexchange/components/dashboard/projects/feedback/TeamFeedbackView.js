import React, { Component } from "react";
import fusioncharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import { artGalleryFeed } from './data/teamArtGalleryView';
import { cbtlView } from './data/teamCBTLView';
// Resolves charts dependancy
charts(fusioncharts);

class TeamFeedbackView extends Component {


  render() {
    //console.log('TeamFeedbackView props: ' + JSON.stringify(this.props));
    let dataSource;
    if ( this.props.teamName === 'Art-Gallery') {
      dataSource = artGalleryFeed;
    } else {
      dataSource = cbtlView;
    }
    
    return (
      <ReactFusioncharts
         type = "mscolumn3d"
         width = '100%'
         height = '100%'
         dataFormat = "JSON"
         dataSource = {dataSource} />
      );
  }
}

export default TeamFeedbackView;
