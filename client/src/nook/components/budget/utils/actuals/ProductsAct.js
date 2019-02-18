import React, { Component } from 'react';

//import SearchBar from './SearchBarAct';
import ProductTableAct from './ProductTableAct';
import FormBarAct from './FormBarAct';

class ProductsAct extends Component {
  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.filterText = '';

    this.state.products = [
      {
        id: 1,
        category: 'Employment',
        earnExpType: 'earning',
        subcategory: 'Salary /bi-weekly',
        amount: 1325.35
      },
      {
        id: 2,
        category: 'ServXchange',
        earnExpType: 'earning',
        subcategory: 'Assist Joe (co-op)',
        amount: 250.55
      },
      {
        id: 3,
        category: 'Housing',
        earnExpType: 'expense',
        subcategory: 'Rent',
        amount: 750.8
      },
      {
        id: 4,
        category: 'Housing',
        earnExpType: 'expense',
        subcategory: 'Internet-electricity',
        amount: 105.6
      },
      {
        id: 6,
        category: 'Groceries',
        earnExpType: 'expense',
        subcategory: 'Food for the week',
        amount: 75.43
      },
      {
        id: 8,
        category: 'Transport',
        earnExpType: 'expense',
        subcategory: 'Monthly Metro pass',
        amount: 55.58
      },
      {
        id: 9,
        category: 'Healthcare',
        earnExpType: 'expense',
        subcategory: 'Nyquil & headache medicine',
        amount: 14.53
      },
      {
        id: 11,
        category: 'Entertainment',
        earnExpType: 'expense',
        subcategory: 'Movie with friends',
        amount: 30.52
      },
      {
        id: 12,
        category: 'Education',
        earnExpType: 'expense',
        subcategory: 'Power Tool - Carpentry',
        amount: 80.35
      },
      {
        id: 13,
        category: 'Saving',
        earnExpType: 'expense',
        subcategory: 'Deposited in rainyday acc',
        amount: 100.05
      },
      {
        id: 15,
        category: 'Saving',
        earnExpType: 'expense',
        subcategory: 'Strategic - deposited',
        amount: 275.0
      }
    ];
  }

  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  }
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  }

  checkDecimal(inputtxt) {
    var regex = /\d/g;
    return regex.test(inputtxt);
  }
  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);

    let newn = 0.0;
    if (this.checkDecimal(newn)) {
      newn = parseFloat(newn);
    } else {
      newn = 'NaN';
    }
    //console.log('newn : ' + newn);

    var product = {
      id: id,
      category: '',
      earnExpType: 'expense',
      subcategory: '',
      amount: newn
    };
    this.state.products.push(product);
    this.setState(this.state.products);
  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    //console.log('handleProductTable item:' + JSON.stringify(item));
    var products = this.state.products.slice();
    //console.log('2. handleProductTable product:' + JSON.stringify(products));
    var newProducts = products.map(function(product) {
      for (var key in product) {
        // eslint-disable-next-line
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;
        }
      }
      //console.log('3. handleProductTable product:' + JSON.stringify(products));
      return product;
    });
    this.setState({ products: newProducts });
  }

  render() {
    return (
      <div>
        <FormBarAct />
        {/* <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}
        /> */}
        <ProductTableAct
          onProductTableUpdate={this.handleProductTable.bind(this)}
          onRowAdd={this.handleAddEvent.bind(this)}
          onRowDel={this.handleRowDel.bind(this)}
          products={this.state.products}
          subtotals={this.state.subtotals}
          filterText={this.state.filterText}
        />
        <div className="textspaceTop" />
        <div className="textspaceTop" />
        <div className="textspaceTop" />
      </div>
    );
  }
}

export default ProductsAct;
