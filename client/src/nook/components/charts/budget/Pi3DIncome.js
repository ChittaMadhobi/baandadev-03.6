import React, { Component } from 'react';
// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
// Step 4 - Including the chart type
import Widgets from 'fusioncharts/fusioncharts.widgets';
import power from 'fusioncharts/fusioncharts.powercharts';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts, Widgets, power, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations

const dataSource = {
  // Chart Configuration
  chart: {
    caption: 'Domestic Income Distribution',
    subcaption: 'Budget name: Sample Bugdet',
    showvalues: '1',
    showpercentintooltip: '0',
    numberprefix: '$',
    enablemultislicing: '1',
    theme: 'Fusion'
  },
  data: [
    {
      label: 'Employment',
      value: '22000'
    },
    {
      label: 'ServiceExchange',
      value: '2500'
    },
    {
      label: 'OtherIncome',
      value: '1500'
    }
  ]
};

const chartConfigs = {
  type: 'pie3d',
  renderAt: 'chart-container',
  width: '100%',
  height: '100%',
  dataFormat: 'json',
  dataSource: dataSource
};

class Pi3DIncome extends Component {
  render() {
    return (
      <div className="chart-size">
        <ReactFC {...chartConfigs} />
        <b>10 months projected income</b>
      </div>
    );
  }
}

export default Pi3DIncome;
