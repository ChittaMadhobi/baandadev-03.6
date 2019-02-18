import React, { Component } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import FormBar from './FormBar';

class Products extends Component {
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
        subcategory: 'Estimate Monthly Income',
        amount: 2200.05
      },
      {
        id: 2,
        category: 'ServXchange',
        earnExpType: 'earning',
        subcategory: 'Freelance  transition',
        amount: 250.55
      },
      {
        id: 3,
        category: 'OtherIncome',
        earnExpType: 'earning',
        subcategory: 'Tuition - via friends',
        amount: 150.5
      },
      {
        id: 4,
        category: 'Housing',
        earnExpType: 'expense',
        subcategory: 'Roommate-rent',
        amount: 750.8
      },
      {
        id: 5,
        category: 'Housing',
        earnExpType: 'expense',
        subcategory: 'Utilities etc.',
        amount: 105.6
      },
      {
        id: 6,
        category: 'Groceries',
        earnExpType: 'expense',
        subcategory: 'Food',
        amount: 250.05
      },
      {
        id: 7,
        category: 'Groceries',
        earnExpType: 'expense',
        subcategory: 'Non-food staples',
        amount: 75.04
      },
      {
        id: 8,
        category: 'Transport',
        earnExpType: 'expense',
        subcategory: 'Bus-train-uber-lyft',
        amount: 150.0
      },
      {
        id: 9,
        category: 'Healthcare',
        earnExpType: 'expense',
        subcategory: 'Medicine',
        amount: 75.99
      },
      {
        id: 10,
        category: 'Healthcare',
        earnExpType: 'expense',
        subcategory: 'Gym membership',
        amount: 35.59
      },
      {
        id: 11,
        category: 'Entertainment',
        earnExpType: 'expense',
        subcategory: 'All kinds',
        amount: 200.59
      },
      {
        id: 12,
        category: 'Education',
        earnExpType: 'expense',
        subcategory: 'Apprentice Carpentry Exp',
        amount: 550.59
      },
      {
        id: 13,
        category: 'Communication',
        earnExpType: 'expense',
        subcategory: 'Phone-pay + AT&T fee',
        amount: 100.05
      },
      {
        id: 14,
        category: 'Saving',
        earnExpType: 'expense',
        subcategory: 'Rainyday fund',
        amount: 150.05
      },
      {
        id: 15,
        category: 'Saving',
        earnExpType: 'expense',
        subcategory: 'Strategic - work for 10 months',
        amount: 250.54
      },
      {
        id: 16,
        category: 'Insurance',
        earnExpType: 'expense',
        subcategory: 'Car Insurance',
        amount: 102.54
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
        <FormBar />
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}
        />
        <ProductTable
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

export default Products;
