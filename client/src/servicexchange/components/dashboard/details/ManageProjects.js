import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setVisibilityFilter } from '../../../../actions/tasklistActionCreator';
import { showModal } from '../../../../actions/socialActionTest';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../../../../actions/types';
import '../../../css/dashboard.css';
import ModalContainer from '../../../../modal/components/ModalContainer';
import '../../../../modal/css/template.css';
import '../../../../modal/css/localModal.css';

class ManageProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      holoEmulation: false,
      selectedOption: null
    };

    this.handleSelectClick = this.handleSelectClick.bind(this);
  }

  handleSelectClick = (newrec = false) => {
    let id, select;
    if (!newrec) {
      id = this.state.selectedOption.id;
      select = {
        id: id,
        caption: this.state.selectedOption.label
      };
    } else {
      id = -1;
      select = {
        id: -1,
        caption: 'none'
      };
    }
    this.popupFunction(id, select);
  };

  popupFunction = (id, select = null) => {
    let msgObj;
    if (select) {
      msgObj = {
        id: id, // the one passed in as input parameter
        engagementName: '',
        description: '',
        engagementMgr: '',
        engagementSate: '',
        engagementType: '',
        status: '',
        authorization: ''
      };
    } else {
      msgObj = {
        id: id, // the one passed in as input parameter
        engagementName: this.props.sxProject[id].engagementName,
        description: this.props.sxProject[id].description,
        engagementMgr: this.props.sxProject[id].engagementMgr,
        engagementSate: this.props.sxProject[id].engagementSate,
        engagementType: this.props.sxProject[id].engagementType,
        status: this.props.sxProject[id].status,
        authorization: this.props.sxProject[id].authorization
      };
    }
    //alert(JSON.stringify(msgObj));

    this.openAlertModal(msgObj);
  };

  openAlertModal = param => {
    //console.log('openAlertModal param: ' + JSON.stringify(param));

    const modalProps = {
      open: true,
      title: param.Title,
      message: param,
      closeModal: this.closeModal
    };
    const modalType = 'sxProject';
    this.props.showModal(modalProps, modalType);
  };

  render() {
    //console.log('ManageProjects props:' + JSON.stringify(this.props));

    return (
      <div children="container">
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-start-new-proj"
              onClick={() => {
                this.handleSelectClick(true);
              }}
            >
              Click to Start a new Endeavor&nbsp;
              <div className="float-right">
                <i className="fas fa-search-plus" />
              </div>
            </button>
          </div>

          <div className="col-md-6">
            <div className="target-msg-font">
              <font color="#358ddd">
                <b>Click button to start a new project, co-op, or endeavor.</b>
              </font>
            </div>
          </div>
        </div>
        <div>
          <nav className="navbar navbar-primary navbar-tasklist-color">
            <div
              className="btn-toolbar btn-top-pad"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <button
                type="button"
                onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
                className="btn btn-secondary custom_button1 btn-sm btn-size-rows"
              >
                All
              </button>
              <button
                type="button"
                onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
                className="btn btn-secondary custom_button1 btn-sm btn-size-rows"
              >
                Blues
              </button>
              <button
                type="button"
                onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
                className="btn btn-secondary custom_button1 btn-sm btn-size-rows"
              >
                Greens
              </button>
            </div>
            <div className="float-right">
              <i className="fas fa-search-plus">: Click for details</i>{' '}
              &nbsp;&nbsp;
            </div>
          </nav>
          {this.props.sxProject.length !== 0 ? (
            <table
              style={{ marginTop: '10px' }}
              className="table table-hover table-info"
            >
              <thead className="thead-blue">
                <tr>
                  <th scope="col">
                    Your Engagements: &nbsp;{' '}
                    <font color="lightgreen">Active (green)</font> &{' '}
                    <font color="#4cace8">To be Initiated (blue)</font>{' '}
                  </th>
                  <th scope="col">Open</th>
                </tr>
              </thead>

              <tbody>
                {this.props.sxProject.map(message => (
                  <tr key={message.id}>
                    <td
                      style={{
                        color: message.status ? 'green' : 'blue'
                      }}
                    >
                      <b>
                        {/* {message.invite ? 'Invite  ' : 'Message'} :{' '} */}
                        {message.engagementName}
                      </b>{' '}
                      &nbsp;Proj. Mgr.:&nbsp;
                      <b>{message.engagementMgr}</b> &nbsp;(Type:&nbsp;{' '}
                      {message.engagementType})
                    </td>
                    <td className="bg-blue text-center">
                      <span
                        className="fas fa-search-plus"
                        onClick={() => this.popupFunction(message.id)}
                        style={{
                          color: 'white',
                          fontSize: '20pt',
                          marginRight: '20px'
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div
              style={{ marginTop: '50px' }}
              className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
            >
              <div className="alert alert-danger" role="alert">
                No messages for you at this time (old or new)
              </div>
            </div>
          )}{' '}
        </div>
        <ModalContainer />
        <div className="footerspace" />
      </div>
    );
  }
}

const getVisibleSXProject = (sxProject, filter) => {
  // console.log('getVisiblesxProject :' + JSON.stringify(sxProject[0]));
  // console.log('getVisiblesxProject :' + sxProject[0].readState);
  switch (filter) {
    case SHOW_ALL:
      return sxProject;
    case SHOW_COMPLETED:
      return sxProject.filter(t => t.readState);
    case SHOW_ACTIVE:
      return sxProject.filter(t => !t.readState);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => {
  return {
    sxProject: getVisibleSXProject(state.sxProject, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

ManageProjects.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { setVisibilityFilter, showModal }
)(ManageProjects);
