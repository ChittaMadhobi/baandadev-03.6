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

const dataSource = {
  chart: {
    caption: 'Your Real to Budgeted Income ',
    subcaption: 'First Six Months of 2018',
    xaxisname: 'Months',
    yaxisname: 'Income in $',
    formatnumberscale: '1',
    plottooltext:
      '<b>$dataValue</b> apps were available on <b>$seriesName</b> in $label',
    theme: 'fusion'
  },
  categories: [
    {
      category: [
        {
          label: 'Jan'
        },
        {
          label: 'Feb'
        },
        {
          label: 'Mar'
        },
        {
          label: 'Apr'
        },
        {
          label: 'May'
        },
        {
          label: 'Jun'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Real Income',
      data: [
        {
          value: '2300.00'
        },
        {
          value: '2709.50'
        },
        {
          value: '2250.50'
        },
        {
          value: '3500.00'
        },
        {
          value: '3650.69'
        },
        {
          value: '3250.69'
        }
      ]
    },
    {
      seriesname: 'Budgeted Income',
      data: [
        {
          value: '2600.00'
        },
        {
          value: '2600.00'
        },
        {
          value: '2600.00'
        },
        {
          value: '2600.00'
        },
        {
          value: '2600.00'
        },
        {
          value: '2600.00'
        }
      ]
    }
  ]
};

const chartConfigs = {
  type: 'mscolumn3d',
  renderAt: 'chart-container',
  width: '100%',
  height: '100%',
  dataFormat: 'json',
  dataSource
};

class BarBudgetToReal extends Component {
  render() {
    return (
      <div>
        <div className="bar-size">
          <ReactFC {...chartConfigs} />
          <b>
            Real to Planned Comparison - Projected from first six months data
          </b>
        </div>
      </div>
    );
  }
}

export default BarBudgetToReal;
