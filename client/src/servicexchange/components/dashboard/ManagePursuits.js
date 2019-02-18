import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setVisibilityFilter } from '../../../../actions/tasklistActionCreator';
import { showModal } from '../../../../actions/socialActionTest';
//import { showModal } from '../../../../actions/modalActions';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../../../../actions/types';
import '../../../css/dashboard.css';
import ModalContainer from '../../../../modal/components/ModalContainer';
import '../../../../modal/css/template.css';
import '../../../../modal/css/localModal.css';

class ManagePursuits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      holoEmulation: false
    };
  }

  popupFunction = id => {
    // console.log('id:' + id);
    // console.log('this.props:' + JSON.stringify(this.props));

    let msgType =
      this.props.pursuits[id].invite === true ? 'Invite' : 'Message';

    const msgObj = {
      id: this.props.pursuits[id].id,
      from: this.props.pursuits[id].from,
      title: this.props.pursuits[id].Title,
      message: this.props.pursuits[id].message,
      messageType: msgType,
      messageDate: this.props.pursuits[id].startDate,
      type: this.props.pursuits[id].type,
      postName: this.props.pursuits[id].postName
    };
    // alert(JSON.stringify(msgObj));

    this.openAlertModal(msgObj);
  };

  openAlertModal = param => {
    //console.log('ConnectToSC openAlertModal param: ' + JSON.stringify(param));

    const modalProps = {
      open: true,
      title: param.Title,
      message: param,
      closeModal: this.closeModal
    };

    // const modalProps = param;

    //const modalType = 'carouselMan';
    const modalType = 'sxPursuits';

    this.props.showModal(modalProps, modalType);
  };

  render() {
    //console.log('ConnectToSC props:' + JSON.stringify(this.props));

    return (
      <div children="container">
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
              <i className="fas fa-search-plus">: Click for Details</i>{' '}
              &nbsp;&nbsp;
            </div>
          </nav>
          {this.props.pursuits.length !== 0 ? (
            <table
              style={{ marginTop: '10px' }}
              className="table table-hover table-info"
            >
              <thead className="thead-blue">
                <tr>
                  <th scope="col">
                    Your postings: &nbsp;{' '}
                    <font color="lightgreen">Work & Help-wanted (green)</font> &{' '}
                    <font color="#4cace8">
                      Mentor, Apprentice, Co-op (blue)
                    </font>{' '}
                  </th>
                  <th scope="col">Open</th>
                </tr>
              </thead>

              <tbody>
                {this.props.pursuits.map(message => (
                  <tr key={message.id}>
                    <td
                      style={{
                        color: message.invite ? 'blue' : 'green'
                      }}
                    >
                      <b>
                        {/* {message.invite ? 'Invite  ' : 'Message'} :{' '} */}
                        {message.from}
                      </b>{' '}
                      &nbsp;&nbsp;:&nbsp;
                      {message.Title} &nbsp; id: {message.id}
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
                No pursuits or invitations
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

const getVisiblePursuits = (pursuits, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return pursuits;
    case SHOW_COMPLETED:
      return pursuits.filter(t => t.invite);
    case SHOW_ACTIVE:
      return pursuits.filter(t => !t.invite);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => {
  return {
    pursuits: getVisiblePursuits(state.pursuits, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

ManagePursuits.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { setVisibilityFilter, showModal }
)(ManagePursuits);
