import React, { Component } from 'react';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

charts(fusioncharts);
const dataSource = {
  chart: {
    caption: 'Your Base Personality Analytics',
    subcaption: 'Scale: 1 (low) to 10 (high)',
    theme: 'fusion',
    showlegend: '0',
    showdivlinevalues: '0',
    showlimits: '0',
    showvalues: '1',
    plotfillalpha: '40',
    plottooltext: 'Your <b>$label</b> skill is rated as <b>$value</b>'
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
          label: 'Extro-introvert'
        },
        {
          label: 'Agreeable'
        },
        {
          label: 'Neorotic'
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: 'User Ratings',
      data: [
        {
          value: '8'
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
          value: '4'
        }
      ]
    }
  ]
};

class SummaryWorkDCCS extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="chart-size">
              <ReactFusioncharts
                type="radar"
                width="100%"
                height="100%"
                dataFormat="JSON"
                dataSource={dataSource}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryWorkDCCS;
