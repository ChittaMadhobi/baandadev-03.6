import React, { Component } from 'react';
import ProductRowAct from './ProductRowAct';

class ProductTableAct extends Component {
  checkDecimal(inputtxt) {
    var regex = /\d/g;
    return regex.test(inputtxt);
  }

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    //console.log('Product Table onProductTableUpdate:' + onProductTableUpdate);
    // console.log('ProductTable props:' + JSON.stringify(this.props));
    var earningTot = 0.0,
      expenseTot = 0.0;
    // earningTot = parseFloat(earningTot);
    // expenseTot = parseFloat(expenseTot);

    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      //console.log('ProductTable:' + JSON.stringify(product));

      if (product.earnExpType === 'expense') {
        expenseTot = expenseTot + parseFloat(product.amount);
      } else {
        earningTot = earningTot + parseFloat(product.amount);
      }
      //console.log('expense:' + expenseTot + '  earning:' + earningTot);
      if (product.category.indexOf(filterText) === -1) {
        return null;
      }
      return (
        <ProductRowAct
          onProductTableUpdate={onProductTableUpdate}
          product={product}
          onDelEvent={rowDel.bind(this)}
          key={product.id}
        />
      );
    });

    let ernT = earningTot.toFixed(2);
    let expT = expenseTot.toFixed(2);

    return (
      <div className="text-center">
        <div>
          <p>
            <b>
              Total Earning $:
              <font color="green">
                &nbsp;
                {ernT}
              </font>{' '}
              &nbsp;&nbsp;&nbsp;&nbsp; Total Expense $:
              <font color="red">
                &nbsp;
                {expT}
              </font>
            </b>
          </p>
        </div>
        <table className="table table-bordered">
          <thead className="fixedHeader">
            <tr className="table-cell-head">
              <th width="15%" className="table-cell-head">
                Type
              </th>
              <th width="30%" className="table-cell-head">
                Category
              </th>
              <th width="25%" className="table-cell-head">
                Sub-category
              </th>
              <th width="20%" className="table-cell-head">
                Amount ($)
              </th>
              <th width="10%" className="table-cell-head">
                <button
                  type="button"
                  onClick={this.props.onRowAdd}
                  className="btn btn-success"
                >
                  <i className="fas fa-plus" />
                </button>
              </th>
            </tr>
          </thead>

          <tbody className="scrollContent">{product}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTableAct;
