import React, { Component } from "react";
import BudgetRow from "./BudgetRow";
import '../../project.css';

class BudgetTable extends Component {
  constructor(props) {
    super(props);

    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  render() {
    //console.log('BudgetTable props:' + JSON.stringify(this.props));

    var onBudgetTableUpdate = this.props.onBudgetTableUpdate;
    var rowDel = this.props.onRowDel;
    //var rowAdd = this.props.onRowAdd;

    let totalCost = 0.0;

    var budget = this.props.budgets.map(bgt => {
      totalCost = totalCost + parseFloat(bgt.price) * parseFloat(bgt.quantity);

      return (
        <BudgetRow
          onBudgetTableUpdate={onBudgetTableUpdate}
          budget={bgt}
          onDelEvent={rowDel.bind(this)}
          key={bgt.id}
        />
      );
    });

    let costT = totalCost.toFixed(2);
    let costTot = this.numberWithCommas(costT);

    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h4>
                <strong>
                  <font color="white">Cost Projection: </font>
                  <font color="#c9ce71">{costTot}</font>
                </strong>
                <font color="#c9ce71">&nbsp;$</font>
              </h4>
            </div>
          </div>
        </div>

        <div className="budget-box">
          <table>
            <thead>
              <tr>
                <th width="35%" className="th-cost">
                  Item Name
                </th>
                <th width="10%" className="th-cost">
                  Price
                </th>
                <th width="10%" className="th-cost">
                  Unit
                </th>
                <th width="10%" className="th-cost">
                  Quantity
                </th>
                <th width="30%" className="th-cost">
                  Amount
                </th>
                <th width="5%" className="th-cost">
                  <button
                    type="button"
                    onClick={this.props.onRowAdd}
                    //className="btn btn-success btn-sm"
                    className="control-btn-add-cost"
                  >
                    <div className="float-right">
                      <i className="far fa-plus-square" />
                    </div>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="tbody-cost">{budget}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BudgetTable;
