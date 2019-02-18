import React, { Component } from "react";

import "../teams.css";
import { memberTeamUsage } from "../data/memberTeamUsage";

class TeamAllocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberTeamUsage: undefined
    };

    this.onChange = this.onChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "Eventually -- When you click this, your work will be saved in database. The allocations here are estimates. This would be carried forward as starting point of budgeting. In time, these values would provide intelligence between actual and exstimates. The equvalency vote here is based purely on time-allocation with reference to context of work. The actual equivalency is much more complex with many more parameters, anticipated and found-out via pattern recognition over law of large numbers (LLN)."
    );
  }

  componentWillMount() {
    this.setState({
      memberTeamUsage
    });
  }

  onChange = (e, id) => {
    let newval = e.target.value;
    //console.log(' _id:' + id + '  value:' + newval);
    this.setState(prevState => ({
      memberTeamUsage: prevState.memberTeamUsage.map(obj =>
        obj._id === id ? Object.assign(obj, { expectedUse: newval }) : obj
      )
    }));
  };

  render() {
    // console.log('this.state:' + JSON.stringify(this.state.memberTeamUsage));
    console.log(
      "props= " + JSON.stringify(this.props.propsForward.thisProject.msg)
    );

    const { engagementType } = this.props.propsForward.thisProject.msg;
    console.log("engagementType: " + engagementType);
    let tot = 0;
    const xx = this.state.memberTeamUsage.map((data, i) => {
      //console.log(i + "." + data.expectedUse);
      tot = tot + Number(data.expectedUse);
      return tot;
    });
    console.log("xx:" + xx + " tot:" + tot);

    let out;

    if (engagementType === "time-based") {
      out = (
        <div>
          <div className="space-outside-buttons" />
          <div className="space-outside-buttons" />
          <div className="text-center how-to-create-team">
            <font color="white">
              You have been inducted in the team by the manager. Since you are
              joining as barrista (time-based) and not the manager of project or co-op, you do not
              get to build teams or do allocations. That is, based on your role and authorization, various operations will be enabled, disabled, or contextually modified.
            </font>
          </div>
        </div>
      )
    } else {
      out = (
        <div>
          <div className="table table-striped table-hover table-sm">
            <table border="1" className="disp">
              <thead className="thead-dark">
                <tr>
                  <th>Members</th>
                  <th>Team</th>
                  <th>Usage in hrs.</th>
                </tr>
              </thead>
              <tbody>
                {this.state.memberTeamUsage.map((head, i) => (
                  <tr key={i}>
                    <td>{head.name}</td>
                    <td>{head.team}</td>
                    <td>
                      <input
                        name="expectedUse"
                        type="number"
                        value={head.expectedUse}
                        onChange={e => {
                          this.onChange(e, head._id);
                        }}
                        text-align="right"
                        step={1}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>&nbsp;</td>
                  <td>
                    <b>Total Allocation</b>
                  </td>
                  <td>
                    <b>
                      <font color="red">{tot}</font>
                    </b>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="space-between-rows" />
        <div className="row">
          <div className="col">
            <div className="float-right">
              <button
                className="btn control-btn-team-save"
                onClick={this.handleSaveClick}
              >
                Save Estimates &nbsp;
                {/* <i className="far fa-calendar-plus float-right" /> */}
              </button>
            </div>
          </div>
        </div>
        </div>
      );
    }

    return (
      <div className="member-team-allocation text-center">
        <font color="white">
          <h3>Member - Team - Allocations</h3>
        </font>
        <br />
        <div>{out}</div>
        
      </div>
    );
  }
}

export default TeamAllocation;
