import React, { Component } from "react";

import fusioncharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(fusioncharts);

const dataSource = {
  chart: {
    dateformat: "mm/dd/yyyy",
    caption: "Co-op Art-Gallery Creation and Opening Progress",
    subcaption: "",
    theme: "fusion",
    canvasborderalpha: "40",
    ganttlinealpha: "50",
    plottooltext: "$PercentComplete complete"
  },
  tasks: {
    color: "#008000",
    task: [
      {
        start: "11/30/2016",
        end: "12/07/2016",
        percentcomplete: "100",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "12/05/2016",
        end: "12/16/2016",
        percentcomplete: "100",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "12/05/2016",
        end: "01/08/2017",
        percentcomplete: "75",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "12/05/2016",
        end: "01/09/2017",
        percentcomplete: "80",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "12/10/2016",
        end: "01/20/2017",
        percentcomplete: "60",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "12/14/2016",
        end: "12/28/2016",
        percentcomplete: "35",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "12/26/2016",
        end: "01/10/2017",
        percentcomplete: "40",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "12/26/2016",
        end: "01/10/2017",
        percentcomplete: "50",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "01/10/2017",
        end: "01/17/2017",
        percentcomplete: "20",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "01/18/2017",
        end: "02/02/2017",
        percentcomplete: "5",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "01/18/2017",
        end: "02/02/2017",
        percentcomplete: "0",
        height: "27%",
        toppadding: "32%"
      },
      {
        start: "02/02/2017",
        end: "02/05/2017",
        percentcomplete: "20",
        height: "27%",
        toppadding: "32%"
      }
    ]
  },
  processes: {
    headertext: "Task",
    headeralign: "left",
    fontsize: "14",
    isbold: "0",
    align: "left",
    process: [
      {
        label: " Finalize Art-gallery Mission"
      },
      {
        label: " Develop Art-gallery plan"
      },
      {
        label: " Analyze Potential Audience"
      },
      {
        label: " Mine talents to be peers"
      },
      {
        label: " Develop Marketing Concept"
      },
      {
        label: " Identify & Avail Gallery-Site"
      },
      {
        label: " Gather Art Stuff & Pieces"
      },
      {
        label: " Prepare the Gallery"
      },
      {
        label: " Rehearse Production Run"
      },
      {
        label: " Evaluate Product In-House"
      },
      {
        label: " Opening party with Focused "
      },
      {
        label: " Begin Full Scale Marketing"
      }
    ]
  },
  categories: [
    {
      category: [
        {
          start: "11/23/2016",
          end: "11/30/2016",
          label: "Nov {br} 30"
        },
        {
          start: "12/01/2016",
          end: "12/07/2016",
          label: "Dec{br}07"
        },
        {
          start: "12/08/2016",
          end: "12/14/2016",
          label: "Dec{br}14"
        },
        {
          start: "12/15/2016",
          end: "12/21/2016",
          label: "Dec{br}21"
        },
        {
          start: "12/22/2016",
          end: "12/28/2016",
          label: "Dec{br}28"
        },
        {
          start: "12/28/2016",
          end: "01/04/2017",
          label: "Jan{br}04"
        },
        {
          start: "01/05/2017",
          end: "01/11/2017",
          label: "Jan{br}11"
        },
        {
          start: "01/12/2017",
          end: "01/18/2017",
          label: "Jan{br}18"
        },
        {
          start: "01/19/2017",
          end: "01/25/2017",
          label: "Jan{br}25"
        },
        {
          start: "01/26/2017",
          end: "02/01/2017",
          label: "Feb{br}01"
        },
        {
          start: "02/02/2017",
          end: "02/08/2017",
          label: "Feb{br}08"
        },
        {
          start: "02/09/2017",
          end: "02/15/2017",
          label: "Feb{br}15"
        }
      ]
    }
  ]
};

class ShowProgress extends Component {
  render() {
    return (
      <div>
        <ReactFusioncharts
          type="gantt"
          width="100%"
          height="100%"
          dataFormat="JSON"
          dataSource={dataSource}
        />
      </div>
    );
  }
}

export default ShowProgress;
