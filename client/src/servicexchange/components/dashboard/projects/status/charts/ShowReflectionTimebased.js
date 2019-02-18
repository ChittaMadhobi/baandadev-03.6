import React, { Component } from 'react';

import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(fusioncharts);

const dataSource = {
  chart: {
    caption: 'Work Summary Reflection',
    subcaption: 'Reflection of Team vs. Self-Perception',
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
          label: 'Work Knowhow'
        },
        {
          label: 'Team Player'
        },
        {
          label: 'Issue-solver'
        },
        {
          label: 'Punctuality'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'Self-Perception (blue)',
      plottooltext: '<b>$label</b> score: <b>$datavalue</b>',
      data: [
        {
          value: '5'
        },
        {
          value: '7'
        },
        {
          value: '7'
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
      seriesname: 'Team-Reflection (turquoise)',
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
          value: '8'
        }
      ]
    }
  ]
};

class ShowReflectionTimeBased extends Component {
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

export default ShowReflectionTimeBased;