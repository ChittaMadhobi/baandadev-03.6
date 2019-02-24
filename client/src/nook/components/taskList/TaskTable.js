import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteTodo,
  toggleTodo,
  setVisibilityFilter
} from '../../../actions/tasklistActionCreator';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../../actions/types';
import { bindActionCreators } from 'redux';
//import Modal from './modal/Modal';

class TaskTable extends Component {
  popupFunction = id => {
    alert(
      'Here you would see a popup with details of the task along with some opportunity to ' +
        ' work on them if possible - like send a message to a friend. >>>> TASK YOU CLICKED IS: #' +
        (this.props.todos[id].id + 1) +
        ' --- WITH DESCRIPTION: ' +
        this.props.todos[id].todotext
    );
  };

  showModal() {
    console.log('need fixing');
  }

  render() {
    //console.log('props:' + JSON.stringify(this.props));
    return (
      <div children="container">
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
              Completed
            </button>

            <button
              type="button"
              onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
              className="btn btn-secondary custom_button1 btn-sm btn-size-rows"
            >
              Active
            </button>
          </div>
          <div className="float-right">
            <i className="fas fa-minus-circle">: Delete</i> &nbsp;&nbsp;
            <i className="fas fa-search-plus">: Details</i> &nbsp;&nbsp;
            <i className="fas fa-check-circle">: Done</i>
          </div>
        </nav>
        {this.props.todos.length !== 0 ? (
          <table
            style={{ marginTop: '10px' }}
            className="table table-hover table-info"
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col">To-Do Tasks </th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todos.map(todo => (
                <tr key={todo.id}>
                  <td
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                  >
                    <b>
                      {todo.todotext} [Priority:&nbsp;
                      {todo.priority.substring(0, 1).toUpperCase()} ]
                      {todo.completed === true ? '(completed)' : ''}
                    </b>
                  </td>
                  <td className="bg-dark">
                    <span
                      className="fas fa-minus-circle"
                      onClick={() => this.props.deleteTodo(todo.id)}
                      style={{
                        color: 'white',
                        fontSize: '20pt',
                        marginRight: '20px'
                      }}
                    />
                    <span
                      className="fas fa-search-plus"
                      onClick={() => this.popupFunction(todo.id)}
                      style={{
                        color: 'white',
                        fontSize: '20pt',
                        marginRight: '20px'
                      }}
                    />

                    <span
                      className="fas fa-check-circle"
                      onClick={() => this.props.toggleTodo(todo.id)}
                      style={{ color: 'white', fontSize: '20pt' }}
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
              To do List is empty or filter results show no results
            </div>
          </div>
        )}{' '}
        <div className="footerspace" />
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskTable);
