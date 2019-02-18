import React, { Component } from "react";
import TimingRow from "./TimingRow";
import "../../project.css";

class TimingTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howToSteps: false
    };

    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.gotoTimingProcess = this.gotoTimingProcess.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "This will save the present state of Timing Projection. You can continue to work on it later. In present scenario (UX-reflection) the data is not saved. You are getting the initial state from a pre-defined JSON."
    );
  }

  gotoTimingProcess = value => {
    if (value === "createSteps") {
      this.setState({
        howToSteps: !this.state.howToSteps
      });
    }
  };

  numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render() {
    //console.log('TimingTable props:' + JSON.stringify(this.props));
    let timingProcess;

    if (this.state.howToSteps) {
      timingProcess = (
        <div>
          <div className="row">
            <div className="col">
              <div className="text-center">
                <font color="white">
                  <h4>Time Estimation & Stochastic Projection</h4>
                </font>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="how-to-time-a-project">
              <font color="#cce8e3">
                NOTE: Projecting anything of the future with absolute certainty
                is futile. Everything of future is a possibility with varying
                probability of its manifestation. Yet, all projects needs cost &
                time projection, folded under term 'estimate'. This module would
                let you estimate project-time based on probability of success.
                <br />
              </font>
              <br />
              <br />
              <ul>
                <li>
                  Identify the milestones or tasks in the Cirital-Path of your
                  project (* if unaware of Critical-path see the footnote)
                </li>
                <li>
                  Sequence the critical-path milestone-items in sequence of
                  expected occurance.
                </li>
                <li>
                  For each milestone-item, check to see if there is a depndency
                  (most of the time there would be dependency to be in critical
                  path).
                </li>
                <li>
                  Enter the milestone name and your estimate for the delivery of
                  the milestone under Estimate. Include the unit of your
                  estimate (hour, days, weeks).
                </li>
                <li>
                  For each, find out the parallelism with the previous item.
                  Say, you estimate that 50% of your this task can start before
                  being stopped because the previous mile-stone has not been
                  reached. Calculate (or guess) what is the percentage
                  likelyhood of this. This is Dpn% in the calculator. (** See
                  footnote for the process)
                </li>
                <li>
                  Assert the confidence you have of the completion of the task
                  you are doing for this milestone. For example, you estimate
                  that you or your team would be able to achieve the milestone
                  in 10 days with 90% confidence. This is Con% in the
                  calculator.
                </li>
              </ul>
              If you click 'Save' then the worksheet would be saved in the DB.
              Next time you return, you would start where you left off.
              <br />
              <br />
              <font color="#e5ddbc">
                * CRITICAL PATH: Most projects (endeavors) are composed of
                smaller endeavors or components. Each sub-step consumes time.
                There would be dependencies of various kinds among these
                components. If you arrange them in best combination for the
                completion of the project, you would be able to detect the
                shortedt line, from start-to-end that must happen to finish it.
                That line is the Critical-path and the components on this path
                should be used to calculate the time projection.
                <br />
                <br />
                ** Parallelism: There may be two ore more taks that can start
                and be done in some degree of concurrency even among the tasks
                in the critical path.

                <hr />

                <b>Background Information:</b> In the present version, only 2
                step P(X ∩ Y) or P(X and Y) or P(XY), which reads as the joint
                probability of X and Y. The model is used with normality
                assumption. To be noted, this is <u>NOT</u> Conditional Probability
                (Bays Theorem). This is good for most simple day-to-day
                projects. Progressively, based on your ideation and discovery,
                and based on Baanda's learning, you would be recommended more
                complex models. <br />
                <br />
                {/* <font color="#c7e2ed" size="2"> */}
                  <i>
                    Note: As a user, you do not need to know probability as is
                    used now or even other emergences based on what Baanda would
                    learn over time and use the right probability distribution
                    model. This reference is for readers who may wish to
                    understand underlying processes. Please reach out to Baanda
                    Library for detail information or post any question there.
                  </i>
                {/* </font> */}
              </font>
            </div>
          </div>
        </div>
      );
    }

    var onTimingTableUpdate = this.props.onTimingTableUpdate;
    var rowDel = this.props.onRowDel;
    //var rowAdd = this.props.onRowAdd;

    let proT = 0;
    let estT = 0;
    let ts, pp, cp;
    var timing = this.props.timings.map(bgt => {
      //console.log('bgt:' + JSON.stringify(bgt));
      if (bgt.unit === "day") {
        ts = bgt.timeEstimates * 8;
      } else if (bgt.unit === "week") {
        ts = bgt.timeEstimates * 8 * 40;
      } else {
        ts = bgt.timeEstimates;
      }
      //let ts = bgt.timeEstimates;
      pp = bgt.parallelDependencyPer;
      cp = bgt.confidencePer;
      // // The following should not happen because input has min = "1". If, in remote case
      // // zero value do get in, the minimum is assumed to eliminate
      if (pp < 1) {
        pp = 1;
      }
      if (cp < 1) {
        cp = 1;
      }
      proT = proT + ts * (1 + (pp / 100) * (cp / 100) ); // project time line
      estT = estT + ts;
     

      return (
        <TimingRow
          onTimingTableUpdate={onTimingTableUpdate}
          timing={bgt}
          onDelEvent={rowDel.bind(this)}
          key={bgt.id}
        />
      );
    });

    proT = Math.round(proT) / 8; // The assumption is that work day equal 8 hours day
    estT = estT / 8;
    //console.log('protT:' + proT + '  estT:' + estT);

    let estimatedTime = this.numberWithCommas(Math.round(estT));
    let projectedTime = this.numberWithCommas(Math.round(proT));

    let timeCalculatorBox = (
      <div>
        <div className="timing-box">
          <table>
            <thead>
              <tr>
                <th width="35%" className="th-time">
                  Milestone Name
                </th>
                <th width="10%" className="th-time">
                  Estmate
                </th>
                <th width="10%" className="th-time">
                  Unit
                </th>
                <th width="10%" className="th-time">
                  Dpn%
                </th>
                <th width="10%" className="th-time">
                  Con%
                </th>
                <th width="20%" className="th-time">
                  Project
                </th>
                <th width="5%" className="th-timeadd">
                  <button
                    type="button"
                    onClick={this.props.onRowAdd}
                    //className="btn btn-success btn-sm"
                    className="control-btn-add-time"
                  >
                    <div className="float-right">
                      <i className="far fa-plus-square" />
                    </div>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="tbody-cost">{timing}</tbody>
          </table>
        </div>
        <div className="float-right button-padding-right">
          <button
            className="control-btn-time"
            type="button"
            onClick={this.handleSaveClick}
          >
            Save &nbsp;&nbsp;
            <div className="float-right">
              <i className="far fa-envelope" />
            </div>
          </button>
        </div>
      </div>
    );

    let output;

    if (this.state.howToSteps) {
      output = timingProcess;
    } else {
      output = timeCalculatorBox;
    }

    let timeHead = (
      <div className="timing-header">
        <div className="center">
          <strong>
            <font color="#dae7ed">Time Estimated: </font>
            <font color="#c9ce71">{estimatedTime} </font>
            <font color="#f2dcb3">
              &nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp; Time Projected:{" "}
            </font>
            <font color="#e09b7f">{projectedTime} </font>
            <font color="white">
              &nbsp;[<i> Work-days </i>]
            </font>
          </strong>
        </div>
      </div>
    );

    if (this.state.howToSteps) {
      output = timingProcess;
      timeHead = null;
    } else {
      output = timeCalculatorBox;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <button
              className="timing-steps"
              onClick={() => {
                this.gotoTimingProcess("createSteps");
              }}
            >
              How-to
              <div className="float-right">
                <i className="fas fa-toggle-off" />
              </div>
            </button>{" "}
          </div>
          <div className="col-md-10">
            
            {timeHead}
          </div>
        </div>
        {output}
        
      </div>
    );
  }
}

export default TimingTable;
