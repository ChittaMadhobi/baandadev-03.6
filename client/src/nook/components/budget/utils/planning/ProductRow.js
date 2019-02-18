import React from 'react';
import EditableCell from './EditableCell';

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);
  }
  render() {
    return (
      <tr className="eachRow">
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: 'earnExpType',
            width: '15%',
            calcType: this.props.product.earnExpType,
            value: this.props.product.earnExpType,
            id: this.props.product.id
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: 'category',
            width: '30%',
            calcType: this.props.product.earnExpType,
            value: this.props.product.category,
            id: this.props.product.id
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: 'subcategory',
            width: '25%',
            calcType: this.props.product.earnExpType,
            value: this.props.product.subcategory,
            id: this.props.product.id
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: 'amount',
            width: '20%',
            calcType: this.props.product.earnExpType,
            value: this.props.product.amount,
            id: this.props.product.id
          }}
        />
        <td className="del-cell" width="10%">
          <input
            type="button"
            onClick={this.onDelEvent.bind(this)}
            value="X"
            className="del-btn"
          />
        </td>
      </tr>
    );
  }
}
export default ProductRow;
