import React, { Component } from "react";

import fusioncharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(fusioncharts);

const dataSource = {
  chart: {
    dateformat: "mm/dd/yyyy",
    theme: "fusion",
    useverticalscrolling: "0"
  },
  datatable: {
    headervalign: "bottom",
    datacolumn: [
      {
        headertext: "Teams",
        headervalign: "bottom",
        headeralign: "left",
        align: "left",
        text: [
          {
            label: "Elephants"
          },
          {
            label: "Hippos"
          },
          {
            label: "Dolphines"
          },
          {
            label: "Monkeys"
          },
          {
            label: "Hawks"
          },
          {
            label: "Ants"
          },
          {
            label: "Wolves"
          },
          {
            label: "Humans"
          },
          {
            label: "Banyan"
          }
        ]
      }
    ]
  },
  milestones: {
    milestone: [
      {
        date: "2/11/2018",
        taskid: "4",
        color: "#F2726F",
        shape: "star",
        tooltext: "Site Preperation Done"
      },
      {
        date: "3/11/2018",
        taskid: "6",
        color: "#F2726F",
        shape: "star",
        tooltext: "Marketing Initiated"
      },
      {
        date: "3/23/2018",
        taskid: "8",
        color: "#F2726F",
        shape: "star",
        tooltext: "Rehearse Final Opening"
      },
      {
        date: "3/29/2018",
        taskid: "9",
        color: "#F2726F",
        shape: "star",
        tooltext: "Open Gallery with a party"
      }
    ]
  },
  tasks: {
    task: [
      {
        id: "1",
        start: "1/1/2018",
        end: "1/13/2018",
        color: "#5D62B5"
      },
      {
        id: "2",
        start: "1/4/2018",
        end: "1/21/2018",
        color: "#29C3BE"
      },
      {
        id: "3",
        start: "1/22/2018",
        end: "2/4/2018",
        color: "#5D62B5"
      },
      {
        id: "4",
        start: "2/5/2018",
        end: "2/11/2018",
        color: "#67CDF2"
      },
      {
        id: "5",
        start: "2/12/2018",
        end: "2/18/2018",
        color: "#FFC533"
      },
      {
        id: "6",
        start: "2/19/2018",
        end: "3/11/2018",
        color: "#67CDF2"
      },
      {
        id: "7",
        start: "3/12/2018",
        end: "3/18/2018",
        color: "#62B58F"
      },
      {
        id: "8",
        start: "3/16/2018",
        end: "3/23/2018",
        color: "#5D62B5"
      },
      {
        id: "9",
        start: "3/24/2018",
        end: "3/29/2018",
        color: "#29C3BE"
      }
    ]
  },
  processes: {
    align: "left",
    headertext: "Tasks",
    headervalign: "bottom",
    headeralign: "left",
    process: [
      {
        label: "Mission & Planning"
      },
      {
        label: "Id Audience & Mkt."
      },
      {
        label: "Id & Mine Talents"
      },
      {
        label: "Id & Prep Site"
      },
      {
        label: "Gather Art-stuff"
      },
      {
        label: "Advertise & Market"
      },
      {
        label: "Evaluate In-house"
      },
      {
        label: "Rehearse Opening"
      },
      {
        label: "Open with a party"
      }
    ]
  },
  categories: [
    {
      category: [
        {
          start: "1/1/2018",
          end: "4/1/2018",
          label: "Gallery Pipeline for Q4-2018"
        }
      ]
    },
    {
      category: [
        {
          start: "1/1/2018",
          end: "1/31/2018",
          label: "Oct"
        },
        {
          start: "2/1/2018",
          end: "2/28/2018",
          label: "Nov"
        },
        {
          start: "3/1/2018",
          end: "4/1/2018",
          label: "Dec"
        }
      ]
    },
    {
      category: [
        {
          start: "1/1/2018",
          end: "1/7/2018",
          label: "Week 1"
        },
        {
          start: "1/8/2018",
          end: "1/14/2018",
          label: "Week 2"
        },
        {
          start: "1/15/2018",
          end: "1/21/2018",
          label: "Week 3"
        },
        {
          start: "1/22/2018",
          end: "1/28/2018",
          label: "Week 4"
        },
        {
          start: "1/29/2018",
          end: "2/4/2018",
          label: "Week 5"
        },
        {
          start: "2/5/2018",
          end: "2/11/2018",
          label: "Week 6"
        },
        {
          start: "2/12/2018",
          end: "2/18/2018",
          label: "Week 7"
        },
        {
          start: "2/19/2018",
          end: "2/25/2018",
          label: "Week 8"
        },
        {
          start: "2/26/2018",
          end: "3/4/2018",
          label: "Week 9"
        },
        {
          start: "3/5/2018",
          end: "3/11/2018",
          label: "Week 10"
        },
        {
          start: "3/12/2018",
          end: "3/18/2018",
          label: "Week 11"
        },
        {
          start: "3/19/2018",
          end: "3/25/2018",
          label: "Week 12"
        },
        {
          start: "3/26/2018",
          end: "4/1/2018",
          label: "Week 13"
        }
      ]
    }
  ]
};

class ShowMilestones extends Component {
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

export default ShowMilestones;
