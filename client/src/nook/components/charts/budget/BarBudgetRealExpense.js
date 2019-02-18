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
    caption: 'Your Real to Budgeted Expense ',
    subcaption: 'First Six Months of 2018',
    xaxisname: 'Months',
    yaxisname: 'Expense in $',
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
      seriesname: 'Real Expense',
      data: [
        {
          value: '2580.00'
        },
        {
          value: '2600.50'
        },
        {
          value: '2750.50'
        },
        {
          value: '2200.00'
        },
        {
          value: '3000.69'
        },
        {
          value: '3580.69'
        }
      ]
    },
    {
      seriesname: 'Budgeted Expense',
      data: [
        {
          value: '2583.00'
        },
        {
          value: '2583.00'
        },
        {
          value: '2583.00'
        },
        {
          value: '2583.00'
        },
        {
          value: '2583.00'
        },
        {
          value: '2583.00'
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
