import React, { Component } from 'react';
import AddTasks from './AddTasks';
import TaskTable from './TaskTable';

import '../utils/nook.css';
import TaskJournal from './TaskJournal';
import DefaultMessage from './DefaultMessage';

class TaskDiaryRouter extends Component {
	render() {
		const { selectValue } = this.props;
		//console.log('selectValue:' + selectValue);
		let output;

		if (selectValue === 'none') {
			output = (
				<div>
					<DefaultMessage />{' '}
				</div>
			);
		}

		if (selectValue === 'handlingTasks') {
			output = (
				<div className="fixedsizeTasks">
					<AddTasks />
					<TaskTable />
				</div>
			);
		}

		if (selectValue === 'journal') {
			output = (
				<div>
					<TaskJournal />
				</div>
			);
		}
		return (
			<div className="col-lg-12 col-md-8 col-sm-6">
				<div>{output}</div>
			</div>
		);
	}
}

export default TaskDiaryRouter;
