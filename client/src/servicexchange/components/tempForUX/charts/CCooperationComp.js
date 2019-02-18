import React, { Component } from 'react';

import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(fusioncharts);

const dataSource = {
  chart: {
    caption: 'Cooperation Scores',
    subcaption: 'Cooperation + Competition = 10',
    xaxisname: 'Co-op Dimensions',
    yaxisname: 'Total number of apps in store',
    formatnumberscale: '1',
    plottooltext: '<b>$dataValue</b> Coop score: <b>$seriesName</b> in $label',
    theme: 'fusion',
    drawcrossline: '1'
  },
  categories: [
    {
      category: [
        {
          label: 'Collaboration'
        },
        {
          label: 'Consensus'
        },
        {
          label: 'Coordination'
        },
        {
          label: 'Communication'
        },
        {
          label: 'Co-existence'
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
        },
        {
          value: '85'
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
        },
        {
          value: '82'
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
        },
        {
          value: '80'
        }
      ]
    }
  ]
};

class CCooperationComp extends Component {
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

export default CCooperationComp;
