import React, { Component } from 'react';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
import { taskView } from '../data/taskView';
charts(fusioncharts);

class TaskView extends Component {


  render() {
    //console.log('props : ' + JSON.stringify(this.props));
    const { engagementType } = this.props.propsForward.thisProject.msg;
    //console.log('type: ' + engagementType);

    let out;

    if (engagementType === "time-based") {
      out = (
        <div>
          <div className="space-outside-buttons" />
          <div className="space-outside-buttons" />
          <div className="text-center how-to-create-team">
            <font color="white">
              You have been inducted in the team by the manager. Since you are
              joining as barrista (time-based) and not a project or co-op etc. you have nothing to view. </font> 
          </div>
        </div>
      )
    } else {
      out = (
        <ReactFusioncharts
        type = "gantt"
        width = '100%'
        height = '100%'
        dataFormat = "JSON"
        dataSource = {taskView} />
      )
    }
    return (
      <div>
        {out}
      </div>
    );
  }
}

export default TaskView;