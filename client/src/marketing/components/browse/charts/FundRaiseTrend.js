import React, { Component } from 'react';


import fusioncharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(fusioncharts);

const dataSource = {
  chart: {
    caption: "Art Gallery Burn-Rate Expected vs. Real",
    yaxisname: "$ Amount of Burn in service & materials",
    subcaption: "Aug 2018 to Dec 2018",
    showhovereffect: "1",
    numbersuffix: "K $",
    drawcrossline: "1",
    plottooltext: "<b>$dataValue</b> is the $seriesName",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "Aug"
        },
        {
          label: "Sep"
        },
        {
          label: "Oct"
        },
        {
          label: "Nov"
        },
        {
          label: "Dec"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Actual-burn",
      data: [
        {
          value: "38"
        },
        {
          value: "44"
        },
        {
          value: "45"
        },
        {
          value: "38"
        },
        {
          value: "44"
        }
      ]
    },
    {
      seriesname: "Expected-burn",
      data: [
        {
          value: "36"
        },
        {
          value: "40"
        },
        {
          value: "42"
        },
        {
          value: "40"
        },
        {
          value: "42"
        }
      ]
    },
    {
      seriesname: "Personal-Fund",
      data: [
        {
          value: "20"
        },
        {
          value: "10"
        },
        {
          value: "12"
        },
        {
          value: "9"
        },
        {
          value: "16"
        }
      ]
    },
    {
      seriesname: "Raised-Funds",
      data: [
        {
          value: "18"
        },
        {
          value: "34"
        },
        {
          value: "33"
        },
        {
          value: "29"
        },
        {
          value: "28"
        }
      ]
    }
  ]
};

class FundRaiseTrend extends Component {
	render() {
		return (
			<div>
				<div className="row">
        <div className="col-md-6">&nbsp;</div>
					<div className="col-md-6">
						<ReactFusioncharts
							type="msline"
							width="100%"
							height="100%"
							dataFormat="JSON"
							dataSource={dataSource}
						/>
					</div>

				</div>
			</div>
		);
	}
}

export default FundRaiseTrend;
