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

class BrowseHistoricProjects extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [],
      columns: [],
      expRow: "",
      defaultSorted: []
    }
    
    this.buildFakeProject = this.buildFakeProject.bind(this);
    this.imageFormatter = this.imageFormatter.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick(row) {
    alert(
      "For the project = " +
        row.accountName +
        " -- In production, this will enables you to track your work back in time in much details."
    );
  }

  imageFormatter(cell, row, rowIndex, colIndex) {
    //console.log("row:" + row.avatar);
    return (
      <div>
        {/* <img src={row.avatar} height="40" width="40" alt="..."/> */}
        <img
          src={row.imageBusiness}
          height="30"
          width="30"
          //className="img-fluid rounded-circle img_width"
          className="rounded-circle"
          alt="..."
        />
      </div>
    );
  }

  buildFakeProject() {
    return {
      accountName: faker.company.companyName(),
      imageBusiness: 'https://picsum.photos/200/200/?image=' + (this.randomBetweenInrerval(1, 999)).toString(),
      //imageBusiness: faker.internet.avatar(),
      projectManager: faker.name.firstName() + ' ' + faker.name.lastName(),
      email: faker.internet.email(),
      projectDesc: faker.name.jobType(), 
      cell: faker.phone.phoneNumberFormat(),
      bioInline: faker.lorem.sentence(7, "."),
      bioExpand: faker.lorem.paragraph(),
      projDate: faker.date.past(10),
      color: faker.internet.color(),
      projectDate: faker.date.past()
    };
  }

  randomBetweenInrerval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  componentWillMount() {
    const columns = [
      {
        dataField: "imageBusiness",
        text: " ",
        formatter: this.imageFormatter,
        style: { backgroundColor: "black", width: "60px" }
      },
      {
        dataField: "accountName",
        text: "Account Name",
        headerAlign: () => "center",
        align: "left",
        style: { backgroundColor: "black", fontSize: "10pt", color: "white" }
      },
      {
        dataField: "projectDate",
        text: "End Date",
        sort: true,
        style: { backgroundColor: "black", fontSize: "10pt", color: "white" }
      },
      {
        dataField: "bioInLine",
        text: "Engagement Short Description",
        align: "left",
        style: { backgroundColor: "black", fontSize: "10pt", color: "white" },
        headerFormatter: this.bioIntroFormatter,
        filter: textFilter()
      }
    ];

    let expandRow = {
      renderer: row => (
        <div className="container">
          <div className="expand-body">
            <div className="row">
              <div className="col-md-3">
                <div className="exp-pic-position">
                  <img src={row.imageBusiness} height="150px" width="90%" alt="..." />
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
                  <div className="col-md-6">
                    <div className="row">
                      Recommendation Score: [{row.recoScore}%]<Progress percent={row.recoScore} status="success" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    Success Feedback Score: [{row.successScore}%]<Progress percent={row.successScore} status="success" />
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
                    Click for More&nbsp;&nbsp;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      onlyOneExpanding: true
    };

    let proj = [];

    let oneProj = {
      id: 0,
      accountName: '',
      imageBusiness: '',
      projectManager: '',
      email: '',
      projectDesc: '', 
      cell: '',
      bioInline: '',
      bioExpand: '',
      projectDate: null,
      recoScore: 0,
      successScore: 0
    };

    for (var i = 0; i < 28; i++) {
      let tmp = this.buildFakeProject();
      oneProj = {
        id: i,
        accountName: tmp.accountName,
        imageBusiness: tmp.imageBusiness,
        projectManager: tmp.projectManager,
        email: tmp.email,
        projectDesc: tmp.projectDesc,
        cell: tmp.cell,
        bioInLine: tmp.bioInline,
        bioExpand: tmp.bioExpand,
        projectDate: tmp.projDate.toISOString().split('T')[0],
        recoScore: this.randomBetweenInrerval(50, 99),
        successScore: this.randomBetweenInrerval(50, 90) + this.randomBetweenInrerval(-10, 10)
      };

      proj.push(oneProj);
    }

    
    this.setState ({
      projects: proj,
      columns: columns,
      expRow: expandRow,
      defaultSorted: [
        {
          dataField: "projectDate",
          order: "desc"
        }
      ]
    })
  }


  render() {
    //console.log('this.state:' + JSON.stringify(this.state));   
 
    return (
      <div>
        <div className="browse-head-space" />
        <BootstrapTable
          keyField="id"
          data={this.state.projects}
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

export default BrowseHistoricProjects;
