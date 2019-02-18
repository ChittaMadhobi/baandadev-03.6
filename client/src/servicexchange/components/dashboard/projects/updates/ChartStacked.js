import React, { Component } from 'react';

import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(fusioncharts);

const dataSource = {
  "chart": {
    "showvalues": "0",
    "caption": "Catagory based Status Stacked",
    "subcaption": "(Art Gallery Co-op Endeavor)",
    "numberprefix": "",
    "numbersuffix": "%",
    "plottooltext": "Status of $seriesName in $label was <b>$dataValue</b>",
    "showhovereffect": "1",
    "yaxisname": "% done",
    "showsum": "1",
    "theme": "fusion"
  },
  "categories": [
    {
      "category": [
        {
          "label": "Artistry"
        },
        {
          "label": "Market"
        },
        {
          "label": "Security"
        },
        {
          "label": "Setup"
        },
        {
          "label": "Finance"
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "WIP",
      "data": [
        {
          "value": "21"
        },
        {
          "value": "24"
        },
        {
          "value": "27"
        },
        {
          "value": "30"
        },
        {
          "value": "32"
        }
      ]
    },
    {
      "seriesname": "Done",
      "data": [
        {
          "value": "8"
        },
        {
          "value": "10"
        },
        {
          "value": "11"
        },
        {
          "value": "12"
        },
        {
          "value": "10"
        }
      ]
    },
    {
      "seriesname": "Cancel",
      "data": [
        {
          "value": "0"
        },
        {
          "value": "1"
        },
        {
          "value": "2"
        },
        {
          "value": "5.5"
        },
        {
          "value": "2"
        }
      ]
    },
    {
      "seriesname": "Inspect-Release",
      "data": [
        {
          "value": "2"
        },
        {
          "value": "4"
        },
        {
          "value": "9"
        },
        {
          "value": "11"
        },
        {
          "value": "10"
        }
      ]
    },
    {
      "seriesname": "As-of-now",
      "plottooltext": "As-of-now % done $label was <b>$dataValue</b>",
      "renderas": "Line",
      "data": [
        {
          "value": "31"
        },
        {
          "value": "39"
        },
        {
          "value": "49"
        },
        {
          "value": "58.5"
        },
        {
          "value": "54"
        }
      ]
    }
  ]
};

class ChartStacked extends Component {
  render() {
    return (
      <div>
        <ReactFusioncharts
         type = "stackedcolumn2dline"
         width = '100%'
         height = '85%'
         dataFormat = "JSON"
         dataSource = {dataSource} />
      </div>
    );
  }
}

export default ChartStacked;