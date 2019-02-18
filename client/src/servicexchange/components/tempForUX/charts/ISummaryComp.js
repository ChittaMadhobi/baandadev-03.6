import React, { Component } from 'react';

import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(fusioncharts);

const dataSource = {
  chart: {
    caption: 'Personality Comparison',
    subcaption: 'The comparison is per intelligence as of now',
    theme: 'fusion',
    numbersuffix: 'Pts.',
    plotfillalpha: '60'
  },
  categories: [
    {
      category: [
        {
          label: 'Communication'
        },
        {
          label: 'Punctuality'
        },
        {
          label: 'Problem Solving'
        },
        {
          label: 'Meeting Deadlines'
        },
        {
          label: 'Team Player'
        },
        {
          label: 'Domain Knowledge'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'You (blue)',
      plottooltext: '<b>$label</b> score: <b>$datavalue</b>',
      data: [
        {
          value: '6'
        },
        {
          value: '6'
        },
        {
          value: '8'
        },
        {
          value: '6'
        },
        {
          value: '4'
        },
        {
          value: '9'
        }
      ]
    },
    {
      seriesname: 'Responder (turquoise)',
      plottooltext: '<b>$label</b> score: <b>$datavalue</b>',
      data: [
        {
          value: '7'
        },
        {
          value: '7'
        },
        {
          value: '5'
        },
        {
          value: '6'
        },
        {
          value: '5'
        },
        {
          value: '7'
        }
      ]
    },
    {
      seriesname: 'Job-Context Estimates (orange)',
      plottooltext: '<b>$label</b> score: <b>$datavalue</b>',
      data: [
        {
          value: '7'
        },
        {
          value: '6'
        },
        {
          value: '6'
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
    }
  ]
};

class ISummaryComp extends Component {
  render() {
    return (
      <ReactFusioncharts
        type="radar"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default ISummaryComp;
