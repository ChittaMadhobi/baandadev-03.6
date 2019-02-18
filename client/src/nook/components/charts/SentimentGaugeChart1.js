import React, { Component } from 'react';
// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

// Step7 (These data should come from database  and intel calcullations)
// Demo data of dial-1
const chartConfigs1 = {
  type: 'angulargauge', // The gauge type
  width: '450', // Width of the gauge
  height: '250', // Height of the gauge
  dataFormat: 'json', // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      caption: 'Your Circle LIKE-YOU Meter',
      lowerLimit: '0',
      upperLimit: '100',
      showValue: '1',
      numberSuffix: '%',
      theme: 'fusion',
      showToolTip: '0'
    },
    // Chart Data
    colorRange: {
      color: [
        {
          minValue: '0',
          maxValue: '25',
          code: '#d31014'
        },
        {
          minValue: '25',
          maxValue: '50',
          code: '#F2726F'
        },
        {
          minValue: '50',
          maxValue: '75',
          code: '#FFC533'
        },
        {
          minValue: '75',
          maxValue: '100',
          code: '#62B58F'
        }
      ]
    },
    dials: {
      dial: [
        {
          value: '72'
        }
      ]
    }
  }
};

class SentimentGaugeChart1 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ReactFC {...chartConfigs1} />
          </div>
          <div className="col-md-6">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default SentimentGaugeChart1;
