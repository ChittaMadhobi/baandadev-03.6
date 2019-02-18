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

import '../../browse/mktbrowse.css'; 
// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Charts, Widgets, power, FusionTheme);

const dataSource = {
  chart: {
    caption: 'Fund raised financial (inter/external), goods-services',
    yaxisname: 'Values in $',
    subcaption: 'Dec 2018 to March 2019',
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
          label: 'Wk2'
        },
        {
          label: 'Wk4'
        },
        {
          label: 'Wk6'
        },
        {
          label: 'Wk8'
        },
        {
          label: 'Wk10'
        },
        {
          label: 'Wk12'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'External',
      data: [
        {
          value: '1'
        },
        {
          value: '3'
        },
        {
          value: '5'
        },
        {
          value: '8'
        },
        {
          value: '9'
        },
        {
          value: '13'
        }
      ]
    },
    {
      seriesname: 'Internal',
      data: [
        {
          value: '3'
        },
        {
          value: '4'
        },
        {
          value: '4'
        },
        {
          value: '5'
        },
        {
          value: '7'
        },
        {
          value: '9'
        }
      ]
    },
    {
      seriesname: 'Goods & Services',
      data: [
        {
          value: '2'
        },
        {
          value: '2'
        },
        {
          value: '3'
        },
        {
          value: '8'
        },
        {
          value: '8'
        },
        {
          value: '9'
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
        <div className="bar-size">

          <ReactFC {...chartConfigs} />
          <div className="card">
            <div className="card-header">
              <font color="blue">
                <b>Your team-internal, external& good-services funding</b>
              </font>
            </div>
            {/* <div class="card-body">
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default LineTrendEarningExpense;
