import React, { Component } from 'react';
import NoteContainer from '../../../utils/components/editor/NoteContainerW';
import '../utils/nook.css';

class TaskJournal extends Component {
	constructor(props) {
		super(props);

		this.handleSearch = this.handleSearch.bind(this);
		this.handleUpdateDiary = this.handleUpdateDiary.bind(this);
	}

	handleUpdateDiary() {
		alert(
			'This click, in production, will save your state of tasks and diary in database. If you save multiple times, systen will readjust your task-states in DB.' +
				' However, diary will be augmented to your previous writes. Diary is like your memory and for you only. Your diary is not editable - like the real diary, once saved.'
		);
	}

	handleSearch() {
		alert(
			'This click will (in production) enable you to search on date-range, particular date. Further down the road, it would enable you to search by context (words/phrases) if user-feedback demands such scope.'
		);
	}

	render() {
		return (
      // 
      <div>
				<div className="row">
					<div className="col">
						<div className="text-center">
							<font color="#494916">
								<h3>
									<b>Your Day's Wiki Journal </b>
								</h3>
							</font>
						</div>
					</div>
				</div>
        {/* <form> */}
				<div className="row">
					<div className="col">
						<div className="text-center">
							<div className="journal-background">
								<NoteContainer editorContext={'contextReachout'} />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="float-right ">
							<button
								type="button"
								onClick={this.handleSearch}
								style={{ marginTop: '25px', marginRight: '15px' }}
								className="btn btn-diarySearch"
							>
								Search
                <div className="float-right">
                <i class="fas fa-search"></i>
                </div>
							</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<button
								type="button"
								style={{ marginTop: '25px' }}
								className="btn btn-diarySave"
								onClick={this.handleUpdateDiary}
							>
								Save & Exit
                <div className="float-right">
                <i class="fas fa-cloud"></i>
                </div>
							</button>
						</div>
					</div>
				</div>
				{/* </form> */}
			</div>
		);
	}
}

export default TaskJournal;
