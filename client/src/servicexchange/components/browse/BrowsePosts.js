import React, { Component } from "react";
import faker from "faker";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "../../css/browse.css";

const options = {
  paginationSize: 3,
  pageStartIndex: 0,
  sizePerPage: 5,
  hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: "First",
  prePageText: "Back",
  nextPageText: "Next",
  lastPageText: "Last",
  nextPageTitle: "First page",
  prePageTitle: "Pre page",
  firstPageTitle: "Next page",
  lastPageTitle: "Last page"
};

class BrowsePosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      columns: [],
      expRow: "",
      defaultSorted: []
    };
    this.buildFakeUsers = this.buildFakeUsers.bind(this);
    this.imageFormatter = this.imageFormatter.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.bioIntroFormatter = this.bioIntroFormatter.bind(this);
  }

  handleSaveClick(row) {
    alert(
      "For the ROW = " +
        row.id +
        " -- your interests would be notified to the target in the production."
    );
  }

  imageFormatter(cell, row, rowIndex, colIndex) {
    //console.log("row:" + row.avatar);
    return (
      <div>
        {/* <img src={row.avatar} height="40" width="40" alt="..."/> */}
        <img
          src={row.avatar}
          height="30"
          width="30"
          //className="img-fluid rounded-circle img_width"
          className="rounded-circle"
          alt="..."
        />
      </div>
    );
  }

  bioIntroFormatter(column, colIndex, { sortElement, filterElement }) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {filterElement}
        {column.text}
        {sortElement}
      </div>
    );
  }

  buildFakeUsers() {
    return {
      name: faker.name.findName(),
      avatar: faker.internet.avatar(),
      email: faker.internet.email(),
      cell: faker.phone.phoneNumberFormat(),
      bioInline: faker.lorem.sentence(10, "."),
      bioExpand: faker.lorem.paragraph(),
      color: faker.internet.color()
    };
  }

  randomBetweenInrerval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  componentWillMount() {
    const columns = [
      {
        dataField: "avatar",
        text: " ",
        formatter: this.imageFormatter,
        style: { backgroundColor: "black", width: "60px" }
      },
      {
        dataField: "name",
        text: "Name",
        sort: true,
        headerAlign: () => "center",
        align: "left",
        style: { backgroundColor: "black", fontSize: "10pt", color: "white" }
      },
      {
        dataField: "recoScore",
        text: "RS",
        // formatter: this.imageFormatter,
        style: { backgroundColor: "black", fontSize: "10pt", color: "white" }
      },
      {
        dataField: "bioInLine",
        text: "Intro Description",
        align: "left",
        style: { backgroundColor: "black", fontSize: "10pt", color: "white" },
        headerFormatter: this.bioIntroFormatter,
        filter: textFilter()
      }
    ];
    // {/* <p>Row: {JSON.stringify(row)}</p> */}
    //                     This Expand row is belong to rowKey ${row.id}
    let expandRow = {
      renderer: row => (
        <div className="container">
          <div className="expand-body">
            <div className="row">
              <div className="col-md-3">
                <div className="exp-pic-position">
                  <img src={row.avatar} height="150px" width="90%" alt="..." />
                </div>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <div className="exp-bio">{row.bioExpand}</div>
                  </div>
                </div>
                <div className="browse-head-space" />
                <div className="row">
                  <div className="col-md-4">
                    <div className="row">
                      Match [{row.yourStanding}%]<Progress percent={row.yourStanding} status="success" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    Interests Sent = [{row.interestSent}]
                  </div>
                  <div className="col-md-4">
                    Interest Received = [{row.interestReceived}]
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="float-right history-button-placement">
                  <button
                    className="show-btn-interest"
                    type="button"
                    onClick={() => this.handleSaveClick(row)}
                  >
                    Click to notify interst&nbsp;&nbsp;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      onlyOneExpanding: true
    };

    let usr = [];

    let oneUsr = {
      name: "",
      avatar: "",
      email: "",
      cell: "",
      bioInline: "",
      bioExpand: "",
      color: "",
      recoScore: 0,
      interestReceived: 0,
      interestSent: 0,
      yourStanding: 0
    };

    for (var i = 0; i < 50; i++) {
      let tmp = this.buildFakeUsers();
      oneUsr = {
        id: i,
        name: tmp.name,
        avatar: tmp.avatar,
        email: tmp.email,
        cell: tmp.cell,
        bioInLine: tmp.bioInline,
        bioExpand: tmp.bioExpand,
        color: tmp.color,
        recoScore: this.randomBetweenInrerval(50, 99),
        interestReceived: this.randomBetweenInrerval(0, 9),
        interestSent: this.randomBetweenInrerval(0, 9),
        yourStanding: this.randomBetweenInrerval(50, 99)
      };
      usr.push(oneUsr);
    }

    this.setState({
      users: usr,
      columns: columns,
      expRow: expandRow,
      defaultSorted: [
        {
          dataField: "recoScore",
          order: "desc"
        }
      ]
    });
  }

  render() {
    //console.log('this.props :' + JSON.stringify(this.props));
    return (
      <div className="container">
        {/* <div className="text-center"><h5></h5></div> */}
        <div className="browse-head-space" />
        <BootstrapTable
          keyField="id"
          data={this.state.users}
          columns={this.state.columns}
          expandRow={this.state.expRow}
          striped
          hover
          condensed
          pagination={paginationFactory(options)}
          defaultSorted={this.state.defaultSorted}
          filter={filterFactory()}
          // noDataIndication="Table is Empty"
        />
      </div>
    );
  }
}

export default BrowsePosts;
