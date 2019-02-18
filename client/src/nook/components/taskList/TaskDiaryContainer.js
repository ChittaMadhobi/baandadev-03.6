import React, { Component } from 'react';
import TaskDiaryTypeSelection from './TaskDiaryTypeSelection';
import TaskDiaryRouter from './TaskDiaryRouter';

class TaskDiaryContainer extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: 'none' //default
    };
  }

  handleOnChange(e) {
    this.setState({
      selectValue: e.target.value
    });
  }

  render() {
    const { selectValue } = this.state;

    return (
      <div>
        <TaskDiaryTypeSelection handleOnChange={this.handleOnChange.bind(this)} />
        <TaskDiaryRouter selectValue={selectValue} />
      </div>
    );
  }
}

export default TaskDiaryContainer;