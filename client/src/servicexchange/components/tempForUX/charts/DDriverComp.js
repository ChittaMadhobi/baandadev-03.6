import React, { Component } from 'react';

import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(fusioncharts);

const dataSource = {
  chart: {
    caption: 'Driver Scores',
    subcaption: 'Skill, Knowledge, Intelligence, Imagination Comparisons',
    xaxisname: 'Driver Dimensions',
    yaxisname: 'Total number of apps in store',
    formatnumberscale: '1',
    plottooltext:
      '<b>$dataValue</b> Drivers score: <b>$seriesName</b> in $label',
    theme: 'fusion',
    drawcrossline: '1'
  },
  categories: [
    {
      category: [
        {
          label: 'Hands-on Skill'
        },
        {
          label: 'Knowledge'
        },
        {
          label: 'Intelligence'
        },
        {
          label: 'Imagination'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Your Scores',
      data: [
        {
          value: '80'
        },
        {
          value: '60'
        },
        {
          value: '73'
        },
        {
          value: '55'
        }
      ]
    },
    {
      seriesname: 'Responder Score',
      data: [
        {
          value: '77'
        },
        {
          value: '50'
        },
        {
          value: '75'
        },
        {
          value: '60'
        }
      ]
    },
    {
      seriesname: 'Context-need Estimate',
      data: [
        {
          value: '70'
        },
        {
          value: '65'
        },
        {
          value: '76'
        },
        {
          value: '67'
        }
      ]
    }
  ]
};

class DDriverComp extends Component {
  render() {
    return (
      <ReactFusioncharts
        type="mscolumn2d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default DDriverComp;
