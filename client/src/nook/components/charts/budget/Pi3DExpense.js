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
    caption: 'Domestic Expense Distribution',
    subcaption: 'Budget name: Sample Bugdet',
    showvalues: '1',
    showpercentintooltip: '0',
    numberprefix: '$',
    enablemultislicing: '1',
    theme: 'candy'
  },
  data: [
    {
      label: 'Housing',
      value: '10267'
    },
    {
      label: 'Groceries',
      value: '3901'
    },
    {
      label: 'Transport',
      value: '1800'
    },
    {
      label: 'HealthCare',
      value: '911'
    },
    {
      label: 'Entertainment',
      value: '2407'
    },
    {
      label: 'Education',
      value: '5505'
    },
    {
      label: 'Communication',
      value: '1200'
    },
    {
      label: 'Insurance',
      value: '3906'
    },
    {
      label: 'Savings',
      value: '4005'
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

class Pi3DExpense extends Component {
  render() {
    return (
      <div>
        <div className="chart-size">
          <ReactFC {...chartConfigs} />
          <b>12 months projected expense</b>
        </div>
      </div>
    );
  }
}

export default Pi3DExpense;
