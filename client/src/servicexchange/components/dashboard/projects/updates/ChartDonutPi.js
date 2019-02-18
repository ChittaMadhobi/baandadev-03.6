import React, { Component } from "react";

import fusioncharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(fusioncharts);

const dataSource = {
  chart: {
    caption: "Your catagory based responsibility distribtion",
    subcaption: "Art Gallery Co-op Endeavor",
    enablesmartlabels: "1",
    showlabels: "1",
    numbersuffix: " %",
    usedataplotcolorforlabels: "1",
    plottooltext: "$label, <b>$value</b> %",
    theme: "fusion"
  },
  data: [
    {
      label: "Artistry",
      value: "26.36"
    },
    {
      label: "Finance",
      value: "23.64"
    },
    {
      label: "Security",
      value: "16.36"
    },
    {
      label: "Marketing",
      value: "12.73"
    },
    {
      label: "Setup",
      value: "10.90"
    },
    {
      label: "Other",
      value: "10"
    }
  ]
};

class ChartDonutPi extends Component {
  render() {
    return (
      <div>
        <ReactFusioncharts
          type="doughnut3d"
          width="100%"
          height="85%"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </div>
    );
  }
}

export default ChartDonutPi;
