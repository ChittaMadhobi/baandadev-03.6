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
          label: 'Openness'
        },
        {
          label: 'Conscientious'
        },
        {
          label: 'Extrovert'
        },
        {
          label: 'Agreeable'
        },
        {
          label: 'Neurotic'
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
          value: '5'
        },
        {
          value: '7'
        },
        {
          value: '3'
        },
        {
          value: '8'
        },
        {
          value: '5'
        }
      ]
    },
    {
      seriesname: 'Responder (turquoise)',
      plottooltext: '<b>$label</b> score: <b>$datavalue</b>',
      data: [
        {
          value: '6'
        },
        {
          value: '9'
        },
        {
          value: '5'
        },
        {
          value: '4'
        },
        {
          value: '5'
        }
      ]
    },
    {
      seriesname: 'Job-Context Estimates (orange)',
      plottooltext: '<b>$label</b> score: <b>$datavalue</b>',
      data: [
        {
          value: '2'
        },
        {
          value: '6'
        },
        {
          value: '3'
        },
        {
          value: '7'
        },
        {
          value: '8'
        }
      ]
    }
  ]
};

class APersonalityCompResp extends Component {
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

export default APersonalityCompResp;
