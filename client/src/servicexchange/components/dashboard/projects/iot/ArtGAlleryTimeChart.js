import React, { Component } from "react";

import fusioncharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(fusioncharts);

const dataSource = {
  chart: {
    caption: "Art Gallery Team Time Spent",
    subcaption: "In days (1 day = 8 hours)",
    xaxisname: "Art-gallery Co-op Team Members",
    yaxisname: "Days Worked (hours converted to days)",
    numbersuffix: " days",
    theme: "fusion"
  },
  data: [
    {
      label: "Angelo",
      value: "120"
    },
    {
      label: "De Vinci",
      value: "89"
    },
    {
      label: "Sapho",
      value: "100"
    },
    {
      label: "Dali",
      value: "34"
    },
    {
      label: "Jane",
      value: "76"
    },
    {
      label: "Mercus",
      value: "125"
    },
    {
      label: "Steve",
      value: "30"
    },
    {
      label: "Neil",
      value: "81"
    },
    {
      label: "Nelson",
      value: "52"
    },
    {
      label: "Chang",
      value: "40"
    }
  ]
};

class ArtGAlleryTimeChart extends Component {
  render() {
    return (
      <div>
        <ReactFusioncharts
          type="column2d"
          width="100%"
          height="100%"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </div>
    );
  }
}

export default ArtGAlleryTimeChart;
