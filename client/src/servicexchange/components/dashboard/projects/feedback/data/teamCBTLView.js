export const cbtlView = {
  chart: {
    caption: "CBTL-Cafe Team Dynamics",
    subcaption: "Day-to-Day Cafe Work",
    xaxisname: "Team Dynamics Dimensions",
    yaxisname: "Feedback Statistical Scores",
    formatnumberscale: "1",
    plottooltext:
      "<b>$dataValue</b> scores on <b>$seriesName</b> in $label",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "Like"
        },
        {
          label: "Energy"
        },
        {
          label: "Work-Pressure"
        },
        {
          label: "Motivation"
        },
        {
          label: "Empathy"
        },
        {
          label: "Productivity"
        }

      ]
    }
  ],
  dataset: [
    {
      seriesname: "Your Timeseries Feedback",
      data: [
        {
          value: "8.5"
        },
        {
          value: "8"
        },
        {
          value: "9.5"
        },
        {
          value: "6"
        },
        {
          value: "4"
        },
        {
          value: "7"
        }
      ]
    },
    {
      seriesname: "Team's Timeseries",
      data: [
        {
          value: "8"
        },
        {
          value: "7"
        },
        {
          value: "9"
        },
        {
          value: "5"
        },
        {
          value: "6"
        },
        {
          value: "8"
        }
      ]
    }
  ]
};
