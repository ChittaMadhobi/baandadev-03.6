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

import '../../utils/nook.css';

// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts, Widgets, power, FusionTheme);

const dataSource = {
  chart: {
    caption: 'Earning, Expense, Savings trends',
    yaxisname: 'Values in $',
    subcaption: 'Jan to Jun 2018',
    showhovereffect: '1',
    numbersuffix: '$',
    drawcrossline: '1',
    plottooltext: '<b>$dataValue</b> of youth were on $seriesName',
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
      seriesname: 'Real-Income',
      data: [
        {
          value: '2300'
        },
        {
          value: '2709'
        },
        {
          value: '2250'
        },
        {
          value: '3500'
        },
        {
          value: '3650'
        },
        {
          value: '3250'
        }
      ]
    },
    {
      seriesname: 'Real-Expense',
      data: [
        {
          value: '2580'
        },
        {
          value: '2600'
        },
        {
          value: '2750'
        },
        {
          value: '2200'
        },
        {
          value: '3000'
        },
        {
          value: '3580'
        }
      ]
    },
    {
      seriesname: 'Savings + income',
      data: [
        {
          value: '2700'
        },
        {
          value: '3159'
        },
        {
          value: '2450'
        },
        {
          value: '4500'
        },
        {
          value: '4150'
        },
        {
          value: '3050'
        }
      ]
    }
  ]
};

const chartConfigs = {
  type: 'msline',
  renderAt: 'chart-container',
  width: '100%',
  height: '100%',
  dataFormat: 'json',
  dataSource
};

class LineTrendEarningExpense extends Component {
  render() {
    return (
      <div>
        <div className="line-chart-size">
          <ReactFC {...chartConfigs} />
          <p>
            <font color="#f4426b">
              Note: You need to keep saving+income 13.4% higher to work 10
              months in the year.
            </font>
          </p>

          {/* <div className="card">
            <div class="card-header">
              <font color="blue">
                <b>Your Income, Expense, & Savings Trend Analytics</b>
              </font>
            </div>
            <div class="card-body">
              With reference to trend relations among your income, expense, and
              savings; if you can keep the expense trend flater while increasing
              the income then you will get more time to your life's passions and
              pursuits.
              <p>
                <font color="brown">
                  <b>Note:</b> Increase difference between 'expense' with that
                  of 'income + savings' by 13.4% + to meet your current time
                  objectives of 10 months work.
                </font>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default LineTrendEarningExpense;
